function modifyTeeTime() {
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
                
                break;
            }
        }
    });
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