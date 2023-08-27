'number' + 23 + 32 
//'number' + 23 = number23 
// number23 + 32 = number2332
// result: number2332

41 + 1 + 'number'
// 41 + 1 = 42
// 42 + 'number' = 42number
// result: 42number

null + 1
//    + 1 = 1
// result: 1

'five' + + 'two'
// +'two' = NaN
// five + NaN = fiveNaN
// result: fiveNaN

2 && 7
// 2 = true AND 7 = true 
// returns 7

+'40' + +'2';
// +'40' = 40
// +'2' = 2
// 40 + 2 = 42
// result: 42

'10' - 5 === 6;
// '10' - 5 = 5
// 5 === 6 => false
// result: false

true + false
// Number(true) = 1 and Number(false) = 0
// 1 + 0 = 1
// result: 1

'4px' - 3
// '4px' - 3 = NaN
// result: NaN

'4' - 3
// 4 - 3 = 1
// result: 1

'2' + 3 ** 2;
// 3 в степени 2 = 9
// '2'+ 9 = 29
// result: 29

12 / '6'
// 12 / 6 = 2
// result: 2

23 + 42 + 'number'
// 23 + 42 = 65
// 65 + 'number' = 65number
// result: 65number

'10' + (5 === 6);
// (5 === 6) - false
// '10' + false = 10false
// result: 10false

'number' + 15 + 3
//'number' + 15 = number15
// number15 + 3 = number153
// result: number153

undefined + 1;
// result: NaN

'true' == true
// result: false
// string 'true' != true

false == 'false'
// result: false
// false != string 'false'

null == ''
// returns false
// null != string ''

3 ** (9 / 3);
// 9 / 3 = 3
// 3  в степени 3 = 27
// result: 27

!!'false' == !!'true'
// !(!'false') == !(!'true')
// !(false) == !(false)
// true == true => true
// result: true

0 || '0' && 1
// 'o' && 1 => true AND true => returns  1 (1->true)
// 0 || 1 => false OR true => returns 1 
// result: 1

1 < 2 < 3
// 1 < 2 => true
// 2 < 3 => true
// returns true

'foo'+ + +'bar'
// +'bar' = NaN
// foo + NaN = fooNaN

3 ** 2 / 3;
// 3 во 2й степени = 9
// 9 / 3 = 3
// result: 3

1 < 2 > 3
// 1 < 2 => true
// 2 > 3 => false
// returns false

(+null == false) < 1;
// +null = 0
// 0 = false
// false == false => true
// true < 1  => false
// returns false

false && true || true
//false && true => false
// false || true => true
// returns true

false && (true || true);
// true || true => true
// false && true => false
// returns false

(+null == false) < 1 ** 5;
// +null = o
// 0 = false
// (false == false) returns: true
// true < 1 => false
// returns false