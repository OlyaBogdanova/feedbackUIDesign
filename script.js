const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "";

ratingsContainer.addEventListener("click", (e) => {

  if (e.target.closest(".rating") && e.target.nextElementSibling) {
    removeActive();
    e.target.closest(".rating").classList.add("active");
    selectedRating = e.target.closest(".rating").lastElementChild.innerHTML;
    checkedBtnStatus()
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

function checkedBtnStatus(){
    if(selectedRating){
        sendBtn.disabled=false
    } else{
        sendBtn.disabled=trueА
    }
}
