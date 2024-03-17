
function addTeeTime() {
    let teeSheet = document.getElementById("teeTimesTable");
    let time = document.getElementById("timeInput").value;
    let booker = document.getElementById("bookerInput").value;
    let playerCount = document.getElementById("golferCountInput").value;
    let cartCount = document.getElementById("cartCountInput").value;

    // Iterate through each row of the table
    for (let i = 0; i < teeSheet.rows.length; i++) {
        const row = teeSheet.rows[i];

        // Check if the time in the first cell matches the input time
        if (row.cells[0].textContent === time) {
            // Fill the row with the provided information
            row.cells[1].textContent = booker;
            row.cells[2].textContent = playerCount;
            row.cells[5].textContent = cartCount;
            return; // Exit the function after filling the row
        }
    }



}