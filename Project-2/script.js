let num1= document.getElementById("num1")
let num2= document.getElementById("num2")

function solve (){
  if(num1.value == "" || num2.value == ""){
    num1.style.backgroundColor = "White"
    num2.style.backgroundColor = "White"
  }
    else{
        if(Number(num1.value) > Number(num2.value)){
            num1.style.backgroundColor = "green"
            num2.style.backgroundColor = "red"
        }
        if(Number(num2.value) > Number(num1.value)){
             num2.style.backgroundColor = "green"
            num1.style.backgroundColor = "red"
        }
    }if(Number(num1.value) == Number(num2.value)){
        num2.style.backgroundColor = "blue"
            num1.style.backgroundColor = "blue"
    }
}