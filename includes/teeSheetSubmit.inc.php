<?php
    include_once 'dbh.inc.php';                                                     //gets connection to database
    $startOfDay = $_POST['teeTimeSelectStart'];                                     //start of day
    $endOfDay = $_POST['teeTimeSelectEnd'];                                         //end of day
    $interval = $_POST['intervalSelector'];                                         //interval
    $year = $_POST['yearForTeeSheet'];                                              //year
    $month = $_POST['monthForTeeSheet'];                                            //month
    $day = $_POST['dayForTeeSheet'];                                                //day
    $date = $month . "/" . $day . "/" . $year;                                      //date
    
    $sql = "SELECT * FROM teesheets WHERE date = '$date';";                          //first call which checks if teesheet for day already exists  
    $result = mysqli_query($conn, $sql);                                            //sets result variable
    $resultCheck = mysqli_num_rows($result);                                        //sets result check variable
    if($resultCheck < 1){                                                           //if there isn't already a teesheet for the date
        $sql = "INSERT INTO teesheets (date, startOfDay, endOfDay, intrvl)
        VALUES ('$date', '$startOfDay', '$endOfDay', '$interval');";                //query for new teesheet
        mysqli_query($conn, $sql);                                                  //query to database
    }
    header("Location: ../index.php");                                               //send back to index.php