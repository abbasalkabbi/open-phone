<?php
require 'config.php';

$Data= mysqli_query($conn,"SELECT * FROM phones  WHERE type= 1 ORDER BY id DESC");
$data_samsung= mysqli_fetch_all($Data,MYSQLI_ASSOC);
echo json_encode($data_samsung);
?>