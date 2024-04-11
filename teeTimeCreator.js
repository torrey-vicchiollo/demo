function addTeeTimeFromHTML(){
    let teeSheet = document.getElementById("teeTimesTable");
    let time = document.getElementById("timeInput").value;
    let booker = document.getElementById("bookerInput").value;
    let playerCount = parseInt(document.getElementById("golferCountInput").value); // Convert to integer
    addTeeTime(teeSheet,time,booker,playerCount);
}

//add the parameters
function addTeeTime(teeSheet,time,booker,playerCount) {
    let playerSlot = 0;
    if (booker.length <= 1) {
        alert("Please enter a name longer than 1 char");
        return;
    }
    // console.log("Input values:", time, booker, playerCount, cartCount);

    // Iterate through each row of the table
    for (let i = 0; i < teeSheet.rows.length; i++) {
        const row = teeSheet.rows[i];
        // console.log("Row content:", row.cells[1].textContent);

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