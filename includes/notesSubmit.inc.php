<?php
    include_once 'dbh.inc.php';
    $date = date("Y/m/d");
    $body = $_POST['notesTextArea'];
    $sql = "REPLACE INTO notes (date, body) VALUES ('$date', '$body');";
    mysqli_query($conn, $sql);
    header("Location: ../index.php");