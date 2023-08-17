// javascript의 object type..
const object_car = {name:"sonata", color:"red"}
console.log(object_car['name'])

// 표준 JSON
// {"name":"sonata", "color":"red"}
// JSON.parse: 표준JSON -> Javascript object type으로 바꿔준다.
const car_from_json = JSON.parse('{"name":"sonata", "color":"red"}')
console.log(car_from_json)
const string_car = JSON.stringify(object_car)
console.log(string_car)
console.log(string_car["name"])