function myFunction(e) {
 const firstNameInput = document.getElementById("firstnameinput").value;
 const lastNameInput = document.getElementById("lastnameinput").value;
 const selectInput = document.getElementById("country").value;
const description = document.getElementById("description").value;

alert("You're information has succesfully registered!")
const myPreventEvent = false;
const mySetTimeOut = setTimeout(() => {
  if(myPreventEvent == flase) {
    e.preventDefault()
    
  }else {

  }  
}, 8000);

  }
  