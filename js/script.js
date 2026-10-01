// Get the dialog and buttons
const dialog = document.getElementById("user-dialog");
const openButton = document.getElementById("open-user-dialog");
const closeButton = document.getElementById("close-user-dialog");

// Open the dialog
openButton.addEventListener("click", function () {
    dialog.showModal();
});

// Close the dialog
closeButton.addEventListener("click", function () {
    dialog.close();
});