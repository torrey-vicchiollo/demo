
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
        // Create and append the first cell with time interval values
        const timeCell = document.createElement("td");
        timeCell.textContent = currentTime;
        newRow.appendChild(timeCell);

        for (let j = 1; j < 6; j++) {
            const newCell = document.createElement("td");
            // Fill the cells with placeholder text 'X'
            newCell.textContent = 'X';
            newRow.appendChild(newCell);
        }

        teeSheet.appendChild(newRow); // Append row to the table

        // Increment currentTime by the interval (in minutes)
        // This line splits the currentTime string into an array of two strings - one for hours and one for minutes, using the colon (:) 
        // as the delimiter. Then, it uses the map(Number) function to convert each string element to a number. The resulting array is destructured 
        // into two variables: hours and minutes.
        let [hours, minutes] = currentTime.split(":").map(Number);
        minutes += interval;
        //  Here, Math.floor(minutes / 60) calculates the number of hours to add based on the incremented minutes. 
        // This calculation ensures that if the added minutes exceed 60, they are converted into hours. The result is added 
        // to the current value of hours.
        hours += Math.floor(minutes / 60);
        // This line calculates the remaining minutes after converting any extra minutes into hours. % is the modulus operator, 
        // which returns the remainder of dividing the left-hand operand by the right-hand operand. In this case, it ensures that minutes does not exceed 60.
        minutes %= 60;
        // this line constructs a new currentTime string using template literals (${}) to combine hours and minutes 
        // as strings. The padStart(2, "0") method ensures that both hours and minutes are represented as two-digit strings, 
        // padding with a leading zero if necessary.
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