<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $is_admin=0;
    if(!empty($name) && !empty($email) && !empty($password) ){
        // if input not empty
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
             // if   eamil
              //search is email is already login
              $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
              if(mysqli_num_rows($email_check) >0){
                // if email is  already login
                echo json_encode(['status'=>false,"message" => "($email) is  already login"]);
              }else{
                //   if is new email
                  if(strlen($name) <7){
                    //   if name is short 8 char
                    echo json_encode(['status'=>false,"message" => "($name) is  Short"]);

                  }else{
                    //   if name is big then 8
                      if(strlen($password) <7){
                        echo json_encode(['status'=>false,"message" => "($password) is  Short"]);
                      }else{
                        //   if
                        $register=mysqli_query($conn,"INSERT INTO users (name,email,password,is_admin) VALUES('$name','$email','$password',$is_admin)");
                        if($register){
                            $login=mysqli_query($conn,"SELECT * FROM users WHERE email ='{$email}' AND password = '{$password}'");
                            if(mysqli_num_rows($login)){
                                  // if loggin
                                  while($obj = mysqli_fetch_object($login)){
                                      $id= $obj -> id; //hendle Unique_id
                                      $is_admin=$obj->is_admin;
                                  }
                                  $_SESSION['id']=$id;
                                     if($_SESSION['id']){
                                         echo json_encode(['status'=>true,"message" => "successful","id"=>$_SESSION['id'],"is_admin"=>$is_admin]);
                                     }
                                  //End get seesion
                        }
                              }
                      }
                  }
              }

        }else{
            // if is not eamil
            echo json_encode(['status'=>false,"message" => "($email) is not validate"]);
        }
    }else{
         // if input is empty
         echo json_encode(["status" => false, "message" => "Input is Empty"]);
    }
}
?>