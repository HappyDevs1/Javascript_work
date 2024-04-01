window.onload = function() {
  // Retrieve the username from local storage
  let storedUsername = localStorage.getItem('username');
  
  // If a username was stored, display it
  if (storedUsername) {
    document.getElementById("username-display").innerHTML = storedUsername;
  }
};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

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

let userName = document.getElementById("username-input");
let usernameDisplay = document.getElementById("username-display");
function saveUserName() {
  // Store the username in local storage
  localStorage.setItem('username', userName.value);
  
  // Display the username
  if (userName.value === null) {
    return usernameDisplay;
  } else {
    usernameDisplay.innerHTML = userName.value;
  }
};

const saveBtn = document.getElementById("save-changes-btn");
saveBtn.addEventListener("click", () => {
  saveUserName();
  closeModal();
});
