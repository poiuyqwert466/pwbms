const d = new Date();
var Year = d.getFullYear();
var Month= d.getMonth()+1;
var Day = ("0" + d.getDate()).slice(-2);
var date = Year+"-"+Month+"-"+Day;
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours +"-"+ minutes+"-"+ampm;
  var show_active_year;
  var selected_id;
var show_annonce_image_count=1;
var show_annonce_image_total;
var show_com_image_count=1;
var show_com_image_total;
var show_rul_image_count=1;
var show_rul_image_total;
var what_feedback_show=1;
var get_account_id='';
var show_active_year=Year;
var change_side_right_menu_img=[];
var feedback_img=[];
var payment_chat_img=[];
var side_right_menu_account=0;
var whattype_feedback=0;
var react_status=0;
var show_community_id;
var payment_status=0;
var check_houseno_status=0;
var check_username_status=0
var account_password='';
var passwordSTATUS=0;
var passwordSTATUS1=0;
var response_community_data=[];
var response_rules_data=[];
var comment_count=0;
get_username()
show_announcement()
show_community()
show_rules()
show_water_info()
show_user_bills_year()
show_rate()
show_bills_table()
online_check()
setInterval(function(){
  online_check()
},60000)
function online_check(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=online_check',
    data:  {
      'id':get_account_id,
 },
    success: function(response) {
      if(response.status=='error'){
        online_check()
      }else{
      }
    }
  })
}
function get_username(){
  get_account_id=$("#get_account_id h5").text()
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=searchinfo_payment',
    data:  {
      "ID":get_account_id
 },
      success: function(response){
        $("#header_account_img img").attr("src", './public/image/userIMG/'+response[0].image_name);
      }
  });
}

$(document).on("click","#account",function(){
  $("#side_bar_menu").show("slide");
 })
 $(document).on("click","#side_bar_menu_btn_exit",function(){
  $("#side_bar_menu").hide("slide");
 })
 $(document).on("click","#account_info_btn_setting",function(){
  $("#setting").show("slide");
  $("#accountinfo").hide("slide");
 })
 $(document).on("click","#setting_btn_back",function(){
  $("#setting").hide("slide");
  $("#accountinfo").show("slide");
 })
$(document).on("click","#home",function(){
    $("#bills").removeClass("nav_active");
    $("#home").addClass("nav_active");
    $("#community").removeClass("nav_active");
    $("#home_page" ).show();
    $("#bills_page" ).hide();
    $("#community_page" ).hide();
  });
$(document).on("click","#bills",function(){
    $("#bills").addClass("nav_active");
    $("#home").removeClass("nav_active");
    $("#community").removeClass("nav_active");
    $("#home_page" ).hide();
    $("#bills_page" ).show();
    $("#community_page" ).hide();
  });
