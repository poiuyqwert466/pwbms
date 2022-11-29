<?php
class Handler{
    public function message($message="",$status=""){
        echo json_encode(["message"=>$message,"status"=>$status]);
    }
}