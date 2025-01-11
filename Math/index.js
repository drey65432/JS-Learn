// // Math.PI

// // console.log(Math.PI)
// // console.log(Math.E)

// let x= 81;
// let y =2;
// let z;

// // z = Math.round(x);
// // z = Math.floor(x); //Dibulatkan 3.99 = 3
// // z = Math.ceil(x);  //Dibulatkan 3.21= 4
// // z = Math.trunc(x); // Dibulatkan jadi bilangan Bulat Dari 3.21 = 3 
// // z = Math.pow(x,y);  // jadi 3 pangkat 2 = 9
// // z = Math.sqrt(x);  // Akar Pangkat dari x contoh x= 81 = 9
// // z = Math.log(x);  //log dari x contoh 10 log nya 2.3
// // z = Math.sin(x);  // Radian Mengatur x
// // z = Math.abs(x); // Mengubah Ke Positif dari Negatif



//  console.log(z);

// Random Number

// const max = 100;
// const min = 50;

// let RandomNum = Math.floor(Math.random()*(max - min)) + min ;
//  console.log(RandomNum);

const Mybutton = document.getElementById("Mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max =6 ;
let RandomNum1;
let RandomNum2;
let RandomNum3;


Mybutton.onclick= function(){
    RandomNum1 = Math.floor(Math.random() * max)+ min ;
    RandomNum2 = Math.floor(Math.random() * max)+ min ;
    RandomNum3 = Math.floor(Math.random() * max)+ min ;
    label1.textContent= RandomNum1;
    label2.textContent= RandomNum2;
    label3.textContent= RandomNum3;
}