$(document).on("click","#community",function(){
    $("#bills").removeClass("nav_active");
    $("#home").removeClass("nav_active");
    $("#community").addClass("nav_active");
    $("#home_page" ).hide();
    $("#bills_page" ).hide();
    $("#community_page" ).show();
    show_community_comment()
  });
  $(document).on("click","#side_right_menu_container_account_btn_exit",function(){
    $("#side_right_menu").hide('slide')
    $("#side_right_menu_container_account").hide()
    $("#header_menu").hide();
    $("#header_menu_background").hide();
    $("#side_right_menu_container_account_firstnameINPUT").hide()
    $("#side_right_menu_container_account_middlenameINPUT").hide()
     $("#side_right_menu_container_account_lastnameINPUT").hide()
    $("#side_right_menu_container_account_housenoINPUT").hide()
    $("#side_right_menu_container_account_streetINPUT").hide()
    $("#side_right_menu_container_account_brgyINPUT").hide()
    $("#side_right_menu_container_account_municipalityINPUT").hide()
    $("#side_right_menu_container_account_provinceINPUT").hide()
    $("#side_right_menu_container_account_pnumberINPUT").hide()
     $("#side_right_menu_container_account_phaseINPUT").hide()
     $("#side_right_menu_container_account_householdINPUT").hide()
     $("#side_right_menu_container_account_usernameINPUT").hide()
     $("#side_right_menu_container_account_passwordINPUT").hide()
     $("#side_right_menu_container_account_passwordINPUT2").hide()
     $("#side_right_menu_container_account_passwordINPUT2").val('')
     $("#side_right_menu_container_account_firstname").show()
    $("#side_right_menu_container_account_middlename").show()
     $("#side_right_menu_container_account_lastname").show()
    $("#side_right_menu_container_account_houseno").show()
    $("#side_right_menu_container_account_street").show()
    $("#side_right_menu_container_account_brgy").show()
    $("#side_right_menu_container_account_municipality").show()
    $("#side_right_menu_container_account_province").show()
    $("#side_right_menu_container_account_pnumber").show()
     $("#side_right_menu_container_account_phase").show()
     $("#side_right_menu_container_account_household").show()
     $("#side_right_menu_container_account_username").show()
     $("#side_right_menu_container_account_password").show()
     check_houseno_status=0
     check_username_status=0
     $("#side_right_menu_container_account_btn").hide()
     $("#side_right_menu_container_account_passwordINPUT_see").hide()
     $("#side_right_menu_container_account_passwordINPUT_see2").hide()
  })
  $(document).on("click","#side_right_menu_container_account_btn_cancel",function(){
    $("#side_right_menu_container_account_firstnameINPUT").hide()
    $("#side_right_menu_container_account_middlenameINPUT").hide()
     $("#side_right_menu_container_account_lastnameINPUT").hide()
    $("#side_right_menu_container_account_housenoINPUT").hide()
    $("#side_right_menu_container_account_streetINPUT").hide()
    $("#side_right_menu_container_account_brgyINPUT").hide()
    $("#side_right_menu_container_account_municipalityINPUT").hide()
    $("#side_right_menu_container_account_provinceINPUT").hide()
    $("#side_right_menu_container_account_pnumberINPUT").hide()
     $("#side_right_menu_container_account_phaseINPUT").hide()
     $("#side_right_menu_container_account_householdINPUT").hide()
     $("#side_right_menu_container_account_usernameINPUT").hide()
     $("#side_right_menu_container_account_passwordINPUT").hide()
     $("#side_right_menu_container_account_passwordINPUT2").hide()
     $("#side_right_menu_container_account_passwordINPUT2").val('')
     $("#side_right_menu_container_account_firstname").show()
    $("#side_right_menu_container_account_middlename").show()
     $("#side_right_menu_container_account_lastname").show()
    $("#side_right_menu_container_account_houseno").show()
    $("#side_right_menu_container_account_street").show()
    $("#side_right_menu_container_account_brgy").show()
    $("#side_right_menu_container_account_municipality").show()
    $("#side_right_menu_container_account_province").show()
    $("#side_right_menu_container_account_pnumber").show()
     $("#side_right_menu_container_account_phase").show()
     $("#side_right_menu_container_account_household").show()
     $("#side_right_menu_container_account_username").show()
     $("#side_right_menu_container_account_password").show()
     check_houseno_status=0
     check_username_status=0
     $("#side_right_menu_container_account_btn").hide()
     $("#side_right_menu_container_account_passwordINPUT_see").hide()
     $("#side_right_menu_container_account_passwordINPUT_see2").hide()
     search_side_right_menuinfo()
   })
   $(document).on("click","#side_right_menu_container_account_btn_save",function(){
    var in1 = $("#side_right_menu_container_account_firstnameINPUT").val()
    var in2 = $("#side_right_menu_container_account_middlenameINPUT").val()
    var in3 = $("#side_right_menu_container_account_lastnameINPUT").val()
    var in4 = $("#side_right_menu_container_account_housenoINPUT").val()
    var in5 = $("#side_right_menu_container_account_streetINPUT").val()
    var in6 = $("#side_right_menu_container_account_brgyINPUT").val()
    var in7 = $("#side_right_menu_container_account_municipalityINPUT").val()
    var in8 = $("#side_right_menu_container_account_provinceINPUT").val()
    var in9 = $("#side_right_menu_container_account_pnumberINPUT").val()
    var in10 = $("#side_right_menu_container_account_phaseINPUT").val()
    var in11 = $("#side_right_menu_container_account_householdINPUT").val()
    var in12 = $("#side_right_menu_container_account_usernameINPUT").val()
    var in13 = $("#side_right_menu_container_account_passwordINPUT").val()
    if(in1==''||in2==''||in3==''||in4==''||in5==''||in6==''||in7==''||in8==''||in9==''||in10==''||in11==''||in12==''||in13==''){
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('Check your input')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
    }else if(check_houseno_status==1){
         $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('House# already exist')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
          $("#side_right_menu_container_account_housenoINPUT").focus()
    }else if(in9.length<11||in9.substr(0,2)!='09'){
         $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('Number format is invalid')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
          $("#side_right_menu_container_account_pnumberINPUT").focus()
    }else if(check_username_status==1){
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('Username already exist')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
          $("#side_right_menu_container_account_usernameINPUT").focus()
    }else if(in13!=account_password){
      var pass = $("#side_right_menu_container_account_passwordINPUT").val()
      var pass2 = $("#side_right_menu_container_account_passwordINPUT2").val()
      if(pass==pass2){
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=update_side_rightINFO',
          data: {
            "ID": get_account_id,
            "firstname": in1,
            "middlename": in2,
            "lastname": in3,
            "houseno": in4,
            "street": in5,
            "brgy": in6,
            "municipality": in7,
            "province": in8,
            "contactno": in9,
            "phase": in10,
            "household": in11,
            "username": in12,
            "password":in13,
          },
          success: function(response) {
            if(response.status == "error"){
              $("#side_bar_menu_show_status").show();
              $("#side_bar_menu_show_status h3").text(response.message)
              $("#side_bar_menu_show_status").addClass("status_red")
              hide()
            }else{
              $("#side_bar_menu_show_status").show();
              $("#side_bar_menu_show_status h3").text(response.message)
              $("#side_bar_menu_show_status").addClass("status_green")
              hide()
              $("#side_right_menu_container_account_firstnameINPUT").hide()
              $("#side_right_menu_container_account_middlenameINPUT").hide()
               $("#side_right_menu_container_account_lastnameINPUT").hide()
              $("#side_right_menu_container_account_housenoINPUT").hide()
              $("#side_right_menu_container_account_streetINPUT").hide()
              $("#side_right_menu_container_account_brgyINPUT").hide()
              $("#side_right_menu_container_account_municipalityINPUT").hide()
              $("#side_right_menu_container_account_provinceINPUT").hide()
              $("#side_right_menu_container_account_pnumberINPUT").hide()
               $("#side_right_menu_container_account_phaseINPUT").hide()
               $("#side_right_menu_container_account_householdINPUT").hide()
               $("#side_right_menu_container_account_usernameINPUT").hide()
               $("#side_right_menu_container_account_passwordINPUT").hide()
               $("#side_right_menu_container_account_passwordINPUT2").hide()
               $("#side_right_menu_container_account_passwordINPUT2").val('')
               $("#side_right_menu_container_account_firstname").show()
              $("#side_right_menu_container_account_middlename").show()
               $("#side_right_menu_container_account_lastname").show()
              $("#side_right_menu_container_account_houseno").show()
              $("#side_right_menu_container_account_street").show()
              $("#side_right_menu_container_account_brgy").show()
              $("#side_right_menu_container_account_municipality").show()
              $("#side_right_menu_container_account_province").show()
              $("#side_right_menu_container_account_pnumber").show()
               $("#side_right_menu_container_account_phase").show()
               $("#side_right_menu_container_account_household").show()
               $("#side_right_menu_container_account_username").show()
               $("#side_right_menu_container_account_password").show()
               check_houseno_status=0
               check_username_status=0
               $("#side_right_menu_container_account_btn").hide()
               $("#side_right_menu_container_account_passwordINPUT_see").hide()
               $("#side_right_menu_container_account_passwordINPUT_see2").hide()
               search_side_right_menuinfo()
            }
          }
        })
      }else{
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('Your password input does not match up')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
          $("#side_right_menu_container_account_passwordINPUT2").focus()
      }
    }else{
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=update_side_rightINFO',
        data: {
          "ID": get_account_id,
          "firstname": in1,
          "middlename": in2,
          "lastname": in3,
          "houseno": in4,
          "street": in5,
          "brgy": in6,
          "municipality": in7,
          "province": in8,
          "contactno": in9,
          "phase": in10,
          "household": in11,
          "username": in12,
          "password":in13,
        },
        success: function(response) {
          if(response.status == "error"){
            $("#side_bar_menu_show_status").show();
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_red")
            hide()
          }else{
            $("#side_bar_menu_show_status").show();
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_green")
            hide()
            $("#side_right_menu_container_account_firstnameINPUT").hide()
            $("#side_right_menu_container_account_middlenameINPUT").hide()
             $("#side_right_menu_container_account_lastnameINPUT").hide()
            $("#side_right_menu_container_account_housenoINPUT").hide()
            $("#side_right_menu_container_account_streetINPUT").hide()
            $("#side_right_menu_container_account_brgyINPUT").hide()
            $("#side_right_menu_container_account_municipalityINPUT").hide()
            $("#side_right_menu_container_account_provinceINPUT").hide()
            $("#side_right_menu_container_account_pnumberINPUT").hide()
             $("#side_right_menu_container_account_phaseINPUT").hide()
             $("#side_right_menu_container_account_householdINPUT").hide()
             $("#side_right_menu_container_account_usernameINPUT").hide()
             $("#side_right_menu_container_account_passwordINPUT").hide()
             $("#side_right_menu_container_account_passwordINPUT2").hide()
             $("#side_right_menu_container_account_passwordINPUT2").val('')
             $("#side_right_menu_container_account_firstname").show()
            $("#side_right_menu_container_account_middlename").show()
             $("#side_right_menu_container_account_lastname").show()
            $("#side_right_menu_container_account_houseno").show()
            $("#side_right_menu_container_account_street").show()
            $("#side_right_menu_container_account_brgy").show()
            $("#side_right_menu_container_account_municipality").show()
            $("#side_right_menu_container_account_province").show()
            $("#side_right_menu_container_account_pnumber").show()
             $("#side_right_menu_container_account_phase").show()
             $("#side_right_menu_container_account_household").show()
             $("#side_right_menu_container_account_username").show()
             $("#side_right_menu_container_account_password").show()
             check_houseno_status=0
             check_username_status=0
             $("#side_right_menu_container_account_btn").hide()
             $("#side_right_menu_container_account_passwordINPUT_see").hide()
             $("#side_right_menu_container_account_passwordINPUT_see2").hide()
             search_side_right_menuinfo()
          }
        }
      })
    }
  })
  $(document).on("click","#side_right_menu_container_account_img_btn",function(){
    $('#side_right_menu_container_account_img_edit_show_input').trigger('click');
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_exit",function(){
    $("#side_right_menu").hide('slide')
    $("#side_right_menu_container_feedback").hide()
    $("#header_menu").hide();
    $("#header_menu_background").hide();
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_check1",function(){
    whattype_feedback=1
    $('#side_right_menu_container_feedback_btn_check1').addClass('check_active');
    $('#side_right_menu_container_feedback_btn_check2').removeClass('check_active');
    $('#side_right_menu_container_feedback_btn_check3').removeClass('check_active');
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_check2",function(){
    whattype_feedback=2
    $('#side_right_menu_container_feedback_btn_check2').addClass('check_active');
    $('#side_right_menu_container_feedback_btn_check1').removeClass('check_active');
    $('#side_right_menu_container_feedback_btn_check3').removeClass('check_active');
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_check3",function(){
    whattype_feedback=3
    $('#side_right_menu_container_feedback_btn_check3').addClass('check_active');
    $('#side_right_menu_container_feedback_btn_check1').removeClass('check_active');
    $('#side_right_menu_container_feedback_btn_check2').removeClass('check_active');
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_send",function(){
    var text = $("#side_right_menu_container_feedback_text_area").val()
    var name = $("#side_right_menu_container_feedback_scroll_name").val()
     if(name.length==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Check your name")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else if(text.length==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Check your message")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else if(whattype_feedback==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Select feedback type")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else{
      const formData = new FormData();
      formData.append('files[]', feedback_img[0]);
          const url = 'api/index.php?t=insert_feedback&ref='+get_account_id+'[%]'+whattype_feedback+'[%]'+text+'[%]'+date+'[%]'+name;
            fetch(url, {
              method: 'POST',
              body: formData
            }).then(response => {
              return response.text();
          }).then(e => {
            const data = JSON.parse(e)
            $("#side_bar_menu_show_status").show();
            if(data.status == "error"){
              $("#side_bar_menu_show_status h3").text(data.message)
              $("#side_bar_menu_show_status").addClass("status_red")
              $("#side_bar_menu_show_status").removeClass("status_green")
              hide()
            }else{
              $("#side_bar_menu_show_status h3").text(data.message)
              $("#side_bar_menu_show_status").addClass("status_green")
              $("#side_bar_menu_show_status").removeClass("status_red")
              hide()
              whattype_feedback=0
              $("#side_right_menu_container_feedback_scroll_name").val('')
              $("#side_right_menu_container_feedback_text_area").val('')
              $('#side_right_menu_container_feedback_btn_check1').removeClass('check_active');
              $('#side_right_menu_container_feedback_btn_check2').removeClass('check_active');
              $('#side_right_menu_container_feedback_btn_check3').removeClass('check_active');
              $("#side_right_menu_container_feedback_scroll_img").empty()
              $("#side_right_menu_container_feedback_btn_sendIMG").text('Add image')
              $("#side_right_menu").hide('slide')
              $("#side_right_menu_container_feedback").hide()
              $("#header_menu").hide();
              $("#header_menu_background").hide();
            }
            })
    }
  })
  $(document).on("click","#header_menu_container_btn4",function(){
    $("#header_menu").hide();
    $("#header_menu_background").hide();
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_sendIMG",function(){
    $('#side_right_menu_container_feedback_scroll_img_input').trigger('click');
  })
  $(document).on("change","#side_right_menu_container_feedback_scroll_img_input",function(){
    const files_val = document.querySelector('#side_right_menu_container_feedback_scroll_img_input').files;
    const index = files_val[0].name.lastIndexOf('.');
    const after = files_val[0].name.slice(index + 1);
    let lowercase = after.toLowerCase();
    if(lowercase=='png'||lowercase=='jpeg'||lowercase=='jpg'){
    if(files_val[0].size > 2097152){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Image size is to large")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else{
      $("#side_right_menu_container_feedback_btn_sendIMG").text('Change image')
      feedback_img=[]
      feedback_img[0] = files_val[0];
      const reader = new FileReader();      
      reader.readAsDataURL(files_val[0]);
      reader.onload = () => {
      $('#side_right_menu_container_feedback_scroll_img').empty();
      var row = $('<img src="'+reader.result+'" alt="" srcset="">');
      $('#side_right_menu_container_feedback_scroll_img').append(row);
      }
    }
  }else{
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Pls select image type")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
  }
  })
  $(document).on("change","#side_right_menu_container_account_img_edit_show_input",function(){
    const files_val = document.querySelector('#side_right_menu_container_account_img_edit_show_input').files;
    const index = files_val[0].name.lastIndexOf('.');
    const after = files_val[0].name.slice(index + 1);
    let lowercase = after.toLowerCase();
    if(lowercase=='png'||lowercase=='jpeg'||lowercase=='jpg'){
    if(files_val[0].size > 2097152){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Image size is to large")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else{
      change_side_right_menu_img=[]
      change_side_right_menu_img[0] = files_val[0];
      const reader = new FileReader();      
      reader.readAsDataURL(files_val[0]);
      reader.onload = () => {
      $("#side_right_menu_container_account_img_edit img").attr("src", reader.result);
      }
      $("#side_right_menu_container_account_img_edit_show").show();
      $("#side_right_menu_container_account").hide();
    }
  }else{
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Pls select image type")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
  }
  })
  $(document).on("click","#side_right_menu_container_account_img_edit_btn_change",function(){
    $('#side_right_menu_container_account_img_edit_show_input').trigger('click');
  })
  $(document).on("click","#side_right_menu_container_account_img_edit_show_btn_exit",function(){
    $("#side_right_menu_container_account_img_edit_show").hide();
    $("#side_right_menu_container_account").show();
})
  $(document).on("click","#side_right_menu_container_account_img_edit_btn_save",function(){
    const formData = new FormData();
    formData.append('files[]', change_side_right_menu_img[0]);
          const url = 'api/index.php?t=side_right_IMGupload&ref='+get_account_id;
            fetch(url, {
              method: 'POST',
              body: formData
            }).then(response => {
              return response.text();
          }).then(e => {
            const data = JSON.parse(e)
            $("#side_bar_menu_show_status").show();
            if(data.status == "error"){
              $("#side_bar_menu_show_status h3").text(data.message)
              $("#side_bar_menu_show_status").addClass("status_red")
              $("#side_bar_menu_show_status").removeClass("status_green")
              hide()
            }else{
              $("#side_bar_menu_show_status h3").text(data.message)
              $("#side_bar_menu_show_status").addClass("status_green")
              $("#side_bar_menu_show_status").removeClass("status_red")
              $("#side_right_menu_container_account_img_edit_show").hide();
              $("#side_right_menu_container_account").show();
              search_side_right_menuinfo()
              hide()
            }
            })
  })
  $(document).on("click","#announcement_image_show_div_btn_right",function(){
    if(show_annonce_image_count==show_annonce_image_total){
      $("#announcement_image_show_"+show_annonce_image_count).addClass("d-none");
      show_annonce_image_count=1
      $("#announcement_image_show_"+show_annonce_image_count).removeClass("d-none");
    }else{
      $("#announcement_image_show_"+show_annonce_image_count).addClass("d-none");
      show_annonce_image_count++
    $("#announcement_image_show_"+show_annonce_image_count).removeClass("d-none");
    }
    $("#announcement_image_show_div_img_count").text(show_annonce_image_count)
  });
  $(document).on("click","#announcement_image_show_div_btn_left",function(){
    if(show_annonce_image_count==1){
      $("#announcement_image_show_"+show_annonce_image_count).addClass("d-none");
      var count = show_annonce_image_total-show_annonce_image_count+1;
      show_annonce_image_count=count;
      $("#announcement_image_show_"+show_annonce_image_count).removeClass("d-none");
    }else{
      var count = show_annonce_image_count-1;
      $("#announcement_image_show_"+show_annonce_image_count).addClass("d-none");
      show_annonce_image_count=count
    $("#announcement_image_show_"+count).removeClass("d-none");
    }
    $("#announcement_image_show_div_img_count").text(show_annonce_image_count)
  });
  $(document).on("click","#community_page_image_show_div_btn_right",function(){
    var id = $(this).attr("btn_id")
    var get_total = $(".community_page_main_community"+id).attr('image_total')
    var get_count = $(".community_page_main_community"+id).attr('image_count')
    var gtotal=get_total;
    var gcount=get_count;
    if(gcount==gtotal){
      $("#community_image_show"+id+'-'+gcount).addClass("d-none");
      $(".community_page_main_community"+id).attr('image_count','1')
      gcount=1
      $("#community_image_show"+id+'-'+gcount).removeClass("d-none");
    }else{
      $("#community_image_show"+id+'-'+gcount).addClass("d-none");
      gcount++
      $(".community_page_main_community"+id).attr('image_count',gcount)
    $("#community_image_show"+id+'-'+gcount).removeClass("d-none");
    }
    $(".community_page_image_show_div_img_count"+id).text(gcount)
  });
  $(document).on("click","#community_page_image_show_div_btn_left",function(){
    var id = $(this).attr("btn_id")
    var get_total = $(".community_page_main_community"+id).attr('image_total')
    var get_count = $(".community_page_main_community"+id).attr('image_count')
    var gtotal=get_total;
    var gcount=get_count;
    if(gcount==1){
      $("#community_image_show"+id+'-'+gcount).addClass("d-none");
      var count = gtotal-gcount+1;
      gcount=count;
      $(".community_page_main_community"+id).attr('image_count',count)
      $("#community_image_show"+id+'-'+gcount).removeClass("d-none");
    }else{
      var count = gcount-1;
      $("#community_image_show"+id+'-'+gcount).addClass("d-none");
      gcount=count
      $(".community_page_main_community"+id).attr('image_count',count)
    $("#community_image_show"+id+'-'+gcount).removeClass("d-none");
    }
    $(".community_page_image_show_div_img_count"+id).text(gcount)
  });
  $(document).on("click","#community_page_rules_image_show_div_btn_right",function(){
    var id = $(this).attr("btn_id")
    var get_total = $(".community_page_rules"+id).attr('image_total')
    var get_count = $(".community_page_rules"+id).attr('image_count')
    var gtotal=get_total;
    var gcount=get_count;
    if(gcount==gtotal){
      $("#community_page_rules_image_show"+id+'-'+gcount).addClass("d-none");
      $(".community_page_rules"+id).attr('image_count','1')
      gcount=1
      $("#community_page_rules_image_show"+id+'-'+gcount).removeClass("d-none");
    }else{
      $("#community_page_rules_image_show"+id+'-'+gcount).addClass("d-none");
      gcount++
      $(".community_page_rules"+id).attr('image_count',gcount)
    $("#community_page_rules_image_show"+id+'-'+gcount).removeClass("d-none");
    }
    $(".community_page_rules_image_show_div_img_count"+id).text(gcount)
  });
  $(document).on("click","#community_page_rules_image_show_div_btn_left",function(){
    var id = $(this).attr("btn_id")
    var get_total = $(".community_page_rules"+id).attr('image_total')
    var get_count = $(".community_page_rules"+id).attr('image_count')
    var gtotal=get_total;
    var gcount=get_count;
    if(gcount==1){
      $("#community_page_rules_image_show"+id+'-'+gcount).addClass("d-none");
      var count = gtotal-gcount+1;
      gcount=count;
      $(".community_page_rules"+id).attr('image_count',count)
      $("#community_page_rules_image_show"+id+'-'+gcount).removeClass("d-none");
    }else{
      var count = gcount-1;
      $("#community_page_rules_image_show"+id+'-'+gcount).addClass("d-none");
      gcount=count
      $(".community_page_rules"+id).attr('image_count',count)
    $("#community_page_rules_image_show"+id+'-'+gcount).removeClass("d-none");
    }
    $(".community_page_rules_image_show_div_img_count"+id).text(gcount)
  });

  $(document).on("click",".community_page_community_reply",function() {
    var id = $(this).attr("btn_id");
    show_community_id = id;
    show_community_comment_scroll();
  $("#community_show_comment").show('slide')
  $("#community_show_comment_container_scroll").animate({ scrollTop: $('#community_show_comment_container_scroll').prop("scrollHeight")}, 1000);
  })
  $(document).on("click","#community_show_comment_container_btn_exit",function() {
    $("#community_show_comment").hide('slide')
    })
  $(document).on("click","#header_account_img",function(){
    $("#header_menu").show();
    $("#header_menu_background").show();
  })
  $(document).on("click","#header_menu_container_btn1",function(){
    $("#side_right_menu").show('slide')
    $("#side_right_menu_container_account").show()
    search_side_right_menuinfo()
  })
  $(document).on("click","#header_menu_container_btn2",function(){
    $("#side_right_menu").show('slide')
    $("#side_right_menu_container_feedback").show()
    $.ajax({
      type: 'post',
        url: 'api/index.php?t=searchinfo_sideright',
        data:  {
          "ID":get_account_id
     },success: function(response){
      $("#side_right_menu_container_feedback_scroll_name").val(response[0].firstname+' '+response[0].middlename+' '+response[0].lastname)
     }
    })
  })
  function show_community_comment_scroll(){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=show_com_comment',
      data:  {
        'ID':show_community_id,
   },
      success: function(response) {
        $('#community_show_comment_container_scroll').empty();
        if(response.status=='error'){
  
        }else{
          for(var i=0; i<response.length;i++){
            var show_time='';
            console.log(response)
            var dateraw = response[i].date_publish;
            var date = dateraw.split("-");
            var month = Month-date[1];
            if(month==0){
              var day = Day-date[2];
              if(day==0){
              if(date[5]==ampm){
                if(date[3]==12){
                  var hour =hours;
                }else{
                  var hour =hours-date[3];
                }
                show_time=hour+" s";
              }else{
                var hour = 12-date[3]+hours;
                show_time=hour+" h";
    
              }if(hour==0){
            var minute = minutes-date[4];
            show_time=minute+" m";
              }
              }else{
                show_time=day+" d";
              }
            }else{
              show_time=month+" m";
            }
          if(response[i].account_information_table_id==get_account_id){
            var row=$('<div id="community_show_comment_container_row'+response[i].account_information_table_id+'" class="row">'
          +'<div class="col-2">'
          +'  <img src="" alt="">'
          +'</div>'
          +'<div class="col-9">'
          +'  <h6 id="name"></h6>'
          +'  <h6>'+response[i].message+'</h6>'
          +'  <p id="time">'+show_time+'</p>'
          +'  <p class="delete_comment" delete_id="'+response[i].ID+'"><i class="fa-solid fa-trash-can"></i></p>'
          +'</div>'
          +'<div class="col-1">'
          +'</div>'
          +'</div>')
          }else{
            var row=$('<div id="community_show_comment_container_row'+response[i].account_information_table_id+'" class="row">'
          +'<div class="col-2">'
          +'  <img src="" alt="">'
          +'</div>'
          +'<div class="col-9">'
          +'  <h6 id="name"></h6>'
          +'  <h6>'+response[i].message+'</h6>'
          +'  <p id="time">'+show_time+'</p>'
          +'</div>'
          +'<div class="col-1">'
          +'</div>'
          +'</div>')
          }  
          $('#community_show_comment_container_scroll').append(row);
          }
          show_community_comment_get_name(response)
        }
      }
    })
  }
  function show_community_comment_get_name(data){
    for(var i=0; i<data.length;i++){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=show_community_comment_get_name',
      data:  {
        'ID':data[i].account_information_table_id,
   },
      success: function(response) {
        $("#community_show_comment_container_row"+response[0].ID+" img").attr('src','./public/image/userIMG/'+response[0].image_name)
        $("#community_show_comment_container_row"+response[0].ID+" #name").text(response[0].firstname+' '+response[0].middlename+' '+response[0].lastname)
      }
    })
  }
  } 
  function search_side_right_menuinfo(){
    $.ajax({
      type: 'post',
        url: 'api/index.php?t=searchinfo_sideright',
        data:  {
          "ID":get_account_id
     },success: function(response){
      $("#side_right_menu_container_account_img img").attr('src','./public/image/userIMG/'+response[0].image_name)
      $("#side_right_menu_container_account_firstname").text(response[0].firstname)
      $("#side_right_menu_container_account_firstnameINPUT").val(response[0].firstname)
      $("#side_right_menu_container_account_middlename").text(response[0].middlename)
      $("#side_right_menu_container_account_middlenameINPUT").val(response[0].middlename)
      $("#side_right_menu_container_account_lastname").text(response[0].lastname)
      $("#side_right_menu_container_account_lastnameINPUT").val(response[0].lastname)
      $("#side_right_menu_container_account_houseno").text(response[0].houseno)
      $("#side_right_menu_container_account_housenoINPUT").val(response[0].houseno)
      $("#side_right_menu_container_account_street").text(response[0].street)
      $("#side_right_menu_container_account_streetINPUT").val(response[0].street)
      $("#side_right_menu_container_account_brgy").text(response[0].brgy)
      $("#side_right_menu_container_account_brgyINPUT").val(response[0].brgy)
      $("#side_right_menu_container_account_municipality").text(response[0].municipality)
      $("#side_right_menu_container_account_municipalityINPUT").val(response[0].municipality)
      $("#side_right_menu_container_account_province").text(response[0].province)
      $("#side_right_menu_container_account_provinceINPUT").val(response[0].province)
      $("#side_right_menu_container_account_pnumber").text(response[0].contactno)
      $("#side_right_menu_container_account_pnumberINPUT").val(response[0].contactno)
      $("#side_right_menu_container_account_phase").text('Phase '+response[0].phase)
      $("#side_right_menu_container_account_phaseINPUT").val(response[0].phase)
      $("#side_right_menu_container_account_household").text('Family of '+response[0].household)
      $("#side_right_menu_container_account_householdINPUT").val(response[0].household)
      $("#side_right_menu_container_account_username").text(response[0].username)
      $("#side_right_menu_container_account_usernameINPUT").val(response[0].username)
      var pass = (response[0].password)
      account_password = (response[0].password)
      var passhide;
      for(var i=0;i<pass.length;i++){
        if(i==0){
          passhide='*'
        }else{
          passhide+='*'
        }
      }
      $("#side_right_menu_container_account_password").text(passhide)
      $("#side_right_menu_container_account_passwordINPUT").val(pass)
      
    }
  });
  }
  $(document).on("click","#side_right_menu_container_account_passwordINPUT_see",function() {
    if(passwordSTATUS==0){
      passwordSTATUS=1
      $("#side_right_menu_container_account_passwordINPUT").attr('type','text');
      $("#side_right_menu_container_account_passwordINPUT_see").removeClass('fa-eye-slash')
      $("#side_right_menu_container_account_passwordINPUT_see").addClass('fa-eye')
    }else{
      passwordSTATUS=0
      $("#side_right_menu_container_account_passwordINPUT").attr('type','password');
      $("#side_right_menu_container_account_passwordINPUT_see").addClass('fa-eye-slash')
      $("#side_right_menu_container_account_passwordINPUT_see").removeClass('fa-eye')
    }
  })
  $(document).on("click","#side_right_menu_container_account_passwordINPUT_see2",function() {
    if(passwordSTATUS1==0){
      passwordSTATUS1=1
      $("#side_right_menu_container_account_passwordINPUT2").attr('type','text');
      $("#side_right_menu_container_account_passwordINPUT_see2").removeClass('fa-eye-slash')
      $("#side_right_menu_container_account_passwordINPUT_see2").addClass('fa-eye')
    }else{
      passwordSTATUS1=0
      $("#side_right_menu_container_account_passwordINPUT2").attr('type','password');
      $("#side_right_menu_container_account_passwordINPUT_see2").addClass('fa-eye-slash')
      $("#side_right_menu_container_account_passwordINPUT_see2").removeClass('fa-eye')
    }
  })
  function show_announcement(){
    $('#announcement_image_show_div_container').empty();
    $.ajax({
        url: "api/index.php?t=a",
        success: function(response){
          show_annonce_image_total=response.length;
              var image_id=1;
              for (let i = 0; i < show_annonce_image_total; i++) {
                 if(image_id==1){
                  var row = $('<img class="announcement_image_show" id="announcement_image_show_'+image_id+'" src="./public/image/announceIMG/'+response[i].image_name+'" alt="" srcset="">');
                  image_id++
                  $('#announcement_image_show_div_container').append(row);
                 }else{
                  var row = $('<img class="announcement_image_show d-none" id="announcement_image_show_'+image_id+'" src="./public/image/announceIMG/'+response[i].image_name+'" alt="" srcset="">');
                  $('#announcement_image_show_div_container').append(row);
                  image_id++
                 }      
          }     
          if(show_annonce_image_total<=1){
            $("#publish_addtosite_container_preview_btn_left").hide()
            $("#publish_addtosite_container_preview_btn_right").hide()
            $("#announcement_image_show_div_img_count").hide()
          }
          $("#announcement_image_show_div_img_count").text(show_annonce_image_count)
          $("#home_page #announcement_paragraph").text(response[0].message);
          var calendar=response[0].schedule_date;
          announcement_calendar = calendar.split("-");
          var val;
          switch(announcement_calendar[1]) {
            case "01":
              val = "January";
              break;
            case "02":
              val = "February";
              break;
            case "03":
              val = "March";
              break;
            case "04":
              val = "April";
              break;
            case "05":
              val = "May";
              break;
            case "06":
              val = "June";
              break;
            case "07":
              val = "July";
              break;
            case "08":
              val = "August";
              break;
            case "09":
              val = "September";
              break;
            case "10":
              val = "October";
              break;
            case "11":
              val = "November";
              break;
            case "12":
              val = "December";
              break;
            default:
              // code block
          }
          $("#home_page #announcement_sched").text(val+" "+announcement_calendar[2]+", "+announcement_calendar[0]);
          $("#confirm_payment_container_row1_2_btn").text(val+" "+announcement_calendar[2]+", "+announcement_calendar[0]);
          var dateraw = response[0].publish_date;
          var date = dateraw.split("-");
          var month = Month-date[1];
          if(month==0){
            var day = Day-date[2];
            if(day==0){
            if(date[5]==ampm){
              if(date[3]==12){
                var hour =hours;
              }else{
                var hour =hours-date[3];
              }
              $("#home_page #announcement_time").text(hour+" hour ago");
            }else{
              var hour = 12-date[3]+hours;
              $("#home_page #announcement_time").text(hour+" hour ago");
  
            }if(hour==0){
          var minute = minutes-date[4];
            $("#home_page #announcement_time").text(minute+" minute ago");
            }
            }else{
              $("#home_page #announcement_time").text(day+" day ago");
            }
          }else{
            $("#home_page #announcement_time").text(month+" month ago");
          }
        }
        
    });
}
function show_community(){
  $('#community_page_show_row').empty();
  $.ajax({
      url: "api/index.php?t=c",
      success: function(response){
        if(response.status == "error"){
        }else{
          response_community_data=response
        for (let iM = 0; iM < response.length; iM++) {
        var calendar=response[iM].schedule_date;
        c_calendar = calendar.split("-");
        var val;
        switch(c_calendar[1]) {
          case "01":
            val = "January";
            break;
          case "02":
            val = "February";
            break;
          case "03":
            val = "March";
            break;
          case "04":
            val = "April";
            break;
          case "05":
            val = "May";
            break;
          case "06":
            val = "June";
            break;
          case "07":
            val = "July";
            break;
          case "08":
            val = "August";
            break;
          case "09":
            val = "September";
            break;
          case "10":
            val = "October";
            break;
          case "11":
            val = "November";
            break;
          case "12":
            val = "December";
            break;
          default:
            // code block
        }
        var what_date = val+" "+c_calendar[2]+", "+c_calendar[0];
        var dateraw = response[iM].publish_date;
        var date = dateraw.split("-");
        var month = Month-date[1];
        var what_time;
        if(month==0){
          var day = Day-date[2];
          if(day==0){
          if(date[5]==ampm){
            if(date[3]==12){
              var hour =hours;
            }else{
              var hour =hours-date[3];
            }
            what_time=hour+" hour ago"
          }else{
            var hour = 12-date[3]+hours;
            what_time=hour+" hour ago"

          }if(hour==0){
        var minute = minutes-date[4];
        what_time=minute+" minute ago"
          }
          }else{
            what_time+" day ago"
          }
        }else{
          what_time=month+" month ago"
        }
        var image_total=0;
        var image_count=1;
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=c_image',
          data:{
            "ID":response[iM].ID
          },
          success: function(response){
            if(response.status == "error"){
              var row=('<div id="community_page_main_community" class="community_page_main_community'+response_community_data[iM].ID+'" image_count="1" image_total="'+image_total+'" react_status="0">'
              +'<div class="container-fluid">'
              +'    <div class="row">'
              +'        <div class="col-3">'
              +'        <p id="community_page_community_time">'+what_time+'</p>'
              +'        </div>'
              +'        <div class="col-6">'
              +'        </div>'
              +'        <div class="col-3">'
              +'       </div>'
              +'    </div>'
              +'    <div class="row">'
              +'     <div class="col-1">'
              +'     </div>'
              +'     <div id="community_page_image_show_div" class="col-10">'
              +'       <div id="community_page_image_show_div_container">'
              +'</div>'
              +'     </div>'
              +'     <div class="col-1">'
              +'     </div>'
              +'   </div>'
              +'   <div class="row">'
              +'     <div class="col-1">'
              +'     </div>'
              +'     <div class="col-10">'
              +'       <p id="community_page_community_paragraph">'+response_community_data[iM].message+'</p>'
              +'     </div>'
              +'      <div class="col-1">'
              +'      </div>'
              +'    </div> '
              +'</div>'
              +'<p id="community_page_community_sched">'+what_date+'</p>'
              +'   <div id="community_page_community_comment" class="container-fluid">'
              +'       <div class="row">'
              +'           <div class="col-4">'
              +'               <p class="community_react community_page_community_like" id="community_page_community_like'+response_community_data[iM].ID+'" btn_id="'+response_community_data[iM].ID+'"><span id="community_page_community_like_span'+response_community_data[iM].ID+'"></span><i class="fa-solid fa-thumbs-up"></i></p>'
              +'           </div>'
              +'           <div class="col-4">'
              +'               <p class="community_react community_page_community_dislike" btn_id="'+response_community_data[iM].ID+'" id="community_page_community_dislike'+response_community_data[iM].ID+'"><span id="community_page_community_dislike_span'+response_community_data[iM].ID+'"></span><i class="fa-solid fa-thumbs-down"></i></p>'
              +'           </div>'
              +'           <div class="col-4">'
              +'                <p class="community_react community_page_community_reply" btn_id="'+response_community_data[iM].ID+'" id="community_page_community_reply'+response_community_data[iM].ID+'"><span id="community_page_community_reply_span'+response_community_data[iM].ID+'"></span><i class="fa-solid fa-message"></i></p>'
              +'           </div>'
              +'        </div>'
              +'    </div>'
              +'</div>')
                $("#community_page_show_row").append(row)
            }else{
              var message_show = '';
              if(response_community_data[iM].message==''){
                message_show ='';
              }else{
                message_show=('<p id="community_page_community_paragraph">'+response_community_data[iM].message+'</p>')
              }
              var image_show='';
              for (let i = 0; i < response.length; i++) {
                image_total++
              if(i==0){
                var image_row=('<img class="community_image_show" id="community_image_show'+response[0].community_table_image_id+'-'+image_count+'" src="./public/image/communityIMG/'+response[i].image_name+'" alt="" srcset="">')
              }else{
                var image_row=('<img class="community_image_show d-none" id="community_image_show'+response[0].community_table_image_id+'-'+image_count+'" src="./public/image/communityIMG/'+response[i].image_name+'" alt="" srcset="">')
              }
              image_count++
              image_show+=image_row
              }
              var row=('<div id="community_page_main_community" class="community_page_main_community'+response_community_data[iM].ID+'" image_count="1" image_total="'+image_total+'" react_status="0">'
              +'<div class="container-fluid">'
              +'    <div class="row">'
              +'        <div class="col-3">'
              +'        <p id="community_page_community_time">'+what_time+'</p>'
              +'        </div>'
              +'        <div class="col-6">'
              +'        </div>'
              +'        <div class="col-3">'
              +'       </div>'
              +'    </div>'
              +'    <div class="row">'
              +'     <div class="col-1">'
              +'       <p title="Next left" id="community_page_image_show_div_btn_left" btn_id="'+response_community_data[iM].ID+'"><i class="fa-solid fa-chevron-left"></i></p>'
              +'     </div>'
              +'     <div id="community_page_image_show_div" class="col-10">'
              +'         <p id="community_page_image_show_div_img_count" class="community_page_image_show_div_img_count'+response_community_data[iM].ID+'">1</p>'
              +'       <div id="community_page_image_show_div_container">'
              +image_show
              +'</div>'
              +'     </div>'
              +'     <div class="col-1">'
              +'       <p title="Next right" id="community_page_image_show_div_btn_right" btn_id="'+response_community_data[iM].ID+'"><i class="fa-solid fa-chevron-right"></i></p>'
              +'     </div>'
              +'   </div>'
              +'   <div class="row">'
              +'     <div class="col-1">'
              +'     </div>'
              +'     <div class="col-10">'
              +message_show
              +'     </div>'
              +'      <div class="col-1">'
              +'      </div>'
              +'    </div> '
              +'</div>'
              +'<p id="community_page_community_sched">'+what_date+'</p>'
              +'   <div id="community_page_community_comment" class="container-fluid">'
              +'       <div class="row">'
              +'           <div class="col-4">'
              +'               <p class="community_react community_page_community_like" id="community_page_community_like'+response_community_data[iM].ID+'" btn_id="'+response_community_data[iM].ID+'"><span id="community_page_community_like_span'+response_community_data[iM].ID+'"></span><i class="fa-solid fa-thumbs-up"></i></p>'
              +'           </div>'
              +'           <div class="col-4">'
              +'               <p class="community_react community_page_community_dislike" btn_id="'+response_community_data[iM].ID+'" id="community_page_community_dislike'+response_community_data[iM].ID+'"><span id="community_page_community_dislike_span'+response_community_data[iM].ID+'"></span><i class="fa-solid fa-thumbs-down"></i></p>'
              +'           </div>'
              +'           <div class="col-4">'
              +'                <p class="community_react community_page_community_reply" btn_id="'+response_community_data[iM].ID+'" id="community_page_community_reply'+response_community_data[iM].ID+'"><span id="community_page_community_reply_span'+response_community_data[iM].ID+'"></span><i class="fa-solid fa-message"></i></p>'
              +'           </div>'
              +'        </div>'
              +'    </div>'
              +'</div>')
                $("#community_page_show_row").append(row)
            }
          }
        })
          }
      }
    } 
  });
  
}

