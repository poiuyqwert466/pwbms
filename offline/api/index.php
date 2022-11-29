<?php
header("Content-Type: application/json");
require_once("class/classAPI.php");
require_once("class/classMESSAGE.php");

$api = new Api;
$handler = new Handler;

if(isset($_GET["t"])){
    switch($_GET["t"]){
        case "payC":
            $api->show_payment_cash();
        break;
        case "updatebill":
            $api->update_bills();
         break;
        default:
            $handler->message("Invalid use of API. Please check the manual","error");
    }    
}else{
    $handler->message("Invalid use of API","error");
}

