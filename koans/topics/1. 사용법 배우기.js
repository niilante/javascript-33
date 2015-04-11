module("사용법 배우기");

test("ok", function () {
    ok(__ === true, '"ok 테스트에서는 표현식이 참이 되도록 만들어야 합니다.');
});

test("equal", function () {
    equal(__, 1 + 1, 'equal 테서트에서는 우측의 값과 같은 값을 입력해야 합니다.');
});