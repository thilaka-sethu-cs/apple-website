<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){

$name=$_POST["fullname"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$model=$_POST["model"];

$data="Name: $name | Email: $email | Phone: $phone | Model: $model\n";

file_put_contents("submissions.txt",$data,FILE_APPEND);

header("Location: index.html?success=1");
exit();
}
?>