function show_water_info(){
  $('#water_info_phase1 .col-4').empty();
  $('#water_info_phase2 .col-4').empty();
  $('#water_info_phase3 .col-4').empty();
  $('#water_info_phase4 .col-4').empty();
  $.ajax({
    url: "api/index.php?t=w",
    success: function(response){ 
      var pres = response[0].pressure;
      if(pres==1){
        water_pressure = "Slow";
      }else if(pres==2){
        water_pressure = "Normal";
      }else{
        water_pressure = "High";
      }
        if(response[0].phase1==0){
          var row = $('<img src="./public/image/pageIMG/pipe_close.png" alt="">');
          $('#water_info_phase1 .col-4').append(row);
        }else{
          var row = $('<img src="./public/image/pageIMG/pipe_open.png" alt="">');
          $('#water_info_phase1 .col-4').append(row);
        }
        if(response[0].phase2==0){
          var row = $('<img src="./public/image/pageIMG/pipe_close.png" alt="">');
          $('#water_info_phase2 .col-4').append(row);
        }else{
          var row = $('<img src="./public/image/pageIMG/pipe_open.png" alt="">');
          $('#water_info_phase2 .col-4').append(row);
        }
        if(response[0].phase3==0){
          var row = $('<img src="./public/image/pageIMG/pipe_close.png" alt="">');
          $('#water_info_phase3 .col-4').append(row);
        }else{
          var row = $('<img src="./public/image/pageIMG/pipe_open.png" alt="">');
          $('#water_info_phase3 .col-4').append(row);
        }
        if(response[0].phase4==0){
          var row = $('<img src="./public/image/pageIMG/pipe_close.png" alt="">');
          $('#water_info_phase4 .col-4').append(row);
        }else{
          var row = $('<img src="./public/image/pageIMG/pipe_open.png" alt="">');
          $('#water_info_phase4 .col-4').append(row);
        }
      $("#pressure_status").text(water_pressure);
      if(response[0].water_level==0){
        $("#level_status").text("Empty Tank");
      }else{
        $("#level_status").text(response[0].water_level+"0% Full");
      }
      var dateraw = response[0].publish_date;
      var date = dateraw.split("-");
      var month = Month-date[1];
        if(month==0){
          var day = Day-date[2];
          if(day==0){
          if(date[5]==ampm){
            if(date[3]==12){
              var hour =hours;
            }else{
              var hour =hours-date[3];
            }
            $("#home_page #water_info_time").text(hour+" hour ago");
          }else{
            var hour = 12-date[3]+hours;
            $("#home_page #water_info_time").text(hour+" hour ago");

          }if(hour==0){
        var minute = minutes-date[4];
          $("#home_page #water_info_time").text(minute+" minute ago");
          }
          }else{
            $("#home_page #water_info_time").text(day+" day ago");
          }
        }else{
          $("#home_page #water_info_time").text(month+" month ago");
        }

      }  
});
      $.ajax({
        url: "api/index.php?t=w_phase_time",
        success: function(response){
          var count=1;
          for (var i=0; i<response.length; i++) {
          var first = response[i].first_time.split("-");
          var second = response[i].second_time.split("-");
          $("#phase"+count+"_time").text(first[0]+first[1]+'-'+second[0]+second[1]);
          count++
          }
        }
        })
}
function show_rules(){
  $('#community_page_rules_show_row').empty();
  $.ajax({
      url: "api/index.php?t=rul",
      success: function(response){
        if(response.status == "error"){
        }else{
          response_rules_data=response
        for (let iM = 0; iM < response.length; iM++) {  
        var dateraw = response[iM].publish_date;
        var date = dateraw.split("-");
        var month = Month-date[1];
        var what_time;
        if(month==0){
          var day = Day-date[2];
          if(day==0){
          if(date[5]==ampm){
            if(date[3]==12){
              var hour =hours;
            }else{
              var hour =hours-date[3];
            }
            what_time=hour+" hour ago"
          }else{
            var hour = 12-date[3]+hours;
            what_time=hour+" hour ago"

          }if(hour==0){
        var minute = minutes-date[4];
        what_time=minute+" minute ago"
          }
          }else{
            what_time+" day ago"
          }
        }else{
          what_time=month+" month ago"
        }
        var image_total=0;
        var image_count=1;
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=c_image2',
          data:{
            "ID":response[iM].ID
          },
          success: function(response){
            if(response.status == "error"){
              var row=('<div id="community_page_rules" class="community_page_rules'+response_rules_data[iM].ID+'" image_count="1" image_total="'+image_total+'">'
              +'<div class="container-fluid">'
              +'    <div class="row">'
              +'        <div class="col-3">'
              +'        <p id="community_page_rules_time">'+what_time+'</p>'
              +'        </div>'
              +'        <div class="col-6">'
              +'        </div>'
              +'        <div class="col-3">'
              +'       </div>'
              +'    </div>'
              +'    <div class="row">'
              +'     <div class="col-1">'
              +'     </div>'
              +'     <div id="community_page_rules_image_show_div" class="col-10">'
              +'       <div id="community_page_rules_image_show_div_container">'
              +'</div>'
              +'     </div>'
              +'     <div class="col-1">'
              +'     </div>'
              +'   </div>'
              +'   <div class="row">'
              +'     <div class="col-1">'
              +'     </div>'
              +'     <div class="col-10">'
              +'       <p id="community_page_rules_paragraph">'+response_community_data[iM].message+'</p>'
              +'     </div>'
              +'      <div class="col-1">'
              +'      </div>'
              +'    </div> '
              +'</div>'
              +'</div>')
                $("#community_page_rules_show_row").append(row)
            }else{
              var message_show = '';
              if(response_rules_data[iM].message==''){
                message_show ='';
              }else{
                message_show=('<p id="community_page_rules_paragraph">'+response_rules_data[iM].message+'</p>')
              }
              var image_show='';
              for (let i = 0; i < response.length; i++) {
                image_total++
              if(i==0){
                var image_row=('<img class="community_page_rules_image_show" id="community_page_rules_image_show'+response[0].rules_table_image_id+'-'+image_count+'" src="./public/image/rulesIMG/'+response[i].image_name+'" alt="" srcset="">')
              }else{
                var image_row=('<img class="community_page_rules_image_show d-none" id="community_page_rules_image_show'+response[0].rules_table_image_id+'-'+image_count+'" src="./public/image/rulesIMG/'+response[i].image_name+'" alt="" srcset="">')
              }
              image_count++
              image_show+=image_row
              }
              var row=('<div id="community_page_rules" class="community_page_rules'+response_rules_data[iM].ID+'" image_count="1" image_total="'+image_total+'">'
              +'<div class="container-fluid">'
              +'    <div class="row">'
              +'        <div class="col-3">'
              +'        <p id="community_page_rules_time">'+what_time+'</p>'
              +'        </div>'
              +'        <div class="col-6">'
              +'        </div>'
              +'        <div class="col-3">'
              +'       </div>'
              +'    </div>'
              +'    <div class="row">'
              +'     <div class="col-1">'
              +'       <p title="Next left" id="community_page_rules_image_show_div_btn_left" btn_id="'+response_rules_data[iM].ID+'"><i class="fa-solid fa-chevron-left"></i></p>'
              +'     </div>'
              +'     <div id="community_page_rules_image_show_div" class="col-10">'
              +'         <p id="community_page_rules_image_show_div_img_count" class="community_page_rules_image_show_div_img_count'+response_rules_data[iM].ID+'">1</p>'
              +'       <div id="community_page_rules_image_show_div_container">'
              +image_show
              +'</div>'
              +'     </div>'
              +'     <div class="col-1">'
              +'       <p title="Next right" id="community_page_rules_image_show_div_btn_right" btn_id="'+response_rules_data [iM].ID+'"><i class="fa-solid fa-chevron-right"></i></p>'
              +'     </div>'
              +'   </div>'
              +'   <div class="row">'
              +'     <div class="col-1">'
              +'     </div>'
              +'     <div class="col-10">'
              +message_show
              +'     </div>'
              +'      <div class="col-1">'
              +'      </div>'
              +'    </div> '
              +'</div>'
              +'</div>')
                $("#community_page_rules_show_row").append(row)
            }
          }
        })
          }
      }
    } 
  });
}


