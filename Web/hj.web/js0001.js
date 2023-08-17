console.log("abc");
// alert("abc");

// 변수 종류
// 1. 자동(따로 설정 안 함)
x = 10;
x2 = x + 1
console.log("x2: ", x2);
// 2. var(old type)
var x3 = 10;
var x4 = x3 + 1;
console.log("x4: ", x4);
// 3. let(es6 recommended type)
let x5 = 10;
let x6 = x5 + 1;
console.log("x6: ", x6);
// 4. const(es6 recommended type)
const x7 = 10;
const x8 = x7 + 1;
console.log("x8: ", x8);

// let vs consst
let x9 = 1;
x9 = 2;
console.log("x9: ", x9);
/*
const x10 = 1;
x10 = 2;
console.log("x10: ", x10);
*/

// var vs let
var x11 = 1;
console.log("x11: ", x11);
var x11 = 'abc'
console.log("x11: ", x11);

/*
let x12 = 1;
console.log("x12: ", x12);
let x12 = 'abc';
console.log("x12: ", x12); // let은 한번 선언되어 사용된 이후 다시 선언될 수 없게 만든다. 
*/

// => Typescript(숫자, 문자열, ...)

// 연산자
// + - * /
console.log("2의 3제곱(2^3): ", 2**3)

if (3>2) {
    console.log("true");
}

if( 1 > 2 ){
    console.log("true");
}

if (1 == 1){
    console.log("1 == 1 ? true");
}

if (1 == '1'){
    console.log("1 == '1' ? true");
}

if (1 === '1'){
    console.log("1 === '1' ? true");
}
else{
    console.log("1 === '1' ? false");
}

console.log("5+5 : ", 5+5)
console.log("'5'+5 : ", '5'+5)
console.log("'abc' + 5 : ", 'abc' + 5)

if ((2 > 1 ) && ( 3 > 2)){
    console.log("&& 참")
}

if ((2 > 1 ) || ( 3 > 2)){
    console.log("|| 참")
}

console.log(typeof("1"));   // "1" : string;
console.log(typeof(1));     // 1   : number;
console.log(typeof(true));  // true/false : boolean;
console.log(typeof({"name":"hj", age:43})); // object;
console.log(typeof([1, 2, 3, 4, 5])); // array(object);
console.log(typeof(new Date("2023-07-03)"))) // date(object);

let car = undefined;
console.log("Car: ", typeof(car));

let car2 = "";
console.log("car2: ", typeof(car2));

function myFunction(p1, p2){
    return p1 + p2; 
}
let res_myFunction = myFunction(1, 2);
console.log(res_myFunction);

{
    let local_var = "helllo";
}
// console.log('local_var: ', local_var);

let global_var = "hello2";
function global_var_test(){
    console.log("global_var: ", global_var);
}
global_var_test();

// 문자열 관련 함수들
let text1 = "안녕하세요";
console.log(text1.length);
console.log(text1.slice(2, 4));   // 하세
console.log(text1.slice(2));      // 하세요
console.log(text1.slice(-2));     // 세요
console.log(text1.substring(2, 4)); // 하세

console.log(text1.replace("안녕", "건강"))
console.log("         글자          ".trim());
console.log(text1.indexOf("하세"));
console.log(text1.search("하세"));
console.log(text1.match("하세"));
/*
let text2 = "첫줄
둘째줄"
*/

let text2 = `첫줄
둘째줄`
console.log(text2);

let text3 = `he said that "I'm not hero"`
let text4 = "he said that \"I'm not hero\""

let name1 = "hj"
let familyname = "seo"
let sentence = `성은 ${familyname}이고 이름은 ${name1}이다.`
console.log(sentence);

let x_nan = 1000 / "ok"
console.log(x_nan)

let x_nan2 = NaN
console.log(x_nan2);

let x_inf = Infinity;
console.log(x_inf);
console.log(1/0);

// array
const cars=["sonata", "avante"];
const cars2=[];
cars2[0] = "sonata";
cars2[1] = "avante";

const cars3 = new Array("sonata", "avante");
cars3[0] = "K5";

console.log(cars3.toString())

function myFunction2(x){
    return x + 1;
}

const new_array = []
new_array[0] = myFunction2;
new_array[1] = cars3;

console.log(new_array[0](1));
console.log(new_array.length);
const be_sorted = [3, 1, 10, 4, 6, 2];
be_sorted.sort((a, b) => b-a);
console.log(be_sorted);

be_sorted.sort((a, b) => a-b);
console.log(be_sorted);

// console.log(be_sorted[-1]) // error
console.log(be_sorted[be_sorted.length - 1]) 

const person = []
person[0] = "hj"
person[1] = "seo"
person[2] = 43

console.log(person.length);
console.log(Array.isArray(person));

const person2 = []
person["name"]  = "hj"
person2["familyname"] = "seo"
person2["age2"] = 43

console.log(person2.length);
console.log(Array.isArray(person2))
console.log(person2["name"])

const fruit = ["apple", "mango", "melon", "banana"]
console.log(fruit.pop(), fruit);
console.log(fruit.pop(), fruit);
console.log(fruit.pop(), fruit);
console.log(fruit.pop(), fruit);
console.log(fruit.pop(), fruit);

fruit.push("apple")
console.log(fruit)
fruit.push("mango")
console.log(fruit)
fruit.push("melon")
console.log(fruit)

delete fruit[1];
console.log(fruit);

const fruit2 = ["apple", "mango", "melon", "banana"]
console.log(fruit2.slice(1, 3))
const fruit3 = ["apple", "mango", "melon", "banana"]
fruit3.splice(1, 2)  // 1번부터 2개 빼기만
console.log(fruit3)

const fruit4 = ["apple", "mango", "melon", "banana"]
fruit4.splice(1, 2, "lemon", "berry")   // 1번부터 2개 대체
console.log(fruit4)

console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));
console.log(Math.PI)
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.sign(-4.6))
console.log(Math.pow(2, 3));
console.log(Math.sqrt(64));
console.log(Math.abs(-10.6))
console.log(Math.sin(90*Math.PI/180))
console.log(Math.random()); // 디폴트는 0~1 사이 중 랜덤으로 나옴. 1~6까지 랜덤으로 나오고 싶게 하려면 어떻게 해야 할까
console.log(Math.round(6 * Math.random()))
console.log(Math.round(6 * Math.random()))
console.log(Math.round(6 * Math.random()))
console.log(Math.round(6 * Math.random()))

// if else, switch case

// for
yasick = ["pizza", "chicken", "tangfru"]
for (let i = 0; i < yasick.length; i++){
    console.log(yasick[i])
}
yasick = {"store1":"pizza", "store2":"chicken", "store3":"tangfru"}
for (let x in yasick){
    console.log("yasick: ", yasick[x])
}
yasick = ["pizza", "chicken", "tangfru"]
for (let x in yasick){
console.log("yasick: ", yasick[x]) 
}

console.log("yasick callback");
function myFruitCallback(value, index, array){
    console.log("yasick: ", value)
}
yasick.forEach(myFruitCallback)

console.log("yasick for of");
for(let x of yasick){
    console.log("yasick: ", x);
}

// while, do-while 동일.. 

// break, continue 동일 .. 



// Javascript Hoisting... => 변수 선언을 나중에 해도 위로 올려줌.

hoistVar = 5
console.log(hoistVar);
var hoistVar; 

/*
var hoistVar; 
hoistVar = 5
console.log(hoistVar);
*/
