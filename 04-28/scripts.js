const button = document.getElementById("openModal");
const modal = document.querySelector(".modal")
const closed = document.getElementById("closeModal");
let isShowing = false;

button.onclick = ()=>{
    modal.style.display = !isShowing ? "block" : "none"
    isShowing = !isShowing
}

closed.onclick = ()=>{
    modal.style.display = !isShowing ? "block" : "none"
    isShowing = !isShowing
}

