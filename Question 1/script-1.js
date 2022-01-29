document.getElementById('myBtn').addEventListener('click', function (event) {
  event.preventDefault()
})

userInfo = []
function myFunction() {
  return new Promise((resolve, reject) => {
    const firstNameInput = document.getElementById('firstnameinput').value
    const lastNameInput = document.getElementById('lastnameinput').value
    const selectInput = document.getElementById('country').value
    const description = document.getElementById('description').value
    alert('your information was sucessfully registered!')
    userInfo.push({
      Name: firstNameInput,
      Lastname: lastNameInput,
      Nationality: selectInput,
      description: description,
    })
    setTimeout(() => {
      document.location.reload()
    }, 8000)
  })
}


// ===============================================
var modal = document.getElementById('myModal')
var btn = document.getElementById('myBtn')
var span = document.getElementById('close')

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}

//When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}