<?php
require_once "vendor/autoload.php";

use SendGrid\Mail\Mail;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $to_email = $_POST['to'];
    $from_email = $_POST['from'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    $email = new Mail();
    $email->setFrom($from_email, "From Name");
    $email->setSubject($subject);
    $email->addTo($to_email, "To Name");
    $email->addContent("text/plain", $body);

    $sendgrid = new \SendGrid('<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>');
    try {
        $response = $sendgrid->send($email);
        echo "Email sent successfully";
    } catch (Exception $e) {
        echo "Email not sent. Error message: " . $e->getMessage();
    }
}
?>
