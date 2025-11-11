let age = document.getElementById("num1");
let ans = document.getElementById("ans");
function check() {
  let age = num1.value;
  if (age < 0) {
    ans.innerText = "Invalid age";
  }
  else if (age>0 && age<13){
    ans.innerText  = "Child"
  }
  else if (age >=13 && age<20){
     ans.innerText  = "Teen"
  }
  else if (age >= 20 && age<60){
     ans.innerText  = "Adult"
  }else if (age>=60 && age <120){
     ans.innerText  = "Senior Citizen"
  }
  else
  {
     ans.innerText  = "Vin chukha zindai"
  }
}
