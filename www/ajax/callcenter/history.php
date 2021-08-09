
<?php

$data = $_REQUEST;

$count = $data['length'];
$countTotal = 15;

$rows = [];



for ($i = 0; $i < $count; $i++) {

    $schetchiki = [];
    for ($j = 0; $j < rand(1,3); $j++) {
        $schetchik = [
            'name' => 'T'.$j,
            'value' => rand(100, 1000) * 0.25,
        ];
        $schetchiki[] = $schetchik;
    }

    $row = [
        'data' => '27.05.2021',
        'schetchiki' => $schetchiki
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