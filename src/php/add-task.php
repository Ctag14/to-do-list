<?php
    include( './dbconnect.php');
    $res= file_get_contents("php://input");
    $task= json_decode($res);
    
    $sql= "INSERT INTO tasks (name,date,type,description,uID) VALUES (?,?,?,?,?)";
 
    $stmt =$conn->prepare($sql);
    $stmt->bind_param('ssssi',$name,$date,$type,$description,$uID);
    $name = $task->name;
    $date = $task->date;
    $type = $task->type;
    $description = $task->description;
    $uID = $task->uID;
    $stmt->execute();
    $stmt->close();
    

    if(mysqli_error($conn)) {


        echo mysqli_error($conn);
    }
    
    echo $conn->insert_id;





?>