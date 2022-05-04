<?php
require 'config.php';

if(!empty($_GET)){
    $id_user=$_GET['iduser'];
    $id_item=$_GET['iditem'];
    $check=$_GET['check'];
   if(!empty($id_item) && !empty($id_user) && !empty($check)){
       if($check =='true'){
        $isadd=mysqli_query($conn,"SELECT * FROM cart WHERE id_item =$id_item AND id_user = $id_user");
              if(mysqli_num_rows($isadd)){
                  echo json_encode(['status'=>true,"message" => "successful"]);
                }else{
                    echo json_encode(['status'=>false,"message" => "wrong"]);
                }
        }else{
            $addcart=mysqli_query($conn,"INSERT INTO cart (id_item,id_user) VALUES($id_item,$id_user)");
            if($addcart){
             echo json_encode(['status'=>true,"message" => "successful"]);
            }
         }
   }
}

?>