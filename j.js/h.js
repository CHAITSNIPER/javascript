// let js="amazing";
// if(js=="amazing"){
//     alert("javascript is fun");
// }

// console.log("jonas");
// console.log(23);

// let firstname = "Jonas";
// console.log(firstname);


// let javaScriptisFun = true;
// console.log(javaScriptisFun);
// console.log(typeof javaScriptisFun);
// console.log(typeof 4);
// let year;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);


// const job = 10;

// var emp = 'Programmer';
// emp = "teacher";



// console.log(ageJonas*2, ageJonas/10, 2**3);

// const firstname = 'Jonas';
// const lastname = "schmedtmann";
// const space = " ";

// console.log(firstname+space+lastname);

// let x=10;
// x+=10;
// console.log(x);

// console.log(ageJonas > ageSarah);

// const isFullAge = ageSarah >= 10;
// console.log(isFullAge);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah= now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(now-1991>now-2018);

// console.log(25-10-5);

// let x,y;

// x=y=25-10-5;   //executed right to left
// console.log(x,y);

// const averageAge = (ageJonas+ageSarah)/2;
// console.log(averageAge);

// let x,y;
// x = 78;
// y = 1.69;

// let bmi = x/(y**2);
// console.log(bmi);

// let w,v;
// w = 95;
// v = 1.95;

// let bmi2 = w/(v**2);

// console.log(bmi2);

// console.log(bmi >= bmi2);

// 
// 

// const birthyear = 1991;
// let century;

// if(birthyear <= 2000){
//     century = 20;
// }
// else{
//      century = 21;
// }
// // you cant read century here because its out of scope, hence we have
// //to declare it outside
// console.log(century);

// const input= 1991;
// console.log(Number(input), input);
// console.log(Number(input)+19);
// console.log(Number('jonas')); //output = NaN
// console.log(typeof NaN);

// console.log(String(23),23);

// console.log('23'-'10'-'3');
// console.log('23'+'10'+'2');


// let n = '1'+1;
// n = n-1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));

// const money = 0;
// if(money){
//     console.log("Don't spend");
// }
// else{
//     console.log(`get a job`);
// }

// let height;
// if(height){
//     console.log("Yay! height is defined!");

// }
// else{
//     console.log("Height is undefined");
// }

// const age = 18;
// if(age === 18){
//     console.log("You just became adult");
// }
// const favourite=Number(prompt("What's your favourite number?"));
// console.log(favourite);

// if(favourite === 23){
//     console.log('cool!23 is an amazing no')
// }
// else if(favourite !== 23){
//     console.log('hi');
// }
// let dolphins,koalas;

// // 
// arr1 = [96,108,89];
// arr2 = [88,91,110];
// let i,j=arr1[0],k=arr2[0];
// let sum1 = 0;
// let sum2 = 0;
// for(i=0; i < 3; i++){
//    sum1 += arr1[i];
//    sum2 += arr2[i];

//    if(arr1[i] > j){
//       j = arr1[i];
//    }

//    if(arr2[i] > k){
//     k = arr2[i];
//    }

//    j > k ? ""
// }

// 
// const age = 23;
// age >= 18 ? console.log("I like to drink wine"): console.log("I want juice");

// // exp1 ? exp2 : exp3     exp2 = if part     exp3 = else part

// const drink = age>=18? 'wine' : 'water';
// console.log(drink);

