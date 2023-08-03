function fanstart() {
  console.log('stand up');
  console.log('walk to the switch');
  console.log('pres the switch');
}
fanstart();
console.log('waking up from sleep');
fanstart();

function bringSingara(money) {
  console.log('may i have few singara , hereis', money);
  console.log(money);
}
var taka = 400;
bringSingara(taka);

function add(num1, num2) {
  console.log('going to add : ', num1, num2);
  var add = num1 + num2;
}
add(3, 4);

function sum(a, b, c, d, e,) {
  console.log(a, b, c, d, e,);
  var sum = a + b + c + d + e;
  console.log(sum);
}
sum(12, 13, 14, 15, 34);




function myResult(a, s, d) {
  console.log(a, s, d);
  var sum = a + s + d;
  var averg = sum / 3;
  console.log(averg);
}
myResult(57, 51, 47);

function goboyos(azir, amir, alal) {
  var sum = azir + amir + alal;
  var average = sum / 3;
  console.log(average);
}
goboyos(39, 46, 42);


function add(number1, number2) {
  console.log(number1, number2);
  var sum = number1 + number2;
  console.log(sum);
}
add(45, 34);

const car = {
  book: 2,
  pen: 3,
  paper: 5,
  mouse: 4,
}
car.pen = 12;
car.paper = 13;
car['book'] = 15;
var kolom = 'pen';
car['kolom'] = 17;
//console.log(car);

var shopCart = {
  apple: 5,
  orange: 6,
  banana: 8,
  mango: 9,
}
var komla = shopCart.orange;
console.log(shopCart.apple);
console.log(shopCart);

const signal = "geen";
if (signal === "red") {
  console.log("dont walk, please !");
} else if (signal === "yellow") {
  console.log("get ready for walk");
} else if (signal === "green") {
  console.log("start to cross the road");
} else {
  console.log("Do you know how to walk");
}


switch (signal) {
  case 'green':
    console.log('start to cross the road');
    break;
  case 'yellow':
    console.log('look at the signal');
    break;
  case 'red':
    console.log('stop, dont cross now');
  default: console.log('what is signal');
}