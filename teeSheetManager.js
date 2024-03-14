
function createTeeSheet() {

    


}

function createTimeInterval(){
    let times = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 5) {
            let time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            times.push(time);
        }
    }
    return times; // Corrected return variable
}

function fillTeeTimeSelect(){
    let times = createTimeInterval;
    let select = document.getElementById("teeTimeSelect");
    for(let i = 0; i < times.length; i++){
        let option = document.createElement("option");
        option.value = time;
        option.text = time;
        select.appendChild(option);

    }
}
