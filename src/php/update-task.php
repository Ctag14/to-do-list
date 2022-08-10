<?php
    include( './dbconnect.php');
    $res= file_get_contents("php://input");
    $task= json_decode($res);
    
    $sql= "UPDATE tasks SET name=?,date=?,type=?,description=?,comments=? WHERE id=?";
 
    $stmt =$conn->prepare($sql);
    $stmt->bind_param('sssssi',$name,$date,$type,$description,$comments,$id);
    $name = $task->name;
    $date = $task->date;
    $type = $task->type;
    $description = $task->description;
    $comments = $task->comments;
    $id =$task->id;
    $stmt->execute();
    $stmt->close();
    
    
    echo 'sucessfully update';
    ?>