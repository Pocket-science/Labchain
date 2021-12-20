<?php

include_once 'db_connect.php';
include_once 'functions.php';

sec_session_start(); // Our custom secure way of starting a PHP session.


if (isset($_POST['email'], $_POST['p'])) {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = $_POST['p']; // The hashed password.

    if (login($email, $password, $mysqli) == true) {
        // Login success 

$tiepe = $mysqli->query("SELECT `iszorginstelling` FROM `tbl_users` WHERE `email` = '$email'")->fetch_object()->iszorginstelling;

// echo $tiepe;
	if ($tiepe=='1') {
        header("Location: ../startzorginstelling.php");
        exit(); }
	 else 
	{        header("Location: ../upload.php");
        exit(); }


	


    }

    





     else {
        // Login failed 
        header('Location: ../index.php?error=1');
        exit();
    }
} else {
    // The correct POST variables were not sent to this page. 
    header('Location: ../error.php?err=Kan niet inloggen');
    exit();
}