module("배열");

test("배열의 인덱스 이해하기", function() {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type

    equal(__, favouriteThings[0], '배열의 첫번째 값은 무엇일까요?');
    equal(__, favouriteThings[1], '배열의 두번째 값은 무엇일까요?');
    equal(__, favouriteThings[2], '배열의 세번째 값은 무엇일까요?');
});

test("배열의 타입", function() {
    equal(__, typeof([]), '배열의 타입은 무엇일까요?');
});

test("배열에 포함된 아이템 수 알아내기", function() {
    var collection = ['a','b','c'];

    equal(__, collection.length, '배열의 길이는 얼마일까요?');
});

test("배열 잘라내기", function() {
    var daysOfWeek = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    var workingWeek = daysOfWeek.splice(__, __);

    // workingWeek 배열에 월, 화, 수, 목, 금요일이 들어가도록 만들어보세요.
    ok(workingWeek.equalTo([__]), 'what is the value of workingWeek?');
    ok(daysOfWeek.equalTo([__]), 'what is the value of daysOfWeek?');
});

test("스택 이해하기", function() {
    var stack = [];
    stack.push("첫번째");
    stack.push("두번째");

    equal(__, stack.pop(), '스택에서 어떤 값이 나올까요?');
    equal(__, stack.pop(), '스택에서 어떤 값이 나올까요?');
    equal(__, stack.length, '스택의 길이는 얼마일까요?');
});

test("큐 이해하기", function() {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal(__, queue.shift(), '큐의 첫번째로 나오는 값은 무엇일까요?');
    equal(__, queue.shift(), '큐에서 두번째로 나오는 값은 무엇일까요?');
});