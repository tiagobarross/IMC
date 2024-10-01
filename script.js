//variables
const form = document.querySelector("form")
const inputWeight =  document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const Modal = {
  wrapper: document.querySelector(".modalWrapper"),
  message: document.querySelector(".modal h2 span"),
  buttonClose: document.querySelector(".modal h2 .close"),
  open(){
    Modal.wrapper.classList.remove("hide")
  },
  close(){
   Modal.wrapper.classList.add("hide")
  }
}

form.onsubmit = function(event){
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value 

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
    Modal.open()
}

Modal.buttonClose.onclick = function(){
  Modal.close()
}

function IMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}