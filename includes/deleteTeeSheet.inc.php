<?php
    include_once 'dbh.inc.php';
    $date = date("n/j/Y");
    $sql = "DELETE FROM teesheets WHERE date = '$date';";
    mysqli_query($conn, $sql);
    header("Location: ../index.php"); 