<?php
    include 'dbh.inc.php';
    session_start();

    $startOfDay = $_POST['teeTimeSelectStart'];                                     //start of day
    $endOfDay = $_POST['teeTimeSelectEnd'];                                         //end of day
    $interval = $_POST['intervalSelector'];                                         //interval
    $year = $_POST['yearForTeeSheet'];                                              //year
    $month = $_POST['monthForTeeSheet'] + 1;                                        //month
    $day = $_POST['dayForTeeSheet'];
    $date = $month . "/" . $day . "/" . $year;                                      //date
    
    $sql = "SELECT * FROM teesheets WHERE date = '$date';";                          //first call which checks if teesheet for day already exists  
    $result = mysqli_query($conn, $sql);                                            //sets result variable
    $resultCheck = mysqli_num_rows($result);                                        //sets result check variable
    if(($resultCheck < 1) && ($startOfDay != $endOfDay)){                           //if there isn't already a teesheet for the date and sod and eod do not equal
        $sql = "INSERT INTO teesheets (date, startOfDay, endOfDay, intrvl)
        VALUES ('$date', '$startOfDay', '$endOfDay', '$interval');";                //query for new teesheet
        mysqli_query($conn, $sql);                                                  //query to database
    }
    header("Location: ../index.php");                                               //send back to index.php