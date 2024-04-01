function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

window.onload = function reportIncident() {
  // Retrieve data from local storage
  let incidentType = localStorage.getItem('incidentType');
  let description = localStorage.getItem('description');
  let location = localStorage.getItem('location');
  let date = localStorage.getItem('date');
  const reporter = localStorage.getItem('reporter');

  if (incidentType && description && location && date && reporter) {
    const incidentContainer = document.getElementById("incident-container");
    incidentContainer.innerHTML = `
    <div class="incident-container">
        <div class="incident-details">
          <div class="incident-by-text">Reported by</div>
          <div class="reporter-username">${reporter}</div>
          <div class="incident-time">${date}</div>
        </div>
        <div>Incident type: ${incidentType}</div>
        <div class="location-text">Location: ${location}</div>
        <div class="incident-description">Description: ${description}</div>
        <div class="incident-image"></div>
      </div>
      <button id="delete-incident-btn" class="delete-incident-btn">Delete</button>
      <hr>`
      const deleteIncidentBtn = document.getElementById("delete-incident-btn");
      deleteIncidentBtn.style.backgroundColor = "red";
      deleteIncidentBtn.style.border = "none";
      deleteIncidentBtn.style.color = "white";

      deleteIncidentBtn.addEventListener("click", removeIncident);
      function removeIncident() {
        incidentContainer.innerHTML = '';
        localStorage.clear('incidentType');
        localStorage.clear('description');
        localStorage.clear('location');
        localStorage.clear('date');
        localStorage.clear('reporter');
      }
  }
};

document.getElementById("incident-btn").addEventListener("click", function() {
  // Store data in local storage
  let incidentType = document.getElementById("incident-type-input").value;
  let description = document.getElementById("description-input").value;
  let location = document.getElementById("location-input").value;
  let date = document.getElementById("date-input").value;
  const reporter = document.getElementById("username-display").innerHTML;

  localStorage.setItem('incidentType', incidentType);
  localStorage.setItem('description', description);
  localStorage.setItem('location', location);
  localStorage.setItem('date', date);
  localStorage.setItem('reporter', reporter);

  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.innerHTML = `Your incident has been successfully reported. Please refresh your page to see your incident report`
  confirmationMessage.style.color = "green";
  confirmationMessage.style.marginTop = "1vw"
});

document.getElementById("incident-btn").addEventListener("click", () => {
  reportIncident()
});