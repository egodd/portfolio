<?php 
if(isset($_POST['submit'])){
    $to = "96998522+egodd@users.noreply.github.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Thank you " . $first_name . ", I will be in touch";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

<!DOCTYPE html>
<head>
<title>Form submission</title>
</head>
<body>

    <div><font size="+2"><b>PORTFOLIO</b>
    </font>
    </div>
Coming soon
<br><br><br>Sign up below to be notified when my site is live:<br><br>
<form action="" method="post">
First Name: <input type="text" name="first_name"><br>
Last Name: <input type="text" name="last_name"><br>
Email: <input type="text" name="email"><br>
Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
<input type="submit" name="submit" value="Submit">
    
    <br><br><br><br>
    Don't hesistate to reach out with any questions or concerns!
    <br><br>
    Best,
    <br><br>
    Evan Goddard
    <br>
    <p><a href=
    "mailto: evangoddard@brandeis.edu">evangoddard@brandeis.edu</a></p>
</form>

</body>
</html> 
