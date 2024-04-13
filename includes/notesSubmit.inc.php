<?php
    include_once 'dbh.inc.php';
    $date = date("n/j/Y");
    $body = " ";

    #check for teesheet
    $sql = "SELECT * FROM teesheets WHERE date = '$date';";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    if ($resultCheck > 0){

        #this is the first check to see and get existing notes
        $sql = "SELECT * FROM notes WHERE date = '$date';";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);
        if($resultCheck > 0){
            while($row = mysqli_fetch_assoc($result)){
                $body = $row['body'];
            }
        }

        #update notes to database
        $body = $body . "→" . $_POST['notesTextArea'] . "<br>";
        $sql = "REPLACE INTO notes (date, body) VALUES ('$date', '$body');";
        mysqli_query($conn, $sql);

    }
    header("Location: ../index.php");