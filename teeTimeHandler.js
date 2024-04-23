function addTeeTimeFromHTML(){
    let time = document.getElementById("timeInput").value;
    let booker = document.getElementById("bookerInput").value;
    let playerCount = parseInt(document.getElementById("golferCountInput").value); // Convert to integer
    addTeeTime(time, booker, playerCount);
}

//add the parameters
function addTeeTime(time, booker, playerCount) {
    var teeSheet = document.getElementById("teeTimesTable");
    let playerSlot = 0;

    // Iterate through each row of the table
    for (let i = 0; i < teeSheet.rows.length; i++) {
        const row = teeSheet.rows[i];
        console.log("Row content:", row.length);

        // Check if the time in the second cell matches the input time
        if (row.cells[1].textContent.trim() === time.trim()) {
            // console.log("Time match found:", time);
            // Fill the row with the provided information
            for (let j = 2; j <= 6; j++) { // Adjusted indices to match columns
                if (row.cells[j].textContent.length <= 1 && playerCount > 0) {
                    // console.log("found this text content");
                    row.cells[j].textContent = booker + '/' + (j - 1);
                    playerCount--;
                    playerSlot++; // Increment playerSlot only when a slot is filled
                    // console.log("Player slot:", playerSlot);
                }


                if (playerCount === 0) {
                    break; // Break out of the loop once player count is reached
                }
            }

            return; // Exit the function after filling the row
        }
    }
}