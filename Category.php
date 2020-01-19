<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $category = $_POST["category"];
    if ($category === "Paintings") {
        include("painting.html");
    } elseif ($category === "Photography") {
        include("photography.html");
    } elseif ($category === "Digital") {
        include("digital.html");
    } elseif ($category === "All") {
        include("shop.html");
    }
}

?>

