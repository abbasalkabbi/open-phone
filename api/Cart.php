<?php
require 'config.php';
$array = array();
if($_GET){
    $id_user=$_GET['iduser'];
    if(!empty($id_user)){
        $data=mysqli_query($conn,"SELECT * FROM cart Where id_user=$id_user");
        $data_cart= mysqli_fetch_all($data,MYSQLI_ASSOC);
        foreach ($data_cart as $cart){
            $id= $cart['id_item'];
            $Data= mysqli_query($conn,"SELECT * FROM phones Where id=$id");
            $data_fetch= mysqli_fetch_all($Data,MYSQLI_ASSOC);
            array_push($array, $data_fetch[0]);
        }

    }
}
echo json_encode($array)

?>