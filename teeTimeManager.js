
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
        for (let i = 0; i < 3; i++) {
            if (row.cells[0].textContent === time) {

                console.log(time + " " + booker + " " + playerCount + " " + cartCount);
                // Fill the row with the provided information
                // we need to create row.cells for eachjh line and se them to empty text so they can be filled
                if(row.cells[i].textContent = ''){
                
                    if(playerCount == 1){
                        row.cells[i].textContent = booker + ' ' + playerCount
                    }
                    else if(playerCount < 1){
                        row.cells[i].textContent = booker
                        for(let j = 0 ; j < playerCount - 1 ; j++){
                            row.cells[i + 1].textContent = 'x'
                        }
                    }
                }
                return; // Exit the function after filling the row
            }
        }
    }



}