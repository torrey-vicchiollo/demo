// gets the next ten days in milliseconds. If we want more days, just change the i < x in the for loop
// use for weather API (API only covers out to 5 days)
function datesInMS() {
    let datesInMS = [];
    let currentDay = new Date();                        // gets todays date
    let dayInMS = currentDay.getTime();                 // converts todays date into milliseconds
    for (let i = 0; i < 10; i++) {
        datesInMS[i] = dayInMS;                         // formats the date and puts into the array
        dayInMS = dayInMS + 86400000;                   // increase by one day
    }
    return datesInMS;                                   // return the arrray
}

// formats dates from datesInMS() method to 'Tue Apr 16 2024' format
// use for date selector
function fillDateSelector(idName) {
    var dates = datesInMS();                            // calls datesInMS()
    let formattedDates = [];
    let select = document.getElementById(idName);
    for (let i = 0; i < dates.length; i++) {
        let option = document.createElement("option");
        var dayInMS = dates[i];                         // grabs the i element of the dates array
        let date = new Date(dayInMS);                   // converts to Date type
        formattedDates[i] = date.toDateString();        // formats to string
        option.value = date.toDateString();             // set the option value
        option.text = date.toDateString();              // set the option text
        select.appendChild(option);
    }
    return formattedDates;                              // return the array
}
