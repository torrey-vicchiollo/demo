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

function addNotes(){

    let currentNotes = document.getElementById("notesBody").innerHTML;
    let newNotes = document.getElementById("notesTextArea").value;
    
    document.getElementById("notesBody").innerHTML = currentNotes + "<br />" + "→ " + newNotes + "<br />";
    document.getElementById("notesTextArea").value = ""
}