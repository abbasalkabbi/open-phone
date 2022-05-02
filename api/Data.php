<?php
require 'config.php';
$Data= mysqli_query($conn,"SELECT * FROM phones  ORDER BY id DESC  LIMIT 0, 10");
$Data_Phone= mysqli_fetch_all($Data,MYSQLI_ASSOC);
echo json_encode($Data_Phone);
?>