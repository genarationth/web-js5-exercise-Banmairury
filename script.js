//Exercise#1

//Part 1
const names = ["Sofia", "David", "Juan"];

//Part 2
names.push("Sara", "Augustin");
console.log(names);

//Part3
names.splice(names.indexOf("David") + 1, 0, "Renata");
names.push("Elena");
console.log(names);

//Exercise #2
// let star = "";
// for (let i = 0; i < 5; i++) {
//   star += "*";
//   console.log(star);
// }

for (let i = 0; i <= 5; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
    console.log(j)
  }
  console.log(star);
}

//Exercise #3
let xValue = 5;
let i = 0;
while (i < xValue) {
  xValue -= 0.5;
  console.log(xValue);
}

//Part 2
let number = 100;
let j = 1;
while (j <= number) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

//Part 3
let n = 6;
let arrNum = [];
let k = 1;
while (k <= n) {
  //arrNum.push(k);
  arrNum = [k];
  console.log(arrNum);
  k++;
}

//Part 4
let numPositive = 19;
let result = 0;
let l = 0;
while (l <= numPositive) {
  result += l;
  l++;
}
console.log(result);