function show_rate(){
  $.ajax({
    type: 'post',
      url: "api/index.php?t=rate",
      data:  {
        "id": get_account_id,
   },
      success: function(response){
        $("#bills_table_rate_count").text("₱ "+response[0].rate)
      }
  });
}

$(document).on("change","#bills_year",function(){
  var data = $("#bills_year").val()
  show_active_year=data
  show_bills_table()
});
function show_bills_table(){
  $('#bills_table tbody').empty()
  $.ajax({
    type: 'post',
      url: "api/index.php?t=ub_month",
      data:  {
        "id": get_account_id,
        "year": show_active_year
   },
      success: function(response){
        var summary=0;
        var balance=0;
        var balancesummary=0;
        for (var i=0; i<response.length; i++) {
          var val;
          switch(response[i].month_publish) {
            case 1:
              val = "January";
              break;
            case 2:
              val = "February";
              break;
            case 3:
              val = "March";
              break;
            case 4:
              val = "April";
              break;
            case 5:
              val = "May";
              break;
            case 6:
              val = "June";
              break;
            case 7:
              val = "July";
              break;
            case 8:
              val = "August";
              break;
            case 9:
              val = "September";
              break;
            case 10:
              val = "October";
              break;
            case 11:
              val = "November";
              break;
            case 12:
              val = "December";
              break;
            default:
          }
         if(response[i].confirmation==""){
          if(response[i].method==""){
            balance++
            balancesummary+=response[i].amount
            var row = $('<tr><td>' + val + '</td><td>' + response[i].amount + '</td><td><button  id="'+response[i].ID+'" type="button" class="btn btn-primary select_payment" confirm_id="'+response[i].ID+'">Pay</button></td></td><td>' + response[i].confirmation + '</td><td></td></tr>');
          }
         }else{
          summary+=response[i].amount
          var row = $('<tr><td>' + val + '</td><td>' + response[i].amount + '</td><td>' + response[i].method+ '</td><td>' + response[i].confirmation + '</td><td><i title="Print" class="fa-solid fa-print btn_print" receipt_id="'+response[i].ID+'"></i></td></tr>');
         }
          $('#bills_table tbody').append(row);
        }
        $("#bills_table_summary_count").text("₱ "+summary)
        $("#bills_table_notpaid_count").text(balance+" / ₱ "+balancesummary)
      }
  });
}
$(document).on("click","#community_page_community_like",function() {
  if(react_status==0){
    react_status=1
    $('#community_page_community_like').addClass('comment_page_active')
    update_comment_user_who_react()
  }else if(react_status==1){
    react_status=0
    $('#community_page_community_like').removeClass('comment_page_active')
    update_comment_user_who_react()
  }else if(react_status==2){
    react_status=1
  $('#community_page_community_like').addClass('comment_page_active')
  $('#community_page_community_dislike').removeClass('comment_page_active')
  update_comment_user_who_react()
  }
  })
