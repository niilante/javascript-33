module('숫자');

test('문자를 숫자로 바꾸기', function() {
    var foo = '39482';

    equal(__, 39482, 'foo 값을 숫자로 바꿀 수 있는 메서드는 무엇일까요?');
});

test('NaN 알아내기', function () {
    var NaN = 0 / 0;

    equal(__, true, '종종 프로그래밍에서는 계산 불가능한 값들이 만들어지곤 합니다. 이런 값은 어떻게 알아낼 수 있는 걸까요?');
});