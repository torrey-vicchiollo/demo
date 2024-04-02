
function createTeeSheet() {
    let startTime = document.getElementById("teeTimeSelectStart").value;
    let endTime = document.getElementById("teeTimeSelectEnd").value;
    let interval = parseInt(document.getElementById("intervalSelector").value);
    let teeSheet = document.getElementById("teeTimesTable");
    let timeInput = document.getElementById("timeInput");
    console.log(startTime + " " + endTime + " " + interval);

    if (checkTableContent("teeTimesTable")) {
        console.log("table has information");
        return;
    }

    // Check if start time is greater than or equal to end time
    if (startTime >= endTime) {
        alert("This is not a valid time period");
        return; // Exit function if invalid time period
    }

    const amountOfTimes = calcAmountOfTimes(startTime, endTime, interval);
    console.log("Number of times: " + amountOfTimes);

    let currentTime = startTime; // Initialize currentTime to startTime
    for (let i = 0; i < amountOfTimes; i++) {
        const newRow = document.createElement("tr");

        // Create and append delete button as the first cell
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "modalButton"
        deleteButton.onclick = handleDeleteButtonClick(currentTime); // Call handleDeleteButtonClick with currentTime
        deleteCell.appendChild(deleteButton);
        newRow.appendChild(deleteCell);

        // Create and append edit button as the second cell
        const editCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = handleEditButtonClick(currentTime); // Call handleEditButtonClick with currentTime
        editCell.appendChild(editButton);
        newRow.appendChild(editCell);

        // Create and append the third cell with time interval values
        const timeCell = document.createElement("td");
        timeCell.textContent = currentTime;
        newRow.appendChild(timeCell);

        for (let j = 1; j < 5; j++) {
            const newCell = document.createElement("td");
            // Fill the cells with placeholder text 'X'
            newCell.textContent = 'X';
            newRow.appendChild(newCell);
        }

        teeSheet.appendChild(newRow); // Append row to the table
        fillTimeIntervals(currentTime);
        // Increment currentTime by the interval (in minutes)
        let [hours, minutes] = currentTime.split(":").map(Number);
        minutes += interval;
        hours += Math.floor(minutes / 60);
        minutes %= 60;
        currentTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    }
}
function fillTimeIntervals(time) {
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
            console.log(time);
        }
    }
    return times;
}

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

function fillInCartCount() {
    let select = document.getElementById("cartCountInput");
    for (let i = 0; i < 2; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.text = i + 1;
        select.appendChild(option);
    }

}

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
    return function() {
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
function handleEditButtonClick(currentTime) {
    //needs to return function so it saves the current time when the method was created
    return function() {
        let modal = document.getElementById("modal");
        let header = document.getElementById("modalHeader");
        let Title = document.getElementById("modalTitle");
        let deleteButton = document.getElementById("modalDeleteButton");
        let body = document.getElementById("modalBody");

        
    };
}


