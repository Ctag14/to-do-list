<?php
    include( './dbconnect.php');
    $res= file_get_contents("php://input");
    $task= json_decode($res);
    
    $sql= "UPDATE tasks SET completed=? WHERE id=?";
 
    $stmt =$conn->prepare($sql);
    $stmt->bind_param('si',$completed,$id);
    $completed = $task->completed;
    $id =$task->id;
    $stmt->execute();
    $stmt->close();
    
    
    echo 'sucessfully update';
    ?>