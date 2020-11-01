<?php require 'phpmailer/PHPMailer.php';require 'phpmailer/SMTP.php';require 'phpmailer/Exception.php';$mail=new PHPMailer\PHPMailer\PHPMailer();try{$mail->CharSet="UTF-8";$mail->SMTPAuth=true;$mail->Debugoutput=function($str,$level){$GLOBALS['status'][]=$str;};$mail->Host='smtp.gmail.com';$mail->Username='isradin.110593@gmail.com';$mail->Password='Frontend2019';$mail->SMTPSecure='ssl';$mail->Port=465;$mail->setFrom('isradin.110593@gmail.com','Isradin Nurbekov');$mail->addAddress('isradin.nurbek@yandex.ru');if(isset($_POST['submit_1'])){$email=$_POST['email'];$title_1="Новое обращение Best Tour Plan";$body_1="
    <h2>New subscriber</h2>
    <b>Message:</b><br>$email
    ";$mail->isHTML(true);$mail->Subject=$title_1;$mail->Body=$body_1;header('Location: gratitude.html');}if(isset($_POST['submit_2'])){$name=$_POST['name'];$phone=$_POST['phone'];$email=$_POST['email'];$message=$_POST['message'];$title_2="Новое обращение Best Tour Plan";$body_2="
    <h2>New appeal</h2>
    <b>Name:</br> $name<br>
    <b>Phone:</br> $phone<br><br>
    <b>Email:</br> $email<br><br>
    <b>Message:</b><br>$message
    ";$mail->isHTML(true);$mail->Subject=$title_2;$mail->Body=$body_2;header('Location: gratitude.html');}if($mail->send()){$result="success";}else{$result="error";}}catch(Exception $e){$result="error";$status="Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";}