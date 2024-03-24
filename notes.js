function addNotes(){
    var x = document.getElementById("notesTextArea").value;
    document.getElementById("notesBody").innerHTML = x;
    document.getElementById("notesTextArea").value = "";
}