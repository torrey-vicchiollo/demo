function addNotes(){
    let currentNotes = document.getElementById("notesBody").innerHTML;
    let newNotes = document.getElementById("notesTextArea").value;
    document.getElementById("notesBody").innerHTML = currentNotes + "<br />" + "→ " + newNotes + "<br />";
    document.getElementById("notesTextArea").value = ""
}