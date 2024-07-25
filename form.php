<?php
include('include/connect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all required fields are filled
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['message'])) {
        // Sanitize input data
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $message = htmlspecialchars($_POST['message']);

        // Insert data into the database
        $sql = "INSERT INTO `contact`(`name`, `email`, `phone`, `message`) VALUES ('$name','$email','$phone','$message')";

        if ($con->query($sql) === TRUE) {
            echo '<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank You</title>
                <!-- Bootstrap CSS -->
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    /* Custom CSS for centering content */
                    .center-content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                </style>
            </head>
            <body>
                <div class="container center-content">
                    <div class="text-center">
                        <h1 class="mb-4">Thank You For Connecting with Us &nbsp',  $name, '</h1>
                        <p>Your message has been sent successfully. We will get back to you soon.</p>
                    </div>
                </div>
            </body>
            </html>
            ';
            // Redirect to another page after 3 seconds
            header("refresh:5;url=index.php");
            exit(); 
        } else {
            echo "<p>Sorry, there was an error storing your message in the database. Please try again later.</p>";
        }
    } else {
        // Required fields are missing
        echo "<p>Please fill in all the required fields.</p>";
    }
}