function update_comment_user_who_react(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=update_comment_user_who_react',
    data:  {
      'ID':get_account_id,
      'status':react_status,
      'C_id':show_community_id,
 },
    success: function(response) {
      if(response.status=='error'){

      }else{
      show_community_react_status()
      }
    }
  })
}
$(document).on("click","#community_show_comment_container_btn_send",function() {
  var data = $("#community_show_comment_container_input").val()
  if(data.length==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Try to type something')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
        $("#community_show_comment_container_input").focus()
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=send_comment',
      data:{
        "ID":get_account_id,
        "C_id":show_community_id,
        "date":date+"-"+strTime,
        "message":data,
      },
      success: function(response) {
        $("#side_bar_menu_show_status").show();
        if(response.status == "error"){
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
        }else{
          show_community_comment()
          show_community_comment_scroll()
          $("#community_show_comment_container_input").val('')
          $("#community_show_comment_container_input").focus()
        $("#community_show_comment_container_scroll").animate({ scrollTop: $('#community_show_comment_container_scroll').prop("scrollHeight")}, 1000);
          
        }
      }
    })
  }
  })
  function show_community_comment(){
    show_community_react_status()
    var id;
    for(var i=0; i<response_community_data.length;i++){
      id=response_community_data[i].ID
      console.log(id)
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=show_com_comment',
      data:  {
        'ID':response_community_data[i].ID,
   },
      success: function(response) {
        if(response.status=='error'){
        }else{
          $("#community_page_community_reply_span"+response[0].community_table_id).text(response.length)
          show_community_comment_get_name(response)
        }
      }
    })
  }
  }
  $(document).on("click",".community_page_community_like",function() {
    var id = $(this).attr("btn_id")
    var stat = $(".community_page_main_community"+id).attr('react_status')
    var gstat= stat;
    if(gstat==0){
      gstat=1
      $(".community_page_main_community"+id).attr('react_status','1')
      $('#community_page_community_like'+id).addClass('comment_page_active')
      update_comment_user_who_react(id,gstat)
    }else if(gstat==1){
      gstat=0
      $(".community_page_main_community"+id).attr('react_status','0')
      $('#community_page_community_like'+id).removeClass('comment_page_active')
      update_comment_user_who_react(id,gstat)
    }else if(gstat==2){
      gstat=1
      $(".community_page_main_community"+id).attr('react_status','1')
    $('#community_page_community_like'+id).addClass('comment_page_active')
    $('#community_page_community_dislike'+id).removeClass('comment_page_active')
    update_comment_user_who_react(id,gstat)
    }
    })
  $(document).on("click",".community_page_community_dislike",function() {
    var id = $(this).attr("btn_id")
    var stat = $(".community_page_main_community"+id).attr('react_status')
    var gstat = stat;
    if(gstat==0){
      gstat=2
      $(".community_page_main_community"+id).attr('react_status','2')
      $('#community_page_community_dislike'+id).addClass('comment_page_active')
      update_comment_user_who_react(id,gstat)
    }else if(gstat==2){
      gstat=0
      $(".community_page_main_community"+id).attr('react_status','0')
      $('#community_page_community_dislike'+id).removeClass('comment_page_active')
      update_comment_user_who_react(id,gstat)
    }else if(gstat==1){
      gstat=2
      $(".community_page_main_community"+id).attr('react_status','2')
    $('#community_page_community_dislike'+id).addClass('comment_page_active')
    $('#community_page_community_like'+id).removeClass('comment_page_active')
    update_comment_user_who_react(id,gstat)
    }
    })
