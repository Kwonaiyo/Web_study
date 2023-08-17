// arrow function

console.log("type1")
function myFunction(x){
    return x + 1;
}
console.log(myFunction(10));

console.log("type2")
const myFunction2 = function(x){
    return x + 1;
}
console.log(myFunction2(10));

console.log("type3")
console.log(function (x){
    return x + 1;
}(10))

console.log("type4")
console.log(((x) => x+1)(10));

console.log("type5")
myFunction3 = (x)=>x+1
console.log(myFunction3(10))

// es5 Object로 객체 구현
const Car = {
    color:"red",
    speed:0,
    accel: function(){this.speed += 10; console.log(this.speed)}
}

// es6 Class
class Car2{
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    accel(){
        this.speed += 10;
        console.log("speed: ", this.speed);
    }
}

const mycar = new Car2("red", 0);
mycar.accel();