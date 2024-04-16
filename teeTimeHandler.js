//I need to get a 2d array of the selected boxes so the php can get it then send it into the method
function modifyfromHtml(){
    
    modifyTeeTime();
}

function modifyTeeTime(date,playerCount,time,booker) {
    console.log("made it to modifytee time");
    let checkedCheckboxes = document.querySelectorAll('.checkBox:checked');


    
    checkedCheckboxes.forEach(function(checkbox) {
        let checkboxId = checkbox.id;
        let timeSlotId = checkboxId.replace("checkBox", ""); // Extract the time slot ID
        
        // Iterate through table rows to find the corresponding time slot
        let teeSheet = document.getElementById("teeTimesTable");
        for (let i = 0; i < teeSheet.rows.length; i++) {
            const row = teeSheet.rows[i];
            const timeCell = row.cells[1]; // Assuming the time is in the second cell

            // Check if the time slot ID matches the checkbox ID
            if (timeCell.textContent === timeSlotId) {
                
            }
        }
    }); 
}

//I need to get a 2d array of the selected boxes so the php can get it then send it into the method

function deletefromHtml(){
    
    deleteTeeTime();
}


function deleteTeeTime() {
    let checkedCheckboxes = document.querySelectorAll('.checkBox:checked');
    
    checkedCheckboxes.forEach(function(checkbox) {
        let checkboxId = checkbox.id;
        let timeSlotId = checkboxId.replace("checkBox", ""); // Extract the time slot ID
        
        // Iterate through table rows to find the corresponding time slot
        let teeSheet = document.getElementById("teeTimesTable");
        for (let i = 0; i < teeSheet.rows.length; i++) {
            const row = teeSheet.rows[i];
            const timeCell = row.cells[1]; // Assuming the time is in the second cell

            // Check if the time slot ID matches the checkbox ID
            if (timeCell.textContent === timeSlotId) {
                // Update all tee time columns to "X"
                for (let j = 2; j < row.cells.length; j++) {
                    row.cells[j].textContent = "X";
                }
                break;
            }
        }
    });
}