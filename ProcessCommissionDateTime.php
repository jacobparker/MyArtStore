<?php

$comment = $_POST["comment"];
date_default_timezone_set('UTC');
$datetime = date("Y-m-d H:i:s");

//store the comment in the datebase
storeComment($comment, $datetime);


//send the XML formatted data back to the browser
echo ('<usercomment>' .
        '<datetime' . $datetime . '</datetime>' .
        '<comment>' . $comment . '</comment>' .
        '</usercomment>');

?>
