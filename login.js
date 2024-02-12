// Function to prompt the user for a password
function showPasswordPrompt() {
  var password = prompt("Please enter the password:");
  var validPasswords = ["user", "admin"]; // List of valid passwords

  // Check if the entered password is valid
  if (validPasswords.includes(password)) {
    // Redirect to the appropriate page based on the password
    if (password === "user") {
      window.location.href = "user/index.html"; // Redirect to content1.html for password "86578657"
    } else if (password === "admin") {
      window.location.href = "admin/index.html"; // Redirect to content2.html for password "admin"
    }
  } else {
    // Otherwise, display an error message
    alert("Incorrect password. Please try again.");
    // Reload the page to prompt again
    location.reload();
  }
}

// Call the function when the page is loaded
window.onload = showPasswordPrompt;
