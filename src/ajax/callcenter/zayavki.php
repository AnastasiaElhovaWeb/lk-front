
<?php

$data = $_REQUEST;

$count = $data['length'];
$countTotal = 25;

$rows = [];

for ($i = 0; $i < $count; $i++) {

    $row = [
        'id' => 'м0000000032',
        'date' => '16.02.2021',
        'type-work' => 'Муж на час',
        'category' => 'Услуги прочего характера',
        'status' => 'Ожидает регистрации',
        'href' => 'lk-zayavka-created.html'
    ];

    $rows[] = $row;
}

$result = [
    "draw" => intval($data['draw']),
    "recordsTotal" => $count,
    "recordsFiltered" => $countTotal,
    "data" => $rows
];

sleep(rand(1,3));

echo json_encode($result, JSON_UNESCAPED_UNICODE);