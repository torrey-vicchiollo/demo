const date = new Date();
day = Number(date.getDay());
month = Number(date.getMonth());
year = Number(date.getFullYear());
formattedDate = month + "/" + day + "/" + year;

function notesTitleDate(){
    notesTitle = document.getElementById("notesTitle");
    document.getElementById("notesTitle").innerHTML = notesTitle + " (" + formattedDate + ")"
}

function addNotes(){

    let currentNotes = document.getElementById("notesBody").innerHTML;
    let newNotes = document.getElementById("notesTextArea").value;
    
    document.getElementById("notesBody").innerHTML = currentNotes + "<br />" + "→ " + newNotes + "<br />";
    document.getElementById("notesTextArea").value = ""
}