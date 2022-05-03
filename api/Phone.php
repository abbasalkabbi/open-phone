<?php
require 'config.php';

if(!empty($_GET)){
    $id=$_GET['id'];
$Data= mysqli_query($conn,"SELECT * FROM phones Where id=$id");
$data_fetch= mysqli_fetch_all($Data,MYSQLI_ASSOC);
echo json_encode($data_fetch);
}


?>