const d = new Date();
const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
day = weekday[d.getDay()];
date = d.getDate();
month = 1 + d.getMonth();
year = d.getFullYear();
formattedDate = day + ",    " + month + "/" + date + "/" + year;

function dateDisplay(){
    document.getElementById("dateDisplay").innerHTML = formattedDate;
}