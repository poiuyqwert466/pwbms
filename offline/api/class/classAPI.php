<?php
session_start();
require_once("classMESSAGE.php");
class Api{
        public function show_payment_cash(){
        $handler = new Handler;
        $month = $_POST["month"];
        $year = $_POST["year"];
        $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root","");
            $stmt = $db->prepare("SELECT account_bills_information_table.account_information_id,account_bills_information_table.year_publish,account_bills_information_table.month_publish,account_information_table.phase, account_information_table.firstname, account_information_table.middlename,account_information_table.lastname,account_bills_information_table.method,account_bills_information_table.confirmation, account_bills_information_table.amount, account_bills_information_table.balance, account_bills_information_table.receipt FROM account_information_table INNER JOIN account_bills_information_table ON account_information_table.ID = account_bills_information_table.account_information_id WHERE account_bills_information_table.year_publish='$year' AND account_bills_information_table.month_publish='$month'");
            $stmt->execute();
            if($stmt->rowCount() == 0) {
                $handler->message("No Record","error");
            }else{
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            }
        }
        public function update_bills(){
            $handler = new Handler;
            $id = $_POST["id"];
            $year = $_POST["year"];
            $month = $_POST["month"];
            $confirm= $_POST["confirm"];
            $db = new PDO("mysql:host=localhost;dbname=pwbms_db","root",""); 
            $stmt = $db->prepare("UPDATE account_bills_information_table SET account_bills_information_table.confirmation='$confirm' WHERE account_bills_information_table.account_information_id=$id AND account_bills_information_table.year_publish='$year' AND	account_bills_information_table.month_publish='$month';");
                $stmt->execute();
                if($stmt->rowCount() == 0) {
                    $handler->message("Update failed","error");
                }else{
                    $handler->message("Updated Successfully","success");
                }
            }


        }



