<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

$response = $client->post('http://localhost:28139/american-art/query', [
    'headers' => [
        'Content-type' => 'application/sparql-query',
        'Accept'       => 'application/sparql-results+json'
    ],
    'body' => '@./sample.sparql'
]);
