var displayAlert = document.getElementById("alertDiv");

function showAlert(message, messageType) {
  displayAlert.innerHTML = `
  <div class="alert ${messageType}">
    <strong>Hello! </strong> ${message}</div>`;
  setTimeout(closeAlert(), 5000); //     THIS WILL CLOSE THE ALERT DIV AFTER 5 SECONDS
}

function closeAlert() {
  displayAlert.innerHTML = "";
}
