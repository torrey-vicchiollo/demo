
function addTeeTime() {
    let teeSheet = document.getElementById("teeTimesTable");
    let time = document.getElementById("timeInput").value;
    let booker = document.getElementById("bookerInput").value;
    let playerCount = parseInt(document.getElementById("golferCountInput").value); // Convert to integer
    let cartCount = parseInt(document.getElementById("cartCountInput").value); // Convert to integer

    // Iterate through each row of the table
    for (let i = 0; i < teeSheet.rows.length; i++) {
        const row = teeSheet.rows[i];

        // Check if the time in the first cell matches the input time
        if (row.cells[0].textContent === time) {
            console.log(time + " " + booker + " " + playerCount + " " + cartCount);

            // Fill the row with the provided information
            for (let j = 1; j <= playerCount; j++) {
                if (row.cells[j].textContent.trim() === '') {
                    row.cells[j].textContent = booker + ' ' + j;
                }
            }

            return; // Exit the function after filling the row
        }
    }

    // If the time doesn't exist, create a new row
    let newRow = teeSheet.insertRow(-1); // -1 appends at the end
    newRow.insertCell(0).textContent = time;
    for (let j = 1; j <= playerCount; j++) {
        newRow.insertCell(j).textContent = booker + ' ' + j;
    }
}