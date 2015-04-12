module("함수");

test("외부 변수에 접근하기", function () {
    var foo = "a";

    function changeResult() {
        // the ability to access a variables defined in the same scope as the function is known as 'closure'
        foo = "b";
    };
    changeResult();
    equal(__, foo, '푸 값은 무엇일까요?');
});

test("전달인자 이해하기", function () {
    var triple = function (input) {
        return input * 3;
    };
    equal(__, triple(4), '어떤 값이 나올까요?');
});

test("즉시 실행함수 이해하기", function () {
    var foo = "foo";

    (function (baz) {
        var bar = "bar";
        equal(__, baz, 'baz 값은 무엇일까요?');
        equal(__, typeof(bar), "bar 값이 현재 컨텍스트 안에서 사용가능할까요?");
        equal(__, typeof(foo), "foo 값이 현재 컨텍스트 안에서 사용가능할까요?");
    })(foo);

    equal(__, typeof(bar), "bar 값이 현재 컨텍스트 안에서 사용가능할까요?");
    equal(__, typeof(foo), "foo 값이 현재 컨텍스트 안에서 사용가능할까요?");
});

test("함수의 기능 > arguments", function () {
    var add = function () {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            // 이곳에 코드를 작성해서 아래의 테스트가 올바르게 통과할 수 있도록 만들어보세요.
            // __
        }
        // 여기에 무언가를 넣어야 함수가 올바르게 완성될 수 있겠죠?
        // __
    };

    equal(15, add(1, 2, 3, 4, 5), "add 1,2,3,4,5");
    equal(9, add(4, 7, -2), "add 4,7,-2");
});

test("함수의 기능 > call", function () {
    var sendMessage = function (message) {
        return this + ' "' + message + '"';
    };

    var foo = sendMessage.call("메시지가 도착했어요!", "안녕하세요, 자바스크립트입니다!");

    equal(__, foo, "foo 값은 무엇일까요?");
});

test("using apply to invoke function", function () {
    var sendMessage = function (message1, message2) {
        return this + ' "' + message1 + '", "' + message2 + '"';
    };

    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and and array of arguments to be passed into the called function.
    var foo = sendMessage.apply("메시지가 도착했어요!", ["안녕하세요, 자바스크립트입니다!", "잘 부탁드립니다!"]);

    equal(__, foo, "foo 값은 무엇일까요?");
});