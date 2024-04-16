<?php
    include 'dbh.inc.php';
    session_start();

    $date = $_SESSION["date"];
    
    $sql = "DELETE FROM teetimes WHERE date = '$date';";
    mysqli_query($conn, $sql);

    $sql = "DELETE FROM notes WHERE date = '$date';";
    mysqli_query($conn, $sql);

    $sql = "DELETE FROM teesheets WHERE date = '$date';";
    mysqli_query($conn, $sql);
    header("Location: ../index.php"); 