// 

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense){
//    console.log('I can drive');
// }

//  
// 
// function cutFruitPieces(fruit){
//      return fruit*4;
//   }
// function fruitprocessor(apples,oranges){
//      const applePieces= cutFruitPieces(apples);
//      const orangePieces = cutFruitPieces(oranges);
// const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
// return juice;
// }

// console.log(fruitprocessor(2,3));

// const friend1 = 'micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // it isnt funny to do

// const friends = ['Micheal','Steven','Peter'];
// console.log(friends);

// const years = new Array(1991,1984,2008);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);  //last element

// friends[2] = 'jay';
// console.log(friends);

// //constant arrays can change!!!!!
// // as only primitive values can't be
// //chamges , but arrays aren't.
// const firstname = 'jonas';
// const jonas = [firstname,'schmedtman',2037 - 1991,friends];
// //we can put arrays in arrays tho

// console.log(jonas);

// //exercise
// const calcAge = function(birthyear){
//      return 2037 - birthyear;
// }

// const y = [1990,1967,2002,2010,2018];

// //console.log(calcAg(years));  outputs NaN
// //as it cannot subtract a whole array by a number

// const age = calcAge(y[2]);
// console.log(age);

// const friends = ['micheal', 'steven','peter'];
// const newLength = friends.push('Jay');
// //adds an element to the end
// //array.push(element name);

// console.log(friends);

// friends.unshift('John');
// //adds an element to the front
// //array_name.unshift('name');

// //remove element
//  const popped=friends.pop();
// //removes the last element
// console.log(popped); //prints the element removed
// console.log(friends);

// friends.unshift(); //removes first element
// console.log(friends);

// const b = friends.indexOf('steven');
// //prints the index of the element

// console.log(friends.includes('steven'));  //prints true
// console.log(friends.includes('Bob')); //prints false
// //arrayname.includes('name');
// //is a boolean to check if the thing exists in there
// if(friends.includes('steven')){
//      console.log('You have a friend called steven');

// }

//  function calctip(bill){
//      if(bill >= 50 && bill <= 300){
//           return 0.2*bill;
//      }
//      else{
//           return 0.15*bill;
//      }
// }

// let bills = [125,555,44];
// let tips = [];
// let i=0;
// for(i = 0; i < bills.length; i++){
//     const j = calctip(bills[i]);
//     tips.push(j);
// }

// console.log(tips)

//objects

// const jonas = {
//      firstname : 'jonas',
//      lastname : 'schmedtman',
//      age : 2037 - 1991,
//      friends : ['micheal','peter','steven']
// };//these are properties

// console.log(jonas);

// //to get a property out of the object

// const v = jonas.lastname;
// console.log(v);
// //or
// console.log(jonas['lastname']);

// const nameKey = 'name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last'+nameKey]);

// //all this is not possible in dot notation

// const interest = prompt('What do u want to know abt jonas, choose between firstname,lastname,age,job and friends');
// //console.log(jonas.interest);
// //undefined... dot notation does not print
// //out of property

// console.log(jonas[interest]);
// //if we put a property not existing
// //it prints undefined

// if(jonas[interest]){
//      console.log(jonas[interest]);
// }
// else{
//      console.log("no");
// }

// //to add new properties

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
// //challenge
// //jonas has 3 friends, and his bf is micheal
// console.log(`${jonas.firstname} has 
//  ${jonas.friends.length}, and his bf is called ${jonas.friends[0]}`);
 
// const jonas = {
//           firstname : 'jonas',
//           lastname : 'schmedtman',
//           age : 2037 - 1991,
//           birthyear : 1991,
//           friends : ['micheal','peter','steven'],
//           hasDriversLicense: true,

//           // calcAge: function(){
//           //      console.log(this);
//           //   return 2037 - this.birthyear;
//           // }
//           calcAge: function (){
//                this.age = 2037 - this.birthyear;
//                return this.age;
//            },

//      getsummary:function(){
//           return `${this.firstname} is a ${this.calcAge()} old teacher, with ${this.hasDriversLicense ? 'a' : 'no'} License`;
     
//      }
// };//this keyword is used to refer to the objectname
// // console.log(jonas.CalcAge(1991));
// // console.log(jonas['calcAge'](1991));
// //instead of 'this.property', we can use
// //jonas.property,however, it is the same
// //but it violates DRY

// //lets say we have to access the age at
// //3 different places.

// //calcage once, store it in the object

// console.log(jonas.age);


// //challenge 
// //jonas is a 46 year old teacher, he
// //has a drivers license

// console.log(jonas.getsummary());


// const mark = {
//     firstname:'mark',
//     lastname:'Miller',
//     height : 1.69,
//     weight: 78,
//     BMI : function(){
//      this.bmi = this.weight/(this.height**2);
//     }
// };
// mark.BMI();
// console.log(mark.bmi);
 
// const John = {
//      firstname : 'John',
//      lastname : 'Wick',
//      height : 1.95,
//      weight : 92,
//      BMI : function(){
//           this.bmi = this.weight/(this.height**2);
//      }
// };
// John.BMI();
// console.log(John.bmi);

// const John = {
//   firstname : 'John',
//   lastname : 'Wick',
//   height : 1.95,
//   weight : 92,
//   BMI : function(){
//     this.bmi = this.weight/(this.height**2);
//   }

// };

// John.BMI();

// for(i = 0; i < 5; i++){
//     John.height = i*8/5;
//     John.BMI();
//     console.log(John.bmi);
// }

// const jonasarray = [
//  'jonas',
//  'schmedtman',
//  2037 - 1991,
//  ['micheal','peter']
// ];
// const types = [];

// for(let i = 0; i < jonasarray.length; i++){
//    console.log(jonasarray[i], typeof jonasarray[i]);
//    types[i] = typeof jonasarray[i];

//    //types.push(typeof jonasarray[i]);
// }  // type of an array is an object;


// console.log(types);
// let sum;
// const years = [1991,2007,1969,2020];
// for(let i = 0; i < years.length; i++){
//    sum += years[i];
// }
// let average = sum/years.length;
// console.log(average);

// //continue and break

// //continue exits the current iteration
// //break exits the entire loop

//looping backwards

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tip = [];
// const totals = [];

// function calctip(bill){
//   if(bill >= 50 && bill <= 300){
//     return bill*0.15;
//   }
//   else{
//     return bill*0.2;
//   }
// }

// for(let i = 0; i < bills.length; i++){
//    const t = calctip(bills[i]);
//    tip.push(t);

//    let sum = 0
//    sum += bills[i];
//    totals.push(sum);
// }


// console.log(tip);
// console.log(totals);






























