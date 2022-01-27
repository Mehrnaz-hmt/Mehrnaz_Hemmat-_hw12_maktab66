function myFunction(e) {
  const firstNameInput = document.getElementById("firstnameinput").value;
  const lastNameInput = document.getElementById("lastnameinput").value;
  const selectInput = document.getElementById("country").value;
  const description = document.getElementById("description").value;


  


const reloadPage = setTimeout(() => {
  e.location.reload;
},8000);
console.log("this is after setTimeout")
}


// ===============================================
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementById("close");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
