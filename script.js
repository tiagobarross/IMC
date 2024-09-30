//variables
const form = document.querySelector("form")
const inputWeight =  document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const modalWrapper = document.querySelector(".modalWrapper")
const modalMessage = document.querySelector(".modal h2 span")
const modalBtnClose = document.querySelector(".modal h2 .close")



form.onsubmit = function(event){
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value 

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  modalWrapper.classList.remove("hide")
}

modalBtnClose.onclick = function(){
  modalWrapper.classList.add("hide")
}

function IMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}