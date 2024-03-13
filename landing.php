<html>
    <head>
        <title>Simple Table</title>
        <style>
            table {
                width: 75%;
                border-collapse: collapse;
                font-family:Arial, Helvetica, sans-serif;
            }

            table, th, td {
                border: 1px solid black;
            }

            th, td {
                padding: 8px;
                text-align: left;
            }

            th {
                background-color: #f2f2f2;
            }
        </style>
        <script>"teeTimeManager.js"</script>
    </head>
    <body>
        <button onclick="addTeeTime()">Add Tee Time</button>
        <input type="text" id="timeInput" placeholder="Time">
        <input type="text" id="player1" placeholder="Player 1"> 
        <input type="text" id="player2" placeholder="Player 2">
        <input type="text" id="player3" placeholder="Player 3">
        <input type="text" id="player4" placeholder="Player 4"> <!-- Corrected ID -->
        <h2>Tee Time Table</h2>
        <table id="teeTimesTable"> <!-- Added ID -->
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Player 3</th>
                    <th>Player 4</th>
                </tr>
            </thead>
            <tbody>
                <!-- Rows will be added here -->
            </tbody>
        </table>
        <script src="teeTimeManager.js"></script>
    </body>
</html>