<?php
    include_once 'dbh.inc.php';
    session_start();
    
    $time = $_POST['timeInput'];
    $booker = $_POST['bookerInput'];
    $num = $_POST['golferCountInput'];
    $year = $_POST['yearForTeeTime'];
    $month = $_POST['monthForTeeTime'] + 1;
    $day = $_POST['dayForTeeTime'];
    $date = $month . "/" . $day . "/" . $year;
    
    $sql = "SELECT * FROM teetimes WHERE date = '$date' AND time = '$time' 
            AND booker = '$booker' AND num = '$num';";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    if($resultCheck < 1){
        $sql = "INSERT INTO teetimes (date, time, booker, num)
        VALUES ('$date', '$time', '$booker', '$num');";
        mysqli_query($conn, $sql);
    }
    header("Location: ../index.php");