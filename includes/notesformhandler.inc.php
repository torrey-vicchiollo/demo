<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $date = date("Y/m/d");
        $body = $_POST['notesTextArea'];
        try{
            require_once "dbh.inc.php";
            $query = "REPLACE INTO notes (date, body) VALUES (?, ?);";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$date, $body]);
            $pdo = null;
            $stmt = null;
            header("Location: ../index.php");
            die();
        }catch(PDOException $e){
            die("Query failed: " . $e->getMessage());
        }
    }else{
        header("Location: ../index.php");
    }