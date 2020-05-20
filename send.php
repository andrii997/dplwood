<?php
use PHPMailer\PHPMailer\PHPMailer;
$to = 'dplwood.ua@gmail.com';
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$company = isset($_POST['company']) ? htmlspecialchars($_POST['company']) : '';
$comment = isset($_POST['comment']) ? htmlspecialchars($_POST['comment']) : '';
$response = [];
if ($email) {
    if ($name) {
        if ($company) {
            if ($comment) {
                require 'vendor/autoload.php';
                $mail = new PHPMailer;
                $mail->isSendmail();
                $mail->setFrom($to, $to);
                $mail->addAddress($to, $to);
                $mail->Subject = 'Request';
                $mail->msgHTML(<<<HTML
Email: {$email}<br>
Name: {$name}<br>
Company: {$company}<br>
Comment: {$comment}
HTML
                );
                if ($mail->send()) $response['success'] = 'Message sent';
                else $response['error'] = 'Error';
            } else $response['error'] = 'Bad comment';
        } else $response['error'] = 'Bad company';
    } else $response['error'] = 'Bad name';
} else $response['error'] = 'Bad email';
echo json_encode($response);
?>