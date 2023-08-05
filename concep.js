let azir = 'araf';
const jasima = 'azir';
console.log(azir);
console.log(jasima);
const name = jasima.includes('sim');
console.log(name);
const pets = ["cow", "cat", "horse", "dog"];
//const aseni = pets.includes("horse");

//console.log(pets.slice(2));


function add(x, y) {
  let total = x + y;
  return total;
}
console.log(add(3, 5));


function add(x, z) {
  let total = x + z;
  return total;
}
console.log(add(9, 8));

function add(x, y) {
  let total = x + y;
  return total;
}
console.log(add(4, 5));
function add(a, s) {
  let allah = a % s;
  return allah;
}
const result = add(56, 44);
console.log(result);


function sumOdds(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const number = [11, 22, 33, 44, 543, 6, 7, 8];
const total = sumOdds(number);
console.log(total);


function add(a, b) {
  return a + b;
}
console.log(add("adam" + "eve"))

const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


const divo = [2, 3];
for (let i = 4; i <= 23; i++) {
  divo[i] = divo[i - 1] + divo[i - 2];
}
console.log(divo);

