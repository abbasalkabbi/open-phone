<?php
require 'config.php';
if(!empty($_GET)){
    if($_GET['type'] == 'samsung'){
        $count=mysqli_query($conn,"SELECT COUNT(*) FROM phones WHERE type= 1");
        $count_f= mysqli_fetch_all($count,MYSQLI_ASSOC);
        if($count_f[0]['COUNT(*)']<10){
            $total=0;
        }else{
            $total=ceil($count_f[0]['COUNT(*)']/10);
        }
        echo json_encode($total);

    }else{
        $count=mysqli_query($conn,"SELECT COUNT(*) FROM phones WHERE type= 2");
        $count_f= mysqli_fetch_all($count,MYSQLI_ASSOC);
        if($count_f[0]['COUNT(*)']<10){
            $total=0;
        }else{
            $total=ceil($count_f[0]['COUNT(*)']/10);
        }
        echo json_encode($total);
    }
}
?>