<?php
require 'config.php';
$httpPost = file_get_contents("php://input");
$_POST = json_decode($httpPost,true);
$DIR = "./assets/";
if($_POST){
    $name=$_POST['name'];
    $price=(int)$_POST['price'];
    $ram=(int)$_POST['ram'];
    $rom=(int)$_POST['rom'];
    $screen=(int)$_POST['screen'];
    $type=(int)$_POST['type'];
    $image=$_POST['image'];
    // if not empty
    if(!empty($name) && !empty($price) && !empty($ram) && !empty($rom) && !empty($image)){
     // if there image
     $file_chunks = explode(";base64,", $_POST['image']);
     $fileType = explode("image/", $file_chunks[0]);
     $image_type = $fileType[1];
     $base64Img = base64_decode($file_chunks[1]);
     $name_img= uniqid() . '.'.$image_type;
     $file = $DIR . $name_img;
     file_put_contents($file, $base64Img);

     $addpost=mysqli_query($conn,"INSERT INTO phones (name,price,type,ram,rom,screen_phone,url_img) VALUES ('$name',$price,$type,$ram,$rom,$screen,'$name_img')");
     if($addpost){
         echo json_encode(['status'=>true,"message" => "successful"]);
     }
    }
}
else{
    // if input is empty
    echo json_encode(["status" => false, "message" => "Input is Empty"]);
}

?>