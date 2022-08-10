<?php
    $conn = mysqli_connect('remotemysql.com','NEyorLQF1n','FfkRtHYDhf','NEyorLQF1n');
    if(!$conn){
        echo 'connection error'.mysqli_connect_error();
    }
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *" )

?>