/* script.js

// Event listener to execute code after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to display alert
    function showAlert() {
        alert("Hi everyone from JavaScript");
    }

    // Function to print message to screen
    function printMessage() {
        document.body.innerHTML += "<p>Hi everyone from JavaScript</p>";
    }

    // Attach event listener to the button to trigger the showAlert function
    document.getElementById("alertButton").addEventListener("click", showAlert);

    // Call the printMessage function to print the message to the screen
    printMessage();
});*/



// Function to show an alert message
function showAlert() {
    alert("This is a JavaScript alert message!");
}

// Function to print a message to the screen
function printMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Hi everyone from JavaScript";
}

// Add event listener to the button to trigger the alert
const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", showAlert());

// Call the function to print the message to the screen
printMessage();
