"use strict";
/*let hasDriverslicense = false;
const passTest = true;
if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive :D");

function logger() {
  console.log("My name is nitin");
}
logger(); //invoking,calling,running
logger(); //invoking,calling,running
logger(); //invoking,calling,running

function fruitProcessor(apples, oranges) {
  const Juice = `juice with ${apples} apples and ${oranges} oranges`;
  return Juice;
}

console.log(fruitProcessor(2, 5));
const appp = fruitProcessor(3, 4);
console.log(appp);

function calcAge1(birhtyear) {
  return 2037 - birhtyear;
}
console.log(`your age is ${calcAge1(1987)} years`);

const age2 = function (birhtyear) {
  return 2037 - birhtyear;
};
console.log(`your age is ${age2(1987)} years`);

const age = (birthyear) => 2037 - birthyear;
console.log(`your age is ${age(1987)} years`);

const retire = (retireage) => 65 - age(1987);
console.log(`your retirement age is ${retire(1987)} years`);
const yearsToRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will retire in ${retirement} years`;
};

console.log(yearsToRetire(1987, "nitin"));
console.log(yearsToRetire(1989, "kavita"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const Juice = `juice with ${apples} apples cut into ${applePieces} pieces and ${oranges} oranges cut into ${orangePieces} pieces`;
  return Juice;
}

console.log(fruitProcessor(2, 5));
const appp = fruitProcessor(3, 4);
console.log(appp);

const yearsToRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  if (age > 0 && retirement > 0) {
    return `${firstName} will retire in ${retirement} years`;
  } else {
    return -1;
  }
};
console.log(yearsToRetire(-1987, "nitin"));
console.log(yearsToRetire(-2038, "kavita"));

const calcAverage = (first, second, third) => {
  return (first + second + third) / 3;
};

const dolphins = calcAverage(10, 10, 16);
const koalas = calcAverage(10, 10, 10);

console.log(`score of dolphins is ${dolphins} & score of Koalas is ${koalas}`);

const checkWinner = (avgDolphins, avgKoalas) => {
  var msg = "";
  if (avgDolphins >= 2 * avgKoalas) {
    msg = `Dolphins is the winner with score ${avgDolphins}`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    msg = `Koalas is the winner with score ${avgKoalas}`;
  } else {
    msg = `no one is the winner,dolphins score is ${avgDolphins} and koala score is ${avgKoalas} `;
  }

  return msg;
};

console.log(`${checkWinner(dolphins, koalas)}`);

const friends = ["nitin", "singh", "ram"];
console.log(friends);
const years = new Array(1987, 1989, 2002);
console.log(years);
console.log(`friends name is ${friends[0]} and birth year is ${years[0]}`);
console.log(friends[friends.length - 1]);
friends[2] = "sam";
console.log(friends);
const firstName = "Nitin";
const lastname = "Singh";
const details = new Array("Salaried", "Single");
const frands = new Array(firstName, lastname, 2021 - 1987, details);
console.log(frands);

const age2 = function (birhtyear) {
  return 2037 - birhtyear;
};
const years = new Array(1987, 1989, 2001);
years.push(1999);
years.unshift(1960);
const dob = [age2(years[0]), age2(years[1]), age2(years[years.length - 1])];
console.log(dob);


const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tip);
const total = [bill[0] + bill[1] + bill[2], tip[0] + tip[1] + tip[2]];
console.log(`Total bill is ${total[0]} and total tips are ${total[1]}`);
const total1 = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(
  `Each bill includig tips is ${total1[0]},${total1[1]},${total1[2]}`
);


const details = {
  firstName: "Nitin",
  lastName: "Singh",
  age: 2022 - 1987,
  job: "Analyst",
  family: ["rani", "rohan", "riya"],
};
console.log(details);
console.log(details.family);
const key = "Name";
console.log(details["first" + key]);
console.log(details["last" + key]);
const interested = prompt(
  "enter the detail you want to know firstName,lastName,age,job,family"
);

if (details[interested]) {
  console.log(details[interested]);
} else {
  console.log("Property not defined");
}

console.log(
  `${details.firstName} has ${details.family.length} family members and my favourite is ${details.family[2]}`
);


const details = {
  firstName: "Nitin",
  lastName: "Singh",
  dob: 1987,
  calcage: function () {
    this.age = 2022 - this.dob;
    return this.age;
  },
  job: "Analyst",
  hasDriversLiicense: true,
  family: ["rani", "rohan", "riya"],
  getsummry: function () {
    return `${this.firstName} is  ${this.calcage()} years old and has ${
      this.family.length
    } family members they are ${this.family[0]}, ${this.family[1]} and ${
      this.family[2]
    } and he has ${this.hasDriversLiicense ? "a" : "no"} driver license`;
  },
};
details.hasDriversLiicense = false;
console.log(details.getsummry());
*/
// var markWeight=98,markHeight=1.9,johnWeight=98,johnHeight=2.65;
// const markBMI= markWeight / markHeight ** 2;
// const johnBMI=johnWeight / johnHeight ** 2;
// console.log(markBMI,johnBMI);
// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);
// if(markBMI>johnBMI){
//     console.log(`Marks BMI (${markBMI}) is higher than John (${johnBMI})`);
//     }
//     else{
//         console.log(`Johns BMI (${johnBMI}) is higher than Marks (${markBMI})`);
//     }

const Mark = {
  fullName: "Mark Walhberg",
  Mass: 98,
  Height: 1.9,
  BMI: function () {
    this.BMIIndex = this.Mass / this.Height ** 2;
    return this.BMIIndex;
  },
  details: function () {
    return `${this.fullName} and his BMI is ${this.BMI()}`;
  },
};
console.log(Mark.BMI());
console.log(Mark.BMIIndex);
const John = {
  fullName: "John Adams",
  Mass: 92,
  Height: 1.95,
  BMI: function () {
    this.BMIIndex = this.Mass / this.Height ** 2;
    return this.BMIIndex;
  },
  details: function () {
    return `${this.fullName} and his BMI is ${this.BMI()}`;
  },
};
console.log(
  `${Mark.details()}, \n${John.details()},\n${
    Mark.BMIIndex > John.BMIIndex
      ? "Mark has higher BMI" 
      : "John has higher BMI" 
  }`
);
