<?php
    #variable for servername
    $dbServername = "localhost";
    #variable for username
    $dbUsername = "root";
    #variable for password
    $dbPassword = "";
    #variable for database name
    $dbName = "launchangle";
    #connect that shit bro
    $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);