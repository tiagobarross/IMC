export const AlertError = {
  element: document.querySelector(".alertError"),
  open(){
    AlertError.element.classList.add("open")
  },
  close(){
    AlertError.element.classList.remove("open")
  }
}

window.addEventListener("keydown", handleKeydown)
function handleKeydown(event){
  if(event.key === "Escape"){
    AlertError.close()
  }
}