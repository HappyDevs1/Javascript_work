function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const modal = document.getElementById("myModal");
const emergencyContact = document.getElementById("emergency-contact");

emergencyContact.addEventListener("click", () => {
  modal.style.display = "block";
})