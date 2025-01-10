// console.log('Hello Dreyy');
// console.log('I Like it Coffe');

// window.alert('Hello Dreyy');
// window.alert('I Like it Coffe');

// document.getElementById("myh1").textContent= 'Hello';
// document.getElementById("myp").textContent= 'I Like Pizza';

// let x;
// x=123;

// console.log(x);


// let age=25;
// let price=10.11;
// let ipk=3.1;
// console.log(typeof ipk);

// console.log(`You Are ${age} Years Old`)
// console.log(`The Price Is $${price} Dolar `)
// console.log(`Your Ipk Is: ${ipk}`)

// let FistName = "Sby Sepdianto Manalu";
// let LastName = "Dreyy";
// let FavariteFood= "Pork"
// let email = "sbymana@gmail.com"

// console.log(typeof FistName);
// console.log(`My Name Is :${FistName} / ${LastName} `);
// console.log(`My Favarite Food Is :${FavariteFood}`);
// console.log(`My Email Is :${email}`);

// let online = true;
// let forsale = false;
// let IsStudent = true;

// console.log(`Sby Manalu Is ${online}`);
// console.log(`Car For Sale ${forsale}`)
// console.log(`enrolled: ${IsStudent}`)

// let Name = "Sby Sepdianto Manalu";
// let age  = 20;
// let Student = true;

// document.getElementById("p1").textContent = `My Name Is : ${Name}`;
// document.getElementById("p2").textContent = `My Age : ${age}`;
// document.getElementById("p3").textContent = `Im Student : ${Student}`;

// let Student = 30;

// Student = Student - 1;
// Student = Student + 1;
// Student = Student * 2;
// Student = Student / 2;
// Student = Student ** 2;

// Student += 2;
// Student -= 1;
// Student *= 2;
// Student /= 2;
// Student **= 2;
// Student %= 2;
// console.log(Student);


// let Username;

// Username =window.prompt("What's Your Username? ")
// console.log(Username);

// let username;
// document.getElementById("mysubmit").onclick = function(){
// username= document.getElementById("Mytext").value;
// document.getElementById("myh1").textContent= `Hello ${username}`

// //  console.log(username);
// };

// let age = window.prompt("How Old are you??")
// age =Number(age); // Age Dibuat Jadi Number
// age+=1;
// console.log(age);

// let x = " "; //Pizza -> Nan
// let y = " "; //Pizza -> String
// let z = " "; //Pizza -> True

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

let PI = 3.14159;
let radius ;
let circumference ;

// pi = 420.69;


// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

circumference = 2 * PI * radius;
document.getElementById("mysubmit").onclick = function (){
    radius = document.getElementById("mytext").value ;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent  = circumference + " cm";


}
