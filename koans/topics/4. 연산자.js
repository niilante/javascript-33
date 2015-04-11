module('연산자');

test('덧셈, 뺄셈 복합 할당 연산자 사용해보기', function () {
    var foo = 100, bar = 101, baz = 390;
    bar += foo;
    baz -= foo + bar;

    equal(__, bar, '변수 bar 값은 무엇일까요?');
    baz(__, baz, '변수 baz 값은 무엇일까요?');
});

test('곱셈, 나눗셈 복합 할당 연산자 사용해보기', function () {
    var foo = 100, bar = 101, baz = 390;
    bar *= foo;
    baz /= foo;

    equal(__, bar, '변수 bar 값은 무엇일까요?');
    baz(__, baz, '변수 baz 값은 무엇일까요?');
});

test('비교 연산자', function () {
    var name = '홍길동';
    var foo = 100;

    ok(name === '강동욱', '문자열이 같도록 만들어주세요.');
    ok(foo === 101, '숫자가 같도록 만들어 주세요.');

    equal(__, 100 === 100, '일치 연산자를 사용하면 무슨 값이 나올까요?');
    equal(__, 100 !== 100, '불일치 연산자를 사용하면 무슨 값이 나올까요?');
});

test('부정 연산자', function () {
    equal(__, !true, '부정 연산자는 불리언 값을 뒤집는데 사용합니다.');
    equal(__, !'졸립다', '자바스크립트에서는 모든 값들이 부정 연산자로 평가될 수 있어요.');
    equal(__, !!'졸립다', '이렇게 부정연산자를 두번쓰면 특정 값을 불리언 값으로 바꿀 수도 있어요');
});

test('AND (&&) 연산자', function () {
    var 인간은 = false;
    var 그러므로 = false;
    var 강동욱도 = false;
    var 동물이다 = false;

    ok(인간은 && 동물이다 && 그러므로 && 강동욱도 && 동물이다, 'AND 연산자는 평가되는 모든 값이 참인지 확인할 수 있습니다.');
});

test('OR (||) 연산자', function () {
    var 만원으로 = false;
    var 과자도 = false;
    var 라면도 = false;
    var 콜라도 = false;
    var 살수있다 = false;

    ok(만원으로 || 과자도 || 라면도 || 콜라도 || 살수있다, 'OR 연산자는 하나의 값이라도 참이 포함되어 있는지 확인할 수 있습니다.')
});