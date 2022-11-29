<?php
    session_start();  
    if(!isset($_SESSION["username"])){
      header("location:login.php");
    }else{
      if($_SESSION["role"]=="Admin"){
  
      }else{
          header("location:user.php");
      }
    }      
  ?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <link rel="stylesheet" href="./public/css/adminpage.css">
      <title>Admin</title>
  </head>
  <body>
    <div id="get_account_id">
      <!-- <h5><?php echo($_SESSION['username']);?></h5> -->
    </div>
    <div id="confirm_chat_payment">
      <div id="confirm_chat_payment_container" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h4 id="confirm_chat_payment_container_title">Confirm GCash payment</h4>
            <h4 id="confirm_chat_payment_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
          </div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <button title="Confirm" id="confirm_chat_payment_container_btn_confirm" type="button" class="btn btn-primary">Confirm</button>
          </div>
          <div class="col-2"></div>
        </div>
        <div id="confirm_chat_payment_container_scroll">

        </div>
        
        <div id="confirm_chat_payment_container_row" class="row">
          <div class="col-9">
            <input id="confirm_chat_payment_container_row_image_input" type="file" class="form-control">
            <input maxlength="255" id="confirm_chat_payment_container_row_input" type="text" class="form-control">
          </div>
          <div class="col-3">
              <h5 title="Send image" id="confirm_chat_payment_container_row_btn1"><i class="fa-solid fa-camera"></i></h5>
                <button title="Send" id="confirm_chat_payment_container_row_btn2" type="button" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div id="community_show_comment">
      <div id="community_show_comment_container" class="container-fluid">
        <div class="col-12">
          <h4 id="community_show_comment_container_title">Comments</h4>
          <h4 id="community_show_comment_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
        </div>
        <div id="community_show_comment_container_scroll">
      </div>
      <div id="community_show_comment_container_btn_newmessage">
        <h4>New message!</h4>
      </div>
      <div id="community_show_comment_container_btn" class="row">
        <div class="col-10">
          <input id="community_show_comment_container_input" type="text" class="form-control">
        </div>
          <div class="col-2">
            <button title="Send" id="community_show_comment_container_btn_send" type="button" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
      </div>
      </div>
    </div>
    <div id="side_right_menu">
      <div id="side_right_menu_container" class="container-fluid">
        <div id="side_right_menu_container_account_img_edit_show">
          <input id="side_right_menu_container_account_img_edit_show_input" type="file" class="form-control">
          <div class="row">
            <div class="col-12">
              <h4 id="side_right_menu_container_account_img_edit_show_title">Change account image</h4>
              <h4 id="side_right_menu_container_account_img_edit_show_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
            </div>
          </div>
          <div class="row">
            <div id="side_right_menu_container_account_img_edit" class="col-12">
              <img src="" alt="" srcset="">
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <button id="side_right_menu_container_account_img_edit_btn_change" type="button" class="btn btn-primary">Change</button>
            </div>
            <div class="col-6">
              <button id="side_right_menu_container_account_img_edit_btn_save" type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
        <div id="side_right_menu_container_account">
          <div class="row">
            <div class="col-12">
              <h4 id="side_right_menu_container_account_title">Account details</h4>
              <h4 id="side_right_menu_container_account_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
            </div>
          </div>
         <div id="side_right_menu_container_account_scroll">
          <div class="row">
            <div id="side_right_menu_container_account_img" class="col-12">
              <img src="" alt="" srcset="">
              <h5 title="Change image" id="side_right_menu_container_account_img_btn"><i class="fa-solid fa-camera"></i></h5>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5>Name:</h5>
            </div>
            <div class="col-12">
              <h5 id="side_right_menu_container_account_firstname"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_firstnameINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_middlename"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_middlenameINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_lastname"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_lastnameINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5>Address:</h5>
            </div>
            <div class="col-12">
              <h5 id="side_right_menu_container_account_houseno"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_housenoINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_street"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_streetINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_brgy"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_brgyINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_municipality"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_municipalityINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_province"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_provinceINPUT" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5>Other details:</h5>
            </div>
            <div class="col-12">
              <h5 id="side_right_menu_container_account_pnumber"></h5>
              <input maxlength="11" class="form-control sentence_case" id="side_right_menu_container_account_pnumberINPUT" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/\s/g,'');">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_phase"></h5>
              <select class="form-control" id="side_right_menu_container_account_phaseINPUT">
                <option value="1">Phase 1</option>
                <option value="2">Phase 2</option>
                <option value="3">Phase 3</option>
                <option value="4">Phase 4</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_household"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_householdINPUT" type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5>Account</h5>
            </div>
            <div class="col-12">
              <h5 id="side_right_menu_container_account_username"></h5>
              <input class="form-control sentence_case" id="side_right_menu_container_account_usernameINPUT" type="text" oninput="this.value = this.value.replace(/(\..*?)\..*/g, '$1').replace(/\s/g,'');">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_password"></h5>
              <div style="position: relative;">
                <i id="side_right_menu_container_account_passwordINPUT_see" class="fa-solid fa-eye-slash"></i>
                <input class="form-control sentence_case" id="side_right_menu_container_account_passwordINPUT" type="password">
              </div>
              <div style="position: relative;">
                <i id="side_right_menu_container_account_passwordINPUT_see2" class="fa-solid fa-eye-slash"></i>
                <input class="form-control sentence_case" id="side_right_menu_container_account_passwordINPUT2" type="password">
              </div>
            </div>
          </div>
          <div id="side_right_menu_container_account_btn" class="row">
            <div class="col-6">
              <button id="side_right_menu_container_account_btn_cancel" type="button" class="btn btn-primary">Cancel</button>
            </div>
            <div class="col-6">
              <button id="side_right_menu_container_account_btn_save" type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 id="side_right_menu_container_account_year">Join in April 24, 2022</h5>
            </div>
          </div>
         </div>
        </div>
        <div id="side_right_menu_container_notification">
          <div class="row">
            <div class="col-12">
              <h4 id="side_right_menu_container_notification_title">Notification</h4>
              <h4 id="side_right_menu_container_notification_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
            </div>
            <div class="col-2">
              <button title="Delete all" id="side_right_menu_container_notification_btn_delete" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              <span id="side_right_menu_container_notification_btn_delete_count">51</span>
            </div>
            <div class="col-2">
              <button title="Read all" id="side_right_menu_container_notification_btn_read" type="button" class="btn btn-primary"><i class="fa-solid fa-book-open"></i></button>
              <span id="side_right_menu_container_notification_btn_read_count">51</span>
            </div>
          </div>
          <div id="side_right_menu_container_notification_scroll">
            <div class="row side_right_menu_container_notification_scroll_show">
              <div class="col-2">
                <button title="Delete" id="side_right_menu_container_notification_scroll_delete0" type="button" class="btn btn-danger side_right_menu_container_notification_scroll_delete"><i class="fa-solid fa-trash"></i></button>
              </div>
              <div class="col-10">
                <p>Nakita ko lahat ng bagay sa mundo ang pwdeng...</p>
              </div>
            </div>
            <div class="row side_right_menu_container_notification_scroll_show">
              <div class="col-2">
                <button title="Delete" id="side_right_menu_container_notification_scroll_delete0" type="button" class="btn btn-danger side_right_menu_container_notification_scroll_delete"><i class="fa-solid fa-trash"></i></button>
              </div>
              <div class="col-10">
                <p>Nakita ko lahat ng bagay sa mundo ang pwdeng...</p>
              </div>
            </div>
          </div>
        </div>
        <div id="side_right_menu_container_feedback">
          <div class="row">
            <div class="col-12">
              <h4 id="side_right_menu_container_feedback_title">Feedback</h4>
              <h4 id="side_right_menu_container_feedback_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
            </div>
          </div>
          <div class="row">
            <div id="side_right_menu_container_feedback_btn_comment" class="col-4 btn_active_side_right_menu">
              <h5>Comment</h5>
              <span></span>
            </div>
            <div id="side_right_menu_container_feedback_btn_bug" class="col-4">
              <h5>Bug</h5>
              <span></span>
            </div>
            <div id="side_right_menu_container_feedback_btn_suggestion" class="col-4">
              <h5>Suggestion</h5>
              <span></span>
            </div>
          </div>
          <div id="side_right_menu_container_feedback_scroll">
          </div>
        </div>
      </div>
    </div>
    <div id="your_save" class="">
      <div id="your_save_container_select_visibility_background">  
      </div>
      <div id="your_save_container" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h4 id="your_save_container_title">Preview of your save content</h4>
            <h4 id="your_save_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
          </div>
        </div>
        <div id="your_save_container_scroll_title" class="row">
              <div class="col-5">
                <h5>Message</h5>
              </div>
              <div class="col-2">
                  <h5>Visibility</h5>
              </div>
              <div class="col-2">
                  <h5>Save</h5>
              </div>
              <div class="col-2">
                <h5>Schedule</h5>
              </div>
              <div class="col-1">
                <h5>Edit</h5>
              </div>
            </div>
        <div id="your_save_container_scroll" class="row">
          <div id="your_save_container_select_visibility" class="col-12">
            <h3>Visibility</h3>
            <div id="your_save_container_select_visibility_btn_draft" class="row">
              <div class="col-4">
                <input type="radio" id="your_save_container_select_visibility_btn_draft_input">
              </div>
              <div class="col-8">
                <h5>Draft</h5>
                <p>Only admin can see your content.</p>
              </div>
            </div>
            <div id="your_save_container_select_visibility_btn_publish" class="row">
              <div class="col-4">
                <input type="radio" id="your_save_container_select_visibility_btn_publish_input">
              </div>
              <div class="col-8">
                <h5>Public</h5>
                <p>Everyone can see your content.</p>
              </div>
            </div>
            <div id="your_save_container_select_visibility_btn_container" class="row">
              <div class="col-6">
                <button id="your_save_container_select_visibility_btn_close" type="button" class="btn btn-primary">Close</button>
              </div>
              <div class="col-6">
                <button id="your_save_container_select_visibility_btn_go" type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
          <div id="your_save_container_scroll1" class="container-fluid">
            <div id="your_save_container_scroll1_container">
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="confirm_payment_show">
      <h4 title="Next left" id="confirm_payment_show_container_btn_left"><i class="fa-solid fa-chevron-left"></i></h4>
      <h4 title="Next left" id="confirm_payment_show_container_btn_right"><i class="fa-solid fa-chevron-right"></i></h4>
      <div id="confirm_payment_show_container" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h4 id="confirm_payment_show_container_title">Confirm payment</h4>
            <h4 id="confirm_payment_show_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
          </div>
        </div>
        <div id="confirm_payment_show_container_show" class="row">
          
        </div>
        <div id="confirm_payment_show_container_btn" class="container-fluid">
          <div class="row">
            <div class="col-7">
            </div>
            <div class="col-5">
              <button id="confirm_payment_show_container_btn_confirm" type="button" class="btn btn-primary">Confirm</button>
            </div>
           </div>
          </div>
      </div>
    </div>
    <div id="edit_default" class=""> 
      <div id="edit_default_container" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h4 id="edit_default_container_title">Edit defaults</h4>
            <h4 id="edit_default_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
          </div>
        </div>
        <div class="row">
          <div id="edit_default_container_col1" class="col-md-4">
            <h5 id="edit_default_container_col1_title">Payment information</h5>
            <div id="edit_default_container_col1_row1" >
              <h5>Payment default message</h5>
            <p id="edit_default_container_col1_row1_text_area"></p>
            <textarea id="edit_default_container_col1_row1_text_area_edit" name="w3review" rows="7" cols="42"></textarea>
            </div>
            <div id="edit_default_container_col1_row2" class="row">
              <div class="col-6">
                <h5>Normal rate</h5>
              </div>
              <div class="col-4">
                <p id="edit_default_container_col1_row2_text_area"></p>
                <input id="edit_default_container_col1_row2_text_area_edit" type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');">
              </div>
              <div class="col-2">
                <h5>PHP</h5>
              </div>
            </div>
            <div id="edit_default_container_col1_row3" class="row">
              <div class="col-6">
                <h5>Foreign rate</h5>
              </div>
              <div class="col-4">
                <p id="edit_default_container_col1_row3_text_area"></p>
                <input id="edit_default_container_col1_row3_text_area_edit" type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');">
              </div>
              <div class="col-2">
                <h5>PHP</h5>
              </div>
            </div>
            <div id="edit_default_container_col1_row4" class="row">
              <div class="col-6">
                <h5>Installation fee</h5>
              </div>
              <div class="col-4">
                <p id="edit_default_container_col1_row4_text_area"></p>
                <input id="edit_default_container_col1_row4_text_area_edit" type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');">
              </div>
              <div class="col-2">
                <h5>PHP</h5>
              </div>
            </div>
            <div id="edit_default_container_col1_btn" class="row">
              <div class="col-6">
                <button id="edit_default_container_col1_btn_cancel" type="button" class="btn btn-primary">Cancel</button>
              </div>
              <div class="col-6">
                <button id="edit_default_container_col1_btn_save" type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
          <div id="edit_default_container_col2" class="col-md-4">
            <h5 id="edit_default_container_col2_title">Text default message</h5>
            <div id="edit_default_container_col2-1">
              <h5>Payment</h5>
              <p id="edit_default_container_col2_text_area1"></p>
            <textarea id="edit_default_container_col2_text_area_edit1" name="w3review" rows="7" cols="42"></textarea>
            </div>
            <div id="edit_default_container_col2-2">
              <h5>Community</h5>
              <p id="edit_default_container_col2_text_area2"></p>
            <textarea id="edit_default_container_col2_text_area_edit2" name="w3review" rows="7" cols="42"></textarea>
            </div>
            <div id="edit_default_container_col2-3">
              <h5>Rules</h5>
              <p id="edit_default_container_col2_text_area3"></p>
            <textarea id="edit_default_container_col2_text_area_edit3" name="w3review" rows="7" cols="42"></textarea>
            </div>
            <div id="edit_default_container_col2_btn" class="row">
              <div class="col-6">
                <button id="edit_default_container_col2_btn_cancel" type="button" class="btn btn-primary">Cancel</button>
              </div>
              <div class="col-6">
                <button id="edit_default_container_col2_btn_save" type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
          <div id="edit_default_container_col3" class="col-md-4">
            <h5 id="edit_default_container_col3_title">Phase scheduled time</h5>
            <div id="edit_default_container_col3_row1" class="row">
              <div class="col-12">
                <h5>Phase1</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row1_select_time">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row1_select_ampm">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
              <div class="col-2">
                <h5>to</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row1_select_time2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row1_select_ampm2">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
            <div id="edit_default_container_col3_row2" class="row">
              <div class="col-12">
                <h5>Phase2</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row2_select_time">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row2_select_ampm">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
              <div class="col-2">
                <h5>to</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row2_select_time2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row2_select_ampm2">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
            <div id="edit_default_container_col3_row3" class="row">
              <div class="col-12">
                <h5>Phase3</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row3_select_time">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row3_select_ampm">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
              <div class="col-2">
                <h5>to</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row3_select_time2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row3_select_ampm2">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
            <div id="edit_default_container_col3_row4" class="row">
              <div class="col-12">
                <h5>Phase4</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row4_select_time">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row4_select_ampm">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
              <div class="col-2">
                <h5>to</h5>
              </div>
              <div class="col-2">
                <select class="form-control" id="edit_default_container_col3_row4_select_time2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-3">
                <select class="form-control" id="edit_default_container_col3_row4_select_ampm2">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
            <div id="edit_default_container_col3_btn" class="row">
              <div class="col-6">
                <button id="edit_default_container_col3_btn_cancel" type="button" class="btn btn-primary">Cancel</button>
              </div>
              <div class="col-6">
                <button id="edit_default_container_col3_btn_save" type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="confirm_alert">
      <div id="confirm_alert_container" class="container">
        <div class="row">
          <div class="col-12">
            <h4>You have unsaved changes; are you sure you want to leave this page?</h4>
          </div>
        </div>
        <div id="confirm_alert_btn_container" class="row">
          <div class="col-6">
            <button id="confirm_alert_btn_ok" type="button" class="btn btn-primary active">Ok</button>
          </div>
          <div class="col-6">
            <button id="confirm_alert_btn_cancel" type="button" class="btn btn-primary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div id="publish_addtosite" class="">
      <div id="publish_addtosite_container" class="container">
        <div class="row">
          <div class="col-12">
            <h4 id="publish_addtosite_container_title">Preview of your content</h4>
          <h4 id="publish_addtosite_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
          </div>
          <div id="publish_addtosite_container_preview" class="col-md-8">
            <p id="publish_addtosite_container_preview_btn_left"><i class="fa-solid fa-chevron-left"></i></p>
            <p id="publish_addtosite_container_preview_btn_right"><i class="fa-solid fa-chevron-right"></i></p>
            <h3 id="title"></h3>
           <div>
            <p id="publish_addtosite_image_show_count"></p>
            <div id="publish_addtosite_image_show_div">
            
            </div>
           </div>
            <p id="publish_addtosite_paragraph"></p>
            <p id="publish_addtosite_date"></p>
          </div>
          <div id="publish_addtosite_container_text_notification" class="col-md-4">
            <h4 id="publish_addtosite_container_text_notification_btn_edit"><i class="fa-regular fa-pen-to-square"></i></h4>
            <div class="col-12">
              <h3>Text notification</h3>
              <p></p>
            </div>
              <button id="publish_addtosite_next" type="button" class="btn btn-primary">Next</button>
          </div>
          <div id="publish_addtosite_container_visibility" class="col-md-4">
            <h3>Visibility</h3>
            <div id="publish_addtosite_container_visibility_btn_draft" class="row">
              <div class="col-4">
                <input type="radio" id="publish_addtosite_container_visibility_btn_draft_input">
              </div>
              <div class="col-8">
                <h5>Draft</h5>
                <p>Only admin can see your content.</p>
              </div>
            </div>
            <div id="publish_addtosite_container_visibility_btn_publish" class="row">
              <div class="col-4">
                <input type="radio" id="publish_addtosite_container_visibility_btn_publish_input">
              </div>
              <div class="col-8">
                <h5>Publish</h5>
                <p>Everyone can see your content.</p>
              </div>
            </div>
            <div id="publish_addtosite_btn_container" class="row">
              <div class="col-md-6">
                <button id="publish_addtosite_back" type="button" class="btn btn-primary">Back</button>
              </div>
              <div class="col-md-6">
                <button id="publish_addtosite_go" type="button" class="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="confirm_updates">
      <div id="confirm_updates_container" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h4 id="confirm_updates_container_title">Do you want to update this record?</h4>
            <h4 id="confirm_updates_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
          </div>
        </div>
        <div id="confirm_updates_container_scroll">
        <div id="confirm_updates_container_userinfo" class="row">
          <div class="col-12">
            <h4>User Information</h4>
          </div>
        </div>
        <div class="row">
          <div id="confirm_updates_show1" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>First Name:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show1-old">Angelo</h4>
                <h4 id="confirm_updates_show1-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show2" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Middle Name:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show2-old">Angelo</h4>
                <h4 id="confirm_updates_show2-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show3" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Last Name:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show3-old">Angelo</h4>
                <h4 id="confirm_updates_show3-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show4" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>House no#:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show4-old">Angelo</h4>
                <h4 id="confirm_updates_show4-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show5" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Street:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show5-old">Angelo</h4>
                <h4 id="confirm_updates_show5-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show6" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Barangay:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show6-old">Angelo</h4>
                <h4 id="confirm_updates_show6-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show7" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Municipalit:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show7-old">Angelo</h4>
                <h4 id="confirm_updates_show7-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show8" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Province:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show8-old">Angelo</h4>
                <h4 id="confirm_updates_show8-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show9" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Contact no#:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show9-old">Angelo</h4>
                <h4 id="confirm_updates_show9-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show10" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Phase:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show10-old">Angelo</h4>
                <h4 id="confirm_updates_show10-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show11" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>House no#:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show11-old">Angelo</h4>
                <h4 id="confirm_updates_show11-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show12" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Rate:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show12-old">Angelo</h4>
                <h4 id="confirm_updates_show12-new">Angelos</h4>
              </div>
            </div>
          </div>
        </div>
        <div id="confirm_updates_container_accountinfo" class="row">
          <div class="col-12">
            <h4>Account Information</h4>
          </div>
        </div>
        <div class="row">
          <div id="confirm_updates_show13" class="col-md-3 confirm_updates_show">
           <div class="row">
              <div class="col-12">
                <h5>Username:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show13-old">Angelo</h4>
                <h4 id="confirm_updates_show13-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show14" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Password:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show14-old">Angelo</h4>
                <h4 id="confirm_updates_show14-new">Angelos</h4>
              </div>
            </div>
          </div>
          <div id="confirm_updates_show15" class="col-md-3 confirm_updates_show">
            <div class="row">
              <div class="col-12">
                <h5>Role:</h5>
              </div>
              <div class="col-3">
                <h4>Old:</h4>
                <h4>New:</h4>
              </div>
              <div class="col-9">
                <h4 id="confirm_updates_show15-old">Angelo</h4>
                <h4 id="confirm_updates_show15-new">Angelos</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="confirm_updates_btn" class="container-fluid">
        <div class="row">
          <div class="col-7">
          </div>
          <div class="col-5">
            <button id="confirm_updates_btn_update" type="button" class="btn btn-primary">Update</button>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div id="confirm_update">
      <div id="div" class="container-fluid">
        <div id="confirm_update_scroll">
        <div class="row">
          <div class="col-12 pt-2">
            <h3>Do you want to update this record?</h3>
          </div>
        </div>
         <div class="row">
          <div class="col-2">
            <h4>Name</h4>
          </div>
          <div class="col-5">
            <h4>Old information</h4>
          </div>
          <div class="col-5">
            <h4>Edit information</h4>
          </div>
        </div>
        <div id="confirm_update_pad_row1" class="row">
          <div class="col-2">
            <h6>Firstname:</h6>
            <h6>Lastname:</h6>
            <h6>Middlename:</h6>
            <h6>House no:</h6>
            <h6>Street:</h6>
            <h6>Barangay:</h6>
            <h6>Municipality:</h6>
            <h6>Province:</h6>
            <h6>Contact no:</h6>
            <h6>Phase:</h6>
            <h6>Househol:</h6>
            <h6>Rate:</h6>
          </div>
          <div id="confirm_update_old" class="col-5">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div  id="confirm_update_edit" class="col-5">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div id="confirm_update_pad_row2" class="row">
          <div class="col-2">
            <h6>Username:</h6>
            <h6>Password:</h6>
            <h6>Role:</h6>
          </div>
          <div id="confirm_update_old_account" class="col-5">
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div  id="confirm_update_edit_account" class="col-5">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div id="confirm_update_btn" class="row">
        <div class="col-6">
          <button id="confirm_update_btn_cancel" type="button" class="btn btn-info">Cancel</button>
        </div>
        <div class="col-6">
          <button id="confirm_update_btn_confirm" type="button" class="btn btn-info">Confirm</button>
        </div>
      </div>
    </div>
    </div>
  
    <div id="confirm_delete">
      <div id="div" class="container-fluid">
        <div class="row">
          <div class="col-12 pt-2">
            <h3>Do you want to delete this record?</h3>
            <ul id="show_delete_name" class="list-group">
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button id="confirm_delete_btn_cancel" type="button" class="btn btn-primary">Cancel</button>
          </div>
          <div class="col-6">
            <button id="confirm_delete_btn_confirm" type="button" class="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
    <div id="side_bar_menu_show_status" class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <h3 class="noselect"></h3>
          </div>
        </div>
      </div>
    </div>
    <div id="side_bar_menu">
      <div id="upload-image">
        <div id="title">
          <h4>Upload your image</h4>
          <h4 id="side_bar_menu_upload-image_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
        </div>
        <div id="upload-image-first" class="container">
          <div class="row">
            <div class="col-12">
                <form method="post" id="upload-image-form">
                      <div class="form-group files">
                        <label>Upload Your File </label>
                        <input id="upload-image-input" type="file" class="form-control" multiple="">
                      </div>
                  </form>
            </div>
          </div>
        </div>
        <div id="upload-image-scroll">
        <div id="upload-image-second" class="container-fluid">
           <div class="row">
           
           </div>
      </div>
      <p id="upload-image-line"></p>
        <div id="upload-image-third" class="container-fluid">
          <div class="row">
           
          </div>
       </div>
      </div>
      <div id="upload-image-forth" class="container-fluid">
        <div  class="row">
          <div class="col-3">
          </div>
          <div class="col-4">
            <button id="upload-image_btn_upload" type="button" class="btn btn-primary">Upload Again</button>
          </div>
          <div class="col-5">
            <button id="upload-image_btn_ok" type="button" class="btn btn-primary">Ok</button>
          </div>
         </div>
        </div>
      </div>
      <div id="addtosite" class=""> 
        <div id="title">
          <h4>Add to Site</h4>
          <h4 id="side_bar_menu_announcement_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
        </div>
        <div id="addtosite_container1" class="container-fluid">
          <div class="row">
            <div class="col-3">
              <button id="side_bar_announcement" type="button" class="btn">Announcement</button>
              <button id="side_bar_community" type="button" class="btn">Community</button>
              <button id="side_bar_water_info" type="button" class="btn">Water Info</button>
              <button id="side_bar_rules" type="button" class="btn">Rules</button>
            </div>
            <div id="scroll1" class="col-9">
             <div id="announcement_side_bar_input">
              <h4>Announcement Input</h4>
              <div title="Add image" id="announcement_first_row" class="row">
                <div class="col-4">
                  <form id="annoucement_image_view">
                  <img id="annoucement_image_img"  src="./public/image/pageIMG/insert_picture.jpg" alt="Image" srcset="">
                </form>
                </div>
                <div class="col-8">
                    <h5>My Image Uploads</h5>
                    <p>Upload and add your own images to site.</p>
                </div>
              </div>
              <h6>Select Schedule</h6>
              <div title="Select Time" id="announcement_second_row" class="row">
                <div class="col-4">
                  <img src="./public/image/pageIMG/calendar_picture.jpg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>Select Scheduled Date</h5>
                    <input type="date" id="announcement_calendar"/>
                </div>
              </div>
              <h6>Insert text</h6>
              <div class="row">
                <div class="col-12">
                  <textarea id="announcement_text_area" name="w3review" rows="7" cols="42"></textarea>
                </div>
              </div>
             </div>
             <div id="community_side_bar_input" class="">
              <h4>Community Input</h4>
              <div title="Add image" id="community_first_row" class="row">
                <div class="col-4">
                  <img id="community_image_view" src="./public/image/pageIMG/insert_picture.jpg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>My Image Uploads</h5>
                    <p>Upload and add your own images to site.</p>
                </div>
              </div>
              <h6>Select Schedule</h6>
              <div title="Select Time" id="community_second_row" class="row">
                <div class="col-4">
                  <img src="./public/image/pageIMG/calendar_picture.jpg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>Select Scheduled Date</h5>
                    <input type="date" id="community_calendar"/>
                </div>
              </div>
              <h6>Insert text</h6>
              <div class="row">
                <div class="col-12">
                  <textarea id="community_text_area" name="w3review" rows="7" cols="42"></textarea>
                </div>
              </div>
             </div>
             <div id="water_info_side_bar_input" class="">
              <h4>Community Input</h4>
              <h6>Select Pressure</h6>
              <div>
                <input type="file" accept="image/*" id="water_info__imageUpload" style="display: none;" />
              </div>
              <div title="Add image" id="water_info_first_row" class="row">
                <div class="col-4">
                  <img id="water_info_image_view" src="./public/image/pageIMG/pressure_picture.jpg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>Select the water pressure</h5>
                    <select class="form-control" id="water_info_water_pressure">
                      <option>Select</option>
                      <option>Slow</option>
                      <option>Normal</option>
                      <option>High</option>
                    </select>
                </div>
              </div>
              <h6>Select Phase</h6>
              <div title="Select Open Area" id="water_info_second_row" class="row">
                <div class="col-4">
                  <img src="./public/image/pageIMG/map_picture.jpg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>Select open area</h5>
                    <div id="water_info_second_row_btn_0" class="row">
                      <div class="col-4">
                        <input type="checkbox" id="water_info_second_row_btn_0_input">
                      </div>
                      <div class="col-8">
                        <h5>Open All</h5>
                      </div>
                    </div>
                </div>
                <div class="col-6">
                  <div id="water_info_second_row_btn_1" class="row">
                    <div class="col-4">
                      <input type="checkbox" id="water_info_second_row_btn_1_input">
                    </div>
                    <div class="col-8">
                      <h5>Phase1</h5>
                    </div>
                  </div>
                  <div id="water_info_second_row_btn_2" class="row">
                    <div class="col-4">
                      <input type="checkbox" id="water_info_second_row_btn_2_input">
                    </div>
                    <div class="col-8">
                      <h5>Phase2</h5>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div id="water_info_second_row_btn_3" class="row">
                    <div class="col-4">
                      <input type="checkbox" id="water_info_second_row_btn_3_input">
                    </div>
                    <div class="col-8">
                      <h5>Phase3</h5>
                    </div>
                  </div>
                  <div id="water_info_second_row_btn_4" class="row">
                    <div class="col-4">
                      <input type="checkbox" id="water_info_second_row_btn_4_input">
                    </div>
                    <div class="col-8">
                      <h5>Phase4</h5>
                    </div>
                  </div>
                </div>
              </div>
              <h6>Select Level</h6>
              <div title="Select Time" id="water_info_third_row" class="row">
                <div class="col-4">
                  <img src="./public/image/pageIMG/water_level_Picture.jpeg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>Select water level</h5>
                    <input type="range" id="water_info_water_level" name="water_level" max="10">
                    <h3 id="water_info_water_level_h3"></h3>
                </div>
              </div>
             </div>
  
             <div id="rules_side_bar_input" class="">
              <h4>Rules and regulation Input</h4>
              <div title="Add image" id="rules_side_bar_row" class="row">
                <div class="col-4">
                  <img id="community_image_view" src="./public/image/pageIMG/insert_picture.jpg" alt="Image" srcset="">
                </div>
                <div class="col-8">
                    <h5>My Image Uploads</h5>
                    <p>Upload and add your own images to site.</p>
                </div>
              </div>
              <h6>Insert text</h6>
              <div class="row">
                <div class="col-12">
                  <textarea id="rules_text_area" name="w3review" rows="7" cols="42"></textarea>
                </div>
              </div>
             </div>
  
            </div>
            <div id="community_third_row" class="container-fluid">
            <div  class="row">
              <div class="col-3">
              </div>
              <div class="col-4">
              </div>
              <div class="col-5">
                <button id="side_bar_btn_publish" type="button" class="btn btn-primary">Next</button>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div id="config_table">
        <div id="title">
          <h4>Insert, Filter and Search to Site</h4>
          <h4 id="side_bar_menu_config_table_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-3">
              <button id="side_bar_table_new" type="button" class="btn">New</button>
              <button id="side_bar_table_search" type="button" class="btn">Search</button>
            </div>
            <div id="scroll2" class="col-9">
              <div id="table_new_side_bar_input" >
              <h6>Insert new user</h6>
              <div title="Insert user house no." class="row side_table_row">
                <div class="col-4">
                      <label id="side_table_houseno_label">House no</label>
                </div>
                <div class="col-8">
                    <input type="text" class="form-control" id="side_table_houseno" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="House no">
            </div>
              </div>
              <div title="Insert user first name" class="row side_table_row">
                <div class="col-4">
                      <label id="side_table_firstname_label">First name</label>
                </div>
                <div class="col-8">
                    <input type="text" class="form-control sentence_case" id="side_table_firstname" placeholder="First name">
            </div>
              </div>
              <div title="Insert user middle name" class="row side_table_row">
                <div class="col-4">
                      <label id="side_table_middlename_label">Middle name</label>
                </div>
                <div class="col-8">
                    <input type="text" class="form-control sentence_case" id="side_table_middlename" placeholder="Middle name">
            </div>
              </div>
              <div title="Insert user last name" class="row side_table_row">
                <div class="col-4">
                      <label id="side_table_lastname_label">Last name</label>
                </div>
                <div class="col-8">
                    <input type="text" class="form-control sentence_case" id="side_table_lastname" placeholder="Last name">
            </div>
              </div>
              <div title="Insert user role" class="row side_table_row">
                <div class="col-4">
                      <label id="side_table_role_label">Role</label>
                </div>
                <div class="col-8">
                  <select class="form-control" id="side_table_role">
                    <option value="">Select Role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                  </select>
            </div>
              </div>
              <div title="Insert user rate" class="row side_table_row">
                <div class="col-4">
                      <label id="side_table_role_label">Rate</label>
                </div>
                <div class="col-8">
                    <select class="form-control" id="side_table_rate">
                      <option value="">Select Rate</option>
                      <option value="1">Normal</option>
                      <option value="2">Foreign</option>
                    </select>
            </div>
              </div>
              <div id="side_table_show_more" class="row">
                <div class="col-12">
                    <h5 class="noselect">Add more information</h5>
                </div>
              </div>
              <div id="side_table_input_more">
                <div title="Insert user street" class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_street_label">Street</label>
                  </div>
                  <div class="col-8">
                      <input type="text" class="form-control sentence_case" id="side_table_street" placeholder="Street">
              </div>
                </div>
                <div title="Insert user barangay" class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_brgy_label">Barangay</label>
                  </div>
                  <div class="col-8">
                      <input type="text" class="form-control sentence_case" id="side_table_brgy" placeholder="Barangay">
              </div>
                </div>
                <div title="Insert user municipality" class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_municipal_label">Municipality</label>
                  </div>
                  <div class="col-8">
                      <input type="text" class="form-control sentence_case" id="side_table_municipality" placeholder="Municipality">
              </div>
                </div>
                <div title="Insert user province" class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_province_label">Province</label>
                  </div>
                  <div class="col-8">
                      <input type="text" class="form-control sentence_case" id="side_table_province" placeholder="Province">
              </div>
                </div>
                <div title="Insert user contact no." class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_contactno_label">Contact no.</label>
                  </div>
                  <div class="col-8">
                      <input maxlength="11" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" type="text" class="form-control" id="side_table_contactno" placeholder="Contact no.">
              </div>
                </div>
                <div title="Insert user phase" class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_phase_label">Phase</label>
                  </div>
                  <div class="col-8">
                      <select class="form-control" id="side_table_phase">
                        <option value="">Select Phase</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
              </div>
                </div>
                <div title="Insert user household" class="row side_table_row">
                  <div class="col-4">
                        <label id="side_table_household_label">Household</label>
                  </div>
                  <div class="col-8">
                      <input type="number" aria-valuemin="0" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" id="side_table_household" placeholder="Household">
              </div>
                </div>
                
              </div>
            </div>
            <div id="table_search_side_bar_input">
              <h6>Search user information</h6>
              <div title="Search" class="row side_table_row">
                <div class="col-12">
                  <input id="side_table_search1" type="text" class="form-control" placeholder="Insert bellow:" disabled>
                  <input id="side_table_search2" type="text" class="form-control" placeholder="Search">
                </div>
              </div>
              <div id="table_search_side_bar_input_btn_more" class="row">
                <div class="col-12">
                    <h5 class="noselect">Advance search</h5>
                </div>
              </div>
              <div id="table_search_side_bar_input_show">
                <div id="table_search_side_bar_input_show_title" class="row">
                  <div class="col-2">
                    <h6>ID</h6>
                  </div>
                  <div class="col-4">
                    <h6>House N#</h6>
                  </div>
                  <div class="col-6">
                    <h6>Name</h6>
                  </div>
                </div>
                <div id="table_search_side_bar_input_show_scroll">
                </div>
                
              </div>
              <div id="search_all_options">
              <h6>Name details</h6>
              <div title="Select"  class="row side_table_row">
                  <div class="col-4">
                    <input id="side_table_search_firstname" type="text" class="form-control" placeholder="First">
                  </div>
                  <div class="col-4">
                    <input id="side_table_search_middlename" type="text" class="form-control"  placeholder="Middle">
                  </div>
                  <div class="col-4">
                    <input id="side_table_search_lastname"  type="text" class="form-control" placeholder="Last">
                  </div>
              </div>
              <h6>Location details</h6>
              <div title="Select" class="row side_table_row">
                <div class="col-4">
                  <input id="side_table_search_houseno" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="House no.">
                </div>
                <div class="col-4">
                  <input id="side_table_search_street" type="text" class="form-control" placeholder="Street">
                </div>
                <div class="col-4">
                  <input id="side_table_search_brgy" type="text" class="form-control"  placeholder="Barangay">
                </div>
              </div>
              <h6>More details</h6>
              <div title="Select" class="row side_table_row">
                <div class="col-4">
                  <select class="form-control" id="side_table_search_phase">
                    <option value="none">Phase</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="col-4">
                  <input id="side_table_search_household" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Household">
                </div>
                <div class="col-4 p-0">
                  <input id="side_table_search_contactno" maxlength="11" type="text" class="form-control"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Contact no.">
                </div>
              </div>
              <h6>Rate</h6>
              <div title="Select" class="row side_table_row">
                <div class="col-6">
                  <input id="side_table_search_rate" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Rate">
                </div>
              </div>
              <h6>Number of showing rows</h6>
              <div title="Select" class="row side_table_row">
                <div class="col-8">
                  <input type="range" id="side_table_search_input_rows_slider" name="water_level" max="1000">
                </div>
                <div class="col-4">
                  <input id="side_table_search_input_rows" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="1-1000">
                </div>
              </div>
            </div>
  
            </div>
          </div>
          </div>
        </div>
        <div id="config_table_publish" class="container-fluid">
          <div  class="row">
            <div class="col-3">
            </div>
            <div class="col-4">
            </div>
            <div class="col-5">
              <button id="config_table_go" type="button" class="btn btn-primary">Go</button>
            </div>
           </div>
          </div>
      </div>
      <div id="edit_account_information">
        <div id="title">
          <h4>Update information</h4>
          <h4 id="edit_account_information_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
        </div>
        <div id="edit_account_information_scroll" class="container-fluid">
          <div class="row">
            <div class="col-6">
              <h6>User information</h6>
              <div id="information_input">
              <div>
                <input id="edit_account_information_firstname" type="text" class="form-control" placeholder="First name">
              </div>
              <div>
                <input id="edit_account_information_middlename" type="text" class="form-control" placeholder="Middle name">
              </div>
             <div>
              <input id="edit_account_information_lastname" type="text" class="form-control" placeholder="Last name">
             </div>
            <div>
              <input id="edit_account_information_houseno" type="text" class="form-control" oninput="this.value = this.value.replace(/\s/g, '');" placeholder="House no.">
            </div>
             <div>
              <input id="edit_account_information_street" type="text" class="form-control" placeholder="Street">
             </div>
              <div>
                <input id="edit_account_information_brgy" type="text" class="form-control" placeholder="Barangay">
              </div>
             <div>
              <input id="edit_account_information_municipality" type="text" class="form-control" placeholder="Municipality">
             </div>
             <div>
              <input id="edit_account_information_province" type="text" class="form-control" placeholder="Province">
             </div>
             <div>
              <input id="edit_account_information_contactno" maxlength="11" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Contactno">
             </div>
              <div>
                <select class="form-control" id="edit_account_information_phase">
                  <option>Phase 1</option>
                  <option>Phase 2</option>
                  <option>Phase 3</option>
                  <option>Phase 4 </option>
                </select>
              </div>
             <div>
              <input id="edit_account_information_household" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Household">
             </div>
             <div>
              <input id="edit_account_information_rate" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Rate">
             </div>
            </div>
            </div>
            <div class="col-6">
              <h6>Account information</h6>
              <div id="account_information_input">
                <div>
                  <input id="edit_account_information_username" type="text" class="form-control" placeholder="Username">
                </div>
               <div>
                <input id="edit_account_information_password" type="text" class="form-control" placeholder="Password">
               </div>
               <div>
                <select class="form-control" id="edit_account_information_role">
                  <option>Admin</option>
                  <option>User</option>
                </select>
               </div>
              </div>
              <div id="account_information_input_joinIN" class="col-12">
                <h5></h5>
              </div>
            </div>
          </div>
        </div>
        <div id="edit_account_information_update" class="container-fluid">
          <div  class="row">
            <div class="col-7">
            </div>
            <div class="col-5">
              <button id="edit_account_information_btn_update" type="button" class="btn btn-primary">Update</button>
            </div>
           </div>
          </div>
      </div>
      <div id="payment_side_bar">
        <div id="title">
          <h4>Search and edit payment</h4>
          <h4 id="side_bar_menu_payment_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-3">
              <button id="payment_side_bar_search" type="button" class="btn">Search</button>
              <button id="payment_side_bar_update" type="button" class="btn">Update</button>
            </div>
            <div id="scroll3" class="col-9">
              <div id="payment_side_bar_update_input" >
              <h6>Update payment information</h6>
              <div>
                <select class="form-control" id="payment_side_bar_update_method">
                  <option>Cash</option>
                  <option>GCash</option>
                </select>
              </div>
              <div>
                <select class="form-control" id="payment_side_bar_update_confimation">
                  <option value="" disabled selected>Payment Confirmation</option>
                  <option></option>
                  <option>Cancel</option>
                  <option>Edit</option>
                </select>
                <div id="flex_payment_calendar">
                <input type="date" id="payment_side_bar_calendar"/>
                <h4 id="payment_side_bar_calendar_exit"><i class="fa-solid fa-xmark"></i></h4>
              </div>
              </div>
             <div>
              <input id="edit_account_information_amount" type="text" class="form-control" placeholder="Amount">
             </div>
            </div>
            <div id="payment_side_bar_search_input">
              <h6>Search bills information</h6>
              <div title="Search" id="side_payment_1_row" class="row">
                <div class="col-12">
                  <input id="side_payment_search1" type="text" class="form-control" placeholder="Insert bellow:" disabled>
                  <input id="side_payment_search2" type="text" class="form-control"  placeholder="Search">
                </div>
              </div>
              <div id="payment_side_bar_search_input_btn_more" class="row">
                <div class="col-12">
                    <h5 class="noselect">Advance search</h5>
                </div>
              </div>
              <div id="payment_search_side_bar_input_show">
                <div id="payment_search_side_bar_input_show_title" class="row">
                  <div class="col-2">
                    <h6>ID</h6>
                  </div>
                  <div class="col-4">
                    <h6>House N#</h6>
                  </div>
                  <div class="col-6">
                    <h6>Name</h6>
                  </div>
                </div>
                <div id="payment_search_side_bar_input_show_scroll">
                </div>
                
              </div>
              <div id="payment_search_all_options">
              <h6>Name details</h6>
              <div title="Select" id="side_payment_2_row" class="row">
                  <div class="col-4">
                    <input id="side_payment_search_firstname" type="text" class="form-control" placeholder="First">
                  </div>
                  <div class="col-4">
                    <input id="side_payment_search_middlename" type="text" class="form-control"  placeholder="Middle">
                  </div>
                  <div class="col-4">
                    <input id="side_payment_search_lastname"  type="text" class="form-control" placeholder="Last">
                  </div>
              </div>
              <h6>Location details</h6>
              <div title="Select" id="side_payment_3_row" class="row">
                <div class="col-4">
                  <input id="side_payment_search_houseno" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="House no.">
                </div>
                <div class="col-4">
                  <input id="side_payment_search_street" type="text" class="form-control" placeholder="Street">
                </div>
                <div class="col-4">
                  <input id="side_payment_search_brgy" type="text" class="form-control"  placeholder="Barangay">
                </div>
              </div>
              <h6>More details</h6>
              <div title="Select" id="side_payment_4_row" class="row">
                <div class="col-4">
                  <select class="form-control" id="side_payment_search_phase">
                    <option value="none">Phase</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="col-4">
                  <input id="side_payment_search_household" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Household">
                </div>
                <div class="col-4 p-0">
                  <input id="side_payment_search_contactno" maxlength="11" type="text" class="form-control"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Contact no.">
                </div>
              </div>
              <h6>Rate</h6>
              <div title="Select" id="side_payment_5_row" class="row">
                <div class="col-6">
                  <input id="side_payment_search_rate" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Rate">
                </div>
              </div>
              <h6>Number of showing rows</h6>
              <div title="Select" id="side_payment_6_row" class="row">
                <div class="col-8">
                  <input type="range" id="side_payment_search_input_rows_slider" name="water_level" max="1000">
                </div>
                <div class="col-4">
                  <input id="side_payment_search_input_rows" type="text" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="1-1000">
                </div>
              </div>
            </div>
  
            </div>
          </div>
          </div>
        </div>
        <div id="side_payment_publish" class="container-fluid">
          <div  class="row">
            <div class="col-3">
            </div>
            <div class="col-4">
            </div>
            <div class="col-5">
              <button id="side_payment_go" type="button" class="btn btn-primary">Go</button>
            </div>
           </div>
          </div>
      </div>
    </div>
    <div id="header_menu_background"></div>
    <div id="header" class="container-fluid">
      <div id="header_menu">
        <div id="header_menu_container" class="container-fluid" style="display: block;">
          <h5 id="title">Menu</h5>
          <div id="header_menu_container_btn1" class="row">
            <div class="col-3">
              <i class="fa-regular fa-circle-user"></i>
            </div>
            <div class="col-9">
              <h5>Personal Information</h5>
            </div>
          </div>
          <div id="header_menu_container_btn2" class="row">
            <div class="col-3">
              <i class="fa-regular fa-comment-dots"></i>
            </div>
            <div class="col-9">
              <h5>Feedback</h5>
            </div>
          </div>
          <div id="header_menu_container_btn3" class="row">
            <div class="col-3">
              <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <div class="col-9">
              <h5>Logout</h5>
            </div>
          </div>
          <div id="header_menu_container_btn4" class="row">
            <div class="col-12">
              <h5>Close</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <a title="Home" href=""><img src="./public/image/pageIMG/LOGO.png" alt="" srcset=""></a>
        </div>
        <div class="col-8">
  
        </div>
        <div id="header_account_notification" class="col-1 d-none">
          <h5><i class="fa-solid fa-bell"></i><span class=""></span></h5>
        </div>
        <div id="header_account_img" class="col-1">
          <img src="" alt="" srcset="">
        </div>
      </div>
    </div>
    <div id="menu_btn_background"></div>
     <div id="main" class="container-fluid">
      <div class="row">
        <div id="main_btn" class="col-2">
          <div id="home" title="Home" class="row navigation_btn nav_active">
            <div class="col-6 p-0">
              <i class="fa-solid fa-house"></i>
            </div>
            <div class="col-6 p-0">
              <h5 class="text-left">Home</h5>
            </div>
          </div>
          <div id="table"  title="Table" class="row navigation_btn">
            <div class="col-6 p-0">
              <i class="fa-solid fa-table"></i>
            </div>
            <div class="col-6 p-0">
              <h5 class="text-left">Users</h5>
            </div>
          </div>
          <div  id="payment" title="Payment" class="row navigation_btn">
            <div class="col-6 p-0">
              <i class="fa-solid fa-cash-register"></i>
            </div>
            <div class="col-6 p-0">
              <h5 class="text-left">Payment</h5>
            </div>
          </div>
          <div  id="community" title="Community" class="row navigation_btn">
            <div class="col-6 p-0">
              <i class="fa-solid fa-people-roof"></i>
            </div>
            <div class="col-6 p-0">
              <h5 class="text-left">Community</h5>
            </div>
          </div>
        </div>
        <div id="main_body" class="col-10 p-0">
          <div id="side_bar_background"></div>
          <div id="home_page" class="container-fluid">
            <div class="row">
                <div id="announce_show" class="col-lg-6 ">
                    <div id="main_announcement" class="">
                        <div class="container-fluid">
                            <div class="row">
                              <div id="main_announcement_btn_menu" class="container-fluid">
                                <h5 id="title">Menu</h5>
                                <div id="main_announcement_btn_menu_1" class="row">
                                  <div class="col-3">
                                    <i class="fa-solid fa-plus"></i>
                                  </div>
                                  <div class="col-9">
                                    <h5>New</h5>
                                  </div>
                                </div>
                                <div id="main_announcement_btn_menu_2" class="row">
                                  <div class="col-3">
                                    <i class="fa-solid fa-cloud"></i>
                                  </div>
                                  <div class="col-9">
                                    <h5>Your save</h5>
                                  </div>
                                </div>
                                <div id="main_announcement_btn_menu_3" class="row">
                                  <div class="col-3">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                  </div>
                                  <div class="col-9">
                                    <h5>Default</h5>
                                  </div>
                                </div>
                                <div id="main_announcement_btn_menu_4" class="row">
                                  <div class="col-12">
                                    <h5>Close</h5>
                                  </div>
                                </div>
                              </div>
                                <div class="col-3">
                                <p id="announcement_time"></p>
                                </div>
                                <div class="col-6">
                                    <h1 id="announcement_title">Payment Schedule</h1>
                                </div>
                                <div class="col-3">
                                    <p id="announcement_menu"><i class="fa-solid fa-bars"></i></p>
                                </div>
                            </div>
                            <div class="row">
                              <div class="col-1">
                                <p title="Next left" id="announcement_image_show_div_btn_left"><i class="fa-solid fa-chevron-left"></i></p>
                              </div>
                              <div id="announcement_image_show_div" class="col-10">
                                  <p id="announcement_image_show_div_img_count"></p>
                                <div id="announcement_image_show_div_container">
    
                                </div>
                              </div>
                              <div class="col-1">
                                <p title="Next right" id="announcement_image_show_div_btn_right"><i class="fa-solid fa-chevron-right"></i></p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-1">
                              </div>
                              <div class="col-10">
                                <p id="announcement_paragraph"></p>
                              </div>
                              <div class="col-1">
                              </div>
                            </div>
                        </div>
                        <p id="announcement_sched"></p>
                    </div>
                </div>
                <div id="water_show" class="col-lg-6">
                    <div id="water_info_page">
                        <div id="water_info" class="container-fluid">
                          <div class="row">
                            <div class="col-3">
                              <p id="water_info_time"></p>
                            </div>
                            <div class="col-6">
                              <h1 id="water_info_title">Water Information</h1>
                            </div>
                            <div class="col-3">
                              <p id="water_info_menu"><i class="fa-solid fa-bars"></i></p>
                            </div>
                          </div>
                        </div>
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-6">
                              <div id="water_info_phase1" class="row">
                                <div class="col-4">
                                    
                                </div>
                                <div class="col-8">
                                  <h5 id="phase1_title">Phase1</h5>
                                    <h5 id="phase1_time"></h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div id="water_info_phase2" class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-8">
                                  <h5 id="phase2_title">Phase2</h5>
                                    <h5 id="phase2_time"></h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div id="water_info_phase3" class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-8">
                                  <h5 id="phase3_title">Phase3</h5>
                                    <h5 id="phase3_time"></h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div id="water_info_phase4" class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-8">
                                  <h5 id="phase4_title">Phase4</h5>
                                    <h5 id="phase4_time"></h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div id="water_info_pressure" class="row">
                                <div class="col-12">
                                  <h1 id="pressure_title">Pressure</h1>
                                    <img src="./public/image/pageIMG/pressure_gauge.png" alt="">
                                    <p id="pressure_status"></p>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div id="water_info_level" class="row">
                                <div class="col-12">
                                  <h1 id="level_title">Level</h1>
                                    <img src="./public/image/pageIMG/waterlvl.png" alt="">
                                    <p id="level_status"></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="table_page">
            <div id="table_page_info" class="cotainer-fluid">
                <div class="row">
                    <div class="col-3">
                        <div id="table_online" class="row">
                          <div class="col-6">
                            <h6 class="text-left">Online:</h6>
                          </div>
                          <div class="col-6">
                            <h6 id="table_online_count"> 100</h6>
                          </div>
                        </div>
                        <div id="table_user" class="row">
                          <div class="col-6">
                            <h6 class="text-left">Total User:</h6>
                          </div>
                          <div class="col-6">
                            <h6 id="table_user_count"></h6>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                      <div id="table_phase1" class="row">
                        <div class="col-6">
                          <h6 class="text-left">Phase1:</h6>
                        </div>
                        <div class="col-6">
                          <h6 id="table_phase1_count"></h6>
                        </div>
                      </div>
                      <div id="table_phase2" class="row">
                        <div class="col-6">
                          <h6 class="text-left">Phase2:</h6>
                        </div>
                        <div class="col-6">
                          <h6 id="table_phase2_count"></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div id="table_phase3" class="row">
                        <div class="col-6">
                          <h6 class="text-left">Phase3:</h6>
                        </div>
                        <div class="col-6">
                          <h6 id="table_phase3_count"></h6>
                        </div>
                      </div>
                      <div id="table_phase4" class="row">
                        <div class="col-6">
                          <h6 class="text-left">Phase4:</h6>
                        </div>
                        <div class="col-6">
                          <h6 id="table_phase4_count"></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                    </div>
                </div>
            </div>
                <div id="table_page_btn" class="container-fluid">
                    <div class="row">
                      <div class="col-1">
                        <button id="table_delete_btn" title="Delete" type="button" class="btn"><i class="fa-solid fa-trash-can"></i></button>
                      </div>
                      <di class="col-2">
                        <button id="table_btn_remove_search" title="Remove search" type="button" class="btn">Remove Search</button>
                      </di>
                      <di class="col-6">
  
                      </di>
                      <div class="col-1">
                        <button id="table_btn_new" type="button" class="btn btn-light">New</button>
                      </div>
                      <div class="col-1">
                        <button  id="table_btn_search" type="button" class="btn btn-light">Search</button>
                      </div>
                      <div class="col-1">
                        <select title="Number of rows" class="form-control" id="table_btn_show_row">
                          <option>10</option>
                          <option>20</option>
                          <option>ALL</option>
                        </select>
                      </div>
                    </div>
                </div>
            <div id="table_page_scroll" class="container-fluid">
              <div class="row">
                <div class="col-12 p-0">
                  <table id="table_table" class="table table-bordered">
                    <thead>
                      <tr>
                        <th><i id="select_all_tr" class="fa-solid fa-check"></i></th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phase</th>
                        <th>Rate</th>
                        <th>Household</th>
                        <th>Contact No.</th>
                        <th>More</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
    
        <div id="payment_page">
                <div id="payment_info" class="cotainer-fluid">
                    <div class="row">
                        <div class="col-md-3">
                          <div id="payment_table_online" class="row">
                            <div class="col-6">
                              <h6 class="text-left">Online:</h6>
                            </div>
                            <div class="col-6">
                              <h6 id="payment_table_online_count">100</h6>
                            </div>
                          </div>
                            <div id="payment_table_user" class="row">
                              <div class="col-6">
                                <h6 class="text-left">Total User:</h6>
                              </div>
                              <div class="col-6">
                                <h6 id="payment_table_user_count"></h6>
                              </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div id="payment_table_phase1" class="row">
                              <div class="col-6">
                                <h6 class="text-left">Phase1:</h6>
                              </div>
                              <div class="col-6">
                                <h6 id="payment_table_phase1_count"></h6>
                              </div>
                            </div>
                            <div id="payment_table_phase2" class="row">
                              <div class="col-6">
                                <h6 class="text-left">Phase2:</h6>
                              </div>
                              <div class="col-6">
                                <h6 id="payment_table_phase2_count"></h6>
                              </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                          <div id="payment_table_phase3" class="row">
                            <div class="col-6">
                              <h6 class="text-left">Phase3:</h6>
                            </div>
                            <div class="col-6">
                              <h6 id="payment_table_phase3_count"></h6>
                            </div>
                          </div>
                          <div id="payment_table_phase4" class="row">
                            <div class="col-6">
                              <h6 class="text-left">Phase4:</h6>
                            </div>
                            <div class="col-6">
                              <h6 id="payment_table_phase4_count"></h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div id="payment_table_summary" class="row">
                            <div class="col-8">
                              <h6 class="text-left">Paid Summary:</h6>
                            </div>
                            <div class="col-4">
                              <h6 id="payment_table_summary_count"></h6>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div id="payment_page_btn" class="container-fluid">
                  <div class="row">
                    <div class="col-1">
                      <select class="form-control" id="payment_year">
                      </select>
                    </div>
                    <div class="col-2">
                      <p id="payment_btn_collect" title="Announcement">Collect Payment</p>
                    </div>
                    <div class="col-5">
      
                    </div>
                    <div class="col-2">
                      <button id="payment_btn_remove_search" title="Remove search" type="button" class="btn">Remove Search</button>
                    </div>
                    <div class="col-1">
                      <button  id="payment_table_btn_search" type="button" class="btn btn-light">Search</button>
                    </div>
                    <div class="col-1">
                      <select title="Number of rows" class="form-control" id="payment_table_btn_show_row">
                        <option>10</option>
                        <option>20</option>
                        <option>ALL</option>
                      </select>
                    </div>
                  </div>
                 </div>
                <div id="payment_year_btn" class="container-fluid">
                  <div class="row">
                    <div id="payment_btn_year_j_count" title="Total number of not paid" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_f_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_m_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_a_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_ma_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_ju_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_jul_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_au_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_s_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_o_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_n_count" class="col-1">
                      <h6></h6>
                    </div>
                    <div id="payment_btn_year_d_count" class="col-1">
                      <h6></h6>
                    </div>
                  </div>
                  <div id="payment_year_btn2" class="row">
                    <div id="payment_btn_year_j" class="col-1 payment_btn_year_hover">
                      <h6>January</h6>
                    </div>
                    <div id="payment_btn_year_f" class="col-1 payment_btn_year_hover">
                      <h6>February</h6>
                    </div>
                    <div id="payment_btn_year_m" class="col-1 payment_btn_year_hover">
                      <h6>March</h6>
                    </div>
                    <div id="payment_btn_year_a" class="col-1 payment_btn_year_hover">
                      <h6>April</h6>
                    </div>
                    <div id="payment_btn_year_ma" class="col-1 payment_btn_year_hover">
                      <h6>May</h6>
                    </div>
                    <div id="payment_btn_year_ju" class="col-1 payment_btn_year_hover">
                      <h6>June</h6>
                    </div>
                    <div id="payment_btn_year_jul" class="col-1 payment_btn_year_hover">
                      <h6>July</h6>
                    </div>
                    <div id="payment_btn_year_au" class="col-1 payment_btn_year_hover">
                      <h6>August</h6>
                    </div>
                    <div id="payment_btn_year_s" class="col-1 payment_btn_year_hover">
                      <h6>September</h6>
                    </div>
                    <div id="payment_btn_year_o" class="col-1 payment_btn_year_hover">
                      <h6>October</h6>
                    </div>
                    <div id="payment_btn_year_n" class="col-1 payment_btn_year_hover">
                      <h6>November</h6>
                    </div>
                    <div id="payment_btn_year_d" class="col-1 payment_btn_year_hover">
                      <h6>December</h6>
                    </div>
                  </div>
                </div>
                <div id="payment_page_scroll" class="container-fluid">
                  <div class="row">
                    <div class="col-12 p-0">
                      <table id="payment_table" class="table table-bordered">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Payment Method</th>
                            <th>Confirmation</th>
                            <th>Amount</th>
                            <th>More</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
        </div>
        <div id="community_page" class="container-fluid">
          <div class="row">
              <div id="community_page_show" class="col-lg-6 ">
                 <div id="community_page_show_title" class="col-12">
                    <h4>Community Topic</h4>
                 </div>
                 <div id="community_page_show_row" class="col-12">
                  
                </div>
              </div>
              <div id="community_page_rules_show" class="col-lg-6">
                <div id="community_page_rules_show_title" class="col-12">
                  <h4>Rules and Regulations</h4>
               </div>
               <div id="community_page_rules_show_row" class="col-12">
                
              </div>
              </div>
          </div>
      </div>
        </div>
      </div>
     </div>
  </body>
  <script src="./public/js/adminpage.js"></script>
  <script src="./public/js/jquery.js"></script>
  </html>