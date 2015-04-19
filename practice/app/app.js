$(document).ready(function () {
	var HOST = "https://dxd-javascript.azure-mobile.net/tables/item/";
	$('.indicator').hide();

	(function () { // 파일이 열리면 외부 서버에서 데이터를 가져옵니다.
		$('.indicator').show();
		$.get(HOST, function (response) {
			console.log('loadData: ' + JSON.stringify(response));
			$('.indicator').hide();
			for (var i = 0; i < response.length; i++) {
				createItem(response[i]).appendTo('.item-list');
			}
		});
	}());

	function createItem(item) {
		var li = $('<li data-id="' + item.id + '"><span class="text"></span><button class="delete">삭제</button></li>');

		li.find('.text').text(item.text);
		li.find('.delete').click(function (e) {
			removeItem(item);
		});
		li.appendTo('.item-list');

		return li;
	}

	function removeItem(item) {
		$('.indicator').show();
		$.ajax(HOST + item.id, {
			method: 'DELETE',
			success: function (response) {
				console.log('removeItem: ' + response);
				$('.indicator').hide();
				$('li[data-id=' + item.id + ']').remove();
			}
		});
	}

	function addItem(item) {
		$('.indicator').show();
		$.post(HOST, item, function (response) {
			$('.indicator').hide();
			console.log('addItem: ' + response);
			createItem(response).appendTo('.item-list');
		});
	}

	$('textarea').keypress(function (e) {
		var $this = $(this);
		if (e.keyCode == 13) {
			e.preventDefault(); // 본래 엔터키가 가지고 있는 한줄 내리는 기능을 막습니다.
			addItem({text: $this.val()});
			$this.val('');
		}
	});
});