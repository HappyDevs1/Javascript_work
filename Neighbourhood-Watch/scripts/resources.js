function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//emergecy contact Modal
const emergencyContactModal = document.getElementById("emergencyContactModal");
const emergencyContactLink = document.getElementById("emergency-contact");
emergencyContactLink.addEventListener("click", () => {
  emergencyContactModal.style.display = "block";
});
const closeEmergencyModal = document.querySelector(".close");
closeEmergencyModal.addEventListener("click", () => {
    emergencyContactModal.style.display = "none";
});

//local police station modal
const policeStationModal = document.getElementById("policeStationModal");
const policeStationLink = document.getElementById("local-police");
policeStationLink.addEventListener("click", () => {
  policeStationModal.style.display = "block";
});
const closePoliceModal = document.getElementById("close-police-station-modal");
closePoliceModal.addEventListener("click", () => {
  policeStationModal.style.display = "none";
});

//neighbourhood watch modal
const neigbourhoodWatchModal = document.getElementById("neighbourhoodWatchModal");
const neigbourhoodWatchLink = document.getElementById("neighbourhood-watch");
neigbourhoodWatchLink.addEventListener("click", () => {
  neigbourhoodWatchModal.style.display = "block";
});
const closeNeigbourhoodWatch = document.getElementById("close-neigbourhood-watch");
closeNeigbourhoodWatch.addEventListener("click", () => {
  neigbourhoodWatchModal.style.display = "none";
});

//crime prevention tips
const crimePreventionModal = document.getElementById("crimePreventionModal");
const crimePreventionLink = document.getElementById("crime-prevention");
crimePreventionLink.addEventListener("click", () => {
  crimePreventionModal.style.display = "block";
});
const closeCrimePrevention = document.getElementById("close-crime-prevention");
closeCrimePrevention.addEventListener("click", () => {
  crimePreventionModal.style.display = "none";
});

//home security checklist
const homeSecurityModal = document.getElementById("securityChecklistModal");
const homeSecurityLink = document.getElementById("home-security-checklist");
homeSecurityLink.addEventListener("click", () => {
  homeSecurityModal.style.display = "block";
});
const closeSecurityModal = document.getElementById("close-security-modal");
closeSecurityModal.addEventListener("click", () => {
  homeSecurityModal.style.display = "none";
})

//Educatinal material code
function redirect(url) {
  window.location.href = url;
};
const personalSafetyLink = document.getElementById("personal-safety");
personalSafetyLink.addEventListener("click", () => {
  redirect("https://www.thehomesecuritysuperstore.com/blogs/the-home-security-superstore-blog/home-security-101-the-basics")
});

const propertyMarkingLink = document.getElementById("property-marking");
propertyMarkingLink.addEventListener("click", () => {
  redirect("https://www.barrybros.com/2020/12/the-ultimate-guide-to-property-marking/");
});

const watchSignsLink = document.getElementById("neighbourhood-watch-signs");
const watchSignModal = document.getElementById("neighborhoodWatchModal");
watchSignsLink.addEventListener("click", () => {
  watchSignModal.style.display = "block";
});
const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {
  watchSignModal.style.display = "none";
});

const reportingLink = document.getElementById("incident-reporting");
reportingLink.addEventListener("click", () => {
  redirect("../html/incident.html")
});
