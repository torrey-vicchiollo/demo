<?php include 'includes/dbh.inc.php'; ?>                                                <!-- when the page loads, connect to databse -->                                                           
<html lang="en">                                                                        <!-- head html tag, sets web language to english -->

<head>
    <meta charset="UTF-8">                                                              <!-- sets charset to utf-8 which is standard -->
    <title>launch angle</title>
    <link rel="stylesheet" href="styles.css">
    </link>
    <link rel="icon" type="image/x-icon" href="favicon.png">
    <script src="teeTimeCreator.js"></script>
    <script src="teeSheetManager.js"></script>
    <script src="dateDisplay.js"></script>
    <script src="dateHandler.js"></script>
    <script src="teeTimeHandler.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            fillTeeTimeSelect("teeTimeSelectStart");
            fillTeeTimeSelect("teeTimeSelectEnd");
            fillInIntervals();
            fillInCartCount();
            fillInPlayerCount();
            dateDisplay();
            fillDateSelects();
            
        });
    </script>
</head>

<body>
    <!-- header -->
    <div id="header">
        <p id="headerTitle">launch angle</p>
    </div>

    <p id="dateDisplay"></p>

    <!-- tee sheet section -->
    <div id="teeSheetCreation">
        <!--
        <form id="teeSheetForm" action="includes/teeSheetSubmit.inc.php" method="POST">
             -->
            <button id="createButton" name="createButton" onclick="formatTeeSheetFromHTML()" type="submit"><b>+</b></button>

            <label for="teeTimeSelectStart">Start Time</label>
            <select id="teeTimeSelectStart" name="teeTimeSelectStart"></select>

            <label for="teeTimeSelectEnd">End Time</label>
            <select id="teeTimeSelectEnd" name="teeTimeSelectEnd"></select>

            <label for="intervalSelector">Interval</label>
            <select id="intervalSelector" name="intervalSelector"></select>

            <label for="yearForTeeSheet">Year</label>
            <select id="yearForTeeSheet" name="yearForTeeSheet"></select>

            <label for="monthForTeeSheet">Month</label>
            <select id="monthForTeeSheet" name="monthForTeeSheet"></select>

            <label for="dayForTeeSheet">Day</label>
            <select id="dayForTeeSheet" name="dayForTeeSheet"></select>
        <!--
        </form>
         -->
    </div>

    <br>

    <!-- tee time insert section -->
    <div id="insert">
        <button id="insertButton" onclick="addTeeTimeFromHTML()"><b>+</b></button>
        <label for="timeInput">Tee Time</label>
        <select id="timeInput"></select>
        <label for="bookerInput">Booker</label>
        <input id="bookerInput" type="text" size="18" placeholder="Last, First">
        <label for="golferCountInput">Golfer(s)</label>
        <select id="golferCountInput"></select>
        <label for="cartCountInput">Cart(s)</label>
        <select id="cartCountInput"></select>
    </div>

    <br>

    <!-- main section -->
    <div id="main">
        <!-- tee table-->
        <div id="teeTable"> 
            <div>
                <p id="teeTableTitle">today's tee sheet</p>
                <div id="teeTimeButtons">
                    <button id="modifyTeeTime" onclick="modifyTeeTime()">Modify</button>
                    <button id="deleteTeeTime" onclick="deleteTeeTime()">Delete</button>
                </div>
            </div>
            <br>
            <table id="teeTimesTable">
                <thead>
                    <!--
                    <tr>
                        <th>Time</th>
                        <th>Booker</th>
                        <th>P2</th>
                        <th>P3</th>
                        <th>P4</th>
                        <th>Cart(s)</th>
                    </tr>
                    -->
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>

        <div id="calendar">


        </div>

        <!-- notes section -->
        <div id="notes" class="sticky">
            <p id="notesTitle">today's notes</p>
            <?php
                #get date
                $date = date("m/d/Y");
                #create query where you check in the notes table, for the notes with the primary key matching date
                $sql = "SELECT * FROM notes WHERE date = '$date';";
                #store result of query into variable
                $result = mysqli_query($conn, $sql);
                #storing the number of rows from result
                $resultCheck = mysqli_num_rows($result);
                #if at least 1 row in result
                if($resultCheck > 0){
                    #while there is a row in result
                    while($row = mysqli_fetch_assoc($result)){
                    #add body of row to notes div in html
                    echo "<p id='notesBody'> " . $row['body'] . "</p>";
                }
                #if no result
                }else{
                    #echo message for row creation
                    echo "<p id='notesBody'>daily notes have not been entered yet</p>";
                }
            ?>
            <form id="notesForm" action="includes/notesSubmit.inc.php" method="POST">
                <textarea id="notesTextArea" name="notesTextArea" rows="6" cols="34"
                    placeholder="enter daily notes here"></textarea>
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

</body>

</html>