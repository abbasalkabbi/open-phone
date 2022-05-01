<?php
require 'config.php';

if(empty($_GET)){
$Data= mysqli_query($conn,"SELECT * FROM phones  WHERE type= 1 ORDER BY id DESC  LIMIT 0, 10");
$data_samsung= mysqli_fetch_all($Data,MYSQLI_ASSOC);
echo json_encode($data_samsung);

}else{
    $per_page=$_GET['page']*10;
    $Data= mysqli_query($conn,"SELECT * FROM phones  WHERE type= 1 ORDER BY id DESC  LIMIT $per_page, 10");
    $data_samsung= mysqli_fetch_all($Data,MYSQLI_ASSOC);
    echo json_encode($data_samsung);
}


?>