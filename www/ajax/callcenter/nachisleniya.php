
<?php

$data = $_REQUEST;

$count = $data['length'];
$countTotal = 25;

$rows = [];

for ($i = 0; $i < $count; $i++) {

    $row = [
        'month' => 'Июль 2021',
        'bill' => rand(10000, 50000) * 0.5,
        'credit' => rand(20000, 80000) * 0.25,
        'isDebt' => rand(false, true),
        'toPay' => rand(5000, 20000) * 0.5
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