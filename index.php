<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>launch angle</title>
    <link rel="stylesheet" href="styles.css"></link>
    <link rel="icon" type="image/x-icon" href="favicon.png">
    <script src="teeTimeManager.js"></script>
    <script src="teeSheetManager.js"></script>
    <script src="notes.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            fillTeeTimeSelect("teeTimeSelectStart");
            fillTeeTimeSelect("teeTimeSelectEnd");
            fillInIntervals();
            fillInCartCount();
            fillInPlayerCount();
            dateDisplay();
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
        <button id="createButton" onclick="createTeeSheet()"><b>+</b></button>
        <label for="teeTimeSelectStart">Start Time</label>
        <select id="teeTimeSelectStart"></select>
        <label for="teeTimeSelectEnd">End Time</label>
        <select id="teeTimeSelectEnd"></select>
        <label for="intervalSelector">Interval</label>
        <select id="intervalSelector"></select>
    </div>

    <br>

    <!-- tee time insert section -->
    <div id="insert">
        <button id="insertButton" onclick="addTeeTime()"><b>+</b></button>
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
            <p id="teeTableTitle">today's tee sheet</p>
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

        <!-- notes section -->
        <div id="notes" class="sticky">
            <p id="notesTitle">today's notes</p>
            <p id="notesBody"></p>
            <form id="notesForm" action="includes/formhandler.inc.php" method="post">
                <textarea id="notesTextArea" name="notesTextArea" rows="6" cols="34" placeholder="enter daily notes here"></textarea>
                <br>
                <button id="notesButton" onclick="addNotes()"><b>+</b></button>
            </form>
        </div>

    </div>

</body>

</html>