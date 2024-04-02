
function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
}


function initializeModal() {
    let closeButton = document.getElementById("modalCloseButton");
    let overlay = document.getElementById("modalOverlay");

    // Add event listener to close button
    closeButton.addEventListener("click", closeModal);

    // Add event listener to overlay
    overlay.addEventListener("click", closeModal);
}