function addNotes(){
    let currentNotes = document.getElementById("notesBody").innerHTML;
    let newNotes = document.getElementById("notesTextArea").value;
    document.getElementById("notesBody").innerHTML = currentNotes + "\n" + "→ " + newNotes + "\n";
    document.getElementById("notesTextArea").value = ""
}