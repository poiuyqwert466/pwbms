<?php
session_start();
require_once("classMESSAGE.php");
class Api{
    public function search_table(){
        $handler = new Handler;
        $search = $_POST["search"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            if (strval($search) !== strval(intval($search))) {
                $stmt = $db->prepare("SELECT * FROM account_information_table WHERE CONCAT( account_information_table.firstname, ' ', account_information_table.middlename, ' ', account_information_table.lastname )LIKE '%$search%' OR CONCAT( account_information_table.street, ' ', account_information_table.brgy, ' ', account_information_table.municipality, ' ', account_information_table.province )LIKE '%$search%';");
                $stmt->execute();
                if($stmt->rowCount() == 0) {  
                    $handler->message("No Record","error");
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
            }else{
                $stmt = $db->prepare("SELECT * FROM `account_information_table` WHERE account_information_table.ID = $search;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {  
                    $stmt2 = $db->prepare("SELECT * FROM `account_information_table` WHERE account_information_table.houseno LIKE '$search%' OR account_information_table.contactno LIKE '$search%';");
                    $stmt2->execute();
                    if($stmt2->rowCount() == 0) {  
                        $handler->message("No Record","error");
                    }else{
                    $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                    }
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
           }
            }
         public function search_payment_selected(){
            $handler = new Handler;
            $search = $_POST["search"];
            $year = $_POST["year"];
            $month = $_POST["month"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                if (strval($search) !== strval(intval($search))) {
                    $stmt = $db->prepare("SELECT account_bills_information_table.ID, account_bills_information_table.account_information_id, account_information_table.firstname, account_information_table.middlename, account_information_table.lastname,account_information_table.houseno,account_information_table.street,account_information_table.brgy,account_information_table.municipality,account_information_table.province,account_information_table.contactno,
                    account_bills_information_table.method,account_bills_information_table.confirmation,
                    account_bills_information_table.amount, account_bills_information_table.balance FROM account_information_table INNER JOIN
                    account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id WHERE CONCAT( account_information_table.firstname, ' ', account_information_table.middlename, ' ', account_information_table.lastname )LIKE '%$search%' AND account_bills_information_table.year_publish ='$year' AND account_bills_information_table.month_publish='$month' OR CONCAT( account_information_table.street, ' ', account_information_table.brgy, ' ', account_information_table.municipality, ' ', account_information_table.province )LIKE '%$search%' AND account_bills_information_table.year_publish ='$year' AND account_bills_information_table.month_publish='$month';");
                    $stmt->execute();
                    if($stmt->rowCount() == 0) {  
                        $handler->message("No Record","error");
                    }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                    }
                }else{
                    $stmt = $db->prepare("SELECT account_bills_information_table.ID, account_bills_information_table.account_information_id, account_information_table.firstname, account_information_table.middlename, account_information_table.lastname,account_information_table.houseno,account_information_table.street,account_information_table.brgy,account_information_table.municipality,account_information_table.province,account_information_table.contactno,
                    account_bills_information_table.method,account_bills_information_table.confirmation,
                     account_bills_information_table.amount, account_bills_information_table.balance FROM account_information_table INNER JOIN
                     account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id WHERE account_bills_information_table.ID = $search AND account_bills_information_table.year_publish ='$year' AND account_bills_information_table.month_publish='$month';");
                    $stmt->execute();
                    if($stmt->rowCount() == 0) {  
                        $stmt2 = $db->prepare("SELECT account_bills_information_table.ID, account_bills_information_table.account_information_id, account_information_table.firstname, account_information_table.middlename, account_information_table.lastname,account_information_table.houseno,account_information_table.street,account_information_table.brgy,account_information_table.municipality,account_information_table.province,account_information_table.contactno,
                        account_bills_information_table.method,account_bills_information_table.confirmation,
                         account_bills_information_table.amount, account_bills_information_table.balance FROM account_information_table INNER JOIN
                         account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id WHERE account_information_table.houseno LIKE '%$search%' AND account_bills_information_table.year_publish ='$year' AND account_bills_information_table.month_publish='$month' OR account_information_table.contactno LIKE '%$search%' AND account_bills_information_table.year_publish ='$year' AND account_bills_information_table.month_publish='$month';");
                        $stmt2->execute();
                        if($stmt2->rowCount() == 0) {  
                            $handler->message("No Record","error");
                        }else{
                        $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                        echo json_encode($data);
                        }
                    }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                    }
               }
            }
        public function show_your_save(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from announcement_table ORDER BY announcement_table.ID DESC");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_your_default(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT announcement_default_message.message, payment_rate_table.Amount FROM announcement_default_message, payment_rate_table;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function gcash_number(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `more_detail` WHERE ID = 1");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_receipt_info(){
        $handler = new Handler;
        $id = $_POST["id"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `more_detail` WHERE ID = 1");
            $stmt->execute();
            $value=[];
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $value[] = ['number' => $data[0]['number'],'gmail' => $data[0]['gmail'],'address' => $data[0]['address']];
            $stmt2 = $db->prepare("SELECT `ID`, `account_information_id`, `method`, `year_publish`, `month_publish`, `confirmation`, `amount`, `balance` FROM `account_bills_information_table` WHERE account_bills_information_table.ID = $id");
            $stmt2->execute();
            if($stmt2->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
            $value[] = ['number' => $data[0]['number'],'gmail' => $data[0]['gmail'],'address' => $data[0]['address']];
            }
            }
        }
         public function show_gcash_chat(){
        $id = $_POST["id"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `account_bills_gcashconfirm_table` WHERE account_bills_table_id = $id");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function new_gcash_chat(){
        $id = $_POST["id"];
        $Bid = $_POST["Bid"];
        $message = $_POST["message"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("INSERT INTO `account_bills_gcashconfirm_table`( `account_information_table_id`,`account_bills_table_id`, `message`) VALUES ('$id','$Bid','$message');");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("Send failed","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_your_default2(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM text_notification_table;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_your_default3(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM water_phase_schedule_table;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function save_default(){
        $who = $_POST["who"];
        $data = $_POST["data"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            if($who==1){
                $stmt = $db->prepare("UPDATE announcement_default_message SET announcement_default_message.message='$data' WHERE announcement_default_message.ID=1;");
                $stmt->execute();
            }else if($who==2){
                $stmt = $db->prepare("UPDATE payment_rate_table SET payment_rate_table.Amount='$data' WHERE payment_rate_table.id=1;");
                $stmt->execute();
            }else if($who==3){
                $stmt = $db->prepare("UPDATE payment_rate_table SET payment_rate_table.Amount='$data' WHERE payment_rate_table.id=2;");
                $stmt->execute();
            }else if($who==4){
                $stmt = $db->prepare("UPDATE payment_rate_table SET payment_rate_table.Amount='$data' WHERE payment_rate_table.id=3;");
                $stmt->execute();
            }
            if($stmt->rowCount() == 0) {
                $handler->message("Save failed","error");
            }else{
                $handler->message("Updated Successfully","success");
            }
            }
        public function save_default2(){
        $who = $_POST["who"];
        $data = $_POST["data"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            if($who==1){
                $stmt = $db->prepare("UPDATE text_notification_table SET text_notification_table.message='$data' WHERE text_notification_table.ID=1;");
                $stmt->execute();
            }else if($who==2){
                $stmt = $db->prepare("UPDATE text_notification_table SET text_notification_table.message='$data' WHERE text_notification_table.ID=2;");
                $stmt->execute();
            }else if($who==3){
                $stmt = $db->prepare("UPDATE text_notification_table SET text_notification_table.message='$data' WHERE text_notification_table.ID=3;");
                $stmt->execute();
            }
            if($stmt->rowCount() == 0) {
                $handler->message("Save failed","error");
            }else{
                $handler->message("Updated Successfully","success");
            }
            }
        public function save_default3(){
        $phase1 = $_POST["phase1"];
        $phase11 = $_POST["phase11"];
        $phase2 = $_POST["phase2"];
        $phase22 = $_POST["phase22"];
        $phase3 = $_POST["phase3"];
        $phase33 = $_POST["phase33"];
        $phase4 = $_POST["phase4"];
        $phase44 = $_POST["phase44"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare(
        "UPDATE water_phase_schedule_table SET water_phase_schedule_table.first_time='$phase1', water_phase_schedule_table.second_time='$phase11' WHERE water_phase_schedule_table.ID=1;
        UPDATE water_phase_schedule_table SET water_phase_schedule_table.first_time='$phase2', water_phase_schedule_table.second_time='$phase22' WHERE water_phase_schedule_table.ID=2;
        UPDATE water_phase_schedule_table SET water_phase_schedule_table.first_time='$phase3', water_phase_schedule_table.second_time='$phase33' WHERE water_phase_schedule_table.ID=3;
        UPDATE water_phase_schedule_table SET water_phase_schedule_table.first_time='$phase4', water_phase_schedule_table.second_time='$phase44' WHERE water_phase_schedule_table.ID=4;");
        $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("Check your input","error");
            }else{
                $handler->message("Updated Successfully","success");
            }
            } 
        public function view_your_save(){
        $id = $_POST["ID"];
        $who_view = $_POST["who_view"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            if($who_view==1){
                $stmt = $db->prepare("SELECT announcement_table.publish_date, announcement_table.message, announcement_table.schedule_date , announcement_table.status, announcement_uploaded_image.ID, announcement_uploaded_image.announcement_table_image_id, announcement_uploaded_image.image_name FROM announcement_uploaded_image INNER JOIN announcement_table ON announcement_table.ID = announcement_uploaded_image.announcement_table_image_id WHERE announcement_table.ID =$id;");
                $stmt->execute();
            }else if($who_view==2){
                $stmt = $db->prepare("SELECT community_table.publish_date, community_table.message, community_table.schedule_date , community_table.status, community_uploaded_image.ID, community_uploaded_image.community_table_image_id, community_uploaded_image.image_name FROM community_uploaded_image INNER JOIN community_table ON community_table.ID = community_uploaded_image.community_table_image_id WHERE community_table.ID =$id;");
                $stmt->execute();
            }else{
                $stmt = $db->prepare("SELECT rules_information_table.publish_date, rules_information_table.message , rules_information_table.status, rules_uploaded_image.ID, rules_uploaded_image.rules_table_image_id, rules_uploaded_image.image_name FROM rules_uploaded_image INNER JOIN rules_information_table ON rules_information_table.ID = rules_uploaded_image.rules_table_image_id WHERE rules_information_table.ID =$id;");
                $stmt->execute();
            }
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function view_your_save2(){
        $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM announcement_table WHERE ID=$id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function update_your_save_status(){
        $save_id = $_POST["ID"];
        $status = $_POST["status"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("UPDATE announcement_table SET announcement_table.status='$status' WHERE announcement_table.ID=$save_id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $count=$stmt->rowCount();
                $handler->message("Update failed","error");
            }else{
                $handler->message("Updated Successfully","success");
            }
            }
        public function default_mesage(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from announcement_default_message WHERE ID = 1");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }    
        public function text(){
        $handler = new Handler;
        $search_id = $_POST["ID"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
           if($search_id==4){
            $stmt = $db->prepare("select * from text_notification_table WHERE ID = 3");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
           }else{
            $stmt = $db->prepare("select * from text_notification_table WHERE ID = $search_id");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
           }
            }
        public function search_payment_table(){
        $handler = new Handler;
        $search_id = $_POST["ID"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from account_bills_information_table WHERE account_information_id = $search_id");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function search_table2(){
        $handler = new Handler;
        $sql="";
        $condition=0;
        if(isset($_POST["firstname"])){
        $firstname = $_POST["firstname"];
        if($condition==0){
            $sql.=" "."firstname ="."'".$firstname."'";
         $condition++;
        }else{
            $sql.=" "."AND firstname ="."'".$firstname."'";
        }
        }
        if(isset($_POST["middlename"])){
        $middlename = $_POST["middlename"];
        if($condition==0){
            $sql.=" "." middlename ="."'".$middlename."'";
            $condition++;
        }else{
            $sql.=" "."AND middlename ="."'".$middlename."'";
        }
        }
        if(isset($_POST["lastname"])){
            $lastname = $_POST["lastname"];
            if($condition==0){
                $sql.=" "." lastname ="."'".$lastname."'";
             $condition++;
            }else{
             $sql.=" "."AND lastname ="."'".$lastname."'";
            }
            }
         if(isset($_POST["houseno"])){
            $houseno = $_POST["houseno"];
            if($condition==0){
             $sql.=" houseno = $houseno";
             $condition++;
            }else{
             $sql.=" "."AND houseno = $houseno";
            }
            }  
         if(isset($_POST["street"])){
            $street = $_POST["street"];
            if($condition==0){
                $sql.=" "." street ="."'".$street."'";
             $condition++;
            }else{
             $sql.=" "."AND street ="."'".$street."'";
            }
            }
         if(isset($_POST["brgy"])){
            $brgy = $_POST["brgy"];
            if($condition==0){
                $sql.=" "." brgy ="."'".$brgy."'";
             $condition++;
            }else{
             $sql.=" "."AND brgy ="."'".$brgy."'";
            }
            }
        if(isset($_POST["phase"])){
            $phase = $_POST["phase"];
            if($condition==0){
             $sql.=" phase = $phase";
             $condition++;
            }else{
             $sql.=" "."AND phase = $phase";
            }
            }
        if(isset($_POST["rate"])){
            $rate = $_POST["rate"];
            if($condition==0){
             $sql.=" rate = $rate";
             $condition++;
            }else{
             $sql.=" "."AND rate = $rate";
            }
            }
         if(isset($_POST["household"])){
            $household = $_POST["household"];
            if($condition==0){
             $sql.=" household = $household";
             $condition++;
            }else{
             $sql.=" "."AND household = $household";
            }
            }
          if(isset($_POST["contactno"])){
            $contactno = $_POST["contactno"];
            if($condition==0){
             $sql.=" contactno = $contactno";
             $condition++;
            }else{
             $sql.=" "."AND contactno = $contactno";
            }
            }
          if(isset($_POST["rows"])){
            $rows = $_POST["rows"];
            if($condition==0){
             $sql.=" LIMIT $rows";
             $condition++;
            }else{
             $sql.=" "."LIMIT $rows";
            }
            }
          $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from account_information_table WHERE $sql");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function payment_search_table2(){
        $handler = new Handler;
        $sql="";
        $year = $_POST["year"];
        $month = $_POST["month"];
        if(isset($_POST["firstname"])){
        $firstname = $_POST["firstname"];
        $sql.=" "."AND account_information_table.firstname="."'".$firstname."'";
        }
        if(isset($_POST["middlename"])){
        $middlename = $_POST["middlename"];
        $sql.=" "."AND account_information_table.middlename="."'".$middlename."'";
        }
        if(isset($_POST["lastname"])){
            $lastname = $_POST["lastname"];
            $sql.=" "."AND account_information_table.lastname="."'".$lastname."'";
            }
         if(isset($_POST["houseno"])){
            $houseno = $_POST["houseno"];
            $sql.=" "."AND account_information_table.houseno="."'".$houseno."'";
            }  
         if(isset($_POST["street"])){
            $street = $_POST["street"];
            $sql.=" "."AND account_information_table.street="."'".$steet."'";
            }
         if(isset($_POST["brgy"])){
            $brgy = $_POST["brgy"];
            $sql.=" "."AND account_information_table.brgy="."'".$brgy."'";
            }
        if(isset($_POST["phase"])){
            $phase = $_POST["phase"];
            $sql.=" "."AND account_information_table.phase="."'".$phase."'";
            }
        if(isset($_POST["rate"])){
            $rate = $_POST["rate"];
            $sql.=" "."AND account_information_table.rate="."'".$rate."'";
            }
         if(isset($_POST["household"])){
            $household = $_POST["household"];
            $sql.=" "."AND account_information_table.household="."'".$household."'";
            }
          if(isset($_POST["contactno"])){
            $contactno = $_POST["contactno"];
            $sql.=" "."AND account_information_table.contactno="."'".$contactno."'";
            }
          if(isset($_POST["rows"])){
            $rows = $_POST["rows"];
            $sql.=" "." LIMIT $rows";
            }
          $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_bills_information_table.account_information_id, account_bills_information_table.ID, account_information_table.firstname, account_information_table.middlename,account_information_table.lastname,account_bills_information_table.method,account_bills_information_table.confirmation, account_bills_information_table.amount, account_bills_information_table.balance FROM account_information_table INNER JOIN account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id WHERE account_bills_information_table.year_publish='$year' AND account_bills_information_table.month_publish='$month' $sql ");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
    public function forgot_search_username(){
            $handler = new Handler;
            $data= $_POST["data"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("SELECT account_information_table.ID, account_information_table.houseno,account_information_table.firstname,account_information_table.middlename,account_information_table.lastname, account_information_table.contactno, account_table.username FROM account_information_table INNER JOIN account_table ON account_information_table.ID = account_table.account_information_id WHERE account_information_table.contactno = '$data' OR account_table.username = '$data';");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record Found","error");
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
        }
    public function check_account_OTP(){
            $handler = new Handler;
            $OTP= $_POST["OTP"];
            $ID= $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("SELECT * FROM `account_table` WHERE account_table.account_information_id = $ID AND account_table.OTP='$OTP';");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record Found","error");
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
        }
    public function forgot_create_OTP(){
            $handler = new Handler;
            $ID= $_POST["ID"];
            $what = $_POST["what"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $OTP='';
            if($what==1){
            $OTP = mt_rand(100000, 999999);
            }
                $stmt = $db->prepare("UPDATE `account_table` SET `OTP`='$OTP' WHERE account_table.account_information_id = $ID;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Failed to create","error");
                }else{
                $stmt2 = $db->prepare("SELECT account_information_table.contactno FROM account_information_table WHERE account_information_table.ID = $ID;");
                $stmt2->execute();
                $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                if($OTP==''){
                    
                }else{
                    $this->send_text($OTP,$data[0]['contactno']);
                }
                echo json_encode($data);
                }
        }
     public function confirm_number(){
            $handler = new Handler;
            $username= $_POST["username"];
            $what = $_POST["what"];
            $number = $_POST["number"];
            $OTP = mt_rand(100000, 999999);
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            if($what==0){
                $stmt = $db->prepare("INSERT INTO `signup_otp_confirmation_table`(`username`, `OTP`) VALUES ('$username','$OTP');");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Failed to create","error");
                }else{
                    $handler->message("Created successfully","success");
                    $this->send_text($OTP,$number);
                }
            }else{
                 $stmt = $db->prepare("UPDATE `signup_otp_confirmation_table` SET `username`='$username',`OTP`='$OTP' WHERE signup_otp_confirmation_table.username = '$username';");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Failed to create","error");
                }else{
                    $handler->message("Created successfully","success");
                    $this->send_text($OTP,$number);
                }
            }
                
        }
    public function check_confirm_number(){
        $handler = new Handler;
        $username = $_POST["username"];
        $OTP = $_POST["OTP"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT * FROM `signup_otp_confirmation_table` WHERE signup_otp_confirmation_table.username = '$username' AND signup_otp_confirmation_table.OTP = '$OTP'");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler->message("Check your code","error");
        }else{
            $handler->message("Confirm successfully","success");
        }
            }
     public function update_password(){
            $handler = new Handler;
            $password= $_POST["password"];
            $ID = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("UPDATE `account_table` SET `password`='$password' WHERE account_table.account_information_id =$ID");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Failed to update","error");
                }else{
                    $handler->message("Updated successfully","success");
                }
        }
    public function check_username(){
        $handler = new Handler;
        $username = $_POST["username"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT * FROM `account_table` WHERE account_table.username = '$username'");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler->message("No Record Found","error");
        }else{
            $handler->message("Record Found","success");
        }
            }
    
    public function check_houseno(){
        $handler = new Handler;
        $houseno = $_POST["houseno"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT * FROM `account_information_table` WHERE account_information_table.houseno = '$houseno'");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler->message("No Record Found","error");
        }else{
            $handler->message("Record Found","success");
        }
            }
    public function login(){
        $handler = new Handler;
        $username = $_POST["username"];
        $password = $_POST["password"];  
         if(empty($username) OR empty($password)){
			$handler->message("Please check your input","error");
	     }else {
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $sql = "SELECT account_information_id, username ,password, Role FROM account_table WHERE username = :username";
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':username', $username);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if($user === false){
            $handler->message("Incorrect username/password","error");
        }else{
            if($password == $user['password']){
                if($user['Role']=="Admin"){
                $handler->message("Success","Admin");
                $_SESSION["username"] = $user['account_information_id'];
                $_SESSION["role"] = $user['Role'];
                $_SESSION["id"] = $user['account_information_id'];
                }else{
                    $handler->message("Success","User");
                    $_SESSION["username"] = $user['account_information_id'];
                    $_SESSION["role"] = $user['Role'];
                    $_SESSION["id"] = $user['account_information_id'];
                }
            } else{
    
                $handler->message("Incorrect username/password","error");
            }
        }
    }
}
     public function logout(){
        $handler = new Handler;
        $_SESSION = [];
        session_destroy();
        $handler->message("Logout","success");
    }
    public function table_delete(){
        $handler = new Handler;
        $val = $_POST["sql"];
        $sql = rtrim($val, ",");
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT * FROM account_information_table WHERE ID IN($sql)");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler = new Handler;
            $handler->message("No Record Found","error");
        }else{
        $stmt = $db->prepare("DELETE FROM account_information_table WHERE ID IN($sql)");
        $stmt->execute();
            $handler = new Handler;
            $handler->message("Deleted Successfully","success");
        }
            }
     public function find_table_delete(){
        $handler = new Handler;
        $val = $_POST["sql"];
        $sql = rtrim($val, ",");
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT * FROM account_information_table WHERE ID IN($sql)");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler = new Handler;
            $handler->message("No Record Found","error");
        }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
        }
            }
    public function find_info_update(){
        $handler = new Handler;
        $id = $_POST["id"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT account_information_table.ID, account_information_table.firstname, account_information_table.middlename,account_information_table.lastname,account_information_table.houseno,account_information_table.street,account_information_table.brgy,account_information_table.municipality,account_information_table.province,account_information_table.contactno,account_information_table.phase,account_information_table.household,account_information_table.rate, account_information_table.date_joinIN, account_table.username, account_table.password,account_table.Role FROM account_information_table INNER JOIN account_table ON account_information_table.ID = account_table.account_information_id WHERE account_information_table.ID = $id;");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler = new Handler;
            $handler->message("No Record Found","error");
        }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
        }
            }
     public function find_info_bills(){
        $handler = new Handler;
        $id = $_POST["id"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT account_bills_information_table.method, account_bills_information_table.confirmation, account_bills_information_table.amount FROM account_bills_information_table INNER JOIN account_information_table ON account_bills_information_table.account_information_id = account_information_table.ID WHERE account_bills_information_table.ID=$id;");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $handler = new Handler;
            $handler->message("No Record Found","error");
        }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
        }
            }
     public function edit_info_update(){
        $handler = new Handler;
        $id = $_POST["ID"];
        $houseno = $_POST["houseno"];
        $firstname = $_POST["firstname"];
        $middlename= $_POST["middlename"];
        $lastname = $_POST["lastname"];
        $street = $_POST["street"];
        $brgy = $_POST["brgy"];
        $municipality= $_POST["municipality"];
        $province = $_POST["province"]; 
        $contactno = $_POST["contactno"];
        $phase = $_POST["phase"];
        $household= $_POST["household"];
        $rate = $_POST["rate"];
        $username = $_POST["username"];
        $password = $_POST["password"];
        $role = $_POST["role"];
        $count_update=0;
        $count_check=0;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
        $stmt = $db->prepare("SELECT * FROM `account_information_table` WHERE account_information_table.houseno ='$houseno' AND account_information_table.ID = $id;");
        $stmt->execute();
        if($stmt->rowCount() == 0) {
            $stmt2 = $db->prepare("SELECT * FROM `account_information_table` WHERE account_information_table.houseno = '$houseno'");
            $stmt2->execute();
            if($stmt2->rowCount() == 0) {
                $stmt3 = $db->prepare("SELECT * FROM `account_table` WHERE account_table.username = '$username' AND account_table.account_information_id =$id;'");
                $stmt3->execute();
                if($stmt3->rowCount() == 0) {
                    $stmt4 = $db->prepare("SELECT * FROM `account_table` WHERE account_table.username = '$username'");
                    $stmt4->execute();
                    if($stmt4->rowCount() == 0) {
                        
                    }else{
                        $count_check++;
                        $handler->message("Username already exist","error"); 
                    }
                }else{
                }
            }else{
                $count_check++;
                $handler->message("House# already exist","error"); 
            }
        }else{
            
        }
        if($count_check==0){
            $stmt5 = $db->prepare("UPDATE account_information_table SET account_information_table.firstname='$firstname', account_information_table.middlename='$middlename', account_information_table.lastname='$lastname', account_information_table.houseno=$houseno, account_information_table.street='$street', account_information_table.brgy='$brgy', account_information_table.municipality='$municipality', account_information_table.province='$province', account_information_table.contactno='$contactno', account_information_table.phase='$phase', account_information_table.household='$household', account_information_table.rate='$rate' WHERE account_information_table.ID=$id;");
            $stmt5->execute();
        if($stmt5->rowCount() == 0) {
        }else{
            $count_update++;
        }
        $stmt6 = $db->prepare("UPDATE account_table SET account_table.username='$username', account_table.password='$password', account_table.Role='$role' WHERE account_table.account_information_id=$id;");
        $stmt6->execute();
        if($stmt6->rowCount() == 0) {
        }else{
            $count_update++;
        }
            if($count_update == 0) {
                $handler->message("Update failed in user account","error");
            }else{
                $handler->message("Updated Successfully","success");
            }
        }
            }
        public function update_side_rightINFO(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $houseno = $_POST["houseno"];
            $firstname = $_POST["firstname"];
            $middlename= $_POST["middlename"];
            $lastname = $_POST["lastname"];
            $street = $_POST["street"];
            $brgy = $_POST["brgy"];
            $municipality= $_POST["municipality"];
            $province = $_POST["province"]; 
            $contactno = $_POST["contactno"];
            $phase = $_POST["phase"];
            $household= $_POST["household"];
            $username = $_POST["username"];
            $password = $_POST["password"];
            $count_update=0;
            $count_check=0;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt5 = $db->prepare("UPDATE `account_information_table` SET `firstname`='$firstname',`middlename`='$middlename',`lastname`='$lastname',`houseno`='$houseno',`street`='$street',`brgy`='$brgy',`municipality`='$municipality',`province`='$province',`contactno`='$contactno',`phase`='$phase',`household`='$household' WHERE account_information_table.ID = $id");
            $stmt5->execute();
            if($stmt5->rowCount() == 0) {
            }else{
                $count_update++;
            }
            $stmt6 = $db->prepare("UPDATE account_table SET account_table.username='$username', account_table.password='$password' WHERE account_table.account_information_id=$id;");
            $stmt6->execute();
            if($stmt6->rowCount() == 0) {
            }else{
                $count_update++;
            }
                if($count_update == 0) {
                    $handler->message("Update failed in user account","error");
                }else{
                    $handler->message("Updated Successfully","success");
                }
            }
    public function show_announcement(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select *from announcement_table WHERE status ='public';");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
                $count_showA=$stmt->rowCount();
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $year_object =[];
                    $year_object_count=0;
                    $yearCHECK;
                    $yearCOUNT=0;
                $month_object =[];
                    $month_object_count=0;
                    $monthCHECK;
                    $monthCOUNT=0;
                $day_object =[];
                    $day_object_count=0;
                    $dayCHECK;
                    $dayCOUNT=0;
                $AM_PM_object =[];
                    $AM_PM_object_count=0;
                    $AM_PMCHECK;
                    $AM_PMCOUNT=0;
                $hour_object =[];
                    $hour_object_count=0;
                    $hour_CHECK;
                    $hour_COUNT=0;
                $second_object =[];
                    $second_object_count=0;
                    $second_CHECK;
                    $second_COUNT=0;
                for ($i = 0; $i < $count_showA; $i++) {
                    $split = explode("-", $data[$i]['publish_date']);
                    if($i==0){
                    $yearCOUNT++;
                    $yearCHECK=$split[0];
                    $year_object[] = ['ID' => $data[$i]['ID'],'publish_date' => $data[$i]['publish_date'],'message' => $data[$i]['message'],'schedule_date' => $data[$i]['schedule_date']];
                    $year_object_count++;
                    }else{
                        if($yearCHECK==$split[0]){
                            $yearCOUNT++;
                            $year_object[] = ['ID' => $data[$i]['ID'],'publish_date' => $data[$i]['publish_date'],'message' => $data[$i]['message'],'schedule_date' => $data[$i]['schedule_date']];
                            $year_object_count++;
                         }
                        if($yearCHECK>=$split[0]){   
                        }else{
                            $yearCHECK=$split[0];
                            $yearCOUNT=1;
                            $year_object=[];
                            $year_object[] = ['ID' => $data[$i]['ID'],'publish_date' => $data[$i]['publish_date'],'message' => $data[$i]['message'],'schedule_date' => $data[$i]['schedule_date']];
                            $year_object_count=1;
                        }
                    }   
                 }
                 if($yearCOUNT>1){
                    for ($i = 0; $i < $yearCOUNT; $i++) {
                        $split = explode("-", $year_object[$i]['publish_date']);
                        if($i==0){
                        $monthCOUNT++;
                        $monthCHECK=$split[1];
                        $month_object[] = ['ID' => $year_object[$i]['ID'],'publish_date' => $year_object[$i]['publish_date'],'message' => $year_object[$i]['message'],'schedule_date' => $year_object[$i]['schedule_date']];
                        $month_object_count++;
                        }else{
                            if($monthCHECK==$split[1]){
                                $monthCOUNT++;
                                $month_object[] = ['ID' => $year_object[$i]['ID'],'publish_date' => $year_object[$i]['publish_date'],'message' => $year_object[$i]['message'],'schedule_date' => $year_object[$i]['schedule_date']];
                                $month_object_count++;
                             }
                            if($monthCHECK>=$split[1]){   
                            }else{
                                $monthCHECK=$split[1];
                                $monthCOUNT=1;
                                $month_object=[];
                                $month_object[] = ['ID' => $year_object[$i]['ID'],'publish_date' => $year_object[$i]['publish_date'],'message' => $year_object[$i]['message'],'schedule_date' => $year_object[$i]['schedule_date']];
                                $month_object_count=1;
                            }
                        }   
                     }
                 }
                 if($monthCOUNT>1){
                    for ($i = 0; $i < $monthCOUNT; $i++) {
                        $split = explode("-", $month_object[$i]['publish_date']);
                        if($i==0){
                        $dayCOUNT++;
                        $dayCHECK=$split[2];
                        $day_object[] = ['ID' => $month_object[$i]['ID'],'publish_date' => $month_object[$i]['publish_date'],'message' => $month_object[$i]['message'],'schedule_date' => $month_object[$i]['schedule_date']];
                        $day_object_count++;
                        }else{
                            if($dayCHECK==$split[2]){
                                $dayCOUNT++;
                                $day_object[] = ['ID' => $month_object[$i]['ID'],'publish_date' => $month_object[$i]['publish_date'],'message' => $month_object[$i]['message'],'schedule_date' => $month_object[$i]['schedule_date']];
                                $day_object_count++;
                             }
                            if($dayCHECK>=$split[2]){   
                            }else{
                                $dayCHECK=$split[2];
                                $dayCOUNT=1;
                                $day_object=[];
                                $day_object[] = ['ID' => $month_object[$i]['ID'],'publish_date' => $month_object[$i]['publish_date'],'message' => $month_object[$i]['message'],'schedule_date' => $month_object[$i]['schedule_date']];
                                $day_object_count=1;
                            }
                        }   
                     }
                 }
                 if($dayCOUNT>1){
                    for ($i = 0; $i < $dayCOUNT; $i++) {
                        $split = explode("-", $day_object[$i]['publish_date']);
                        if($i==0){
                        $AM_PMCOUNT++;
                        $AM_PMCHECK=$split[5];
                        $AM_PM_object[] = ['ID' => $day_object[$i]['ID'],'publish_date' => $day_object[$i]['publish_date'],'message' => $day_object[$i]['message'],'schedule_date' => $day_object[$i]['schedule_date']];
                        $AM_PM_object_count++;
                        }else{
                            if($AM_PMCHECK==$split[5]){
                                $AM_PMCOUNT++;
                                $AM_PM_object[] = ['ID' => $day_object[$i]['ID'],'publish_date' => $day_object[$i]['publish_date'],'message' => $day_object[$i]['message'],'schedule_date' => $day_object[$i]['schedule_date']];
                                $AM_PM_object_count++;
                             }
                            if($AM_PMCHECK==$split[5]){   
                            }else{
                                if($split[5]=='pm'){
                                    $AM_PMCHECK=$split[5];
                                    $AM_PMCOUNT=1;
                                    $AM_PM_object=[];
                                    $AM_PM_object[] = ['ID' => $day_object[$i]['ID'],'publish_date' => $day_object[$i]['publish_date'],'message' => $day_object[$i]['message'],'schedule_date' => $day_object[$i]['schedule_date']];
                                    $AM_PM_object_count=1;
                                }
                            }
                        }   
                     }
                 }
                 if($AM_PMCOUNT>1){
                    for ($i = 0; $i < $AM_PMCOUNT; $i++) {
                        $split = explode("-", $AM_PM_object[$i]['publish_date']);
                        if($i==0){
                        $hour_COUNT++;
                        $hour_CHECK=$split[3];
                        $hour_object[] = ['ID' => $AM_PM_object[$i]['ID'],'publish_date' => $AM_PM_object[$i]['publish_date'],'message' => $AM_PM_object[$i]['message'],'schedule_date' => $AM_PM_object[$i]['schedule_date']];
                        $hour_object_count++;
                        }else{
                            if($hour_CHECK==$split[3]){
                                $hour_COUNT++;
                                $hour_object[] = ['ID' => $AM_PM_object[$i]['ID'],'publish_date' => $AM_PM_object[$i]['publish_date'],'message' => $AM_PM_object[$i]['message'],'schedule_date' => $AM_PM_object[$i]['schedule_date']];
                                $hour_object_count++;
                             }
                            if($hour_CHECK>=$split[3]){   
                            }else{
                                $hour_CHECK=$split[3];
                                $hour_COUNT=1;
                                $hour_object=[];
                                $hour_object[] = ['ID' => $AM_PM_object[$i]['ID'],'publish_date' => $AM_PM_object[$i]['publish_date'],'message' => $AM_PM_object[$i]['message'],'schedule_date' => $AM_PM_object[$i]['schedule_date']];
                                $hour_object_count=1;
                            }
                        }   
                     }
                 }
                 if($hour_COUNT>1){
                    for ($i = 0; $i < $hour_COUNT; $i++) {
                        $split = explode("-", $hour_object[$i]['publish_date']);
                        if($i==0){
                        $second_COUNT++;
                        $second_CHECK=$split[4];
                        $second_object[] = ['ID' => $hour_object[$i]['ID'],'publish_date' => $hour_object[$i]['publish_date'],'message' => $hour_object[$i]['message'],'schedule_date' => $hour_object[$i]['schedule_date']];
                        $second_object_count++;
                        }else{
                            if($second_CHECK==$split[4]){
                                $second_COUNT++;
                                $second_object[] = ['ID' => $hour_object[$i]['ID'],'publish_date' => $hour_object[$i]['publish_date'],'message' => $hour_object[$i]['message'],'schedule_date' => $hour_object[$i]['schedule_date']];
                                $second_object_count++;
                             }
                            if($second_CHECK>=$split[4]){   
                            }else{
                                $second_CHECK=$split[4];
                                $second_COUNT=1;
                                $second_object=[];
                                $second_object[] = ['ID' => $hour_object[$i]['ID'],'publish_date' => $hour_object[$i]['publish_date'],'message' => $hour_object[$i]['message'],'schedule_date' => $hour_object[$i]['schedule_date']];
                                $second_object_count=1;
                            }
                        }   
                     }
                 }
                 $id_toshow;
                 if($second_COUNT>0){
                    $id_toshow = $second_object[0]['ID'];
                 }else if($hour_COUNT>0){
                    $id_toshow = $hour_object[0]['ID'];
                 }else if($AM_PMCOUNT>0){
                    $id_toshow = $AM_PM_object[0]['ID'];
                 }else if($dayCOUNT>0){
                    $id_toshow = $day_object[0]['ID'];
                 }else if($monthCOUNT>0){
                    $id_toshow = $month_object[0]['ID'];
                 }else if($yearCOUNT>0){
                    $id_toshow = $year_object[0]['ID'];
                 }

                 $stmt2 = $db->prepare("SELECT announcement_table.ID, announcement_table.publish_date, announcement_table.message, announcement_table.schedule_date, announcement_table.ms_status,announcement_uploaded_image.image_name FROM announcement_table INNER JOIN announcement_uploaded_image ON announcement_table.ID = announcement_uploaded_image.announcement_table_image_id WHERE announcement_table.ID = $id_toshow");
                 $stmt2->execute();
                 if($stmt2->rowCount() == 0) {
                     $handler->message("No Record","error");
                 }else{
                     $data2 = $stmt2->fetchAll(PDO::FETCH_ASSOC); 
                     echo json_encode($data2);
                 }
            }
            }
    public function show_community(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `community_table` WHERE community_table.status='public' ORDER BY community_table.ID DESC;");
            $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
        public function check_community_image(){
        $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT `community_table_image_id`,`image_name` FROM `community_uploaded_image` WHERE community_uploaded_image.community_table_image_id = $id");
            $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
        public function check_rules_image(){
        $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT `rules_table_image_id`, `image_name` FROM `rules_uploaded_image` WHERE rules_uploaded_image.rules_table_image_id =  $id");
            $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
        public function show_water_info(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select *from water_information_table");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_com_comment(){
            $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT community_table.like_count,community_table.dislike_count, community_user_comment_table.* FROM community_table INNER JOIN community_user_comment_table ON community_table.ID = community_user_comment_table.community_table_id WHERE community_table.ID = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function show_chat_payment(){
            $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `account_bills_gcashconfirm_table` WHERE account_bills_gcashconfirm_table.account_bills_table_id = $id");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function show_community_react_status(){
            $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select *from comment_user_who_react WHERE comment_user_who_react.community_table_id = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_community_comment_get_name(){
        $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_information_table.ID, account_information_table.firstname,account_information_table.middlename,account_information_table.lastname, account_information_uploaded_image.image_name FROM account_information_table INNER JOIN account_information_uploaded_image ON account_information_table.ID = account_information_uploaded_image.account_information_table_id WHERE account_information_table.ID = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function show_chat_payment_get_name(){
        $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_information_table.ID, account_information_table.firstname,account_information_table.middlename,account_information_table.lastname, account_information_uploaded_image.image_name FROM account_information_table INNER JOIN account_information_uploaded_image ON account_information_table.ID = account_information_uploaded_image.account_information_table_id WHERE account_information_table.ID = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function update_comment_user_who_react(){
        $id = $_POST["ID"];
        $status = $_POST["status"];
        $C_id = $_POST["C_id"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT `ID`, `account_information_table_id`, `community_table_id`, `status` FROM `comment_user_who_react` WHERE account_information_table_id = $id AND community_table_id = $C_id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                if($status==0){

                }else{
                    $stmt2 = $db->prepare("INSERT INTO `comment_user_who_react`( `account_information_table_id`, `community_table_id`, `status`) VALUES ('$id','$C_id','$status');");
                    $stmt2->execute();
                    $handler->message("inserted","success");
                }
            }else{
                if($status==0){
                    $stmt3 = $db->prepare("DELETE FROM `comment_user_who_react` WHERE account_information_table_id = $id AND community_table_id =$C_id");
                    $stmt3->execute();
                    $handler->message("deleted","success");
                }else{
                    $stmt3 = $db->prepare("UPDATE `comment_user_who_react` SET `status`='$status' WHERE account_information_table_id = $id AND community_table_id = $C_id");
                    $stmt3->execute();
                    $handler->message("updated","success");
                }
            }
            }
        public function w_phase_time(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select *from water_phase_schedule_table");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function show_user_bills(){
            $id = $_POST["id"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT DISTINCT account_bills_information_table.year_publish FROM account_bills_information_table WHERE account_bills_information_table.account_information_id = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function send_comment(){
            $id = $_POST["ID"];
            $C_id = $_POST["C_id"];
            $date_publish = $_POST["date"];
            $message = $_POST["message"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("INSERT INTO `community_user_comment_table`(`community_table_id`, `account_information_table_id`, `message`, `date_publish`) VALUES ('$C_id','$id','$message','$date_publish')");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("Send failed","error");
            }else{
                $handler->message("Send","success");
            }
            }
        public function d_comment(){
            $id = $_POST["ID"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("DELETE FROM `community_user_comment_table` WHERE ID = $id");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("Failed try again","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $handler->message("Delete comment","success");
            }
            }
          public function show_user_bills_month(){
            $id = $_POST["id"];
            $year = $_POST["year"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `account_bills_information_table` WHERE account_bills_information_table.account_information_id=$id AND account_bills_information_table.year_publish=$year;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function show_rate(){
            $id = $_POST["id"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_information_table.rate FROM account_information_table WHERE ID = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function online_check(){
            $id = $_POST["id"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT `ID`, `account_information_table_id` FROM `online_check_table` WHERE online_check_table.account_information_table_id=$id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $stmt2 = $db->prepare("INSERT INTO `online_check_table`(`account_information_table_id`) VALUES ($id);");
                $stmt2->execute();
                if($stmt2->rowCount() == 0) {
                    $handler->message("Offline","error");
                }else{
                    $handler->message("Online","success");
                }
            }else{
                $handler->message("Online","success");
            }
            }
         public function count_online_check(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `online_check_table`;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function check_payment_chat(){
            $id = $_POST["id"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_bills_gcashconfirm_table.*, account_bills_information_table.amount FROM account_bills_information_table INNER JOIN account_bills_gcashconfirm_table ON account_bills_gcashconfirm_table.account_bills_table_id = account_bills_information_table.ID WHERE account_bills_information_table.ID = $id");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function remove_online_check(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("DELETE FROM `online_check_table`;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
          public function update_select_cash(){
            $handler = new Handler;
            $id = $_POST["id"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("UPDATE `account_bills_information_table` SET `method`='Cash' WHERE account_bills_information_table.ID=$id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Update failed","error");
                }else{
                    $handler->message("Updated Successfully","success");
                }
            }
        public function show_rules(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT * FROM `rules_information_table` WHERE rules_information_table.status='public' ORDER BY rules_information_table.ID DESC;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                     echo json_encode($data);
                    }
                 
            }
        public function rul_image(){
        $handler = new Handler;
        $id = $_POST["id"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT rules_information_table.ID, rules_information_table.publish_date, rules_information_table.message, rules_uploaded_image.image_name FROM rules_information_table INNER JOIN rules_uploaded_image ON rules_information_table.ID = rules_uploaded_image.rules_table_image_id WHERE rules_information_table.ID = $id;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                     echo json_encode($data);
                    }
                 
            }
        public function what_month_to_show(){
        $year = $_POST["year"];
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT DISTINCT account_bills_information_table.month_publish FROM account_bills_information_table WHERE account_bills_information_table.year_publish='$year' ORDER BY account_bills_information_table.month_publish DESC LIMIT 1;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_payment_cash_year_btn(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT DISTINCT account_bills_information_table.year_publish FROM account_bills_information_table ORDER BY account_bills_information_table.year_publish DESC;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function show_table(){
        $handler = new Handler;
        $table_limit = $_POST["table_limit"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_information_table.ID, account_information_table.firstname, account_information_table.middlename,account_information_table.lastname,account_information_table.houseno,account_information_table.street,account_information_table.brgy,account_information_table.municipality,account_information_table.province,account_information_table.contactno,account_information_table.phase,account_information_table.household,account_information_table.rate, account_information_table.date_joinIN,account_table.Role FROM account_information_table INNER JOIN account_table ON account_information_table.ID = account_table.account_information_id WHERE account_information_table.ID LIMIT $table_limit;");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
        }
        public function show_payment_cash(){
        $handler = new Handler;
        $year = $_POST["year"];
        $month = $_POST["month"];
        $table_limit = $_POST["payment_table_limit"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
           if($table_limit==999){
            $stmt = $db->prepare("SELECT account_bills_information_table.ID, account_bills_information_table.account_information_id, account_information_table.firstname, account_information_table.middlename,account_information_table.lastname, account_table.Role, account_bills_information_table.method,account_bills_information_table.confirmation, account_bills_information_table.amount, account_bills_information_table.balance FROM account_information_table INNER JOIN account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id INNER JOIN account_table ON account_information_table.ID = account_table.account_information_id WHERE account_bills_information_table.year_publish='$year' AND account_bills_information_table.month_publish='$month';");
            $stmt->execute();
           }else{
            $stmt = $db->prepare("SELECT account_bills_information_table.ID, account_bills_information_table.account_information_id, account_information_table.firstname, account_information_table.middlename,account_information_table.lastname,account_table.Role, account_bills_information_table.method,account_bills_information_table.confirmation, account_bills_information_table.amount, account_bills_information_table.balance FROM account_information_table INNER JOIN account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id INNER JOIN account_table ON account_information_table.ID = account_table.account_information_id WHERE account_bills_information_table.year_publish='$year' AND account_bills_information_table.month_publish='$month' AND account_information_table.ID LIMIT $table_limit;");
            $stmt->execute();
           }
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
        }
        public function show_table_count(){
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("select *from account_information_table");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
            }
        public function count_total_user(){
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("select * from account_information_table");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
                }
        public function count_total_phase1(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from account_information_table WHERE phase = 1");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
         public function count_total_phase2(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from account_information_table WHERE phase = 2");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
        }
         public function count_total_phase3(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from account_information_table WHERE phase = 3");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function count_total_phase4(){
        $handler = new Handler;
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("select * from account_information_table WHERE phase = 4");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
            }
        public function search_view_img1(){
            $handler = new Handler;
            $ID = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("select * from announcement_uploaded_image WHERE announcement_table_image_id = $ID;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
        }
        public function search_view_img2(){
            $handler = new Handler;
            $ID = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("select * from community_uploaded_image WHERE community_table_image_id = $ID;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    echo json_encode(0);
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
        }
        public function search_view_img3(){
            $handler = new Handler;
            $ID = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                $stmt = $db->prepare("select * from rules_uploaded_image WHERE rules_table_image_id = $ID;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    echo json_encode(0);
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
        }
        public function feedback_show(){
            $handler = new Handler;
            $ID = $_POST["ID"];
            $what = $_POST["what"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                if($what==1){
                $stmt = $db->prepare("select * from feedback_comment_table");
                $stmt->execute();
                }else if($what==2){
                $stmt = $db->prepare("select * from feedback_bug_table");
                $stmt->execute();
                }else{
                $stmt = $db->prepare("select * from feedback_suggestion_table");
                $stmt->execute();    
                }
                if($stmt->rowCount() == 0) {
                    echo json_encode(0);
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
        }
        public function feedback_click(){
            $handler = new Handler;
            $ID = $_POST["ID"];
            $what = $_POST["what"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
                if($what==1){
                $stmt = $db->prepare("UPDATE `feedback_comment_table` SET `status`='1' WHERE ID = $ID;");
                $stmt->execute();
                }else if($what==2){
                $stmt = $db->prepare("UPDATE `feedback_bug_table` SET `status`='1' WHERE ID = $ID;");
                $stmt->execute();
                }else{
                $stmt = $db->prepare("UPDATE `feedback_suggestion_table` SET `status`='1' WHERE ID = $ID;");
                $stmt->execute();    
                }
                if($stmt->rowCount() == 0) {
                    
                }else{
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
                }
        }
        public function insert_feedback($ref=""){
            $handler = new Handler;
            $split = explode("[%]", $ref);
            $ID = $split[0];
            $what = $split[1];
            $message=$split[2];
            $date=$split[3];
            $name=$split[4];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $newfilename='';
            if(isset($_FILES['files'])){
                $file_name = $_FILES['files']['name'][0];
            $file_tmp = $_FILES['files']['tmp_name'][0];
            $file_type = $_FILES['files']['type'][0];
            $file_size = $_FILES['files']['size'][0];
            $tmp = explode('.', $_FILES['files']['name'][0]);
            $file_ext = strtolower(end($tmp));
            $date = idate("Y").'-'.idate("m").'-'.idate("d").'-'.idate("h").'-'.idate("i").'-'.idate("s");
            $newfilename = $date . '.' . end($tmp);
            move_uploaded_file($file_tmp, "../public/image/feedbackIMG/" . $newfilename);
            $location="../public/image/feedbackIMG/";
            if(file_exists($location.$newfilename)){  
                if($what==1){
                $stmt = $db->prepare("INSERT INTO `feedback_comment_table`( `account_information_table_id`, `name`, `date_publish`, `image_name`, `message`, `status`) VALUES ('$ID','$name','$date','$newfilename','$message','0');");
                $stmt->execute();
                }else if($what==2){
                $stmt = $db->prepare("INSERT INTO `feedback_bug_table`( `account_information_table_id`, `name`, `date_publish`, `image_name`, `message`, `status`) VALUES ('$ID','$name','$date','$newfilename','$message','0');");
                $stmt->execute();
                }else{
                $stmt = $db->prepare("INSERT INTO `feedback_suggestion_table`( `account_information_table_id`, `name`, `date_publish`, `image_name`, `message`, `status`) VALUES ('$ID','$name','$date','$newfilename','$message','0');");
                $stmt->execute();    
                }
                if($stmt->rowCount() == 0) {
                    $handler->message("Send failed","error");
                }else{
                    $handler->message("Feedback send","success");
                } 
            }else{
                $handler->message("Send failed","error");
            }
            }else{ 
                if($what==1){
                $stmt = $db->prepare("INSERT INTO `feedback_comment_table`( `account_information_table_id`, `name`, `date_publish`, `image_name`, `message`, `status`) VALUES ('$ID','$name','$date','$newfilename','$message','0');");
                $stmt->execute();
                }else if($what==2){
                $stmt = $db->prepare("INSERT INTO `feedback_bug_table`( `account_information_table_id`, `name`, `date_publish`, `image_name`, `message`, `status`) VALUES ('$ID','$name','$date','$newfilename','$message','0');");
                $stmt->execute();
                }else{
                $stmt = $db->prepare("INSERT INTO `feedback_suggestion_table`( `account_information_table_id`, `name`, `date_publish`, `image_name`, `message`, `status`) VALUES ('$ID','$name','$date','$newfilename','$message','0');");
                $stmt->execute();    
                }
                if($stmt->rowCount() == 0) {
                    $handler->message("Send failed","error");
                }else{
                    $handler->message("Feedback send","success");
                } 
            }
            
        }

         public function uploadIMG($ref=""){
            $split = explode("[%]", $ref);
            $draft_id = $split[0];
            $who = $split[1];
            $message=$split[2];
            $publish_date=$split[3];
            if($draft_id==0){
            $handler = new Handler;
            $status = 'draft';
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            if($who==1){
                $stmt = $db->prepare("INSERT INTO announcement_table(publish_date,message,status)VALUES(:publish_date,:message,:status)");
                $stmt->bindValue("status",$status);
                $stmt->bindValue("publish_date",$publish_date);
                $stmt->bindValue("message",$message);
                $stmt->execute();
            }else if($who==2){
                $stmt = $db->prepare("INSERT INTO community_table(publish_date,message,status)VALUES(:publish_date,:message,:status)");
                $stmt->bindValue("status",$status);
                $stmt->bindValue("publish_date",$publish_date);
                $stmt->bindValue("message",$message);
                $stmt->execute();
            }else{
                $stmt = $db->prepare("INSERT INTO rules_information_table(publish_date,message,status)VALUES(:publish_date,:message,:status)");
                $stmt->bindValue("status",$status);
                $stmt->bindValue("publish_date",$publish_date);
                $stmt->bindValue("message",$message);
                $stmt->execute();
            }
                if($stmt->rowCount() == 0) {
                    uploadIMG();
                }else{
                    if($who==1){
                    $stmt2 = $db->prepare("SELECT ID FROM `announcement_table` ORDER BY ID DESC LIMIT 1");
                     $stmt2->execute();
                     $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    }else if($who==2){
                    $stmt2 = $db->prepare("SELECT ID FROM `community_table` ORDER BY ID DESC LIMIT 1");
                     $stmt2->execute();
                     $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    }else{
                     $stmt2 = $db->prepare("SELECT ID FROM `rules_information_table` ORDER BY ID DESC LIMIT 1");
                     $stmt2->execute();
                     $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);   
                    }
                     $id=($data[0]['ID']);
                    $extensions = ['jpg', 'jpeg', 'png'];
                    $all_files = count($_FILES['files']['tmp_name']);
                    for ($i = 0; $i < $all_files; $i++) {  
                    $file_name = $_FILES['files']['name'][$i];
                    $file_tmp = $_FILES['files']['tmp_name'][$i];
                    $file_type = $_FILES['files']['type'][$i];
                    $file_size = $_FILES['files']['size'][$i];
                    $tmp = explode('.', $_FILES['files']['name'][$i]);
                    $file_ext = strtolower(end($tmp));
                    $date = idate("Y").'-'.idate("m").'-'.idate("d").'-'.idate("h").'-'.idate("i").'-'.idate("s").$i;
                    $newfilename = $file_name.'-'.$date . '.' . end($tmp);
                        if($who==1){
                            move_uploaded_file($file_tmp, "../public/image/announceIMG/" . $newfilename);
                        }else if($who==2){
                            move_uploaded_file($file_tmp, "../public/image/communityIMG/" . $newfilename);
                        }else{
                            move_uploaded_file($file_tmp, "../public/image/rulesIMG/" . $newfilename);
                        }
                         $image_id = $id;
                         $image_name = $newfilename;
                         if($who==1){
                            $stmt3 = $db->prepare("INSERT INTO announcement_uploaded_image(announcement_table_image_id,image_name)VALUES(:image_id,:image_name)");
                        }else if($who==2){
                            $stmt3 = $db->prepare("INSERT INTO community_uploaded_image(community_table_image_id,image_name)VALUES(:image_id,:image_name)");
                        }else{
                            $stmt3 = $db->prepare("INSERT INTO rules_uploaded_image(rules_table_image_id,image_name)VALUES(:image_id,:image_name)");
                        }
                             $stmt3->bindValue("image_id",$image_id);
                             $stmt3->bindValue("image_name",$image_name);
                             $stmt3->execute();
                }
                }
                echo json_encode($id);
            }else{
                    $handler = new Handler;
                    $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
                    $id=$draft_id;
                    if(isset($_FILES['files'])){ 
                        $all_files = count($_FILES['files']['tmp_name']);
                        for ($i = 0; $i < $all_files; $i++) {  
                            $file_name = $_FILES['files']['name'][$i];
                            $file_tmp = $_FILES['files']['tmp_name'][$i];
                            $file_type = $_FILES['files']['type'][$i];
                            $file_size = $_FILES['files']['size'][$i];
                            $tmp = explode('.', $_FILES['files']['name'][$i]);
                            $file_ext = strtolower(end($tmp));
                            $date = idate("Y").'-'.idate("m").'-'.idate("d").'-'.idate("h").'-'.idate("i").'-'.idate("s").$i;
                            $newfilename = $date . '.' . end($tmp);
                            if($who==1){
                                move_uploaded_file($file_tmp, "../public/image/announceIMG/" . $newfilename);
                            }else if($who==2){
                                move_uploaded_file($file_tmp, "../public/image/communityIMG/" . $newfilename);
                            }else{
                                move_uploaded_file($file_tmp, "../public/image/rulesIMG/" . $newfilename);
                            }
                                 $image_id = $id;
                                 $image_name = $newfilename;
                                 if($who==1){
                                    $stmt3 = $db->prepare("INSERT INTO announcement_uploaded_image(announcement_table_image_id,image_name)VALUES(:image_id,:image_name)");
                                }else if($who==2){
                                    $stmt3 = $db->prepare("INSERT INTO community_uploaded_image(community_table_image_id,image_name)VALUES(:image_id,:image_name)");
                                }else{
                                    $stmt3 = $db->prepare("INSERT INTO rules_uploaded_image(rules_table_image_id,image_name)VALUES(:image_id,:image_name)");
                                }
                                     $stmt3->bindValue("image_id",$image_id);
                                     $stmt3->bindValue("image_name",$image_name);
                                     $stmt3->execute();
                        }
                    }else{
                        
                    }
                
                }
            }
        public function side_right_IMGupload($ref=""){
            $id = $ref;
            $handler = new Handler;
            $path = './public/image/userIMG/';
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT * FROM account_information_uploaded_image WHERE account_information_table_id=$id");
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if($data[0]['image_name']=='default_picture.png'){
                $file_name = $_FILES['files']['name'][0];
                $file_tmp = $_FILES['files']['tmp_name'][0];
                $file_type = $_FILES['files']['type'][0];
                $file_size = $_FILES['files']['size'][0];
                $tmp = explode('.', $_FILES['files']['name'][0]);
                $file_ext = strtolower(end($tmp));
                $date = idate("Y").'-'.idate("m").'-'.idate("d").'-'.idate("h").'-'.idate("i").'-'.idate("s");
                $newfilename = $date . '.' . end($tmp);
                move_uploaded_file($file_tmp, "../public/image/userIMG/" . $newfilename);
                $stmt1 = $db->prepare("UPDATE `account_information_uploaded_image` SET `image_name`='$newfilename' WHERE account_information_uploaded_image.account_information_table_id= $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("Save failed","error");
                }else{
                    $handler->message("Image save","success");
                } 
            }else{
                $image_location=($data[0]['image_name']);
                unlink('../public/image/userIMG/'.$image_location);
                $file_name = $_FILES['files']['name'][0];
                $file_tmp = $_FILES['files']['tmp_name'][0];
                $file_type = $_FILES['files']['type'][0];
                $file_size = $_FILES['files']['size'][0];
                $tmp = explode('.', $_FILES['files']['name'][0]);
                $file_ext = strtolower(end($tmp));
                $date = idate("Y").'-'.idate("m").'-'.idate("d").'-'.idate("h").'-'.idate("i").'-'.idate("s");
                $newfilename = $date . '.' . end($tmp);
                move_uploaded_file($file_tmp, "../public/image/userIMG/" . $newfilename);
                $stmt1 = $db->prepare("UPDATE `account_information_uploaded_image` SET `image_name`='$newfilename' WHERE account_information_uploaded_image.account_information_table_id= 1");
                $stmt1->execute();  
                if($stmt1->rowCount() == 0) {
                    $handler->message("Save failed","error");
                }else{
                    $handler->message("Image save","success");
                } 
            }
            }
        public function paymentchat_IMGupload($ref=""){
            $split = explode("[%]", $ref);
            $Bid = $split[0];
            $id = $split[1];
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
                $file_name = $_FILES['files']['name'][0];
                $file_tmp = $_FILES['files']['tmp_name'][0];
                $file_type = $_FILES['files']['type'][0];
                $file_size = $_FILES['files']['size'][0];
                $tmp = explode('.', $_FILES['files']['name'][0]);
                $file_ext = strtolower(end($tmp));
                $date = idate("Y").'-'.idate("m").'-'.idate("d").'-'.idate("h").'-'.idate("i").'-'.idate("s");
                $newfilename = $date . '.' . end($tmp);
                move_uploaded_file($file_tmp, "../public/image/gcashconfirmIMG/" . $newfilename);
                $stmt1 = $db->prepare("INSERT INTO `account_bills_gcashconfirm_table`(`account_information_table_id`, `account_bills_table_id`, `image_name`) VALUES ('$id','$Bid','$newfilename')");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("Send failed","error");
                }else{
                    $handler->message("Image send","success");
                } 
            }
        public function delete_gcash_chat(){
            $what = $_POST["what"];
            $id = $_POST["id"];
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT `ID`, `account_bills_table_id`, `message`, `image_name` FROM `account_bills_gcashconfirm_table` WHERE account_bills_gcashconfirm_table.ID = $id;");
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if($what==1){
                $image_location=($data[0]['image_name']);
                unlink('../public/image/gcashconfirmIMG/'.$image_location);
                $location="../public/image/gcashconfirmIMG/";
                if(file_exists($location.$image_location)){
                    $handler->message("Delete failed","error");
                 }else{
                $stmt1 = $db->prepare("DELETE FROM `account_bills_gcashconfirm_table` WHERE account_bills_gcashconfirm_table.ID = $id");
                $stmt1->execute();  
                if($stmt1->rowCount() == 0) {
                    $handler->message("Delete failed","error");
                }else{
                    $handler->message("Deleted","success");
            }
                 }
            }else{
                $stmt1 = $db->prepare("DELETE FROM `account_bills_gcashconfirm_table` WHERE account_bills_gcashconfirm_table.ID = $id");
                $stmt1->execute();  
                if($stmt1->rowCount() == 0) {
                    $handler->message("Delete failed","error");
                }else{
                    $handler->message("Deleted","success");
            }
            }
            }
        public function delete_IMG(){
            $who = $_POST["who_view"];
            $id = $_POST["ID"];
            $handler = new Handler;
            if($who==1){
                $path = '../public/image/announceIMG/';
            }else if($who==2){
                $path = '../public/image/communityIMG/';
            }else{
                $path = '../public/image/rulesIMG/';
            }
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            if($who==1){
                $stmt = $db->prepare("SELECT * FROM announcement_uploaded_image WHERE announcement_table_image_id=$id");
                $stmt->execute();
            }else if($who==2){
                $stmt = $db->prepare("SELECT * FROM community_uploaded_image WHERE community_table_image_id=$id");
                $stmt->execute();
            }else{
                $stmt = $db->prepare("SELECT * FROM rules_uploaded_image WHERE rules_table_image_id=$id");
                $stmt->execute();
            }
            $count = $stmt->rowCount();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            for ($i = 0; $i < $count; $i++) { 
            $image_location=($data[$i]['image_name']);
            unlink($path.$image_location);
            }
            if($who==1){
                $stmt1 = $db->prepare("DELETE FROM `announcement_uploaded_image` WHERE ID = $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $handler->message("Image Deleted","success");
                }
            }else if($who==2){
                $stmt1 = $db->prepare("DELETE FROM `community_uploaded_image` WHERE ID = $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $handler->message("Image Deleted","success");
                }
            }else{
                $stmt1 = $db->prepare("DELETE FROM `rules_uploaded_image` WHERE ID = $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $handler->message("Image Deleted","success");
                }
            } 
        }
        public function delete_your_save(){
            $id = $_POST["ID"];
            $who = $_POST["who_view"];
            $handler = new Handler;
            if($who==1){
                $path = '../public/image/announceIMG/';
            }else if($who==2){
                $path = '../public/image/communityIMG/';
            }else{
                $path = '../public/image/rulesIMG/';
            }
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            if($who==1){
                $stmt = $db->prepare("SELECT * FROM announcement_uploaded_image WHERE announcement_table_image_id=$id");
                $stmt->execute();
            }else if($who==2){
                $stmt = $db->prepare("SELECT * FROM community_uploaded_image WHERE community_table_image_id=$id");
                $stmt->execute();
            }else{
                $stmt = $db->prepare("SELECT * FROM rules_uploaded_image WHERE rules_table_image_id=$id");
                $stmt->execute();
            }
            $count = $stmt->rowCount();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            for ($i = 0; $i < $count; $i++) { 
            $image_location=($data[$i]['image_name']);
            unlink($path.$image_location);
            }
            if($who==1){
                $stmt1 = $db->prepare("DELETE FROM `announcement_table` WHERE ID = $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $handler->message("Save is deleted","success");
                }
            }else if($who==2){
                $stmt1 = $db->prepare("DELETE FROM `community_table` WHERE ID = $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $handler->message("Save is deleted","success");
                }
            }else{
                $stmt1 = $db->prepare("DELETE FROM `rules_information_table` WHERE ID = $id");
                $stmt1->execute();
                if($stmt1->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $handler->message("Save is deleted","success");
                }
            } 
        }
            
         public function insert_new_record1(){
            $handler = new Handler;
            $houseno = $_POST["houseno"];
            $firstname = $_POST["firstname"];
            $middlename= $_POST["middlename"];
            $lastname = $_POST["lastname"]; 
            $role = $_POST["role"]; 
            $rateD = $_POST["rate"];
            $date = $_POST["date_joinIN"];
            $rate;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt33 = $db->prepare("SELECT payment_rate_table.Amount FROM `payment_rate_table` WHERE id = $rateD;");
            $stmt33->execute();
            $data33 = $stmt33->fetchAll(PDO::FETCH_ASSOC);
            $rate=($data33[0]['Amount']);
            $stmt3 = $db->prepare("SELECT * FROM account_information_table WHERE houseno='$houseno'");
            $stmt3->execute();
            if($stmt3->rowCount()>0) {
                $handler->message("House no. is already taken","error");
            }else{
                $stmt = $db->prepare("
                INSERT INTO 
                account_information_table(firstname,middlename,lastname,houseno,rate,date_joinIN)
                VALUES(:firstname,:middlename,:lastname,:houseno,:rate,:date)
                ");
                    $stmt->bindValue("houseno",$houseno);
                    $stmt->bindValue("firstname",$firstname);
                    $stmt->bindValue("middlename",$middlename);
                    $stmt->bindValue("lastname",$lastname);
                    $stmt->bindValue("rate",$rate);
                    $stmt->bindValue("date",$date);
                    $stmt->execute();
                    $stmt2 = $db->prepare("SELECT * FROM account_information_table WHERE houseno='$houseno'");
                    $stmt2->execute();
                    if($stmt2->rowCount() == 0) {
                        $handler->message("Failed to create","error");
                    }else{
                        $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                        $id=($data[0]['ID']);
                        $lastname=($data[0]['lastname']);
                        $houseno=($data[0]['houseno']);
                        $pass=$houseno.$lastname;
                        $stmt3 = $db->prepare("INSERT INTO `account_information_uploaded_image`( `account_information_table_id`, `image_name`) VALUES ('$id','default_picture.png')");
                        $stmt3->execute();
                        if($stmt3->rowCount() == 0) {
                            $handler->message("Failed to create","error");
                        }else{
                            $stmt4 = $db->prepare("INSERT INTO account_table(account_information_id,username,password,role) SELECT ID, houseno, '$pass' , '$role' FROM account_information_table WHERE ID=$id;");
                            $stmt4->execute();
                            if($stmt4->rowCount() == 0) {
                                $handler->message("Failed to create","error");
                            }else{
                                $handler->message("Added Successfully","success");
                            }
                        }
                    }
            }
            }
        public function insert_new_record2(){
            $handler = new Handler;
            $houseno = $_POST["houseno"];
            $firstname = $_POST["firstname"];
            $middlename= $_POST["middlename"];
            $lastname = $_POST["lastname"];
            $street = $_POST["street"];
            $brgy = $_POST["brgy"];
            $municipality= $_POST["municipality"];
            $province = $_POST["province"]; 
            $contactno = $_POST["contactno"];
            $phase = $_POST["phase"];
            $household= $_POST["household"];
            $rateD = $_POST["rate"];
            $rate;
            $role = $_POST["role"];
            $date = $_POST["date_joinIN"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt33 = $db->prepare("SELECT payment_rate_table.Amount FROM `payment_rate_table` WHERE id = $rateD;");
            $stmt33->execute();
            $data33 = $stmt33->fetchAll(PDO::FETCH_ASSOC);
            $rate=($data33[0]['Amount']);
            $stmtH = $db->prepare("SELECT * FROM account_information_table WHERE houseno='$houseno'");
            $stmtH->execute();
            if($stmtH->rowCount()>0) {
                $handler->message("House no. is already taken","error");
            }else{
                $stmt = $db->prepare("
            INSERT INTO 
            account_information_table(firstname,middlename,lastname,houseno,street,brgy,municipality,province,contactno,phase,household,rate,date_joinIN)
            VALUES(:firstname,:middlename,:lastname,:houseno,:street,:brgy,:municipality,:province,:contactno,:phase,:household,:rate,:date)
            ");
                $stmt->bindValue("houseno",$houseno);
                $stmt->bindValue("firstname",$firstname);
                $stmt->bindValue("middlename",$middlename);
                $stmt->bindValue("lastname",$lastname);
                $stmt->bindValue("street",$street);
                $stmt->bindValue("brgy",$brgy);
                $stmt->bindValue("municipality",$municipality);
                $stmt->bindValue("province",$province);
                $stmt->bindValue("contactno",$contactno);
                $stmt->bindValue("phase",$phase);
                $stmt->bindValue("household",$household);
                $stmt->bindValue("rate",$rate);
                $stmt->bindValue("date",$date);
                $stmt->execute();
                $stmt2 = $db->prepare("SELECT * FROM account_information_table WHERE houseno='$houseno'");
                $stmt2->execute();
                if($stmt2->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    $id=($data[0]['ID']);
                    $lastname=($data[0]['lastname']);
                    $houseno=($data[0]['houseno']);
                    $pass=$houseno.$lastname;
                    $stmt3 = $db->prepare("INSERT INTO `account_information_uploaded_image`( `account_information_table_id`, `image_name`) VALUES ('$id','default_picture.png')");
                    $stmt3->execute();
                    if($stmt3->rowCount() == 0) {
                        $handler->message("Failed to create","error");
                    }else{
                        $stmt4 = $db->prepare("INSERT INTO account_table(account_information_id,username,password,role) SELECT ID, houseno, '$pass' , '$role' FROM account_information_table WHERE ID=$id;");
                        $stmt4->execute();
                        if($stmt4->rowCount() == 0) {
                            $handler->message("Failed to create","error");
                        }else{
                            $handler->message("Added Successfully","success");
                        }
                    }
                }
            }
            }
        public function inrSIGNUP(){
            $handler = new Handler;
            $houseno = $_POST["houseno"];
            $firstname = $_POST["firstname"];
            $middlename= $_POST["middlename"];
            $lastname = $_POST["lastname"];
            $street = $_POST["street"];
            $brgy = $_POST["brgy"];
            $municipality= $_POST["municipality"];
            $province = $_POST["province"]; 
            $contactno = $_POST["contactno"];
            $phase = $_POST["phase"];
            $household= $_POST["household"];
            $rateD = $_POST["rate"];
            $rate;
            $role = $_POST["role"];
            $date = $_POST["date_joinIN"];
            $username = $_POST["username"];
            $password = $_POST["password"];
            $deleteOTP = $_POST["deleteOTP"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt33 = $db->prepare("SELECT payment_rate_table.Amount FROM `payment_rate_table` WHERE id = $rateD;");
            $stmt33->execute();
            $data33 = $stmt33->fetchAll(PDO::FETCH_ASSOC);
            $rate=($data33[0]['Amount']);
            $stmt = $db->prepare("
            INSERT INTO 
            account_information_table(firstname,middlename,lastname,houseno,street,brgy,municipality,province,contactno,phase,household,rate,date_joinIN)
            VALUES(:firstname,:middlename,:lastname,:houseno,:street,:brgy,:municipality,:province,:contactno,:phase,:household,:rate,:date)
            ");
                $stmt->bindValue("houseno",$houseno);
                $stmt->bindValue("firstname",$firstname);
                $stmt->bindValue("middlename",$middlename);
                $stmt->bindValue("lastname",$lastname);
                $stmt->bindValue("street",$street);
                $stmt->bindValue("brgy",$brgy);
                $stmt->bindValue("municipality",$municipality);
                $stmt->bindValue("province",$province);
                $stmt->bindValue("contactno",$contactno);
                $stmt->bindValue("phase",$phase);
                $stmt->bindValue("household",$household);
                $stmt->bindValue("rate",$rate);
                $stmt->bindValue("date",$date);
                $stmt->execute();
                $stmt2 = $db->prepare("SELECT * FROM account_information_table WHERE houseno='$houseno'");
                $stmt2->execute();
                if($stmt2->rowCount() == 0) {
                    $handler->message("No Record","error");
                }else{
                    $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    $id=($data[0]['ID']);
                    $stmt3 = $db->prepare("INSERT INTO `account_information_uploaded_image`( `account_information_table_id`, `image_name`) VALUES ('$id','default_picture.png')");
                    $stmt3->execute();
                    if($stmt3->rowCount() == 0) {
                        $handler->message("Failed to create","error");
                    }else{
                        $stmt4 = $db->prepare("INSERT INTO `account_table`(`account_information_id`, `username`, `password`, `Role`) VALUES ('$id','$username','$password','$role');");
                        $stmt4->execute();
                        if($stmt4->rowCount() == 0) {
                            $handler->message("Failed to create","error");
                        }else{
                            $stmt5 = $db->prepare("DELETE FROM `signup_otp_confirmation_table` WHERE signup_otp_confirmation_table.username = '$deleteOTP';");
                            $stmt5->execute();
                            $handler->message("Added Successfully","success");
                        }
                    }
                }
            }
        public function create_bills_info_month(){
            $handler = new Handler;
            $year = $_POST["year"];
            $month = $_POST["month"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT * FROM account_bills_information_table WHERE account_bills_information_table.year_publish='$year' AND account_bills_information_table.month_publish='$month';");
            $stmt->execute();
            $stmt2 = $db->prepare("SELECT * FROM account_information_table");
            $stmt2->execute();
                if($stmt->rowCount() == 0) {
                    $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }else{
                }
            }
        public function create_bills_row(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $year = $_POST["year"];
            $month = $_POST["month"];
            $amount = $_POST["amount"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("INSERT INTO `account_bills_information_table`(`account_information_id`,`method`, `year_publish`, `month_publish`, `amount`) VALUES ('$id','','$year','$month','$amount');");
            $stmt->execute();
            $stmt2 = $db->prepare("SELECT * FROM account_information_table");
            $stmt2->execute();
                if($stmt->rowCount() == 0) {
                    $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }else{
                    $handler->message("meronna","mron");
                }
            }
          public function update_bills(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $method = $_POST["method"];
            $confirmation = $_POST["confirmation"];
            $amount= $_POST["amount"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("UPDATE account_bills_information_table SET account_bills_information_table.method='$method', account_bills_information_table.confirmation='$confirmation', account_bills_information_table.amount='$amount' WHERE account_bills_information_table.ID=$id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Update failed","error");
                }else{
                    $handler->message("Updated Successfully","success");
                }
            }
            public function searchbill_payment(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $year = $_POST["year"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT * FROM `account_bills_information_table` WHERE account_bills_information_table.account_information_id = $id AND account_bills_information_table.year_publish = '$year';");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No record found","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
        public function searchinfo_payment(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT account_information_table.*, account_information_uploaded_image.image_name FROM account_information_table INNER JOIN
            account_information_uploaded_image ON account_information_table.ID = account_information_uploaded_image.account_information_table_id WHERE account_information_table.ID = $id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No record found","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
         public function searchinfo(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT account_information_table.*, account_information_uploaded_image.image_name, account_table.Role FROM account_information_table INNER JOIN
            account_information_uploaded_image ON account_information_table.ID = account_information_uploaded_image.account_information_table_id INNER JOIN
            account_table ON account_information_table.ID = account_table.account_information_id WHERE account_information_table.ID = $id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No record found","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
        public function searchinfo_sideright_menu(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("SELECT account_information_table.*, account_information_uploaded_image.image_name, account_table.username, account_table.password FROM account_information_table INNER JOIN account_information_uploaded_image ON account_information_table.ID = account_information_uploaded_image.account_information_table_id INNER JOIN account_table ON account_information_table.ID = account_table.account_information_id WHERE account_information_table.ID = $id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("No record found","error");
                }else{
                    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($data);
                }
            }
        public function searchinfo_payment_update(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $method = 'Cash';
            $confirmation = $_POST["confirmation"];
            $amount= $_POST["amount"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("UPDATE account_bills_information_table SET account_bills_information_table.method='$method', account_bills_information_table.confirmation='$confirmation', account_bills_information_table.amount='$amount' WHERE account_bills_information_table.ID=$id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Update failed","error");
                }else{
                    $handler->message("Updated Successfully","success");
                }
            } 
        public function confirm_gcash_payment(){
            $handler = new Handler;
            $id = $_POST["ID"];
            $method = 'GCash';
            $confirmation = $_POST["confirmation"];
            $amount= $_POST["amount"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("UPDATE account_bills_information_table SET account_bills_information_table.method='$method', account_bills_information_table.confirmation='$confirmation', account_bills_information_table.amount='$amount' WHERE account_bills_information_table.ID=$id;");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Update failed","error");
                }else{
                    $handler->message("Updated Successfully","success");
                }
            }    
        public function insert_announcement(){
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            if(isset($_POST["ID"])){
                $ID = $_POST["ID"];
                $datepublish = $_POST["datepublish"];
                $message= $_POST["message"];
                $scheduledate = $_POST["scheduledate"];
                $status = $_POST["status"]; 
                $stmt = $db->prepare("UPDATE announcement_table set publish_date =:datepublish, message =:message, schedule_date =:scheduledate , status =:status WHERE ID = $ID");
                    $stmt->bindValue("datepublish",$datepublish);
                    $stmt->bindValue("message",$message);
                    $stmt->bindValue("scheduledate",$scheduledate);
                    $stmt->bindValue("status",$status);
                    $stmt->execute();
                    $handler->message("Publish Successfully","success"); 
            }else{
                $status= $_POST["status"];
                $message= $_POST["message"];
                $stmt = $db->prepare("INSERT INTO announcement_table(message,status)VALUES(:message,:status)");
                    $stmt->bindValue("status",$status);
                    $stmt->bindValue("message",$message);
                    $stmt->execute();
                    if($stmt->rowCount() == 0) {
                        insert_announcement();
                    }else{
                        $stmt2 = $db->prepare("SELECT ID FROM `announcement_table` ORDER BY ID DESC LIMIT 1");
                        $stmt2->execute();
                        $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                        echo json_encode($data);
                    }
                    
            }
        }
        public function insert_community(){
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            if(isset($_POST["ID"])){
                $ID = $_POST["ID"];
                $datepublish = $_POST["datepublish"];
                $message= $_POST["message"];
                $scheduledate = $_POST["scheduledate"];
                $status = $_POST["status"]; 
                $stmt = $db->prepare("UPDATE community_table set publish_date =:datepublish, message =:message, schedule_date =:scheduledate , status =:status WHERE ID = $ID");
                    $stmt->bindValue("datepublish",$datepublish);
                    $stmt->bindValue("message",$message);
                    $stmt->bindValue("scheduledate",$scheduledate);
                    $stmt->bindValue("status",$status);
                    $stmt->execute();
                    $handler->message("Publish Successfully","success"); 
            }else{
                $status= $_POST["status"];
                $message= $_POST["message"];
                $stmt = $db->prepare("INSERT INTO community_table(message,status)VALUES(:message,:status)");
                    $stmt->bindValue("status",$status);
                    $stmt->bindValue("message",$message);
                    $stmt->execute();
                    if($stmt->rowCount() == 0) {
                        insert_community();
                    }else{
                        $stmt2 = $db->prepare("SELECT ID FROM `community_table` ORDER BY ID DESC LIMIT 1");
                        $stmt2->execute();
                        $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                        echo json_encode($data);
                    }
                    
            }
        }
        public function insert_water_info(){
            $handler = new Handler;
            $datepublish = $_POST["datepublish"];
            $water_pressure = $_POST["water_pressure"];
            $phase1= $_POST["phase1"];
            $phase2= $_POST["phase2"];
            $phase3= $_POST["phase3"];
            $phase4= $_POST["phase4"];
            $water_level = $_POST["water_level"]; 
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("UPDATE water_information_table set publish_date =:datepublish, pressure =:water_pressure, phase1 =:phase1, phase2 =:phase2, phase3 =:phase3, phase4 =:phase4, water_level =:water_level WHERE ID = 1");
                $stmt->bindValue("datepublish",$datepublish);
                $stmt->bindValue("water_pressure",$water_pressure);
                $stmt->bindValue("phase1",$phase1);
                $stmt->bindValue("phase2",$phase2);
                $stmt->bindValue("phase3",$phase3);
                $stmt->bindValue("phase4",$phase4);
                $stmt->bindValue("water_level",$water_level);
                $stmt->execute();
                $handler->message("Publish Successfully","success");
    
        }
        public function send_text($OTP,$number){
            $ch = curl_init();
            $parameters = array(
                'apikey' => '026cb9f429be21a52a73c0bcbd3e2484',
                'number' => $number,
                'message' => $OTP.' is your authentication code. For your protection, do not share this code with anyone.',
                'sendername' => 'PWA'
            );
            curl_setopt( $ch, CURLOPT_URL,'https://semaphore.co/api/v4/messages' );
            curl_setopt( $ch, CURLOPT_POST, 1 );

            //Send the parameters set above with the request
            curl_setopt( $ch, CURLOPT_POSTFIELDS, http_build_query( $parameters ) );

            // Receive response from server
            curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
            $output = curl_exec( $ch );
            curl_close ($ch);
        }
        public function more_sendTEXT(){
            
        }
        public function insert_rules(){
            $handler = new Handler;
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            if(isset($_POST["ID"])){
                $ID = $_POST["ID"];
                $datepublish = $_POST["datepublish"];
                $message= $_POST["message"]; 
                $status = $_POST["status"]; 
                $stmt = $db->prepare("UPDATE rules_information_table set publish_date =:datepublish, message =:message, status =:status WHERE ID = $ID");
                    $stmt->bindValue("datepublish",$datepublish);
                    $stmt->bindValue("message",$message);
                    $stmt->bindValue("status",$status);
                    $stmt->execute();
                    $handler->message("Publish Successfully","success"); 
            }else{
                $status= $_POST["status"];
                $message= $_POST["message"];
                $stmt = $db->prepare("INSERT INTO rules_information_table(message,status)VALUES(:message,:status)");
                    $stmt->bindValue("status",$status);
                    $stmt->bindValue("message",$message);
                    $stmt->execute();
                    if($stmt->rowCount() == 0) {
                        insert_community();
                    }else{
                        $stmt2 = $db->prepare("SELECT ID FROM `rules_information_table` ORDER BY ID DESC LIMIT 1");
                        $stmt2->execute();
                        $data = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                        echo json_encode($data);
                    }
                    
            }
            }
        }



