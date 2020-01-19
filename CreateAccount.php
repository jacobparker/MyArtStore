<?php

$firstname = $_POST["firstName"];
$lastname = $_POST["lastName"];
$email = $_POST["email"];
$username = $_POST["username"];
$password = $_POST["password"];

//process the user submitted comment
if($firstname != null && $lastname != null && $email != null && $username != null && $password != null) {
    //process the info
    storeUserData($firstname, $lastname, $email, $username, $password);
    header('Location: index.html');
} else {
    //redisplay the author page
    header('Location: account.html');
}

function storeUserData($firstname, $lastname, $email, $username, $password) {
    try {
        $connection = getConnection();
        $sql = "INSERT INTO user (firstname, lastname, email, username, password)"
                . "VALUES ('$firstname', '$lastname', '$email', '$username', '$password')";
        $connection->exec($sql);
        $connection = null;
    } catch (Exception $ex) {
        echo "EXCEPTION : Insert failed : " .$e->getMessage();
    }
    
}

function getConnection() {
    $servername = "127.0.0.1";
    $dbname = "myart";
    $username = "root";
    $password = "admin";
    try {
        $connection = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (Exception $e) {
        echo "EXCEPTION: Connection failed : " . $e->getMessage();
    }
    
    return $connection;
}

exit();

?>

