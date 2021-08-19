<?php
include "config.php";

$faculty_id = 0; //SET DEFAULT VALUE
if(isset($_POST['faculty_id'])){
   $faculty_id = mysqli_real_escape_string($con,$_POST['faculty_id']); // department id   
}

$users_arr = array();
if($faculty_id != null){
    $sql = "SELECT * FROM department WHERE faculty_id=".$faculty_id;
    $result = mysqli_query($con,$sql);
    
    while( $row = mysqli_fetch_array($result) ){
        $userid = $row['id'];
        $name = $row['department_name'];
    
        $users_arr[] = array("id" => $userid, "name" => $name);
    }
}

// encoding array to json format
echo json_encode($users_arr);