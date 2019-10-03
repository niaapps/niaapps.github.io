<?php


if(isset($_POST['submit'])){

require'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$mail->Host= 'smtp.gmail.com';
$mail->Port= 587;
$mail->SMTPAuth= true;
$mail->SMTPSecure='tls';
$mail->Username='niaapplications@gmail.com';
$mail->Password='raddevswomyn93';

$mail->setFrom($_POST['email'],$_POST['name']);
$mail->addAddress('niaaw605@gmail.com');
$mail->addReplyTo($_POST['email'], $_POST['name']);

$mail->isHTML(true);
$mail->Subject='Form Submission: ' .$_POST['msg_t'];
$mail->Body= '<h3 align=center>Name: '.$_POST['name'].'<br> Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h3>';
if(!$mail->send()){
	$result="Something went wrong. Please try again.";
}
else{
	$result = "Sent Successfully! Thank you. You will be hearing from me shortly.";
}



}


?>

