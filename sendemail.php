if ($_SERVER['REQUEST METHOD'] == 'POST') {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        $to = 'simon.00carandang@yahoo.com';
        $subject = "Portfolio Contact Form Submission";
        $body = "Name: {$name}\nEmail: {email}\nphone: {$phone}\nMessage: {message}";
        $headers = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message";
        }
    }
}