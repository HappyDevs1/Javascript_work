function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
//To be fixed
const myModal = document.getElementById("modal");
const userProfile = document.querySelector(".profile-container");
userProfile.addEventListener("click", () => {
  myModal.style.display = "block";
});

const closeModalBtn = document.getElementById("close-modal-btn");
closeModalBtn.addEventListener("click", closeModal);
function closeModal() {
  if (myModal.style.display == "block") {
    myModal.style.display = "none";
  }
}

const userName = document.getElementById("username-input");
const usernameDisplay = document.getElementById("username-display")
function saveUserName() {
  usernameDisplay.innerHTML = userName.value;
};

const saveBtn = document.getElementById("save-changes-btn");
saveBtn.addEventListener("click", () => {
  saveUserName();
  closeModal();
});