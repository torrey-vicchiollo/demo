
function addTeeTime() {
    let teeSheet = document.getElementById("teeTimesTable");
    let time = document.getElementById("timeInput").value;
    let booker = document.getElementById("bookerInput").value;
    let playerCount = parseInt(document.getElementById("golferCountInput").value); // Convert to integer
    let cartCount = parseInt(document.getElementById("cartCountInput").value); // Convert to integer

    console.log("Input values:", time, booker, playerCount, cartCount);

    // Iterate through each row of the table
    for (let i = 0; i < teeSheet.rows.length; i++) {
        const row = teeSheet.rows[i];

        console.log("Row content:", row.cells[0].textContent);

        // Check if the time in the first cell matches the input time
        if (row.cells[0].textContent.trim() === time.trim()) {
            console.log("Time match found:", time);
            
            // Fill the row with the provided information
            for (let j = 1; j <= playerCount; j++) {
                console.log("in the loop");
                if (row.cells[j].textContent.trim() === '') {
                    console.log("found this text content");
                    row.cells[j].textContent = booker + ' ' + j;
                }
            }

            return; // Exit the function after filling the row
        }
    }
}