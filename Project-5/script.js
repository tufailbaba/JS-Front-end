let amount = document.getElementById("amount")
let pin = document.getElementById("pin")

let money = 100000
let correct_pin = 2580

function withdraw (){
    if (pin.value == correct_pin){
        if (Number(amount.value) <= money){
            alert("withdraw amount , money left "+ (money- Number(amount.value))
        )
        money = money-Number(amount.value);

        }else{
            alert("Not enough money left")
        }
    } else{
        alert("Incorrect pin")
    }
    amount.value= "";
    pin.value= "";

        }
    
