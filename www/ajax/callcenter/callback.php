
<?php

$data = $_REQUEST;

$rand = rand(0,1);

if ($rand) {
    $result = [
        "success" => true,
        "message" => 'Какое-то сообщение об успехе',
        //"redirect" => href.html
        //"refresh" => true/false
    ];
} else {
    $result = [
        "success" => false,
        "message" => 'Что-то пошло не так',
        //"redirect" => href.html
        //"refresh" => true/false
    ];
}



sleep(rand(1,3));

echo json_encode($result, JSON_UNESCAPED_UNICODE);