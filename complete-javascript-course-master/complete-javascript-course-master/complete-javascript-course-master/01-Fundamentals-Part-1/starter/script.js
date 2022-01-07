/*let as="amazing";
console.log(40+25-15);
console.log(as);
let abc = 23;
console.log(abc);
console.log(typeof abc);
abc = true;
console.log(abc);
console.log(typeof abc);
abc = 'hahaha';
console.log(abc);
console.log(typeof abc);
let asd;
console.log(asd);
console.log(typeof asd);
let age = 30;
age =31;
console.log(age);
const currentYear = 2021;
const ageNitin=currentYear-1987;
const ageSingh=currentYear-1986;
console.log(ageNitin,ageSingh);
const firstName= 'Nitin';
const lastName= 'Singh';
console.log(firstName+" "+lastName);
console.log(ageNitin >= 34);
var markWeight=98,markHeight=1.9,johnWeight=98,johnHeight=2.65;
const markBMI= markWeight / markHeight ** 2;
const johnBMI=johnWeight / johnHeight ** 2;
console.log(markBMI,johnBMI);
const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI); 
if(markBMI>johnBMI){
    console.log(`Marks BMI (${markBMI}) is higher than John (${johnBMI})`);
    }
    else{
        console.log(`Johns BMI (${johnBMI}) is higher than Marks (${markBMI})`);
    }
const firstName='Nitin';
const job ='Analyst';
const dob = '1987';
const currentYear = 2021
const nitin = "I'm " +firstName+ " and my job is " +job+ " and i am " +(currentYear-dob)+ " years old";
console.log (nitin); 
const nitin2 = `I'm ${firstName} my job is ${job} and i am ${currentYear-dob} years old`;
console.log(nitin2);
const age = 15;
if (age >=18){
    console.log('You can drive');
}
else
{
    const yearleft = 18- age;
    console.log(`You are ${yearleft} Years short to be eligible`);
}

const birthYear= 2001;
let century;
if (birthYear <=2000){
    century=20;
}
else {
    century = 21;
}
console.log(century);
const inputyear = '1987';
console.log(Number(inputyear)+18);
console.log(String(23),23);
const check= Number(prompt("enter your dob:"));
const currentYear=2021;
if (check < currentYear)
{
const age =currentYear-check;
console.log(`your age is ${age} years`);
}
else if(check === 2021){
    console.log ("Not Born yet");
}
else{
    console.log ("Hoshiyari nahi");
}
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 110) / 3;
 
console.log(scoreDolphins, scoreKoalas);
 
if (scoreDolphins >= 100 || scoreKoalas >= 100) {
  if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win!`);
  } else if (scoreKoalas > scoreDolphins) {
    console.log(`Koalas win!`);
  } else {
    console.log(`Both win the trophy!`);
  }
} else {
    console.log(`No team wins the trophy! Score were less than 100.`);
}
const day= String(prompt("enter the day:"));
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('goto coding meeting');
        break;
    case 'tuesday':
        console.log('prepare theory vides');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
        case 'friday':
            console.log('record videos');
            break;
            case 'saturday':
                case 'sunday':
                console.log('enjoy the weekend');
                break;
            default:
                console.log('not a valid day');
}
const age = Number(prompt("enter the age:"));
age >= 18 ? console.log("You can drink") : "";

const age = Number(prompt("enter the age:"));
console.log(`i love to drink ${age >= 18 ? "wine" : "water"}`);
*/
const bill = Number(prompt("enter the amt:"));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill} and the tip was ${tip}, total amt was ${bill + tip}`
);
