<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Set up email parameters
    $to = "aravindh2545@gmail.com"; // Replace with your email address
    $headers = "From: $name <$email>";
    $body = "Subject: $subject\n\n$message";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent. Thank you!'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Unable to send message. Please try again later.'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid request.'));
}
?>
