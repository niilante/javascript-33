module("제어문");

test("조건문", function() {
    var foo = false;
    if (2 > 0) {
        foo = true;
    }
    equal(__, foo,  'foo 값은 무엇일까요?');
});

test("반복문", function() {
    var foo = 10;
    for (var i = 1; i <= 3; i++) {
        foo = foo + i;
    }
    equal(__, foo, 'foo 값은 무엇일까요?');
});

test("3항 연산자", function() {
    var fruit = true ? "사과" : "오렌지";
    equal(__, fruit, 'fruit 값에는 어떤 과일의 이름이 들어갔을까요?');

    fruit = false ? "사과" : "오렌지";
    equal(__, fruit, '이제 fruit 값은 어떻게 바뀌었을까요?');
});

test("switch 문", function() {
    var foo = 0;
    switch (2) {
        case 1:
            foo = 1;
            break;
        case 1+1:
            foo = 2;
            break;
    }
    equal(__, foo, 'foo 값은 무엇일까요?');
});

test("switch 문의 조건과 기본값", function() {
    var name = "강동욱";
    switch ("m") {
        case "a":
            name = "이지혜";
            break;
        case "b":
            name = "함민지";
            break;
        case "c":
            name = "한빛";
            break;
        case "d":
            name = "정명훈";
            break;
        case "e":
            name = "김나영";
            break;
        case "f":
            name = "성지나";
            break;
        default:
            name = "홍길동";
            break;
    }
    equal(__, name, 'name 값은 무엇이 될까요?');
});

test("보다 나은 기본값", function() {
    var foo = null || "a value";
    equal(__, foo, 'foo 값은 무엇일까요?');
});