<<?php
    include( './dbconnect.php');
    $res= file_get_contents("php://input");
    $user= json_decode($res);
    $username = $user->username;
    $password = $user->password;
    $user->password = password_hash($user->password, PASSWORD_DEFAULT);
    
    $sql = "SELECT * FROM users WHERE username=?";
    $stmt =$conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        
        echo "Username Taken";
        
    }
    else{
        $stmt->close();
        $sql2= "INSERT INTO `users` (username, password) VALUES (?,?)";
    
        $stmt =$conn->prepare($sql2);
        $stmt->bind_param('ss',$username,$password);
        $stmt->execute();
        
        
        
        echo $conn->insert_id;
    }
    $stmt->close();
    

?>