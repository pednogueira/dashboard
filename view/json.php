<?php 

$json = "skyhub.json";
$info = file_get_contents($json);

$json_obj = json_encode($info);
echo $json_obj;


 ?>