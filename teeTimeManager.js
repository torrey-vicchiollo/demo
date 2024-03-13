function addTeeTime(){
    var time = document.getElementById("timeInput").value;
    var player1 = document.getElementById("player1").value; // Corrected IDs
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;

    var table = document.getElementById("teeTimesTable");
    var row = table.insertRow(-1); 
    row.insertCell(0).innerHTML = time;
    row.insertCell(1).innerHTML = player1;
    row.insertCell(2).innerHTML = player2;
    row.insertCell(3).innerHTML = player3;
    row.insertCell(4).innerHTML = player4;
}