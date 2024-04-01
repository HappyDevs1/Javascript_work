function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
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
};

window.onload = () => {
  // Retrieve the saved username from local storage
  const savedUsername = localStorage.getItem('savedUsername');
  console.log('Saved username from local storage:', savedUsername);

  // Initialize usernameDisplay object
  const usernameDisplay = savedUsername ? JSON.parse(savedUsername) : { username: "Happy Mahlangu" };

  const usernameInput = document.getElementById("username-input");
  const usernameText = document.getElementById("username-display");

  usernameText.innerHTML = usernameDisplay.username || '';
  
  document.getElementById("save-changes-btn").addEventListener("click", () => {
    if (usernameInput != null && usernameInput.value.trim() !== '') {
      // Update the usernameDisplay object with the new username
      usernameDisplay.username = usernameInput.value.trim();
      // Update the username display on the webpage
      usernameText.innerHTML = usernameDisplay.username;
      // Store the updated username in local storage
      localStorage.setItem('savedUsername', JSON.stringify(usernameDisplay));
    }
  });
};