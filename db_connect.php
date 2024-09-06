<?php
$servername = "localhost";
$username = "shayan";
$password = "Mehran@1";
$dbname = "student_data";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>