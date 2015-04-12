module("스코프");

foo = 77;

test("전역변수", function () {
    equal(__, foo, '전역변수를 이 스코프 안에서 사용할 수 있을까요?');
});

test("지역변수의 스코프", function () {
    var bar = "바깥변수";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
        var baz = "안쪽변수";
        equal(__, bar, 'bar 값을 이 스코프 안에서도 사용할 수 있을까요?');
        equal(__, baz, 'baz 값을 이 스코프 안에서도 사용할 수 있을까요?');
    })();

    equal(__, bar, 'bar 값을 이 스코프 안에서 사용할 수 있을까요?');
    equal(__, typeof(baz), 'baz 값을 이 스코프 안에서 사용할 수 있을까요?');
});