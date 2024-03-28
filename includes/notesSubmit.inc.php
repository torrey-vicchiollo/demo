<?php
    include_once 'dbh.inc.php';                                                     //gets connection
    $date = date("Y/m/d");                                                          //sets date variable
    $body = " ";                                                                    //initialize body

    $sql = "SELECT * FROM notes WHERE date = '$date';";                             //first call which gets existing body from current date   
    $result = mysqli_query($conn, $sql);                                            //sets result variable
    $resultCheck = mysqli_num_rows($result);                                        //sets result check variable
    if($resultCheck > 0){                                                           //if there's a result
        while($row = mysqli_fetch_assoc($result)){                                  //fetch row
            $body = $row['body'];                                                   //body = row
        }
    }

    $body = $body . " " . $_POST['notesTextArea'] . " ";                            //body = fetched body + textarea
    $sql = "REPLACE INTO notes (date, body) VALUES ('$date', '$body');";            //second sql call
    mysqli_query($conn, $sql);                                                      //connect and query to database
    header("Location: ../index.php");                                               //send back to index.php