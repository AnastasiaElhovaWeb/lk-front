
<?php

$data = $_REQUEST;

$arAlarm = [
    true,
    false
];

$arContacts = [
    'Константинопольский Сергей',
    'Тверская Сакико',
    'Рзаева Миросава',
];


$rows = [];



for ($i = 0; $i < $data['length']; $i++) {

    $row = [
        "alarm" => $arAlarm[array_rand($arAlarm)],
        "num" => "0000".$i,
        "href" => "application-main.html",
        "date" => "21/10/2020, 23:45",
        "contacts" => $arContacts[array_rand($arContacts)],
        "dom" => "Балтийский бульвар, д. 4, корп. 2",
        "flat" => "404",
        "type" => "Стандартная",
        "category" => "Электрика",
        "department" => "Аварийная служба",
        "man" => "Диспетчерская ТСЖ №256",
        "status" => "Сформирована"
    ];

    $rows[] = $row;
}

$result = [
    "draw" => intval($data['draw']),
    "recordsTotal" => 53,
    "recordsFiltered" => 53,
    "data" => $rows
];

sleep(rand(1,3));

echo json_encode($result, JSON_UNESCAPED_UNICODE);