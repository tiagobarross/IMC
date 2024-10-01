export const Modal = {
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

Modal.buttonClose.onclick = function(){
  Modal.close()
}

window.addEventListener("keydown", handleKeydown)
function handleKeydown(event){
  if(event.key === "Escape"){
    Modal.close()
  }
}