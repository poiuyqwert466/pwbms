<?php
header("Content-Type: application/json");
require_once("class/classAPI.php");
require_once("class/classMESSAGE.php");

$api = new Api;
$handler = new Handler;

if(isset($_GET["t"])){
    switch($_GET["t"]){
        case "search":
            if($_POST["search"]==""){
                $handler->message("Check your input","error"); 
            }else{
                $api->search_table();
            }
            
        break;
        case "searchbills":
            if($_POST["search"]==""||$_POST["month"]==""||$_POST["year"]==""){
                $handler->message("Check your input","error"); 
            }else{
                $api->search_payment_selected();
            }
        break;
        case "sendTEXT":
                $api->send_text(); 
        break;
        case "more_sendTEXT":
            $api->more_sendTEXT(); 
        break;
        case "search2":
            $count_check=0;
            if(!isset($_POST["firstname"])){
                $count_check++;
            }
            if(!isset($_POST["middlename"])){
                $count_check++;
            }
            if(!isset($_POST["lastname"])){
                $count_check++;
            }
            if(!isset($_POST["houseno"])){
                $count_check++;
            }
            if(!isset($_POST["street"])){
                $count_check++;
            }
            if(!isset($_POST["brgy"])){
                $count_check++;
            }
            if(!isset($_POST["phase"])){
                $count_check++;
            }
            if(!isset($_POST["rate"])){
                $count_check++;
            }
            if(!isset($_POST["household"])){
                $count_check++;
            }
            if(!isset($_POST["contactno"])){
                $count_check++;
            }
            if(!isset($_POST["rows"])){
                $count_check++;
            }
            if($count_check==10){
                $handler->message("Check your input","error");
            }else{
                $api->search_table2();
            }
            
        break;
        case "payment_search2":
            $count_check=0;
            if(!isset($_POST["firstname"])){
                $count_check++;
            }
            if(!isset($_POST["middlename"])){
                $count_check++;
            }
            if(!isset($_POST["lastname"])){
                $count_check++;
            }
            if(!isset($_POST["houseno"])){
                $count_check++;
            }
            if(!isset($_POST["street"])){
                $count_check++;
            }
            if(!isset($_POST["brgy"])){
                $count_check++;
            }
            if(!isset($_POST["phase"])){
                $count_check++;
            }
            if(!isset($_POST["rate"])){
                $count_check++;
            }
            if(!isset($_POST["household"])){
                $count_check++;
            }
            if(!isset($_POST["contactno"])){
                $count_check++;
            }
            if(!isset($_POST["rows"])){
                $count_check++;
            }
            if($count_check==10){
                $handler->message("Check your input","error");
            }else{
                $api->payment_search_table2();
            }
            
        break;
        case "online_check":
            $api->online_check();
        break;
        case "count_online_check":
            $api->count_online_check();
        break;
        case "remove_online_check":
            $api->remove_online_check();
        break;
        case "login":
                $api->login();
        break;
        case "check_username":
            $api->check_username();
        break;
        case "check_houseno":
            $api->check_houseno();
        break;
        case "confirm_number":
            $api->confirm_number();
        break;
        case "check_confirm_number":
            $api->check_confirm_number();
        break;
        case "forgot_search_username": 
                $api->forgot_search_username();
        break;
        case "forgot_create_OTP": 
            $api->forgot_create_OTP();
        break;
        case "check_account_OTP": 
            $api->check_account_OTP();
        break;
        case "update_password": 
            $api->update_password();
        break;
        case "logout":
            $api->logout();
         break;
        case "delete":
                $api->table_delete();
        break;
        case "fdelete":
            $api->find_table_delete();
        break;
        case "fupdate":
            $api->find_info_update();
        break;
        case "fpaymentbills":
            $api->find_info_bills();
        break;
        case "check_payment_chat":
            $api->check_payment_chat();
        break;
        case "editupdate":
            if($_POST["ID"]=="" OR $_POST["firstname"]=="" OR $_POST["middlename"]=="" OR $_POST["lastname"]==""OR $_POST["houseno"]==""OR $_POST["street"]==""OR $_POST["brgy"]==""OR $_POST["municipality"]==""OR $_POST["province"]==""OR $_POST["contactno"]==""OR $_POST["phase"]==""OR $_POST["household"]==""OR $_POST["rate"]==""OR $_POST["username"]==""OR $_POST["password"]==""OR $_POST["role"]==""){
                $handler->message("Check your input","error");
               
            }else{
                $api->edit_info_update();
            }
        break;
        case "update_side_rightINFO":     
                $api->update_side_rightINFO();
        break;
        case "a":
                $api->show_announcement();
        break;
        case "c":
            $api->show_community();
        break;
        case "c_image":
            $api->check_community_image();
        break;
        case "c_image2":
            $api->check_rules_image();
        break;
        case "w":
            $api->show_water_info();
        break;
        case "w_phase_time":
            $api->w_phase_time();
        break;
        case "ub":
            $api->show_user_bills();
        break;
        case "payment_year_btn":
            $api->show_payment_cash_year_btn();
        break;
        case "what_month_to_show":
            $api->what_month_to_show();
        break;
        case "ub_month":
            $api->show_user_bills_month();
        break;
        case "show_receipt_info":
            $api->show_receipt_info();
        break;
        case "rate":
            $api->show_rate();
        break;
        case "gcash_number":
            $api->gcash_number();
        break;
        case "show_gcash_chat":
            $api->show_gcash_chat();
        break;
        case "payment_status":
            $api->payment_status();
        break;
        case "new_gcash_chat":
            $api->new_gcash_chat();
        break;
        case "delete_gcash_chat":
            $api->delete_gcash_chat();
        break;
        case "update_select_cash":
            $api->update_select_cash();
        break;
        case "rul":
            $api->show_rules();
        break;
        case "rul_image":
            $api->rul_image();
        break;
        case "t":
            $api->show_table();
        break;
        case "payC":
            $api->show_payment_cash();
        break;
        case "t_count":
            $api->show_table_count();
        break;
        case "user":
            $api->count_total_user();
        break;
        case "ct1":
            $api->count_total_phase1();
        break;
        case "ct2":
            $api->count_total_phase2();
        break;
        case "ct3":
            $api->count_total_phase3();
        break;
        case "ct4":
            $api->count_total_phase4();
        break;
        case "feedback_show":
            $api->feedback_show();
        break;
        case "feedback_click":
            $api->feedback_click();
        break;
        case "insert_feedback":
            $api->insert_feedback($_GET["ref"]);
        break;
        case "IMGupload":
                $api->uploadIMG($_GET["ref"]);
         break;
        case "side_right_IMGupload":
                $api->side_right_IMGupload($_GET["ref"]);
         break;
         case "paymentchat_IMGupload":
            $api->paymentchat_IMGupload($_GET["ref"]);
        break;
        case "ia":
                $api->insert_announcement();
        break;
        case "search_view_img1":
            $api->search_view_img1();
         break;
        case "search_view_img2":
            $api->search_view_img2();
         break;
        case "search_view_img3":
            $api->search_view_img3();
        break; 
        case "text":
            $api->text();
        break;
        case "irules":
                $api->insert_rules();
         break;
         case "inrSIGNUP":
            $api->inrSIGNUP();
        break;
         case "inr":
           if($_POST["who"]==0){
            if($_POST["houseno"]=="" OR $_POST["firstname"]=="" OR $_POST["middlename"]=="" OR$_POST["lastname"]=="" OR$_POST["role"]==""OR$_POST["rate"]==""){
                $handler->message("Check your input","error");
            }else{
                $api->insert_new_record1();
            }
           }else{
            if($_POST["houseno"]=="" OR $_POST["firstname"]=="" OR $_POST["middlename"]=="" OR$_POST["lastname"]=="" OR$_POST["role"]=="" OR $_POST["street"]=="" OR $_POST["brgy"]=="" OR $_POST["municipality"]=="" OR$_POST["province"]=="" OR $_POST["contactno"]=="" OR $_POST["phase"]=="" OR $_POST["household"]=="" OR$_POST["rate"]==""){
                $handler->message("Check your input","error");
            }else{
                if(strlen($_POST['contactno'])<11 OR substr($_POST['contactno'], 0, 2) != '09'){
                    $handler->message("Number format is invalid","error");
                }else{
                    $api->insert_new_record2();
                }
            }
           }
         break;
         case "create_bills":
                $api->create_bills_info_month();
         break;
         case "create_bills_row":
            $api->create_bills_row();
        break;
         case "updatebill":
             if($_POST["ID"]=="" OR $_POST["amount"]==""){
                 $handler->message("Check your input","error");
             }else{
                 $api->update_bills();
             }
          break;
          case "searchbill_payment":
                $api->searchbill_payment();
         break;
         case "searchinfo_payment":
            $api->searchinfo_payment();
         break;
         case "searchinfo":
            $api->searchinfo();
         break;
         case "searchinfo_sideright":
            $api->searchinfo_sideright_menu();
         break;
         case "searchinfo_payment_update":
            $api->searchinfo_payment_update();
         break;
         case "confirm_gcash_payment":
            $api->confirm_gcash_payment();
         break;
         case "ic":
                $api->insert_community();
         break;
         case "s_image":
            $api->show_your_save();
        break;
        case "d_save":
            $api->delete_your_save();
        break;
        case "v_image":
            $api->view_your_save();
        break;
        case "show_com_comment":
            $api->show_com_comment();
        break;
        case "show_chat_payment":
            $api->show_chat_payment();
        break;
        case "show_community_react_status":
            $api->show_community_react_status();
        break;
        case "show_community_comment_get_name":
            $api->show_community_comment_get_name();
        break;
        case "show_chat_payment_get_name":
            $api->show_chat_payment_get_name();
        break;
        case "update_comment_user_who_react":
            $api->update_comment_user_who_react();
        break;
        case "send_comment":
            $api->send_comment();
        break;
        case "d_comment":
            $api->d_comment();
        break;
        case "v2_image":
            $api->view_your_save2();
        break;
        case "s_default":
            $api->show_your_default();
        break;
        case "s_default2":
            $api->show_your_default2();
        break;
        case "s_default3":
            $api->show_your_default3();
        break;
        case "save_default":
            $api->save_default();
        break;
        case "save_default2":
            $api->save_default2();
        break;
        case "save_default3":
            $api->save_default3();
        break;
        case "d_image":
            $api->delete_IMG();
        break;
        case "update_your_save_status":
            $api->update_your_save_status();
        break;
        case "default_mesage":
            $api->default_mesage();
        break;
         case "iw":
            if($_POST["datepublish"]=="" OR $_POST["water_pressure"]=="" OR$_POST["water_level"]==""){
                $handler->message("Check your input","error");
               
            }else{
                $api->insert_water_info();
            }
         break;

        default:
            $handler->message("Invalid use of API. Please check the manual","error");
    }    
}else{
    $handler->message("Invalid use of API","error");
}

