let num1 =document.getElementById("num1");
let num2 =document.getElementById("num2");
let ans =document.getElementById("ans");
let option =document.getElementById("option");

function calculate(){
    switch (option.value){
        case "+":
            ans.innerText = Number(num1.value) + Number(num2.value);
            break;
             case "-":
            ans.innerText = Number(num1.value) - Number(num2.value);
            break;
             case "*":
            ans.innerText = Number(num1.value) * Number(num2.value);
            break;
             case "/":
            ans.innerText = Number(num1.value) / Number(num2.value);
            break;
            
    }
}