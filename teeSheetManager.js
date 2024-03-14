
function createTeeSheet() {

    


}

function createTimeInterval() {
    let times = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 5) {
            let time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            times.push(time);
        }
    }
    return times;
}

function fillTeeTimeSelect() {
    let times = createTimeInterval(); // Call the function to get the times array
    let select = document.getElementById("teeTimeSelect");
    for (let i = 0; i < times.length; i++) {
        let option = document.createElement("option");
        option.value = times[i]; // Use times[i] for value
        option.text = times[i]; // Use times[i] for text
        select.appendChild(option);
        console.log(times[i]);
    }
}