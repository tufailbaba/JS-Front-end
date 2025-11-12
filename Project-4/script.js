let name = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let password = document.getElementById("password");
let con_password = document.getElementById("con_password");

function submit() {
  if (
    name.value == "" ||
    email.value == "" ||
    contact.value == "" ||
    password == "" ||
    con_password == ""
  ) {
    alert("please fill all the feilds ");
  }
}
