<?php
    include( './dbconnect.php');
    $res= file_get_contents("php://input");
    $user= json_decode($res);


    $sql = "SELECT id,password FROM users WHERE username=?";
    $username = $user->username;
    $password= $user->password;
    $stmt =$conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 1) {
        $stmt->bind_result($id, $hashed_password);
        $stmt->fetch();
        if (password_verify($password, $hashed_password)) {
            echo $id;
        }
        else
        echo 'Invalid Password';
    }
    else{
         echo 'User not Registered';
    }

    
    $stmt->close();
?>