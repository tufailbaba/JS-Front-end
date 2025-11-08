let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let a = document.getElementById('a')
function add (){
    let ans = Number(num1.value)+Number(num2.value)
    a.innerText = ans;
}
function sub (){
    let ans = Number(num1.value)-Number(num2.value)
    a.innerText = ans;
}
function mul (){
    let ans = Number(num1.value)*Number(num2.value)
    a.innerText = ans;
}
function div (){
    let ans = Number(num1.value)/Number(num2.value)
    a.innerText = ans;
}