
<?php

$data = $_REQUEST;

$count = $data['length'];
$countTotal = 25;


$owner1['fio'] = 'Татьянова Татьяна Иванович';
$owner2['fio'] = 'Иванов Иван Татьянович';

$owners = [];
$owners[] = $owner1;
$owners[] = $owner2;

$rows = [];

for ($i = 0; $i < $count; $i++) {

    $row = [
        'id' => '1112684065968',
        'adres' => 'Адресная ул., д.33, стр.11, кв.5022',
        'owners' => $owners,
        'square' => rand(100, 1000) * 0.25,
        'credit' => rand(20000, 80000) * 0.25,
        'isDebt' => rand(false, true),
        'href-nachisleniya' => 'lk.html',
        'href-platezhi' => 'lk-platezhi.html',
        'href-schetchiki' => 'lk-schetchiki.html',
        'href-zayavki' => 'lk-zayavki.html',
        'href-cards' => 'lk-cards.html',
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