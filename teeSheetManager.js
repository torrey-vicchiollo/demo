
function createTeeSheet() {
    let startTime = document.getElementById("teeTimeSelectStart").value;
    let endTime = document.getElementById("teeTimeSelectEnd").value;
    let interval = parseInt(document.getElementById("intervalSelector").value);
    let teeSheet = document.getElementById("teeTimesTable");
    let timeInput = document.getElementById("timeInput");
    console.log(startTime + " " + endTime + " " + interval);

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
        
        // Create and append cells for each column
        for (let j = 0; j < 6; j++) {
            const newCell = document.createElement("td");
            // Fill the cells with placeholder text
            newCell.textContent = 'X';
            newRow.appendChild(newCell);
        }

        // Append the row to the table
        teeSheet.appendChild(newRow);

        // Increment currentTime by the interval (in minutes)
        let [hours, minutes] = currentTime.split(":").map(Number);
        minutes += interval;
        hours += Math.floor(minutes / 60);
        minutes %= 60;
        currentTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    }
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