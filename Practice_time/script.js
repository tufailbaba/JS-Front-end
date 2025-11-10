let num1= document.getElementById("num1")
let num2= document.getElementById("num2")

function solve (){
    if (num1.value == "" || num2.value == ""){
        num1.style.backgroundColor = "White"
        num2.style.backgroundColor = "White"
    }
    else if (Number(num1.value) > Number(num2.value)) {
        num1.style.backgroundColor = "Green"
        num2.style.backgroundColor = "Red"
    }
    else if (Number(num1.value) < Number(num2.value)){
             num2.style.backgroundColor = "Green"
        num1.style.backgroundColor = "Red"
    }
    else{
        num2.style.backgroundColor = "Blue"
        num1.style.backgroundColor = "Blue"
    }
}