function update_comment_user_who_react(id,react){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=update_comment_user_who_react',
    data:  {
      'ID':get_account_id,
      'status':react,
      'C_id':id,
 },
    success: function(response) {
      if(response.status=='error'){

      }else{
      show_community_react_status()
      }
    }
  })
}
function show_community_react_status(){
  var id;
  for(var i=0; i<response_community_data.length;i++){
    id=response_community_data[i].ID
  $("#community_page_community_dislike_span"+id).text('')
  $("#community_page_community_like_span"+id).text('')
  $("#community_page_community_like"+id).removeClass('comment_page_active')
  $("#community_page_community_dislike"+id).removeClass('comment_page_active')
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=show_community_react_status',
    data:  {
      'ID':id,
 },
    success: function(response) {
      var likecount=0;
      var dlikecount=0;
      if(response.status=='error'){
      }else{
        for(var i=0; i<response.length;i++){
          if(response[i].status==2){
            dlikecount++
          }else if(response[i].status==1){
            likecount++
          }
          if(response[i].account_information_table_id==get_account_id){
            if(response[i].status==1){
              $(".community_page_main_community"+response[i].community_table_id).attr('react_status','1')
              $("#community_page_community_like"+response[i].community_table_id).addClass('comment_page_active')
            }else{
              $(".community_page_main_community"+response[i].community_table_id).attr('react_status','2')
              $("#community_page_community_dislike"+response[i].community_table_id).addClass('comment_page_active')
            }
          }
          if(dlikecount==0){
          }else{
            $("#community_page_community_dislike_span"+response[i].community_table_id).text(dlikecount)
          }
          if(likecount==0){
          }else{
            $("#community_page_community_like_span"+response[i].community_table_id).text(likecount)
          }
        }
      }
    }
  })
}

}
function show_community_comment_get_name(data){
  for(var i=0; i<data.length;i++){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=show_community_comment_get_name',
    data:  {
      'ID':data[i].account_information_table_id,
 },
    success: function(response) {
      $("#community_show_comment_container_row"+response[0].ID+" img").attr('src','./public/image/userIMG/'+response[0].image_name)
      $("#community_show_comment_container_row"+response[0].ID+" #name").text(response[0].firstname+' '+response[0].middlename+' '+response[0].lastname)
    }
  })
}
} 
$(document).on("click","#community_page_community_dislike",function() {
  if(react_status==0){
    react_status=2
    $('#community_page_community_dislike').addClass('comment_page_active')
    update_comment_user_who_react()
  }else if(react_status==2){
    react_status=0
    $('#community_page_community_dislike').removeClass('comment_page_active')
    update_comment_user_who_react()
  }else if(react_status==1){
    react_status=2
  $('#community_page_community_dislike').addClass('comment_page_active')
  $('#community_page_community_like').removeClass('comment_page_active')
  update_comment_user_who_react()
  }
  })
