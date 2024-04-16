<?php 
    include 'includes/dbh.inc.php';
    session_start();
    if(isset($_POST['teeSheetGenerationSubmit'])){
        $year = $_POST['yearForTeeSheetGeneration'];
        $month = $_POST['monthForTeeSheetGeneration'] + 1;
        $day = $_POST['dayForTeeSheetGeneration'];
        $_SESSION["date"] = $month . "/" . $day . "/" . $year;
    }else{
        $_SESSION["date"] = date("n/j/Y"); 
    }
?>    
<html lang="en">                                                                     
    <head>
        <meta charset="UTF-8">
        <title>launch angle</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="icon" type="image/x-icon" href="favicon.png">
    </head>
    <body>
        <!-- header -->
        <div id="header">
            <p id="headerTitle">
                launch angle 
                &emsp; &emsp; &emsp; &emsp;
                &emsp; &emsp; &emsp; &emsp;
                &emsp; &emsp; &emsp; &emsp; 
                &emsp; &emsp; &emsp; &emsp; 
                &emsp; &emsp;
                <span id="dateDisplay"></span>
            </p>
        </div>
        <!-- end of header -->
        <!-- upper -->
        <div id="upper">
            <div id="creationSection">
                <!-- tee sheet creation -->
                <div id="teeSheetCreation">
                    <form id="teeSheetForm" action="includes/teeSheetSubmit.inc.php" method="POST">
                        <button id="createButton" name="createButton" onclick="formatTeeSheetFromHTML()"><b>+</b></button>
                        <label for="teeTimeSelectStart">start time</label>
                        <select id="teeTimeSelectStart" name="teeTimeSelectStart"></select>
                        <label for="teeTimeSelectEnd">end time</label>
                        <select id="teeTimeSelectEnd" name="teeTimeSelectEnd"></select>
                        <label for="intervalSelector">interval</label>
                        <select id="intervalSelector" name="intervalSelector"></select>
                        <label for="monthForTeeSheet">month</label>
                        <select id="monthForTeeSheet" name="monthForTeeSheet"></select>
                        <label for="dayForTeeSheet">day</label>
                        <select id="dayForTeeSheet" name="dayForTeeSheet"></select>
                        <label for="yearForTeeSheet">year</label>
                        <select id="yearForTeeSheet" name="yearForTeeSheet"></select>
                    </form>
                </div>
                <br>
                <!-- tee time creation -->
                <div id="insert">
                    <form id="teeTimeForm" action="includes/teeTimeSubmit.inc.php" method="POST">
                        <button id="insertButton" name="insertButton" onclick="addTeeTimeFromHTML()"><b>+</b></button>
                        <label for="timeInput">tee time</label>
                        <select id="timeInput" name="timeInput"></select>
                        <label for="bookerInput">booker</label>
                        <input id="bookerInput" name="bookerInput" type="text" size="8" placeholder="last, first">
                        <label for="golferCountInput">golfer(s)</label>
                        <select id="golferCountInput" name="golferCountInput"></select>
                        <label for="monthForTeeTime">month</label>
                        <select id="monthForTeeTime" name="monthForTeeTime"></select>
                        <label for="dayForTeeTime">day</label>
                        <select id="dayForTeeTime" name="dayForTeeTime"></select>
                        <label for="yearForTeeTime">year</label>
                        <select id="yearForTeeTime" name="yearForTeeTime"></select>
                    </form>
                </div>
            </div>
            <!-- weather widget -->
            <div id="weather-container">
                <div id="current-day"></div>
                <img id="weather-icon" alt="Weather Icon">
                <div id="temp-div"></div>
                <div id="weather-info"></div>
                <div id="hourly-forecast"></div>
                <div id="date-selector-container">
                    <label for="teeTimeDate">date&nbsp;</label>
                    <select id="teeTimeDate" name="teeTimeDate"></select>
                </div>
            </div>
        </div>
        <!-- end of upper -->
        <br>
        <!-- main -->
        <div id="main">
            <!-- tee table-->
            <div id="teeTable"> 
                <div>
                    <div>
                        <p id="teeTableTitle">
                            <?php echo "tee sheet for " . $_SESSION["date"]; ?>
                        </p>
                        <form id="teeSheetGenerationForm" name="teeSheetGenerationForm" method="POST">
                            <label for="monthForTeeSheetGeneration">month</label>
                            <select id="monthForTeeSheetGeneration" name="monthForTeeSheetGeneration"></select>
                            <label for="dayForTeeSheetGeneration">day</label>
                            <select id="dayForTeeSheetGeneration" name="dayForTeeSheetGeneration"></select>
                            <label for="yearForTeeSheetGeneration">year</label>
                            <select id="yearForTeeSheetGeneration" name="yearForTeeSheetGeneration"></select>
                            <button id="teeSheetGenerationSubmit" name="teeSheetGenerationSubmit">View Date</button>
                        </form>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <div id="teeTimeButtons">
                        <div id="modifyDiv">
                            <form id="modifyTeeTimeForm">
                                <button id="modifyTeeTime" onclick="modifyTeeTime()">Modify</button>
                            </form>
                        </div>
                        <div id="delTTDiv">
                            <form id="deleteTeeTimeForm">
                                <button id="deleteTeeTime" onclick="deleteTeeTime()">Delete</button>
                            </form>
                        </div>
                        <div id="delTSDiv">
                            <form id="deleteTeeSheetForm" action="includes/deleteTeeSheet.inc.php" method="POST">
                                <button id="deleteTeeSheet" type="submit" name="deleteTeeSheet">Delete Sheet</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br>
                <table id="teeTimesTable">
                    <thead>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div id="calendar">
            </div>
            <!-- notes section -->
            <div id="notes" class="sticky">
                <p id="notesTitle">daily notes</p>
                <?php
                    $date = $_SESSION["date"];
                    $sql = "SELECT * FROM notes WHERE date = '$date';";
                    $result = mysqli_query($conn, $sql);
                    $resultCheck = mysqli_num_rows($result);
                    if($resultCheck > 0){
                        while($row = mysqli_fetch_assoc($result)){
                            echo "<p id='notesBody'> " . $row['body'] . "</p>";
                        }
                    }else{
                        echo "<p id='notesBody'>daily notes have not been entered yet</p>";
                    }
                ?>
                <form id="notesForm" action="includes/notesSubmit.inc.php" method="POST">
                    <textarea id="notesTextArea" name="notesTextArea" rows="6" cols="24"
                        placeholder="enter daily notes here"></textarea>
                    <br>
                    <br>
                    <br>
                    <button id="notesButton" type="submit" name="notesSubmit"><b>+</b></button>
                </form>
            </div>
        </div>
        
        <div class="modal active" id="modal">
        <div id="modalHeader">
            <div id="modalTitle"></div>
            <button id="modalCloseButton">&times;</button>
        </div>
        <div id="modalBody">
            <input type="text" id="modify1" placeholder="Player 1"><br>
            <input type="text" id="modify2" placeholder="Player 2"><br>
            <input type="text" id="modify3" placeholder="Player 3"><br>
            <input type="text" id="modify4" placeholder="Player 4"><br>
            <button id="submitButton">Submit</button>
        </div>
        <div class="active" id="modalOverlay"></div>

        <!-- script section -->
        <script src="teeTimeCreator.js"></script>
            <script src="teeSheetManager.js"></script>
            <script src="dateDisplay.js"></script>
            <script src="dateHandler.js"></script>
            <script src="teeTimeHandler.js"></script>
            <script src="weatherWidget.js"></script>
            <script src="dateSelector.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
            </script>
            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    fillTeeTimeSelect("teeTimeSelectStart");
                    fillTeeTimeSelect("teeTimeSelectEnd");
                    fillInIntervals();
                    fillInPlayerCount();
                    dateDisplay();
                    fillDateSelects();
                    getWeather();
                    fillDateSelector("teeTimeDate");
                });
            </script>
            <?php
                //load in sheet
                $date = $_SESSION["date"];
                $sql = "SELECT * FROM teesheets WHERE date = '$date';";
                $result = mysqli_query($conn, $sql); 
                $resultCheck = mysqli_num_rows($result);
                if($resultCheck > 0){
                    $row = mysqli_fetch_assoc($result);
                    $startOfDay = $row['startOfDay'];
                    $endOfDay = $row['endOfDay'];
                    $intrvl = $row['intrvl'];
                    echo "<script type='text/javascript'>createTeeSheet('$startOfDay', '$endOfDay', '$intrvl');</script>";
                }
                //load in times
                $date = $_SESSION["date"];
                $sql = "SELECT * FROM teetimes WHERE date = '$date';";
                $result = mysqli_query($conn, $sql); 
                $resultCheck = mysqli_num_rows($result);
                if($resultCheck > 0){
                    while($row = mysqli_fetch_assoc($result)){
                        $time = $row['time'];
                        $booker = $row['booker'];
                        $num = $row['num'];
                        echo "<script type='text/javascript'>addTeeTime('$time', '$booker', '$num');</script>";
                    }
                }
            ?>
    </body>
</html>