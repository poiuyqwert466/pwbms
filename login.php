<?php
   session_start();  
   if(!isset($_SESSION["username"])){
     header("location:login.php");
   }else{
     if($_SESSION["role"]=="Admin"){
       header("location:admin.php");
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
    <link rel="stylesheet" href="./public/css/login.css">
    <title>Login</title>
</head>
<body>
    <div id="show_status" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div>
              <h3 class="noselect"></h3>
            </div>
          </div>
        </div>
      </div>
    <div id="forgot_password">
        <div id="forgot_password_container" class="container-fluid">
            <div class="row">
                <div class="col-12">
                  <h4 id="forgot_password_container_title">Forgot Password?</h4>
                  <h4 id="forgot_password_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
                </div>
              </div>
              <div id="forgot_password_container_scroll">
                <div id="forgot_password_container_scroll1">
                    <h5>Search your username/phone#</h5>
                <input  type="text" class="form-control" id="forgot_username" placeholder="Username/Phone#">
                <button id="forgot_password_container_scroll1_btn_search" type="button" class="btn btn-primary">Search</button>
                </div>
                <div id="forgot_password_container_scroll2">
                    <div id="forgot_password_container_scroll2_show">
                        
                    </div>
                   <button id="forgot_password_container_scroll2_btn_none" type="button" class="btn btn-danger">None</button>
                </div>
                <div id="forgot_password_container_scroll3">
                    <h3>What's the code?</h3>
                    <h5 id="forgot_password_container_scroll3_number_show"></h5>
                <div class="row">
                    <div class="col-2">
                        <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"  type="text" class="form-control" id="forgot_password_container_scroll3_input1" placeholder="0"> 
                    </div>
                    <div class="col-2">
                        <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"  type="text" class="form-control" id="forgot_password_container_scroll3_input2" placeholder="0"> 
                    </div>
                    <div class="col-2">
                        <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"  type="text" class="form-control" id="forgot_password_container_scroll3_input3" placeholder="0"> 
                    </div>
                    <div class="col-2">
                        <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" class="form-control" id="forgot_password_container_scroll3_input4" placeholder="0"> 
                    </div>
                    <div class="col-2">
                        <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" class="form-control" id="forgot_password_container_scroll3_input5" placeholder="0"> 
                    </div>
                    <div class="col-2">
                        <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" class="form-control" id="forgot_password_container_scroll3_input6" placeholder="0"> 
                    </div>
                </div>
                <h6 id="forgot_password_container_scroll3_btn_resend">Resend code<span id="forgot_password_container_scroll3_btn_resendCOUNT"></span></h6>
                <button id="forgot_password_container_scroll3_btn_go" type="button" class="btn btn-primary">Go</button>
                </div>
                <div id="forgot_password_container_scroll4">
                <h3>New password</h3>
                <div id="forgot_password_container_scroll4_input_div1">
                <i id="forgot_password_container_scroll4_input_div1_btn_see" class="fa-solid fa-eye-slash"></i>
                <input type="password" class="form-control" id="forgot_password_container_scroll4_input1" placeholder="Password (min 8 character)"> 
                </div>
                <div id="forgot_password_container_scroll4_input_div2">
                    <i id="forgot_password_container_scroll4_input_div2_btn_see" class="fa-solid fa-eye-slash"></i>
                    <input type="password" class="form-control" id="forgot_password_container_scroll4_input2" placeholder="Confirm Password (min 8 character)"> 
                    </div>
                <button id="forgot_password_container_scroll4_btn_go" type="button" class="btn btn-primary">Go</button>
                </div>
              </div>
        </div>
    </div>
    <div id="signup">
        <div id="signup_container_alert" class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h4>Do you realy want to change your number?</h4>
                    <h3 id="signup_container_alert_show"></h3>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button id="signup_container_cancel" type="button" class="btn btn-primary">Cancel</button>
                </div>
                <div class="col-6">
                    <button id="signup_container_ok" type="button" class="btn btn-primary">Ok</button>
                </div>
            </div>
          </div>
        <div id="signup_container" class="container-fluid">
            <div class="row">
                <div class="col-12">
                  <h4 id="signup_container_title">Sign Up</h4>
                  <h4 id="signup_container_btn_exit"><i class="fa-solid fa-xmark"></i></h4>
                </div>
              </div>
              <div id="signup_container1">
                <div class="row">
                    <div class="col-12">
                        <h5>Name information</h5>
                    </div>
                    <div class="col-md-4">
                        <h6>First Name</h6>
                        <input id="signup_container_input1" type="text" class="form-control sentence_case" placeholder="First Name">
                    </div>
                    <div class="col-md-4">
                        <h6>Middle Name</h6>
                        <input id="signup_container_input2" type="text" class="form-control sentence_case" placeholder="Middle Name">
                    </div>
                    <div class="col-md-4">
                        <h6>Last Name</h6>
                        <input id="signup_container_input3" type="text" class="form-control sentence_case" placeholder="Last Name">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                        <h5>Address information</h5>
                    </div>
                    <div class="col-md-4">
                        <i id="signup_container_input4_status" class=""></i>
                        <h6>House N#</h6>
                        <input oninput="this.value = this.value.replace(/(\..*?)\..*/g, '$1').replace(/\s/g,'');" id="signup_container_input4" type="text" class="form-control sentence_case" placeholder="House N#">
                    </div>
                    <div class="col-md-4">
                        <h6>Street</h6>
                        <input id="signup_container_input5" type="text" class="form-control sentence_case" placeholder="Street">
                    </div>
                    <div class="col-md-4">
                        <h6>Barangay</h6>
                        <input id="signup_container_input6" type="text" class="form-control sentence_case" placeholder="Barangay">
                    </div>
                    <div class="col-md-4">
                        <h6>Municipality</h6>
                        <input id="signup_container_input7" type="text" class="form-control sentence_case" placeholder="Municipality">
                    </div>
                    <div class="col-md-4">
                        <h6>Province</h6>
                        <input id="signup_container_input8" type="text" class="form-control sentence_case" placeholder="Province">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                        <h5>More details</h5>
                    </div>
                    <div class="col-md-4">
                        <h6>Phase</h6>
                        <select class="form-control" id="signup_container_input9">
                            <option value="">Phase</option>
                            <option value="1">Phase 1</option>
                            <option value="2">Phase 2</option>
                            <option value="3">Phase 3</option>
                            <option value="4">Phase 4 </option>
                          </select>
                    </div>
                    <div class="col-md-4">
                        <h6>Household Count</h6>
                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" id="signup_container_input10" type="text" class="form-control" placeholder="Household Count">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                    </div>
                    <div class="col-4">
                        <button id="signup_container_btn_next" type="button" class="btn btn-primary">Next</button>
                    </div>
                  </div>
              </div>
              <div id="signup_container2">
                <div class="row">
                    <div class="col-12">
                        <h5>Account information</h5>
                    </div>
                    <div class="col-md-6">
                        <i id="signup_container2_input1_status" class=""></i>
                        <h6>Username</h6>
                        <input id="signup_container2_input1" type="text" class="form-control" placeholder="Username">
                    </div>
                    <div class="col-md-6"></div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <i id="signup_container2_input2_btn_see" class="fa-solid fa-eye-slash"></i>
                        <h6>Password (min 8 char)</h6>
                        <input id="signup_container2_input2" type="password" class="form-control" placeholder="Password (min 8)">
                    </div>
                    <div class="col-md-6">
                        <i id="signup_container2_input2_btn_see2" class="fa-solid fa-eye-slash"></i>
                        <h6>Confirm Password (min 8 char)</h6>
                        <input id="signup_container2_input3" type="password" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button id="signup_container2_btn_back" type="button" class="btn btn-primary">Back</button>
                    </div>
                    <div class="col-6">
                        <button id="signup_container2_btn_next" type="button" class="btn btn-primary">Next</button>
                    </div>
                </div>
              </div>
              <div id="signup_container3">
                <h3>Verify your cellphone number.</h3>
            <div id="signup_container3_show_input1" class="row">
                <div class="col-12">
                    <i id="signup_container3_show_input1_input1_status" class=""></i>
                    <input maxlength="11" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" id="signup_container3_show_input1_input1" type="text" class="form-control" placeholder="Cellphone N#">
                </div>
                <div class="col-6">
                    <button id="signup_container3_show_input1_btn_back" type="button" class="btn btn-primary">Back</button>
                </div>
                <div class="col-6">
                    <button id="signup_container3_show_input1_btn_confirm" type="button" class="btn btn-primary">Confirm</button>
                </div>
            </div>
                <div id="signup_container3_show_input2">
                    <h5 id="signup_container3_number_show"></h5>
            <div class="row">
                <div class="col-2">
                    <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"  type="text" class="form-control" id="signup_container3_input1" placeholder="0"> 
                </div>
                <div class="col-2">
                    <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"  type="text" class="form-control" id="signup_container3_input2" placeholder="0"> 
                </div>
                <div class="col-2">
                    <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"  type="text" class="form-control" id="signup_container3_input3" placeholder="0"> 
                </div>
                <div class="col-2">
                    <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" class="form-control" id="signup_container3_input4" placeholder="0"> 
                </div>
                <div class="col-2">
                    <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" class="form-control" id="signup_container3_input5" placeholder="0"> 
                </div>
                <div class="col-2">
                    <input maxlength="1" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" class="form-control" id="signup_container3_input6" placeholder="0"> 
                </div>
            </div>
            <h6 id="signup_container3_btn_resend">Resend code<span id="signup_container3_btn_resendCOUNT"></span></h6>  
            <div class="row">
                <div class="col-6">
                    <button id="signup_container3_show_input2_btn_back" type="button" class="btn btn-primary">Back</button>
                </div>
                <div class="col-6">
                    <button id="signup_container3_show_input2_btn_confirm" type="button" class="btn btn-primary">Confirm</button>
                </div>
            </div>
        </div>
            </div>
            <div id="signup_container4">
                <div class="row">
                    <div class="col-12">
                        <h3>Final Check</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5>Name details</h5>
                    </div>
                    <div class="col-4">
                        <h6>First Name:</h6>
                        <h4 id="signup_container4_showDATA1"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Middle Name:</h6>
                        <h4 id="signup_container4_showDATA2"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Last Name:</h6>
                        <h4 id="signup_container4_showDATA3"></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5>Address details</h5>
                    </div>
                    <div class="col-4">
                        <h6>House N#:</h6>
                        <h4 id="signup_container4_showDATA4"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Street:</h6>
                        <h4 id="signup_container4_showDATA5"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Barangay:</h6>
                        <h4 id="signup_container4_showDATA6"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Municipality:</h6>
                        <h4 id="signup_container4_showDATA7"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Province:</h6>
                        <h4 id="signup_container4_showDATA8"></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5>More details</h5>
                    </div>
                    <div class="col-4">
                        <h6>Phase:</h6>
                        <h4 id="signup_container4_showDATA9"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Household Count:</h6>
                        <h4 id="signup_container4_showDATA10"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Cellphone N#:</h6>
                        <h4 id="signup_container4_showDATA11"></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5>Account details</h5>
                    </div>
                    <div class="col-4">
                        <h6>Username:</h6>
                        <h4 id="signup_container4_showDATA12"></h4>
                    </div>
                    <div class="col-4">
                        <h6>Password:</h6>
                        <i id="signup_container4_showDATA13_btn_see" class="fa-solid fa-eye-slash"></i>
                        <h4 id="signup_container4_showDATA13"></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button id="signup_container4_btn_back" type="button" class="btn btn-primary">Back</button>
                    </div>
                    <div class="col-6">
                        <button id="signup_container4_btn_confirm" type="button" class="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="login_container" class="container-fluid">
        <div class="row">
            <div id="login_container1" class="col-md-6">
                <img src="./public/image/pageIMG/LOGO.png" alt="logo">
                <h4>"Peas Water Association"</h4>
                <h4>First Water management system for Sitio Peas</h4>
            </div>
            <div id="login_container2" class="col-md-6">
                <div id="login_container2_form">
                    <input  type="text" class="form-control" id="login_username" placeholder="Username">
                    <div id="login_container2_form_pass">
                    <i id="login_container2_form_btn_see" class="fa-solid fa-eye-slash"></i>
                    <input  type="password" class="form-control" id="login_password" placeholder="Password">
                    </div>
                    <button id="login_container2_form_btn_login" type="button" class="btn btn-primary">Login</button>
                    <h6 id="login_container2_form_btn_forgot">Forgot password?</h6>
                    <button id="login_container2_form_btn_signup" type="button" class="btn">Signup</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="./public/js/login.js"></script>
<script src="./public/js/jquery.js"></script>
</html>