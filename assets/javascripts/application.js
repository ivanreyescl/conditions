// test 1
const header_image = document.getElementById("header_image")

header_image.addEventListener("click", () => {
  if (header_image.className === 'header_image error-field') {
    header_image.className = 'header_image'
  } else {
    header_image.className = 'header_image error-field'
  }
});


// test 2
const quantityInput1 = document.querySelector(".text-1")
const quantityInput2 = document.querySelector(".text-2")
const quantityInput3 = document.querySelector(".text-3")
const totalValue = document.querySelector(".valor-total")
updateTotal()

function updateTotal() {
  const value1 = parseInt(quantityInput1.value) || 0
  const value2 = parseInt(quantityInput2.value) || 0
  const value3 = parseInt(quantityInput3.value) || 0

  const total = value1 + value2 + value3

  if (total > 10) {
    console.log(total)
    alert("Llevas demasiados stickers")
    return
  } else {

  totalValue.textContent = total
  }
}

quantityInput1.addEventListener("input", updateTotal)
quantityInput2.addEventListener("input", updateTotal)
quantityInput3.addEventListener("input", updateTotal)

//TEST 3
const selectInput1 = document.querySelector(".select-1")
const selectInput2 = document.querySelector(".select-2")
const selectInput3 = document.querySelector(".select-3")
const passwordAlert = document.querySelector(".alert_text")

function check_password() {
  const option1 = parseInt(selectInput1.value)
  const option2 = parseInt(selectInput2.value)
  const option3 = parseInt(selectInput3.value)

  if (option1 == "9" && option2 == "1" && option3 == "1" || option1 == "7" && option2 == "1" && option3 == "4") {
    passwordAlert.className = "alert_text success_text"
    passwordAlert.textContent = "Contraseña correcta"
  } else {
    passwordAlert.className = "alert_text error_text"
    passwordAlert.textContent = "Contraseña incorrecta"
  }
  console.log(option1, option2, option3,passwordAlert)
}


document.querySelector(".password_submit").addEventListener("click", check_password)