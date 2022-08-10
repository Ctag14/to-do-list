<?php
    include( './dbconnect.php');
    $uid=$_REQUEST['userId'];
    $sql= 'SELECT * FROM tasks WHERE uid=? ORDER BY date';
    $stmt =$conn->prepare($sql);
    $stmt->bind_param("i", $uid);
    $stmt->execute();
    $result = $stmt->get_result();
    $tasks = $result->fetch_all(MYSQLI_ASSOC);
    $jsonTasks = json_encode($tasks);
    echo $jsonTasks;
    mysqli_close($conn);

?>