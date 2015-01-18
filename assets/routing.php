<?php

$properties = parse_ini_file(__DIR__ . '/../build.properties');
$properties += array(
    'environment' => 'production',
);

$baseDir = __DIR__ . '/../www/';
$environment = $properties['environment'];

if ($_SERVER['REQUEST_URI'] === '/') {
    if ($environment === 'development') {
        include 'index_dev.html';
        return;
    }

    include 'index.html';
    return;
}

if (substr($_SERVER['REQUEST_URI'], 0, 5) === '/api/') {
    include $baseDir . 'api/index.php';
    return;
}

// Just serve static files / 404
return false;

