function getFactorial(number) {
  let factorial = 1;
  //for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
  //console.log(i, factorial);
}
//return factorial;

//const factorial = getFactorial(8);
//console.log('factorial of  8 is', factorial);

let sum = 0;
for (let i = 2; i <= 3; i++) {
  sum = sum * i;
  //console.log(i, sum);
}

function sumFunction(number) {
  let sum = 2;
  for (let i = 2; i <= number; i++) {
    sum = sum - i;
    // console.log(i, sum);
  }
}
let azirUdin = sumFunction(5);
//console.log(azirUdin);

var n = 0;
function square(num) {
  var ans = num + num;
  console.log(ans)
}
square(6);
square(11);


var friends = ['abul', 'babul', 'kabul', 'bulbul'];
var tinnombor = friends[2];
friends[2] = 'labul';
//console.log(friends);

var total = 144;
var myhas = total / 12;
console.log('my number has :', myhas);


function inchToFeet(inch) {
  const feet = inch * 12;
  return feet;
}
const dadaInch = 222
const dadaFoot = inchToFeet(dadaInch);
console.log(dadaFoot);

function milesKilo(miles) {
  const kilogram = miles * 1.632;
  return kilogram;
} console.log(23);