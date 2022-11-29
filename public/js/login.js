var passwordSTATUS=0;
var get_account_id='';
var get_signup_OTP_id='';
var what_confirm_user='';
var what_confirm_number='';
var confirm_passwordSTATUS1=0;
var confirm_passwordSTATUS2=0;
var confirm_passwordSTATUS3=0;
var signup_confirm_passwordSTATUS1=0;
var signup_confirm_passwordSTATUS2=0;
var what_OTP_status=1;
var confirm_OTPnumber_status=0
var confirm_number_status=0
var check_username_status=0;
var check_houseno_status=0;
const d = new Date();
var Year = d.getFullYear();
var Month= d.getMonth()+1;
var Day = ("0" + d.getDate()).slice(-2);
var date = Year+"-"+Month+"-"+Day;
$(document).on("click","#login_container2_form_btn_see",function() {
  if(passwordSTATUS==0){
    passwordSTATUS=1
    $("#login_password").attr('type','text');
    $("#login_container2_form_btn_see").removeClass('fa-eye-slash')
    $("#login_container2_form_btn_see").addClass('fa-eye')
  }else{
    passwordSTATUS=0
    $("#login_password").attr('type','password');
    $("#login_container2_form_btn_see").addClass('fa-eye-slash')
    $("#login_container2_form_btn_see").removeClass('fa-eye')
  }
})
$(document).on("click","#signup_container2_input2_btn_see",function() {
  if(signup_confirm_passwordSTATUS1==0){
    signup_confirm_passwordSTATUS1=1
    $("#signup_container2_input2").attr('type','text');
    $("#signup_container2_input2_btn_see").removeClass('fa-eye-slash')
    $("#signup_container2_input2_btn_see").addClass('fa-eye')
  }else{
    signup_confirm_passwordSTATUS1=0
    $("#signup_container2_input2").attr('type','password');
    $("#signup_container2_input2_btn_see").addClass('fa-eye-slash')
    $("#signup_container2_input2_btn_see").removeClass('fa-eye')
  }
})
$(document).on("click","#signup_container2_input2_btn_see2",function() {
  if(signup_confirm_passwordSTATUS2==0){
    signup_confirm_passwordSTATUS2=1
    $("#signup_container2_input3").attr('type','text');
    $("#signup_container2_input2_btn_see2").removeClass('fa-eye-slash')
    $("#signup_container2_input2_btn_see2").addClass('fa-eye')
  }else{
    signup_confirm_passwordSTATUS2=0
    $("#signup_container2_input3").attr('type','password');
    $("#signup_container2_input2_btn_see2").addClass('fa-eye-slash')
    $("#signup_container2_input2_btn_see2").removeClass('fa-eye')
  }
})
$(document).on("click","#forgot_password_container_scroll4_input_div1_btn_see",function() {
  if(confirm_passwordSTATUS1==0){
    confirm_passwordSTATUS1=1
    $("#forgot_password_container_scroll4_input1").attr('type','text');
    $("#forgot_password_container_scroll4_input_div1_btn_see").removeClass('fa-eye-slash')
    $("#forgot_password_container_scroll4_input_div1_btn_see").addClass('fa-eye')
  }else{
    confirm_passwordSTATUS1=0
    $("#forgot_password_container_scroll4_input1").attr('type','password');
    $("#forgot_password_container_scroll4_input_div1_btn_see").addClass('fa-eye-slash')
    $("#forgot_password_container_scroll4_input_div1_btn_see").removeClass('fa-eye')
  }
})
$(document).on("click","#forgot_password_container_scroll4_input_div2_btn_see",function() {
  if(confirm_passwordSTATUS2==0){
    confirm_passwordSTATUS2=1
    $("#forgot_password_container_scroll4_input2").attr('type','text');
    $("#forgot_password_container_scroll4_input_div2_btn_see").removeClass('fa-eye-slash')
    $("#forgot_password_container_scroll4_input_div2_btn_see").addClass('fa-eye')
  }else{
    confirm_passwordSTATUS2=0
    $("#forgot_password_container_scroll4_input2").attr('type','password');
    $("#forgot_password_container_scroll4_input_div2_btn_see").addClass('fa-eye-slash')
    $("#forgot_password_container_scroll4_input_div2_btn_see").removeClass('fa-eye')
  }
})
$(document).on("click","#signup_container4_showDATA13_btn_see",function() {
  var pass = $("#signup_container2_input2").val()
  var passhide;
        for(var i=0;i<pass.length;i++){
          if(i==0){
            passhide='*'
          }else{
            passhide+='*'
          }
        }
  if(confirm_passwordSTATUS3==0){
    confirm_passwordSTATUS3=1
    $("#signup_container4_showDATA13").text(pass);
    $("#signup_container4_showDATA13_btn_see").removeClass('fa-eye-slash')
    $("#signup_container4_showDATA13_btn_see").addClass('fa-eye')
  }else{
    confirm_passwordSTATUS3=0
    $("#signup_container4_showDATA13").text(passhide);
    $("#signup_container4_showDATA13_btn_see").addClass('fa-eye-slash')
    $("#signup_container4_showDATA13_btn_see").removeClass('fa-eye')
  }
})
$(document).on("click","#forgot_password_container_scroll4_input2",function() {
  var val1 = $("#forgot_password_container_scroll4_input1").val()
  if (val1.length == 0 || val1.length <8){
        $("#show_status").show();
        $("#show_status h3").text("Check your input")
        $("#show_status").addClass("status_red")
        $("#show_status").removeClass("status_green")
        hide()
        $("#forgot_password_container_scroll4_input1").focus()
  }else{
    
  }
})
$(document).on("click",".forgot_show",function() {
  var id = $(this).attr("forgot_show_id")
  get_account_id=id
  create_OTP()
})
$(document).on("click","#forgot_password_container_scroll2_btn_none",function() {
  $('#forgot_password_container_scroll1').show()
  $('#forgot_password_container_scroll2').hide()
})
$(document).on("click","#forgot_password_container_scroll3_btn_resend",function() {
  create_OTP()
})
$(document).on("click","#login_container2_form_btn_forgot",function() {
  $("#forgot_password").show('slide');
  $("#forgot_username").focus();    
})
$(document).on("click","#login_container2_form_btn_login",function() {
  var username = $("#login_username").val()
  var password = $("#login_password").val()
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=login',
    data: {
      'username':username,
      'password':password
    },
    success: function(response) {
      $("#show_status").show();
      if(response.status == "error"){
        $("#show_status h3").text(response.message)
        $("#show_status").addClass("status_red")
        $("#show_status").removeClass("status_green")
        hide()
      }else{
        $("#show_status h3").text(response.message)
        $("#show_status").removeClass("status_red")
        $("#show_status").addClass("status_green")
        hide()
        if(response.status=='Admin'){
          redirect1()
        }else{
          redirect2()
        }
      }
    }
});
})
$(document).on("click","#forgot_password_container_btn_exit",function() {
  $("#forgot_password").hide('slide');
  $("#forgot_password_container_scroll1").show();
  $("#forgot_password_container_scroll2").hide();
  $("#forgot_password_container_scroll3").hide();
  $("#forgot_password_container_scroll4").hide();
  $("#forgot_username").val('');
})
$(document).on("click","#signup_container_btn_exit",function() {
  $("#signup").hide('slide');
  $("#signup_container1").show();
  $("#signup_container2").hide();
})
$(document).on("click","#login_container2_form_btn_signup",function() {
  $("#signup").show('slide');
})
$(document).on("click","#signup_container2_btn_back",function() {
  $("#signup_container1").show();
  $("#signup_container2").hide();
})
$(document).on("click","#signup_container4_btn_back",function() {
  $("#signup_container4").hide();
  $("#signup_container3").show();
  $("#signup_container3_show_input1").show();
  $("#signup_container3_show_input2").hide();
})
$(document).on("click","#signup_container_btn_next",function() {
  var val1 = $("#signup_container_input1").val();
  var val2 = $("#signup_container_input2").val();
  var val3 = $("#signup_container_input3").val();
  var val4 = $("#signup_container_input4").val();
  var val5 = $("#signup_container_input5").val();
  var val6 = $("#signup_container_input6").val();
  var val7 = $("#signup_container_input7").val();
  var val8 = $("#signup_container_input8").val();
  var val9 = $("#signup_container_input9").val();
  var val10 = $("#signup_container_input10").val();
  if(check_houseno_status==1){
    $("#show_status").show();
    $("#show_status h3").text('House no. is already taken')
    $("#show_status").addClass("status_red")
    hide()
    $("#signup_container_input4").focus()
  }else{
    if(val1==''||val2==''||val3==''||val4==''||val5==''||val6==''||val7==''||val8==''||val9==''||val10==''){
      $("#show_status").show();
      $("#show_status h3").text('Pls check your input')
      $("#show_status").addClass("status_red")
      hide()
  }else{
    $("#signup_container1").hide();
    $("#signup_container2").show();
    if(check_username_status==0){
      $("#signup_container2_input1").focus();
    }
  }
  }
})
$(document).on("click","#signup_container2_input2",function(){
  var username = $("#signup_container2_input1").val();
  if(username==''){
    $("#signup_container2_input1").focus();
    $("#show_status").show();
    $("#show_status h3").text('Check username input')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
  }else{
    if(check_username_status==1){

    }else{
      $("#signup_container2_input1").focus();
      $("#show_status").show();
      $("#show_status h3").text('Username already taken')
      $("#show_status").addClass("status_red")
      $("#show_status").removeClass("status_green")
      hide()
    }
  }
})
$(document).on("click","#signup_container2_input3",function(){
  var pass = $("#signup_container2_input2").val();
  var username = $("#signup_container2_input1").val();
  if(username==''){
    $("#signup_container2_input1").focus();
    $("#show_status").show();
    $("#show_status h3").text('Check username input')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
  }else{
  if(check_username_status==1){
    if(pass==''||pass.length<8){
    $("#signup_container2_input2").focus();
    $("#show_status").show();
    $("#show_status h3").text('Check password input')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
    }
  }else{
    $("#signup_container2_input1").focus();
    $("#show_status").show();
    $("#show_status h3").text('Username already taken')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
  }
}
})
$(document).on("keyup","#signup_container_input4",function(){
  $("#signup_container_input4_status").removeClass('fa-solid fa-check fa-xmark Con_green Con_red')
  var houseno = $("#signup_container_input4").val();
  if(houseno==''){

  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=check_houseno',
      data: {
        'houseno':houseno,
      },
      success: function(response) {
        if(response.status == "error"){
          check_houseno_status=0
          $("#signup_container_input4_status").addClass('fa-solid fa-check Con_green')
        }else{
          check_houseno_status=1
          $("#signup_container_input4_status").addClass('fa-solid fa-xmark Con_red')
        }
      }
  });
  }
});
$(document).on("keyup","#signup_container2_input1",function(){
  $("#signup_container2_input1_status").removeClass('fa-solid fa-check fa-xmark Con_green Con_red')
  var username = $("#signup_container2_input1").val();
  if(username==''){

  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=check_username',
      data: {
        'username':username,
      },
      success: function(response) {
        if(response.status == "error"){
          check_username_status=1
          $("#signup_container2_input1_status").addClass('fa-solid fa-check Con_green')
        }else{
          check_username_status=0
          $("#signup_container2_input1_status").addClass('fa-solid fa-xmark Con_red')
        }
      }
  });
  }
});
$(document).on("click","#signup_container2_btn_next",function() {
  var pass = $("#signup_container2_input2").val();
  var pass2 = $("#signup_container2_input3").val();
  var username = $("#signup_container2_input1").val();
  if(username==''){
    $("#signup_container2_input1").focus();
    $("#show_status").show();
    $("#show_status h3").text('Check username input')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
  }else{
  if(check_username_status==1){
    if(pass==''||pass.length<8){
    $("#signup_container2_input2").focus();
    $("#show_status").show();
    $("#show_status h3").text('Check password input')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
    }else{
      if(pass==pass2){
        $("#signup_container2").hide();
        $("#signup_container3").show();
      }else{
        $("#signup_container2_input3").focus();
        $("#show_status").show();
        $("#show_status h3").text('Your input does not match up')
        $("#show_status").addClass("status_red")
        $("#show_status").removeClass("status_green")
        hide()
      }
    }
  }else{
    $("#signup_container2_input1").focus();
    $("#show_status").show();
    $("#show_status h3").text('Username already taken')
    $("#show_status").addClass("status_red")
    $("#show_status").removeClass("status_green")
    hide()
  }
}

})
$(document).on("click","#signup_container4_btn_confirm",function() {
  var data1 = $("#signup_container_input1").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data2 = $("#signup_container_input2").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data3 = $("#signup_container_input3").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data4 = $("#signup_container_input4").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data5 = $("#signup_container_input5").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data6 = $("#signup_container_input6").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data7 = $("#signup_container_input7").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data8 = $("#signup_container_input8").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
  var data9 = $("#signup_container_input9").val()
  var data10 = $("#signup_container_input10").val()
  var data11 = $("#signup_container2_input1").val()
  var data12 = $("#signup_container2_input2").val()
  var data13 = $("#signup_container3_show_input1_input1").val()
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=inrSIGNUP',
    data:  {
      "firstname": data1,
      "middlename": data2,
      "lastname": data3,
      "houseno": data4,
      "street": data5,
      "brgy": data6,
      "municipality": data7,
      "province": data8,
      "contactno": data13,
      "phase": data9,
      "household": data10,
      "rate": 1,
      "role": 'User',
      "date_joinIN":date,
      "username": data11,
      "password": data12,
      "deleteOTP": what_confirm_user,
 },
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#signup").hide('slide')
        $("#signup_container1").show()
        $("#signup_container4").hide()
        $("#signup_container_input1").val('')
        $("#signup_container_input2").val('')
        $("#signup_container_input3").val('')
        $("#signup_container_input4").val('')
        $("#signup_container_input5").val('')
        $("#signup_container_input6").val('')
        $("#signup_container_input7").val('')
        $("#signup_container_input8").val('')
        $("#signup_container_input9").val('')
        $("#signup_container_input10").val('')
        $("#signup_container2_input1").val('')
        $("#signup_container2_input2").val('')
        $("#signup_container2_input3").val('')
        $("#signup_container3_show_input1_input1").val('')
        $("#signup_container_input4_status").removeClass('fa-solid fa-check fa-xmark Con_green Con_red')
        $("#signup_container3_show_input1_input1_status").removeClass('fa-solid fa-check fa-xmark Con_number_green Con_number_red')
        $("#signup_container2_input1_status").removeClass('fa-solid fa-check fa-xmark Con_green Con_red')
        $("#signup_container3_show_input1_btn_confirm").text('Confirm')
        check_houseno_status=0
        check_username_status=0
        confirm_number_status=0
        confirm_OTPnumber_status=0
        what_confirm_number=''
        what_confirm_user=''
        countdown2(0, 0);
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }
    }
  })
})
function send_text(number){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=sendTEXT',
    data: {
      'number':number,
    },
    success: function(response) {
      if(response.status == "error"){

      }
    }
  })
}
$(document).on("click","#signup_container3_show_input1_btn_back",function() {
  $("#signup_container3").hide();
  $("#signup_container2").show();
})
$(document).on("click","#signup_container_cancel",function() {
  $("#signup_container_alert").hide();
  $("#signup_container").show();
  $("#signup_container3_show_input1_input1").val(what_confirm_number);
})
$(document).on("click","#signup_container_ok",function() {
  $("#signup_container_alert").hide();
  $("#signup_container").show();
  var number = $("#signup_container3_show_input1_input1").val()
  var username;
  confirm_number_status=0
  if(confirm_number_status==0){
    if(confirm_OTPnumber_status==0){
      username = $("#signup_container2_input1").val()
    }else{
      username = what_confirm_user
    }
    if(number.length<11||number.substr(0,2)!='09'){
      $("#show_status").show();
        $("#show_status h3").text('Number format is invalid')
        $("#show_status").addClass("status_red")
        hide()
    }else{
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=confirm_number',
        data: {
          'username':username,
          'what':confirm_OTPnumber_status
        },
        success: function(response) {
          if(response.status == "error"){
            $("#show_status").show();
            $("#show_status h3").text('Send code failed')
            $("#show_status").addClass("status_red")
            hide()
          }else{
            if(confirm_OTPnumber_status==0){
              what_confirm_user=username
            }
            confirm_OTPnumber_status=1
            $("#signup_container3_show_input1").hide();
            $("#signup_container3_show_input2").show();
            $('#signup_container3_number_show').text("Send to "+number)
            countdown2(2, 0);
            $("#signup_container3_btn_resend").css('pointer-events','none')
            $("#signup_container3_input1").focus().select();
          }
        }
    });
    }
   }else{
      $("#signup_container3").hide();
      $("#signup_container4").show();
   }
})
$(document).on("change","#signup_container3_show_input1_input1",function() {
  var number = $("#signup_container3_show_input1_input1").val()
  if(what_confirm_number!=""){
    if(number!=what_confirm_number){
      $("#signup_container_alert").show();
     $("#signup_container").hide();
    }
  }
})
$(document).on("click","#signup_container3_btn_resend",function() {
  create_OTP2()
})
$(document).on("click","#signup_container3_show_input1_btn_confirm",function() {
  var number = $("#signup_container3_show_input1_input1").val()
  var username;
  if(confirm_number_status==0){
    if(confirm_OTPnumber_status==0){
      username = $("#signup_container2_input1").val()
    }else{
      username = what_confirm_user
    }
    if(number.length<11||number.substr(0,2)!='09'){
      $("#show_status").show();
        $("#show_status h3").text('Number format is invalid')
        $("#show_status").addClass("status_red")
        hide()
    }else{
      create_OTP2()
    }
   }else{
      $("#signup_container3").hide();
      $("#signup_container4").show();
   }
})
$(document).on("click","#signup_container3_show_input2_btn_confirm",function() {
  $("#signup_container3_show_input1_input1_status").removeClass('fa-solid fa-check fa-xmark Con_number_green Con_number_red')
  var data1 = $("#signup_container3_input1").val()
  var data2 = $("#signup_container3_input2").val()
  var data3 = $("#signup_container3_input3").val()
  var data4 = $("#signup_container3_input4").val()
  var data5 = $("#signup_container3_input5").val()
  var data6 = $("#signup_container3_input6").val()
  var number = $("#signup_container3_show_input1_input1").val()
  var OTP = data1+data2+data3+data4+data5+data6;
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=check_confirm_number',
    data: {
      'OTP':OTP,
      'username':what_confirm_user
    },
    success: function(response) {
     $("#signup_container3_input1").val('')
     $("#signup_container3_input2").val('')
     $("#signup_container3_input3").val('')
     $("#signup_container3_input4").val('')
      $("#signup_container3_input5").val('')
      $("#signup_container3_input6").val('')
      $("#show_status").show();
      if(response.status == "error"){
        confirm_number_status=0
        $("#show_status h3").text(response.message)
        $("#show_status").addClass("status_red")
        $("#show_status").removeClass("status_green")
        hide()
        $("#signup_container3_show_input1_input1_status").addClass('fa-solid fa-check Con_number_green')
        $("#signup_container3_input1").focus()
      }else{
        confirm_number_status=1
        what_confirm_number=number
        $("#show_status h3").text(response.message)
        $("#show_status").addClass("status_green")
        hide()
        $("#signup_container3_show_input1_input1_status").addClass('fa-solid fa-check Con_number_green')
        $("#signup_container3_show_input1_btn_confirm").text('Next')
        $("#signup_container3").hide();
        $("#signup_container4").show();
        var get1 = $("#signup_container_input1").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get2 = $("#signup_container_input2").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get3 = $("#signup_container_input3").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get4 = $("#signup_container_input4").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get5 = $("#signup_container_input5").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get6 = $("#signup_container_input6").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get7 = $("#signup_container_input7").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get8 = $("#signup_container_input8").val().toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
        var get9 = $("#signup_container_input9").val()
        var get10 = $("#signup_container_input10").val()
        var get11 = $("#signup_container3_show_input1_input1").val()
        var get12 = $("#signup_container2_input1").val()
        var get13 = $("#signup_container2_input2").val()
        var pass;
        for(var i=0;i<get13.length;i++){
          if(i==0){
            pass='*'
          }else{
            pass+='*'
          }
        }
        $("#signup_container4_showDATA1").text(get1)
        $("#signup_container4_showDATA2").text(get2)
        $("#signup_container4_showDATA3").text(get3)
        $("#signup_container4_showDATA4").text(get4)
        $("#signup_container4_showDATA5").text(get5)
        $("#signup_container4_showDATA6").text(get6)
        $("#signup_container4_showDATA7").text(get7)
        $("#signup_container4_showDATA8").text(get8)
        $("#signup_container4_showDATA9").text(get9)
        $("#signup_container4_showDATA10").text(get10)
        $("#signup_container4_showDATA11").text(get11)
        $("#signup_container4_showDATA12").text(get12)
        $("#signup_container4_showDATA13").text(pass)
      }
    }
});
})
$(document).on("click","#signup_container3_show_input2_btn_back",function() {
  $("#signup_container3_show_input1_input1_status").removeClass('fa-solid fa-check fa-xmark Con_number_green Con_number_red')
  if(confirm_number_status==1){
    $("#signup_container3_show_input1_input1_status").addClass('fa-solid fa-check Con_number_green')
  }else{
    $("#signup_container3_show_input1_input1_status").addClass('fa-solid fa-xmark Con_number_red')
    
  }
  $("#signup_container3_show_input2").hide();
  $("#signup_container3_show_input1").show();
})
$(document).on("click","#forgot_password_container_scroll4_btn_go",function() {
  var data1 = $("#forgot_password_container_scroll4_input1").val()
  var data2 = $("#forgot_password_container_scroll4_input2").val()
  if(data1==data2){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=update_password',
      data: {
        'password':data1,
        'ID':get_account_id
      },
      success: function(response) {
        $("#show_status").show();
        if(response.status == "error"){
          $("#show_status h3").text(response.message)
          $("#show_status").addClass("status_red")
          $("#show_status").removeClass("status_green")
          hide()
        }else{
          what_OTP_status=0
          create_OTP()
          $("#show_status h3").text(response.message)
          $("#show_status").removeClass("status_red")
          $("#show_status").addClass("status_green")
          hide()
          $("#forgot_password").hide('slide');
          $("#forgot_password_container_scroll1").show();
          $("#forgot_password_container_scroll2").hide();
          $("#forgot_password_container_scroll3").hide();
          $("#forgot_password_container_scroll4").hide();
          what_OTP_status=1
        }
      }
  });
  }else{
      $("#show_status").show();
      $("#show_status h3").text('Your input does not match up')
      $("#show_status").addClass("status_red")
      $("#show_status").removeClass("status_green")
      hide()
  }
 
})
$(document).on("click","#forgot_password_container_scroll3_btn_go",function() {
  var data1 = $("#forgot_password_container_scroll3_input1").val()
  var data2 = $("#forgot_password_container_scroll3_input2").val()
  var data3 = $("#forgot_password_container_scroll3_input3").val()
  var data4 = $("#forgot_password_container_scroll3_input4").val()
  var data5 = $("#forgot_password_container_scroll3_input5").val()
  var data6 = $("#forgot_password_container_scroll3_input6").val()
  var all = data1+data2+data3+data4+data5+data6;
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=check_account_OTP',
    data: {
      'OTP':all,
      'ID':get_account_id
    },
    success: function(response) {
      $("#show_status").show();
      if(response.status == "error"){
        $("#show_status h3").text(response.message)
        $("#show_status").addClass("status_red")
        $("#show_status").removeClass("status_green")
        hide()
      }else{
        $('#forgot_password_container_scroll3').hide()
        $('#forgot_password_container_scroll4').show()
      }
    }
});
})
$(document).on("click","#forgot_password_container_scroll1_btn_search",function() {
  var data = $("#forgot_username").val()
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=forgot_search_username',
    data: {
      'data':data
    },
    success: function(response) {
      if(response.status == "error"){
        $("#show_status").show();
        $("#show_status h3").text(response.message)
        $("#show_status").addClass("status_red")
        $("#show_status").removeClass("status_green")
        hide()
      }else{
        $('#forgot_password_container_scroll2_show').empty();
        $('#forgot_password_container_scroll1').hide()
        $('#forgot_password_container_scroll2').show()
        for(var i=0;i<response.length;i++){
          var row=$('<div class="row forgot_show" forgot_show_id="'+response[i].ID+'">'
        +'<div class="col-3">'
        +'<h5>'+response[i].houseno+'</h5>'
        +'</div> '
        +'<div class="col-9">'
        +'<h5>'+response[i].firstname+" "+response[i].middlename+" "+response[i].middlename+'</h5>'
        +'</div> '
        +'</div>')
          $('#forgot_password_container_scroll2_show').append(row);
        }
      }
    }
});
})
function create_OTP(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=forgot_create_OTP',
    data: {
      'ID':get_account_id,
      'what':what_OTP_status
    },
    success: function(response) {
      if(response.status == "error"){
        $('#forgot_password_container_scroll3').hide()
        $('#forgot_password_container_scroll2').show()
      }else{
        $('#forgot_password_container_scroll3').show()
        $('#forgot_password_container_scroll2').hide()
        $('#forgot_password_container_scroll3_number_show').text("Send to "+response[0].contactno.substr(0,4)+'****'+response[0].contactno.substr(8,3))
        countdown(2, 0);
        $("#forgot_password_container_scroll3_btn_resend").css('pointer-events','none')
      }
    }
});
}
var timeoutHandle;
function countdown(minutes, seconds) {
    function tick() {
        var counter = document.getElementById("forgot_password_container_scroll3_btn_resendCOUNT");
        counter.innerHTML = "("+minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+")";
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }else{
              $("#forgot_password_container_scroll3_btn_resendCOUNT").empty()
              $("#forgot_password_container_scroll3_btn_resend").css('pointer-events','auto')
            }
        }
    }
    tick();
}
function create_OTP2(){
  var number = $("#signup_container3_show_input1_input1").val()
  var username;
    if(confirm_OTPnumber_status==0){
      username = $("#signup_container2_input1").val()
    }else{
      username = what_confirm_user
    }
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=confirm_number',
    data: {
      'username':username,
      'what':confirm_OTPnumber_status,
      'number':number
    },
    success: function(response) {
      if(response.status == "error"){
        $("#show_status").show();
        $("#show_status h3").text('Send code failed')
        $("#show_status").addClass("status_red")
        hide()
      }else{
        if(confirm_OTPnumber_status==0){
          what_confirm_user=username
        }
        confirm_OTPnumber_status=1
        $("#signup_container3_show_input1").hide();
        $("#signup_container3_show_input2").show();
        $('#signup_container3_number_show').text("Send to "+number)
        countdown2(2, 0);
        $("#signup_container3_btn_resend").css('pointer-events','none')
        $("#signup_container3_input1").focus().select();
      }
    }
});
}
var timeoutHandle2;
function countdown2(minutes, seconds) {
    function tick2() {
        var counter = document.getElementById("signup_container3_btn_resendCOUNT");
        counter.innerHTML = "("+minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+")";
        seconds--;
        if (seconds >= 0) {
            timeoutHandle2 = setTimeout(tick2, 1000);
        } else {
            if (minutes >= 1) {
                
                setTimeout(function () {
                    countdown2(minutes - 1, 59);
                }, 1000);
            }else{
              $("#signup_container3_btn_resendCOUNT").empty()
              $("#signup_container3_btn_resend").css('pointer-events','auto')
            }
        }
    }
    tick2();
}
function hide(){
  setTimeout(function () {
    $("#show_status h3").text("");
    $("#show_status").hide();
    $("#show_status").removeClass("status_red")
    $("#show_status").removeClass("status_green")
    }, 2000);
}
  
  function redirect1(){
      setTimeout(function () {
          window.location = "http://localhost/pwbms/admin.php";
        }, 3000);
  }
  function redirect2(){
    setTimeout(function () {
        window.location = "http://localhost/pwbms/user.php";
      }, 3000);
}
  
  