$(document).on("click",".select_payment",function(){
  selected_payment_id = $(this).attr("confirm_id")
  show_payment_chat()
  setTimeout(function(){
    if(payment_status==0){
      $("#confirm_payment").show('slide');
    }else{
      $("#confirm_payment").show('slide');
      $("#confirm_payment_container_row1").hide();
      $("#confirm_payment_container_row2").show();
      $("#confirm_payment_container_row2_1").hide();
      $("#confirm_payment_container_row2_2").show();
    }
    }, 200);
 })
 $(document).on("click",".delete_payment_ms",function(){
  var id = $(this).attr("delete_payment_ms_id")
  var what = $(this).attr("what_chat")
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=delete_gcash_chat',
    data: {
      'id':id,
      'what':what,
    },
    success: function(response) {
        if(response.status == "error"){
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_red")
          hide()
        }else{
          show_payment_chat()
        }
      }
    })
 })
 $(document).on("click","#exit_payment_method",function(){
  $("#payment_method").hide();
 })
 $(document).on("click","#print_receipt_container_btn_exit",function(){
  $("#print_receipt").hide('slide');
 })
 $(document).on("click",".btn_print",function(){
  var id = $(this).attr("receipt_id")
  $("#print_receipt").show('slide');
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=show_receipt_info',
    data: {
      'id':id,
    },
    success: function(response) {
        if(response.status == "error"){
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_red")
          hide()
        }else{

        }
      }
    })
 })
 $(document).on("click","#print_receipt_container_btn_print",function(){
  var element = document.getElementById('print_receipt_container_pdf');
  var opt = {
  margin:       1,
  filename:     'PWA_receipt.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
 })
 $(document).on("click","#confirm_payment_container_btn_exit",function(){
  $("#confirm_payment_container_row1").show();
  $("#confirm_payment_container_row2").hide();
  $("#confirm_payment_container_row2_1").show();
  $("#confirm_payment_container_row2_2").hide();
  $("#confirm_payment").hide('slide');
 })
 $(document).on("click","#confirm_payment_container_row1_1_btn",function(){
  $.ajax({
    type: 'post',
    url: "api/index.php?t=gcash_number",
    success: function(response){
      if(response.status == "error"){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("Try again")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
      }else{
        $("#confirm_payment_container_row2_number").text(response[0].number.substr(0,4)+'-'+response[0].number.substr(4,3)+'-'+response[0].number.substr(7,4));
        $("#confirm_payment_container_row2_name").text('Name:'+response[0].name);
        $("#confirm_payment_container_row1").hide();
        $("#confirm_payment_container_row2").show();
      }
      }
  });
 })
 $(document).on("click","#confirm_payment_container_row2_1_btn_back",function(){
  $("#confirm_payment_container_row1").show();
  $("#confirm_payment_container_row2").hide();
 })
 $(document).on("click","#confirm_payment_container_row2_2_btn_back",function(){
  $("#confirm_payment_container_row2_1").show();
  $("#confirm_payment_container_row2_2").hide();
 })
 $(document).on("click","#confirm_payment_container_row2_2_1_btn1",function(){
  $('#confirm_payment_container_row2_2_1_image_input').trigger('click');
 })
 $(document).on("change","#confirm_payment_container_row2_2_1_image_input",function(){
  const files_val = document.querySelector('#confirm_payment_container_row2_2_1_image_input').files;
  const index = files_val[0].name.lastIndexOf('.');
  const after = files_val[0].name.slice(index + 1);
  let lowercase = after.toLowerCase();
  payment_chat_img=[]
  payment_chat_img[0] = files_val[0];
  if(lowercase=='png'||lowercase=='jpeg'||lowercase=='jpg'){
  if(files_val[0].size > 2097152){
    $("#side_bar_menu_show_status").show();
    $("#side_bar_menu_show_status h3").text("Image size is to large")
    $("#side_bar_menu_show_status").addClass("status_red")
    $("#side_bar_menu_show_status").removeClass("status_green")
    hide()
  }else{
    const formData = new FormData();
    formData.append('files[]', payment_chat_img[0]);
          const url = 'api/index.php?t=paymentchat_IMGupload&ref='+selected_payment_id+'[%]'+get_account_id;
            fetch(url, {
              method: 'POST',
              body: formData
            }).then(response => {
              return response.text();
          }).then(e => {
            const data = JSON.parse(e)
            $("#side_bar_menu_show_status").show();
            if(data.status == "error"){
              $("#side_bar_menu_show_status h3").text(data.message)
              $("#side_bar_menu_show_status").addClass("status_red")
              $("#side_bar_menu_show_status").removeClass("status_green")
              hide()
            }else{
              show_payment_chat()
            }
            })
  }
}else{
    $("#side_bar_menu_show_status").show();
    $("#side_bar_menu_show_status h3").text("Pls select image type")
    $("#side_bar_menu_show_status").addClass("status_red")
    $("#side_bar_menu_show_status").removeClass("status_green")
    hide()
}
})
 $(document).on("click","#confirm_payment_container_row2_2_1_btn3",function(){
  var message = $("#confirm_payment_container_row2_2_1_input").val();
    if(message.length==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("You don't have any input")
      $("#side_bar_menu_show_status").addClass("status_red")
      hide()
      $("#confirm_payment_container_row2_2_1_input").focus()
    }else{
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=new_gcash_chat',
        data: {
          'id':get_account_id,
          'Bid':selected_payment_id,
          'message':message,
        },
        success: function(response) {
            if(response.status == "error"){
              $("#side_bar_menu_show_status").show();
              $("#side_bar_menu_show_status h3").text(response.message)
              $("#side_bar_menu_show_status").addClass("status_red")
              hide()
            }else{
              $("#confirm_payment_container_row2_2_1_input").val('')
              show_payment_chat()
            }
          }
        })
    }
 })
 $(document).on("click","#confirm_payment_container_row2_send",function(){
  $("#confirm_payment_container_row2_1").hide();
  $("#confirm_payment_container_row2_2").show();
  show_payment_chat()
 })
 function show_payment_chat(){
  $.ajax({
    type: 'post',
    url: "api/index.php?t=show_gcash_chat",
    data:  {
      "id": selected_payment_id,
 },
      success: function(response){
        $('#confirm_payment_container_row2_2_scroll').empty()
        if(response.status == "error"){
          payment_status=0
        }else{
          payment_status=1
            for (let i = 0; i < response.length; i++) {
               if(response[i].image_name==''){
                if(response[i].account_information_table_id==get_account_id){
                  var row = $('<div class="row">'
                  +'<div class="col-12">'
                  +'  <h6 class="chat_left">'+response[i].message+'</h6>'
                  +' <i class="fa-solid fa-trash-can delete_payment_ms" delete_payment_ms_id="'+response[i].ID+'" what_chat="0"></i>'
                  +'</div>'
                  +'</div>');
                }else{
                  var row = $('<div class="row">'
                  +'<div class="col-12">'
                  +'  <h6 class="chat_right">'+response[i].message+'</h6>'
                  +'</div>'
                  +'</div>');
                }
                $('#confirm_payment_container_row2_2_scroll').append(row)
               }else{
                if(response[i].account_information_table_id==get_account_id){
                  var row = $('<div class="row">'
                  +'<div class="col-12">'
                  +' <img class="ms_left" src="./public/image/gcashconfirmIMG/'+response[i].image_name+'" alt="" srcset="">'
                  +' <i class="fa-solid fa-trash-can delete_payment_ms" delete_payment_ms_id="'+response[i].ID+'" what_chat="1"></i>'
                  +'</div>'
                  +'</div>');
                }else{
                  var row = $('<div class="row">'
                  +'<div class="col-12">'
                  +' <img class="" src="./public/image/gcashconfirmIMG/'+response[i].image_name+'" alt="" srcset="">'
                  +'</div>'
                  +'</div>');
                }
                $('#confirm_payment_container_row2_2_scroll').append(row)
               }            
               
              }
            }
            $("#confirm_payment_container_row2_2_scroll").animate({ scrollTop: $('#confirm_payment_container_row2_2_scroll').prop("scrollHeight")}, 1000);
      }
  });
 }
 $(document).on("keyup","#side_right_menu_container_account_firstnameINPUT",function(){
  var val1 = $("#side_right_menu_container_account_firstname").text()
  var val2 = $("#side_right_menu_container_account_firstnameINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_middlenameINPUT",function(){
  var val1 = $("#side_right_menu_container_account_middlename").text()
  var val2 = $("#side_right_menu_container_account_middlenameINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_lastnameINPUT",function(){
  var val1 = $("#side_right_menu_container_account_lastname").text()
  var val2 = $("#side_right_menu_container_account_lastnameINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_housenoINPUT",function(){
  var val1 = $("#side_right_menu_container_account_houseno").text()
  var val2 = $("#side_right_menu_container_account_housenoINPUT").val()
  if(val1==val2){
    check_houseno_status=0
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_housenoINPUT").removeClass('side_right_ok side_right_error')
  if(val2==''){

  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=check_houseno',
      data: {
        'houseno':val2,
      },
      success: function(response) {
        if(response.status == "error"){
          check_houseno_status=0
          $("#side_right_menu_container_account_housenoINPUT").addClass('side_right_ok')
          $("#side_right_menu_container_account_btn").css('display', 'block ruby')
        }else{
          check_houseno_status=1
          $("#side_right_menu_container_account_housenoINPUT").addClass('side_right_error')
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('House# already exist')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
        }
      }
  });
  }
  }
})
$(document).on("keyup","#side_right_menu_container_account_streetINPUT",function(){
  var val1 = $("#side_right_menu_container_account_street").text()
  var val2 = $("#side_right_menu_container_account_streetINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_brgyINPUT",function(){
  var val1 = $("#side_right_menu_container_account_brgy").text()
  var val2 = $("#side_right_menu_container_account_brgyINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_municipalityINPUT",function(){
  var val1 = $("#side_right_menu_container_account_municipality").text()
  var val2 = $("#side_right_menu_container_account_municipalityINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_provinceINPUT",function(){
  var val1 = $("#side_right_menu_container_account_province").text()
  var val2 = $("#side_right_menu_container_account_provinceINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_pnumberINPUT",function(){
  var val1 = $("#side_right_menu_container_account_pnumber").text()
  var val2 = $("#side_right_menu_container_account_pnumberINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("change","#side_right_menu_container_account_phaseINPUT",function(){
  var val1 = $("#side_right_menu_container_account_phase").text()
  var val2 = $("#side_right_menu_container_account_phaseINPUT").val()
  if(val1==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})
$(document).on("keyup","#side_right_menu_container_account_usernameINPUT",function(){
  var val1 = $("#side_right_menu_container_account_username").text()
  var val2 = $("#side_right_menu_container_account_usernameINPUT").val()
  if(val1==val2){
    check_username_status=0
    $("#side_right_menu_container_account_btn").css('display', 'none')
  }else{
    $("#side_right_menu_container_account_usernameINPUT").removeClass('side_right_ok side_right_error')
  if(val2==''){

  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=check_username',
      data: {
        'username':val2,
      },
      success: function(response) {
        if(response.status == "error"){
          check_username_status=0
          $("#side_right_menu_container_account_usernameINPUT").addClass('side_right_ok')
          $("#side_right_menu_container_account_btn").css('display', 'block ruby')
        }else{
          check_username_status=1
          $("#side_right_menu_container_account_usernameINPUT").addClass('side_right_error')
          $("#side_bar_menu_show_status").show();
          $("#side_bar_menu_show_status h3").text('Username already exist')
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
        }
      }
  });
  }
  }
})
$(document).on("keyup","#side_right_menu_container_account_passwordINPUT",function(){
  var val1 = $("#side_right_menu_container_account_password").text()
  var val2 = $("#side_right_menu_container_account_passwordINPUT").val()
  if(account_password==val2){
    $("#side_right_menu_container_account_btn").css('display', 'none')
    $("#side_right_menu_container_account_passwordINPUT2").hide()
  }else{
    $("#side_right_menu_container_account_passwordINPUT_see2").show()
    $("#side_right_menu_container_account_passwordINPUT2").show()
    $("#side_right_menu_container_account_btn").css('display', 'block ruby')
  }
})

  $(document).on("dblclick","#side_right_menu_container_account_firstname",function(){
      $("#side_right_menu_container_account_firstname").hide()
      $("#side_right_menu_container_account_firstnameINPUT").show()
      $("#side_right_menu_container_account_firstnameINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_middlename",function(){
      $("#side_right_menu_container_account_middlename").hide()
      $("#side_right_menu_container_account_middlenameINPUT").show()
      $("#side_right_menu_container_account_middlenameINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_lastname",function(){
      $("#side_right_menu_container_account_lastname").hide()
      $("#side_right_menu_container_account_lastnameINPUT").show()
      $("#side_right_menu_container_account_lastnameINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_houseno",function(){
      $("#side_right_menu_container_account_houseno").hide()
      $("#side_right_menu_container_account_housenoINPUT").show()
      $("#side_right_menu_container_account_housenoINPUT").focus()
  })
    $(document).on("dblclick","#side_right_menu_container_account_street",function(){
      $("#side_right_menu_container_account_street").hide()
      $("#side_right_menu_container_account_streetINPUT").show()
      $("#side_right_menu_container_account_streetINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_brgy",function(){
      $("#side_right_menu_container_account_brgy").hide()
      $("#side_right_menu_container_account_brgyINPUT").show()
      $("#side_right_menu_container_account_brgyINPUT").focus()
  })
    $(document).on("dblclick","#side_right_menu_container_account_municipality",function(){
      $("#side_right_menu_container_account_municipality").hide()
      $("#side_right_menu_container_account_municipalityINPUT").show()
      $("#side_right_menu_container_account_municipalityINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_province",function(){
      $("#side_right_menu_container_account_province").hide()
      $("#side_right_menu_container_account_provinceINPUT").show()
      $("#side_right_menu_container_account_provinceINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_pnumber",function(){
      $("#side_right_menu_container_account_pnumber").hide()
      $("#side_right_menu_container_account_pnumberINPUT").show()
      $("#side_right_menu_container_account_pnumberINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_phase",function(){
      $("#side_right_menu_container_account_phase").hide()
      $("#side_right_menu_container_account_phaseINPUT").show()
      $("#side_right_menu_container_account_phaseINPUT").focus()

  })
  $(document).on("dblclick","#side_right_menu_container_account_household",function(){
      $("#side_right_menu_container_account_household").hide()
      $("#side_right_menu_container_account_householdINPUT").show()
      $("#side_right_menu_container_account_householdINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_username",function(){
      $("#side_right_menu_container_account_username").hide()
      $("#side_right_menu_container_account_usernameINPUT").show()
      $("#side_right_menu_container_account_usernameINPUT").focus()
  })
  $(document).on("dblclick","#side_right_menu_container_account_password",function(){
      $("#side_right_menu_container_account_password").hide()
      $("#side_right_menu_container_account_passwordINPUT").show()
      $("#side_right_menu_container_account_passwordINPUT").focus()
      $("#side_right_menu_container_account_passwordINPUT_see").show()
  });
function hide(){
  setTimeout(function () {
    $("#side_bar_menu_show_status h3").text("");
    $("#side_bar_menu_show_status").hide();
    $("#side_bar_menu_show_status").removeClass("status_red")
    $("#side_bar_menu_show_status").removeClass("status_green")
    }, 2000);
}

function show_user_bills_year(){
  $.ajax({
    type: 'post',
      url: "api/index.php?t=ub",
      data:  {
        "id": get_account_id
   },
      success: function(response){

        for (var i=0; i<response.length; i++) {
          var row = $('<option>'+response[i].year_publish+'</option>');
          $('#bills_year').append(row);
          $('#bills_year').val(Year);
        }
      }
  });
}