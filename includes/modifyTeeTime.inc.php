<?php
    include 'dbh.inc.php';
    session_start();
    $date = $_SESSION["date"];
    $time = $_POST['modifyTimeInput'];
    $sql = "DELETE FROM teetimes WHERE date = '$date' AND time = '$time';";
    mysqli_query($conn, $sql);


    $slot1 = $_POST['bookerInput1'];
    if(!($slot1 == '')){
        $sql = "INSERT INTO teetimes (date, time, booker, num) VALUES ('$date', '$time', '$slot1', '1');";
        mysqli_query($conn, $sql);
    }

    $slot2 = $_POST['bookerInput2'];
    if(!($slot2 == '')){
        $sql = "INSERT INTO teetimes (date, time, booker, num) VALUES ('$date', '$time', '$slot2', '1');";
        mysqli_query($conn, $sql);
    }

    $slot3 = $_POST['bookerInput3'];
    if(!($slot3 == '')){
        $sql = "INSERT INTO teetimes (date, time, booker, num) VALUES ('$date', '$time', '$slot3', '1');";
        mysqli_query($conn, $sql);
    }

    $slot4 = $_POST['bookerInput4'];
    if(!($slot4 == '')){
        $sql = "INSERT INTO teetimes (date, time, booker, num) VALUES ('$date', '$time', '$slot4', '1');";
        mysqli_query($conn, $sql);
    }
    
    header("Location: ../index.php");