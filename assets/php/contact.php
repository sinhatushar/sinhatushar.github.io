<?php

if(isset($_POST['message'])){

	$to      = 'heeramani.15342@gmail.com';
	$subject = 'Site Contact Form';

	if($_POST["name"]==""||$_POST["email"]==""||$_POST["message"]==""){
	echo "Fill All Fields..";
		}
	else{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$email =filter_var($email,FILTER_SANITIZE_EMAIL);
 
 // Validate e-mail address
 $email= filter_var($email, FILTER_VALIDATE_EMAIL);
 	if(!$email){
 		echo "Invalid Sender's address.";
 				}
 	else{
 		$headers = 'From:'.$email."\r\n";
 		$headers = 'Cc:'.$email."\r\n";
 		$message = wordwrap($message,70);

 		mail($to, $subject, $message,$headers);
 		echo "Your message has been sent";
 		}

	}
}

	
	

?>
