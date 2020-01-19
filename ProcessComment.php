<?php

$comment = $_POST["commentId"];

//process the user submitted comment
if($comment != null) {
    //process the comment
    storeComment($comment);
    header('Location: index.html');
} else {
    //redisplay the author page
    header('Location: author.html');
}

exit();

function storeComment($comment, $datetime) {
    try {
        $connection = getConnection();
        $sql = "INSERT INTO comments (comment, datetime)"
                . "VALUES ('$comment', '$datetime')";
        $connection->exec($sql);
        $connection = null;
    } catch (Exception $ex) {
        echo "EXCEPTION : Insert failed : " .$e->getMessage();
    }
}
?>