let guests = ["david", "happy", "Alex", "thabo", "themba", "Kate", "stephan", "mbali", "trace", "grace"];

let userName = prompt("What is your name?").toLowerCase()

function checkGuest() {
  let allowed = false;

  guests.forEach((guest) => {
    if (userName === guest) {
      allowed = true;
    }
  })
  if (allowed) {
    alert ("You are allowed")
  } else {
    alert("You are not allowed")
  }
}
checkGuest();
