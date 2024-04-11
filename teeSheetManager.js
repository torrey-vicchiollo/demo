
function formatTeeSheetFromHTML(){
    // gets starttime value from select box 
    let startTime = document.getElementById("teeTimeSelectStart").value;
    //gets endtime value from select box 
    let endTime = document.getElementById("teeTimeSelectEnd").value;

    //gets interval value from select box
    let interval = parseInt(document.getElementById("intervalSelector").value);
    //gets the whole table from the html
    let teeSheet = document.getElementById("teeTimesTable");

    createTeeSheet(startTime, endTime, interval, teeSheet);
}


function createTeeSheet(startTime, endTime, interval, teeSheet) {



    //checks if the table has content in it by looking at if it has any rows
    if (checkTableContent("teeTimesTable")) {
        console.log("table has information");
        return;
    }

    // Check if start time is greater than or equal to end time
    if (startTime >= endTime) {
        alert("This is not a valid time period");
        return; // Exit function if invalid time period
    }

    //helper method to see the tee time count 
    const amountOfTimes = calcAmountOfTimes(startTime, endTime, interval);
    // console.log("Number of times: " + amountOfTimes);

    let currentTime = startTime; // Initialize currentTime to startTime

    //create the same amount of rows as the amount of times
    for (let i = 0; i < amountOfTimes; i++) {
        //create a new row
        const newRow = document.createElement("tr");

        // Create and append the check box as first cell
        const editCell = document.createElement("td");
        const editButton = document.createElement("input");
        editButton.type = "checkbox"; // Set type to checkbox
        editButton.id = "checkBox" + currentTime;
        editButton.className = "checkBox";
        editCell.appendChild(editButton);
        newRow.appendChild(editCell);

        // Create and append the second cell as the time of each tee times
        const timeCell = document.createElement("td");
        timeCell.textContent = currentTime;
        newRow.appendChild(timeCell);

        //now we iterate through the row and fill it out with slots
        for (let j = 1; j < 5; j++) {
            const newCell = document.createElement("td");
            // Fill the cells with placeholder text 'X'
            newCell.className = 'teeTimeSlot'
            newCell.textContent = 'X';
            newRow.appendChild(newCell);
        }

        //append those cells into the row
        teeSheet.appendChild(newRow); // Append row to the table
        //Fill the select with each tee time so we can actually create a tee time
        fillTimeIntervals(currentTime);

        // Increment currentTime by the interval (in minutes)
        let [hours, minutes] = currentTime.split(":").map(Number);
        minutes += interval;
        hours += Math.floor(minutes / 60);
        minutes %= 60;
        currentTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        
        //buttons now visible
        document.getElementById("modifyTeeTime").style.visibility = 'visible';
        document.getElementById("deleteTeeTime").style.visibility = 'visible';
    }

}
function fillTimeIntervals(time) {
    //creating the options
    let option = document.createElement("option");
    let timeInput = document.getElementById("timeInput");
    option.value = time;
    option.text = time;
    timeInput.appendChild(option);
}


function calcAmountOfTimes(sTime, eTime, interval) {

    // Convert start and end times to minutes since midnight
    const startTime = parseInt(sTime.split(":")[0]) * 60 + parseInt(sTime.split(":")[1]);
    const endTime = parseInt(eTime.split(":")[0]) * 60 + parseInt(eTime.split(":")[1]);

    // Calculate time difference
    const timeDifference = endTime - startTime;

    // Calculate number of intervals
    const numberOfIntervals = Math.ceil(timeDifference / interval);

    return numberOfIntervals;


}


function createTimeInterval() {
    let times = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 5) {
            let time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            times.push(time);
            // console.log(time);
        }
    }
    return times;
}
/*
 ^^^^^^^^^^^^^^^^^^^
THESE TWO METHODS WORK TOGETHER TO FILL INB THE START AND END TEE TIME SELECTORS
 vvvvvvvvvvvvvvvvvvv
*/

function fillTeeTimeSelect(idName) {
    let times = createTimeInterval(); // Call the function to get the times array
    let select = document.getElementById(idName);
    for (let i = 0; i < times.length; i++) {
        let option = document.createElement("option");
        option.value = times[i]; // Use times[i] for value
        option.text = times[i]; // Use times[i] for text
        select.appendChild(option);
    }
}


//THIS COULD BE HARD CODED
function fillInIntervals() {
    let a = 4;
    let select = document.getElementById("intervalSelector");
    for (let i = 0; i < 12; i++) {
        let option = document.createElement("option");
        option.value = a + i; // Use times[i] for value
        option.text = a + i; // Use times[i] for text
        select.appendChild(option);
    }
}

//THIS COULD BE HARD CODED
function fillInCartCount() {
    let select = document.getElementById("cartCountInput");
    for (let i = 0; i < 2; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.text = i + 1;
        select.appendChild(option);
    }

}

//THIS COULD BE HARD CODED
function fillInPlayerCount() {
    let select = document.getElementById("golferCountInput");
    for (let i = 0; i < 4; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.text = i + 1;
        select.appendChild(option);
    }
}

function checkTableContent(tableId) {
    var table = document.getElementById(tableId);
    if (table) {
        var rows = table.getElementsByTagName('tr');
        if (rows.length > 0) {
            return true;
            // Your code to do something if table has content
        } else {
            return false;
        }
    } else {
        console.error("Table with ID " + tableId + " not found.");
    }
}


function handleDeleteButtonClick(currentTime) {
    //needs to return function so it saves the current time when the method was created
    return function () {
        let modal = document.getElementById("modal");
        let header = document.getElementById("modalHeader");
        let title = document.getElementById("modalTitle");
        let deleteButton = document.getElementById("modalDeleteButton");
        let body = document.getElementById("modalBody");
        modal.style.visibility = "visible";
        header.style.visibility = "visible";
        title.style.visibility = "visible";
        deleteButton.style.visibility = "visible";
        body.style.visibility = "visible";
        title.text = currentTime;




    };
}

// Function to handle edit button click
// function handleEditButtonClick(currentTime) {
//     //needs to return function so it saves the current time when the method was created
//     return function () {
//         let modal = document.getElementById("modal");
//         let header = document.getElementById("modalHeader");
//         let Title = document.getElementById("modalTitle");
//         let deleteButton = document.getElementById("modalDeleteButton");
//         let body = document.getElementById("modalBody");


//     };
// }


