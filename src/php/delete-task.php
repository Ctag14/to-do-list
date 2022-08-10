<?php
    include( './dbconnect.php');
    $res= file_get_contents("php://input");
    $selectedId= json_decode($res);
    
    $sql= "DELETE FROM tasks WHERE id=?";
 
    $stmt =$conn->prepare($sql);
    $stmt->bind_param('i',$id);
    $id =$selectedId->id;
    $stmt->execute();
    $stmt->close();
    
    
?>