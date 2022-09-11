let btn = document.querySelector("button")
let input = document.querySelector(".main_input")
let length = document.querySelector('.length_input')
let collaj = document.querySelectorAll('.check')
let copy_icon=document.querySelector(".copy_icon")
console.log('saldan')
btn.addEventListener('click', generator)
let password = ""
const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "@#$%^&*()_+~|}{[]> ) "
}

//Functions for get random value
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];

function generator(e) {
    e.preventDefault()
      createpassword()
}

function createpassword() {
    while (length.value > password.length) {
        collaj.forEach(item => {
            if (item.checked&&item.previousElementSibling.innerHTML=='Include uppercase letters') {
                password += getKey[0](item) 
            }
         else   if (item.checked&&item.previousElementSibling.innerHTML=='Include lowercase letters') {            
                password += getKey[1](item)
            }
          else  if (item.checked&&item.previousElementSibling.innerHTML=='Include numbers') {
                password += getKey[2](item)
            }
         else   if (item.checked&&item.previousElementSibling.innerHTML=='Include symbols') {
                password += getKey[3](item)
            }
             input.value=password
        })
    }
}
//CopyPassword
copy_icon.addEventListener('click',copyPassword )
function copyPassword() {
  input.select();
  document.execCommand("copy");  
}

