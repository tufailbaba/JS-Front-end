// document.getElementById("a")
// // console.log(a);
// a.innerText = "This is updated text"
// // a.style.backgroundcolor = "grey"
// a.style.fontSize = "60px"
// // varaibles

// const b = 10;
// let c = 20;
// var d = 30;
// console.log(c);
// console.log(b);
// console.log(d);

// // Some practice

// let y =  '"Tufail" is my name'
// console.log(y);
// let z =  "'Tufail'is my name"
// console.log(z);
// let n = `my fist name id "tufail" and my last name's baba` //usingbacktick
// console.log(n);
// // changing line 
// let q = `my fist name id 
// "tufail"`
// console.log(q);
// // Boolean

// let s = true
// let t = false

// // Array
// let arr = ["Tufail", "Baba", "Ankit", 10,true];
// console.log(arr);
// console.log(arr[0]);// Particular name
// console.log(arr[4]);
// // objects

// let obj = {
//     name : "Tufail",
//     age: 20,
//     male: true,
//     marks:98,
// }
// console.log(obj);
// console.log(obj.name);

// // functions
// function addition (){
//     let a = 10;
//     let b = 20;
//     let c = a+b;
//     console.log(c);
    
// }


let num1 =document.getElementById("num1")
let num2 =document.getElementById("num2")
let a = document.getElementById('a')
function sub (){
let ans = num1.value - num2.value;
a.innerText = ans;
}
function mul (){
let ans = num1.value * num2.value;
a.innerText = ans;
}
function div (){
let ans = num1.value / num2.value;
a.innerText = ans;
}
function addition (){
let ans = Number(num1.value) + Number(num2.value);
a.innerText = ans;
}




