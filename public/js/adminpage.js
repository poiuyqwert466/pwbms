var upload_image_val_error = [];
var upload_image_val_error_index = [];
var upload_image_files = [];
var upload_image_status=0;
var data_image=[];
var upload_image_real_location=[];
var save_files_val_status=0;
var react_status=0;
var files_val=[];
var open_phaseall=0;
var open_phase1=0;
var open_phase2=0;
var open_phase3=0;
var open_phase4=0;
var preview_image_count=1;
var preview_image_total;
var show_annonce_image_count=1;
var show_annonce_image_total;
var show_com_image_count=1;
var show_com_image_total;
var announcement_calendar;
var announcement_default_message;
var draft_save_id=0; 
var update_your_save_id=0;
var update_your_save_id_default_status=0;
var update_your_save_id_status=0;
var what_type_to_create=0;
var visibility=0;
var who_view; 
var who_view_click;
var who_view_confirm;
var who_table; 
var payment_who_table; 
var who_insert_table=0;
var who_search="ID";
var value_push;
var value_push_bills;
var show_row=10;
var show_row_payment=10;
var table_show_response;
var payment_table_show_response;
var payment_who_show_row=0;
var who_update_bills_id=0;
var who_update_bills_id_amount=0;
var who_show_row=0;
var search_all_obj = {
};
var payment_search_all_obj = {
};
var delete_id;
var delete_id_finals;
var slider_val=50;
var payment_slider_val=50;
var selected_update_id;
var payment_table_year='';
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
  var checkbox_place;
var countss_checkbox=0;
var payment_month='01';
var payment_mont_allcount=0;
var edit_default_col1=0;
var edit_default_col2=0;
var refresh_table_search_status=0;
var refresh_payment_search_status=0;
var confirm_payment_show_total=0;
var confirm_payment_id=[];
var get_account_id='';
var get_account_status='';
var what_feedback_show=1;
var change_side_right_menu_img=[];
var show_community_id;
var response_community_data=[];
var response_rules_data=[];
var comment_count=0;
var payment_chat_img=[];
var account_password='';
var check_username_status=0;
var check_houseno_status=0;
var passwordSTATUS=0;
var passwordSTATUS1=0;
get_username()
create_water_bills_for_this_month()
refresh_payment_row_count()
refresh_table_row_count()
refresh_table_search()
refresh_payment_search()
what_month_to_show()
show_announcement()
show_community()
show_water_info()
show_rules()
show_payment_cash_year_btn()
show_table_count()
show_table()
count_total_user()
count_total_phase1()
count_total_phase2()
count_total_phase3()
count_total_phase4()
announcement_payment_message()
online_check()
setInterval(function(){
  online_check()
},60000)
setInterval(function(){
  count_online_check()
},120000)
setInterval(function(){
  remove_online_check()
  online_check()
},150000)
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
      count_online_check()
    }
  })
}
function count_online_check(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=count_online_check',
    data:  {
      'id':get_account_id,
 },
    success: function(response) {
      if(response.status=='error'){
        $("#table_online_count").text('0')
        $("#payment_table_online_count").text('0')
      }else{
        $("#table_online_count").text(response.length)
        $("#payment_table_online_count").text(response.length)
      }
    }
  })
}
function remove_online_check(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=remove_online_check',
    success: function(response) {
      if(response.status=='error'){
        remove_online_check()
      }else{
        count_online_check()
      }
    }
  })
}
setInterval(function(){
  if(show_community_id==''){
    
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=show_com_comment',
      data:  {
        'ID':show_community_id,
   },
      success: function(response) {
        if(response.status=='error'){
  
        }else{
          if(response.length==comment_count){
            
          }else{
              show_community_comment_scroll()
          }
        }
      }
    })
  }
},2000)
function get_username(){
  get_account_id=$("#get_account_id h5").text()
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=searchinfo',
    data:  {
      "ID":get_account_id
 },
      success: function(response){
        $("#header_account_img img").attr("src", './public/image/userIMG/'+response[0].image_name);
        get_account_status=response[0].Role
      }
  });
}
function announcement_payment_message(){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=default_mesage',
        success: function(response){
          announcement_default_message=response[0].message
          $("#announcement_text_area").val(announcement_default_message)
        }
    });
}
function what_month_to_show(){
  if(payment_table_year==''){
    payment_table_year=Year
  }
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=what_month_to_show',
    data:{
      'year':payment_table_year,
    },
      success: function(response){
        var check_month=response[0].month_publish;
        if(check_month==1){
          payment_month='01';
          $("#payment_btn_year_j").addClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==2){
          payment_month='02';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").addClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==3){
          payment_month='03';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").addClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==4){
          payment_month='04';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").addClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==5){
          payment_month='05';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").addClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==6){
          payment_month='06';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").addClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==7){
          payment_month='07';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").addClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==8){
          payment_month='08';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").addClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==9){
          payment_month='09';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").addClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==10){
          payment_month='10';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").addClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==11){
          payment_month='11';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").addClass("payment_btn_year_active");
          $("#payment_btn_year_d").removeClass("payment_btn_year_active");
        }
        if(check_month==12){
          payment_month='12';
          $("#payment_btn_year_j").removeClass("payment_btn_year_active");
          $("#payment_btn_year_f").removeClass("payment_btn_year_active");
          $("#payment_btn_year_m").removeClass("payment_btn_year_active");
          $("#payment_btn_year_a").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
          $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
          $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
          $("#payment_btn_year_au").removeClass("payment_btn_year_active");
          $("#payment_btn_year_s").removeClass("payment_btn_year_active");
          $("#payment_btn_year_o").removeClass("payment_btn_year_active");
          $("#payment_btn_year_n").removeClass("payment_btn_year_active");
          $("#payment_btn_year_d").addClass("payment_btn_year_active");
        }
        show_payment_cash()
      }
  });
  
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
   $(document).on("click","#confirm_chat_payment_container_btn_exit",function() {
    who_update_bills_id=0
    $("#confirm_chat_payment").hide('slide')
    })
    $(document).on("click",".confirm_chat_payment",function() {
    var ammount = $(this).attr("confirm_amount");
    var id = $(this).attr("confirm_id");
    who_update_bills_id=id
    who_update_bills_id_amount=ammount
    show_chat_payment_scroll()
    $("#confirm_chat_payment").show('slide')
    })
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
  $(document).on("click",".edit_your_save_status",function() {
    var id = $(this).attr("edit_your_save_id")
    var status = $(this).attr("status")
    update_your_save_id_default_status=status
    update_your_save_id=id
    if(update_your_save_id_default_status==1){
      $("#your_save_container_select_visibility_btn_publish_input").prop('checked', true);
      $("#your_save_container_select_visibility_btn_draft_input").prop('checked', false);
      $("#your_save_container_select_visibility_btn_go").prop('disabled', true);
    }else{
      $("#your_save_container_select_visibility_btn_publish_input").prop('checked', false);
      $("#your_save_container_select_visibility_btn_draft_input").prop('checked', true);
      $("#your_save_container_select_visibility_btn_go").prop('disabled', true);
    }
    $("#your_save_container_scroll1_container_btn"+id).hide()
    $("#your_save_container_select_visibility").show()
    $("#your_save_container_select_visibility_background").show()
  });
  $(document).on("click",".edit_your_save",function() {
    var id = $(this).attr("edit_your_save_id")
    var who = $(this).attr("who_show")
    who_view=who
    draft_save_id=id
    save_files_val_status=1;
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=v_image',
      data:  {
        'ID':draft_save_id,
        'who_view':who_view,
   },
      success: function(response) {
        if(response.status=='error'){
          $.ajax({
            type: 'post',
            url: 'api/index.php?t=v2_image',
            data:  {
              "ID":id
         },
            success: function(response) {
              $("#your_save").hide()
              $("#side_bar_menu").show('slide')
              $("#side_bar_background").show('slide')
              $("#addtosite").show('slide')
              if(who_view==1){
                $("#announcement_calendar").val(response[0].schedule_date)
                $("#announcement_text_area").val(response[0].message)
                if(response[0].status=='draft'){
                  visibility=1
                }else{
                  visibility=2
                }
                $("#announcement_side_bar_input").show('slide')
              }else if(who_view==2){
                $("#community_side_bar_input").show('slide')
              }else if(who_view==3){
              }else if(who_view==4){
                $("#rules_side_bar_input").show('slide')
              }
            }
          });
        }else{
          upload_image_status=response.length
        $("#your_save").hide()
        $("#side_bar_menu").show('slide')
        $("#side_bar_background").show('slide')
        $("#addtosite").show('slide')
        if(who_view==1){
          $("#announcement_calendar").val(response[0].schedule_date)
          $("#announcement_text_area").val(response[0].message)
          if(response[0].status=='draft'){
            visibility=1
          }else{
            visibility=2
          }
          $("#announcement_side_bar_input").show('slide')
        }else if(who_view==2){
          $("#community_side_bar_input").show('slide')
        }else if(who_view==3){
        }else if(who_view==4){
          $("#rules_side_bar_input").show('slide')
        }
        image_show()
        }
        
      }
    });
    
  });
  $(document).on("click","#your_save_container_select_visibility_btn_close",function() {
    $("#your_save_container_select_visibility_btn_publish_input").prop('checked', false);
    $("#your_save_container_select_visibility_btn_draft_input").prop('checked', false);
    $("#your_save_container_scroll1_container_btn"+update_your_save_id).show()
    update_your_save_id=0
    update_your_save_id_default_status=0
    $("#your_save_container_select_visibility").hide()
    $("#your_save_container_select_visibility_background").hide()
  });
  $(document).on("click","#your_save_container_select_visibility_btn_go",function() {
    update_your_save_status(update_your_save_id)
    show_announcement()
  });
  $(document).on("click","#your_save_container_select_visibility_background",function() {
    $("#your_save_container_select_visibility_btn_publish_input").prop('checked', false);
    $("#your_save_container_select_visibility_btn_draft_input").prop('checked', false);
    $("#your_save_container_scroll1_container_btn"+update_your_save_id).show()
    update_your_save_id=0
    update_your_save_id_default_status=0
    $("#your_save_container_select_visibility").hide()
    $("#your_save_container_select_visibility_background").hide()
  });
  $(document).on("click","#your_save_container_select_visibility_btn_draft",function() {
    update_your_save_id_status=0
    if(update_your_save_id_default_status==1){
      $("#your_save_container_select_visibility_btn_go").prop('disabled', false);
    }else if(update_your_save_id_default_status==0){
      $("#your_save_container_select_visibility_btn_go").prop('disabled', true);
    }
    $("#your_save_container_select_visibility_btn_publish_input").prop('checked', false);
    $("#your_save_container_select_visibility_btn_draft_input").prop('checked', true);
  });
  $(document).on("click","#your_save_container_select_visibility_btn_publish",function() {
    update_your_save_id_status=1
    if(update_your_save_id_default_status==1){
      $("#your_save_container_select_visibility_btn_go").prop('disabled', true);
    }else if(update_your_save_id_default_status==0){
      $("#your_save_container_select_visibility_btn_go").prop('disabled', false);
    }
    $("#your_save_container_select_visibility_btn_publish_input").prop('checked', true);
    $("#your_save_container_select_visibility_btn_draft_input").prop('checked', false);
  });
  $(document).on("click",".delete-upload-image",function() {
    $("#upload-image-third .row").empty()
    $("#upload-image-second .row").empty()
    var id = $(this).attr("image-div-id")
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=d_image',
      data: {
        'ID':id,
        'who_view':who_view,
      },
      success: function(response) {
        if(response.status == "error"){
        }else{
          image_show()
        }
      }
    });
  });
  $(document).on("click",".delete_comment",function() {
    var id = $(this).attr("delete_id")
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=d_comment',
      data: {
        'ID':id,
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
        }
      }
    });
  });
  $(document).on("dblclick",".feedback_show",function() {
    var id = $(this).attr("feedback_show_id")
    var status = $(this).attr("feedback_show_status")
    if(status==0){
    $(this).attr("feedback_show_status","1")
    $("#feeback_show_all"+id).show('slide')
    $("#feedback_message_"+id).hide()
    $(".feedback_show_status_remove"+id).empty()
    if(what_feedback_show==1){
      var count = $("#side_right_menu_container_feedback_btn_comment span").text()
    var amount = parseInt(count)
    if(amount==1){
      $("#side_right_menu_container_feedback_btn_comment span").text('')
    }else{
      $("#side_right_menu_container_feedback_btn_comment span").text(amount-1)
    }
    }else if(what_feedback_show==2){
      var count = $("#side_right_menu_container_feedback_btn_bug span").text()
    var amount = parseInt(count)
    if(amount==1){
      $("#side_right_menu_container_feedback_btn_bug span").text('')
    }else{
      $("#side_right_menu_container_feedback_btn_bug span").text(amount-1)
    }
    }else if(what_feedback_show==3){
      var count = $("#side_right_menu_container_feedback_btn_suggestion span").text()
    var amount = parseInt(count)
    if(amount==1){
      $("#side_right_menu_container_feedback_btn_suggestion span").text('')
    }else{
      $("#side_right_menu_container_feedback_btn_suggestion span").text(amount-1)
    }
    }
    feedback_click(id)
    }else{
      $("#feeback_show_all"+id).show('slide')
      $("#feedback_message_"+id).hide() 
    }
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_comment",function() {
    $("#side_right_menu_container_feedback_btn_comment").addClass('btn_active_side_right_menu')
    $("#side_right_menu_container_feedback_btn_bug").removeClass('btn_active_side_right_menu')
    $("#side_right_menu_container_feedback_btn_suggestion").removeClass('btn_active_side_right_menu')
  what_feedback_show=1
  feedback_show()
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_bug",function() {
    $("#side_right_menu_container_feedback_btn_comment").removeClass('btn_active_side_right_menu')
    $("#side_right_menu_container_feedback_btn_bug").addClass('btn_active_side_right_menu')
    $("#side_right_menu_container_feedback_btn_suggestion").removeClass('btn_active_side_right_menu')
    what_feedback_show=2
    feedback_show()
    })
    $(document).on("click","#side_right_menu_container_feedback_btn_suggestion",function() {
      $("#side_right_menu_container_feedback_btn_comment").removeClass('btn_active_side_right_menu')
    $("#side_right_menu_container_feedback_btn_bug").removeClass('btn_active_side_right_menu')
    $("#side_right_menu_container_feedback_btn_suggestion").addClass('btn_active_side_right_menu')
      what_feedback_show=3
      feedback_show()
      })
  $(document).on("click",".active_pys_btn",function() {
    $("#confirm_payment_show_container_show_status").empty()
    var id = $(this).attr("active_pys_btn")
    var what = $(this).attr("class")
    var am = $(this).attr("active_pys_amount")
    var m = $(this).attr("month")
    var month;
    var amount = parseInt(am)
    var split = what.split(" ");
    switch(m) {
      case "1":
        month = "January";
        break;
      case "2":
        month = "February";
        break;
      case "3":
        month = "March";
        break;
      case "4":
        month = "April";
        break;
      case "5":
        month = "May";
        break;
      case "6":
        month = "June";
        break;
      case "7":
        month = "July";
        break;
      case "8":
        month = "August";
        break;
      case "9":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
      default:
        // code block
    }
    $("#confirm_payment_show_total_count").text('')
    if(split[3]=='confirm_payment_show_r'){
      confirm_payment_show_total+=amount
      $("#confirm_payment_show_total_count").text(confirm_payment_show_total)
      var newkey = confirm_payment_id.length;
      confirm_payment_id[newkey]={'id':id,'amount':amount,'month':month,'mval':m};
      $("#active_pys_btn"+id).removeClass("confirm_payment_show_r")
      $("#active_pys_btn"+id).addClass("confirm_payment_show_b")
      for(var i=0;i<confirm_payment_id.length;i++){
        var row=$('<div class="col-2"></div>'
      +'<div class="col-4">'
      +'  <h4 class="text-left">'+confirm_payment_id[i].month+'</h4>'
      +'</div>'
      +'<div class="col-4">'
      +'  <h4>'+confirm_payment_id[i].amount+' PHP</h4>'
      +'</div>'
      +'<div class="col-2"></div>')
        $('#confirm_payment_show_container_show_status').append(row);
      }
    }else{
      confirm_payment_id.splice('id:'+id,1)
      confirm_payment_show_total-=amount
      $("#confirm_payment_show_total_count").text(confirm_payment_show_total)
      $("#active_pys_btn"+id).addClass("confirm_payment_show_r")
      $("#active_pys_btn"+id).removeClass("confirm_payment_show_b")
      for(var i=0;i<confirm_payment_id.length;i++){
        var row=$('<div class="col-2"></div>'
      +'<div class="col-4">'
      +'  <h4 class="text-left">'+confirm_payment_id[i].month+'</h4>'
      +'</div>'
      +'<div class="col-4">'
      +'  <h4>'+confirm_payment_id[i].amount+' PHP</h4>'
      +'</div>'
      +'<div class="col-2"></div>')
      }
    }
  });
  $(document).on("click","#confirm_payment_show_container_btn_exit",function() {
    $("#confirm_payment_show").hide('slide')
    $("#confirm_payment_show_container_show").empty()
    confirm_payment_id=[]
    who_update_bills_id=0
    confirm_payment_show_total=0
  });
  $(document).on("click","#confirm_payment_show_container_btn_confirm",function() {
    if(confirm_payment_id.length==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text('No selected month')
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()       
    }else{
    var responseCOUNT=0;
    var responseC=0;
   for(var i=0; i<confirm_payment_id.length;i++){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=searchinfo_payment_update',
      data:{
        'ID':confirm_payment_id[i].id,
        "confirmation": Year+'-'+Month+'-'+Day,
        "amount": confirm_payment_id[i].amount,
      },
      success: function(response) {
        responseC++
        if(response.status == "error"){
        }else{
          responseCOUNT++
          console.log(confirm_payment_id.length-1)
       
        }
        if(responseC==confirm_payment_id.length){
          if(responseCOUNT>0){
            $("#side_bar_menu_show_status").show();
            $("#side_bar_menu_show_status h3").text(responseCOUNT+ ' Updated Successfuly')
            $("#side_bar_menu_show_status").addClass("status_green")
            $("#side_bar_menu_show_status").removeClass("status_red")
            hide()
            confirm_payment(who_update_bills_id)
            show_payment_cash()
            $("#confirm_payment_show_container_show").empty()
          }else{
            $("#side_bar_menu_show_status").show();
            $("#side_bar_menu_show_status h3").text('Update Failed')
            $("#side_bar_menu_show_status").addClass("status_red")
            $("#side_bar_menu_show_status").removeClass("status_green")
            hide()
            confirm_payment(who_update_bills_id)
            show_payment_cash()
            $("#confirm_payment_show_container_show").empty()
          }
        }
      }
    });
   }
    }
  });
  $(document).on("click","#confirm_chat_payment_container_btn_confirm",function() {
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=confirm_gcash_payment',
      data: {
        'ID':who_update_bills_id,
        "confirmation": Year+'-'+Month+'-'+Day,
        "amount": who_update_bills_id_amount,
      },
      success: function(response) {
        $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
        }else{
          what_month_to_show()
          $("#confirm_chat_payment").hide('slide')
        }
      }
    });
  });
  $(document).on("click",".search-table-id",function() {
    var id = $(this).attr("search-table-id")
    value_push={
      "search":id,
     }
    search_tablego()
  });
  $(document).on("click",".search-payment-table-id",function() {
    var id = $(this).attr("search-payment-table-id")
    value_push_bills={
      "search":id,
      "year":payment_table_year,
      "month":payment_month,
     }
    search_payment_tablego()
  });
  $(document).on("click","#side_bar_menu_upload-image_btn_exit",function(){
    $("#addtosite" ).show("slide");
    $("#upload-image" ).hide("slide");
    $("#upload-image-first").hide()
  });
  $(document).on("click","#confirm_alert_btn_cancel",function(){
    $("#confirm_alert").hide("slide")
  });
  $(document).on("click","#confirm_alert_btn_ok",function(){
    if(edit_default_col1>0||edit_default_col2>0){
      $("#confirm_alert").hide('slide')
      edit_default_col1=0
      $("#edit_default_container_col1_row1_text_area").show()
      $("#edit_default_container_col1_row1_text_area_edit").hide()
      $("#edit_default_container_col1_row2_text_area").show()
      $("#edit_default_container_col1_row2_text_area_edit").hide()
      $("#edit_default_container_col1_row3_text_area").show()
      $("#edit_default_container_col1_row3_text_area_edit").hide()
      $("#edit_default_container_col1_row4_text_area").show()
      $("#edit_default_container_col1_row4_text_area_edit").hide()
      edit_default_col2=0
      $("#edit_default_container_col2_text_area1").show()
      $("#edit_default_container_col2_text_area_edit1").hide()
      $("#edit_default_container_col2_text_area2").show()
      $("#edit_default_container_col2_text_area_edit2").hide()
      $("#edit_default_container_col2_text_area3").show()
      $("#edit_default_container_col2_text_area_edit3").hide()
      show_your_default()
    }else{
      if(who_view_confirm==1){
        if(who_view==1){
          $.ajax({
            type: 'post',
            url: 'api/index.php?t=d_save',
            data: {
              'ID':draft_save_id,
              'who_view':who_view,
            },
            success: function(response) {
              console.log(response)
            }
          });
          $("#announcement_text_area").val(announcement_default_message);
          $("#announcement_calendar").val('');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          $("#confirm_alert").hide("slide")
          $("#side_bar_menu").hide("slide");
          $("#side_bar_background" ).hide("slide");
        }else if(who_view==2){
          $("#community_text_area").val('');
          $("#community_calendar").val('');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          $("#confirm_alert").hide("slide")
          $("#side_bar_menu").hide("slide");
          $("#side_bar_background" ).hide("slide");
        }else if(who_view==3){
          $("#water_info_water_pressure").val('Select');
          $("#water_info_water_level").val(0);
          $("#water_info_third_row h3").text('');
          $("#water_info_second_row_btn_0_input").prop('checked', false);
          $("#water_info_second_row_btn_1_input").prop('checked', false);
          $("#water_info_second_row_btn_2_input").prop('checked', false);
          $("#water_info_second_row_btn_3_input").prop('checked', false);
          $("#water_info_second_row_btn_4_input").prop('checked', false);
          open_phaseall=0
          open_phase1=0
          open_phase2=0
          open_phase3=0
          open_phase4=0
          $("#confirm_alert").hide("slide")
          $("#side_bar_menu").hide("slide");
          $("#side_bar_background" ).hide("slide");
        }else if(who_view==4){
          $("#rules_text_area").val('');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          $("#confirm_alert").hide("slide")
          $("#side_bar_menu").hide("slide");
          $("#side_bar_background" ).hide("slide");
        }
        who_view_confirm=0
        who_view_click=0
      }else{
        if(who_view_click==1){
              if(who_view==1){
                $("#announcement_text_area").val(announcement_default_message);
                $("#announcement_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==2){
                $("#community_text_area").val('');
                $("#community_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==3){
                $("#water_info_water_pressure").val('Select');
                $("#water_info_water_level").val(0);
                $("#water_info_third_row h3").text('');
                $("#water_info_second_row_btn_0_input").prop('checked', false);
                $("#water_info_second_row_btn_1_input").prop('checked', false);
                $("#water_info_second_row_btn_2_input").prop('checked', false);
                $("#water_info_second_row_btn_3_input").prop('checked', false);
                $("#water_info_second_row_btn_4_input").prop('checked', false);
                open_phaseall=0
                open_phase1=0
                open_phase2=0
                open_phase3=0
                open_phase4=0
                $("#confirm_alert").hide("slide")
              }else if(who_view==4){
                $("#rules_text_area").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }
          who_view = 1;
          $("#addtosite").show()
          $("#announcement_side_bar_input" ).show("slide");
          $("#rules_side_bar_input" ).hide("slide");
          $("#community_side_bar_input" ).hide();
          $("#water_info_side_bar_input" ).hide();
          $("#side_bar_rules").removeClass("side_bar_btn_active");
          $("#side_bar_announcement").addClass("side_bar_btn_active");
          $("#side_bar_community").removeClass("side_bar_btn_active"); 
          $("#side_bar_water_info").removeClass("side_bar_btn_active");
          $("#side_bar_rules").removeClass("side_bar_btn_active");
        }else if(who_view_click==2){
            if(who_view==1){
                $("#announcement_text_area").val(announcement_default_message);
                $("#announcement_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==2){
                $("#community_text_area").val('');
                $("#community_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==3){
                $("#water_info_water_pressure").val('Select');
                $("#water_info_water_level").val(0);
                $("#water_info_third_row h3").text('');
                $("#water_info_second_row_btn_0_input").prop('checked', false);
                $("#water_info_second_row_btn_1_input").prop('checked', false);
                $("#water_info_second_row_btn_2_input").prop('checked', false);
                $("#water_info_second_row_btn_3_input").prop('checked', false);
                $("#water_info_second_row_btn_4_input").prop('checked', false);
                open_phaseall=0
                open_phase1=0
                open_phase2=0
                open_phase3=0
                open_phase4=0
                $("#confirm_alert").hide("slide")
              }else if(who_view==4){
                $("#rules_text_area").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }
          who_view = 2;
        $("#addtosite").show()
        $("#side_bar_rules").removeClass("side_bar_btn_active");
        $("#announcement_side_bar_input" ).hide();
        $("#community_side_bar_input" ).show("slide");
        $("#rules_side_bar_input" ).hide("slide");
        $("#water_info_side_bar_input" ).hide()
        $("#side_bar_community").addClass("side_bar_btn_active"); 
        $("#side_bar_announcement").removeClass("side_bar_btn_active");
        $("#side_bar_water_info").removeClass("side_bar_btn_active");
        $("#side_bar_rules").removeClass("side_bar_btn_active");
        }else if(who_view_click==3){
              if(who_view==1){
                $("#announcement_text_area").val(announcement_default_message);
                $("#announcement_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==2){
                $("#community_text_area").val('');
                $("#community_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==3){
                $("#water_info_water_pressure").val('Select');
                $("#water_info_water_level").val(0);
                $("#water_info_third_row h3").text('');
                $("#water_info_second_row_btn_0_input").prop('checked', false);
                $("#water_info_second_row_btn_1_input").prop('checked', false);
                $("#water_info_second_row_btn_2_input").prop('checked', false);
                $("#water_info_second_row_btn_3_input").prop('checked', false);
                $("#water_info_second_row_btn_4_input").prop('checked', false);
                open_phaseall=0
                open_phase1=0
                open_phase2=0
                open_phase3=0
                open_phase4=0
                $("#confirm_alert").hide("slide")
              }else if(who_view==4){
                $("#rules_text_area").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }
          who_view = 3;
          $("#addtosite").show()
          $("#rules_side_bar_input" ).hide("slide");
          $("#announcement_side_bar_input" ).hide();
          $("#community_side_bar_input" ).hide();
          $("#water_info_side_bar_input" ).show("slide")
          $("#side_bar_rules").removeClass("side_bar_btn_active");
          $("#side_bar_water_info").addClass("side_bar_btn_active");
          $("#side_bar_community").removeClass("side_bar_btn_active"); 
          $("#side_bar_announcement").removeClass("side_bar_btn_active");
          $("#side_bar_rules").removeClass("side_bar_btn_active");
        }else if(who_view_click==4){
            if(who_view==1){
                $("#announcement_text_area").val(announcement_default_message);
                $("#announcement_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==2){
                $("#community_text_area").val('');
                $("#community_calendar").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }else if(who_view==3){
                $("#water_info_water_pressure").val('Select');
                $("#water_info_water_level").val(0);
                $("#water_info_third_row h3").text('');
                $("#water_info_second_row_btn_0_input").prop('checked', false);
                $("#water_info_second_row_btn_1_input").prop('checked', false);
                $("#water_info_second_row_btn_2_input").prop('checked', false);
                $("#water_info_second_row_btn_3_input").prop('checked', false);
                $("#water_info_second_row_btn_4_input").prop('checked', false);
                open_phaseall=0
                open_phase1=0
                open_phase2=0
                open_phase3=0
                open_phase4=0
                $("#confirm_alert").hide("slide")
              }else if(who_view==4){
                $("#rules_text_area").val('');
                $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
                $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
                visibility=0
                $("#publish_addtosite_container_text_notification p").text('');
                $("#publish_addtosite_date").text('');
                $("#publish_addtosite_paragraph").text('');
                $("#publish_addtosite_container_preview #title").text('');
                $("#publish_addtosite_image_show_div").empty()
                $("#upload-image-second .row").empty()
                $("#upload-image-forth" ).hide();
                $("#publish_addtosite_container_text_notification" ).show('slide');
                $("#publish_addtosite_container_visibility" ).hide();
                upload_image_val_error=[]
                upload_image_status=0
                upload_image_real_location=[]
                $("#confirm_alert").hide("slide")
              }
          who_view = 4;
          $("#announcement_side_bar_input" ).hide("slide");
          $("#rules_side_bar_input" ).show("slide");
          $("#community_side_bar_input" ).hide();
          $("#water_info_side_bar_input" ).hide();
          $("#side_bar_rules").addClass("side_bar_btn_active");
          $("#side_bar_announcement").removeClass("side_bar_btn_active");
          $("#side_bar_community").removeClass("side_bar_btn_active"); 
          $("#side_bar_water_info").removeClass("side_bar_btn_active");
        }
      }
    }
  });
  
  $(document).on("click","#side_bar_menu_announcement_btn_exit",function(){
    if(save_files_val_status==1){
      $("#side_bar_menu").hide("slide");
      $("#side_bar_background" ).hide("slide");
      $("#your_save").show('slide')
      $("#main_announcement_btn_menu").hide()
      $("#menu_btn_background").hide() 
      show_your_save()
    }else{
      who_view_confirm=1
    var announce_text = $("#announcement_text_area").val();
    var com_text = $("#community_text_area").val().length;
    var rules_text = $("#rules_text_area").val().length;
    var water_pres;
    var water_presCHECK = $("#water_info_water_pressure").val();
    if(water_presCHECK=='Select'){
      water_pres=''
    }
    var  water_lev = $("#water_info_third_row h3").text();
    if(who_view==1){
      if(upload_image_status>0||announce_text!=announcement_default_message){
        $("#confirm_alert").show("slide")
      }else{
        $("#side_bar_menu").hide("slide");
        $("#side_bar_background" ).hide("slide");
      }
    }else if(who_view==2){
      if(upload_image_status>0||com_text>0){
        $("#confirm_alert").show("slide")
      }else{
        $("#side_bar_menu").hide("slide");
        $("#side_bar_background" ).hide("slide");
      }
    }else if(who_view==3){
      if(water_pres!=''||water_lev!=''||open_phaseall==1||open_phase1==1||open_phase2==1||open_phase3==1||open_phase4==1){
        $("#confirm_alert").show("slide")
      }else{
        $("#side_bar_menu").hide("slide");
        $("#side_bar_background" ).hide("slide");
      }
    }else if(who_view==4){
      if(upload_image_status>0||rules_text>0){
        $("#confirm_alert").show("slide")
      }else{
        $("#side_bar_menu").hide("slide");
        $("#side_bar_background" ).hide("slide");
      }
    }
    }
    
  });
  $(document).on("click","#announcement_menu",function(){
    $("#main_announcement_btn_menu").show('slide')
    $("#menu_btn_background").show()
  });
  $(document).on("click","#menu_btn_background",function(){
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()
  });
  $(document).on("click","#main_announcement_btn_menu_4",function(){
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()
  });
  $(document).on("click","#side_bar_announcement",function(){
    who_view_confirm=2
    who_view_click=1
    var announce_text = $("#announcement_text_area").val();
    var com_text = $("#community_text_area").val().length;
    var rules_text = $("#rules_text_area").val().length;
    var water_pres;
    var water_presCHECK = $("#water_info_water_pressure").val();
    if(water_presCHECK=='Select'){
      water_pres=''
    }
    var  water_lev = $("#water_info_third_row h3").text();
    if(who_view==1){
    }else if(who_view==2){
            if(upload_image_status>0||com_text>0){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else if(who_view==3){
            if(water_pres!=''||water_lev!=''||open_phaseall==1||open_phase1==1||open_phase2==1||open_phase3==1||open_phase4==1){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else if(who_view==4){
            if(upload_image_status>0||rules_text>0){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else{
    who_view = 1;
    $("#addtosite").show()
    $("#announcement_side_bar_input" ).show("slide");
    $("#rules_side_bar_input" ).hide("slide");
    $("#community_side_bar_input" ).hide();
    $("#water_info_side_bar_input" ).hide();
    $("#side_bar_rules").removeClass("side_bar_btn_active");
    $("#side_bar_announcement").addClass("side_bar_btn_active");
    $("#side_bar_community").removeClass("side_bar_btn_active"); 
    $("#side_bar_water_info").removeClass("side_bar_btn_active");
    $("#side_bar_rules").removeClass("side_bar_btn_active");
    }
    
  });
  $(document).on("click","#community_page_community_menu",function(){
    who_view = 2;
    $("#addtosite").show()
    $("#announcement_side_bar_input" ).hide();
    $("#community_side_bar_input" ).show("slide");
    $("#water_info_side_bar_input" ).hide();
    $("#side_bar_menu" ).show("slide");
    $("#side_bar_background" ).show("slide");
    $("#side_bar_community").addClass("side_bar_btn_active");
    $("#side_bar_announcement").removeClass("side_bar_btn_active");
    $("#side_bar_water_info").removeClass("side_bar_btn_active");
    $("#side_bar_rules").removeClass("side_bar_btn_active");
  }); 
  $(document).on("click","#side_bar_community",function(){
    who_view_confirm=2
    who_view_click=2
    var announce_text = $("#announcement_text_area").val();
    var rules_text = $("#rules_text_area").val().length;
    var water_pres;
    var water_presCHECK = $("#water_info_water_pressure").val();
    if(water_presCHECK=='Select'){
      water_pres=''
    }
    var  water_lev = $("#water_info_third_row h3").text();
    if(who_view==1){
            if(upload_image_status>0||announce_text!=announcement_default_message){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else if(who_view==2){
    }else if(who_view==3){
            if(water_pres!=''||water_lev!=''||open_phaseall==1||open_phase1==1||open_phase2==1||open_phase3==1||open_phase4==1){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else if(who_view==4){
            if(upload_image_status>0||rules_text>0){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else{
      who_view = 2;
      $("#addtosite").show()
      $("#side_bar_rules").removeClass("side_bar_btn_active");
      $("#announcement_side_bar_input" ).hide();
      $("#community_side_bar_input" ).show("slide");
      $("#rules_side_bar_input" ).hide("slide");
      $("#water_info_side_bar_input" ).hide()
      $("#side_bar_community").addClass("side_bar_btn_active"); 
      $("#side_bar_announcement").removeClass("side_bar_btn_active");
      $("#side_bar_water_info").removeClass("side_bar_btn_active");
      $("#side_bar_rules").removeClass("side_bar_btn_active");
    }
  });
  $(document).on("click","#side_bar_water_info",function(){
    who_view_confirm=2
    who_view_click=3
    var announce_text = $("#announcement_text_area").val();
    var com_text = $("#community_text_area").val().length;
    var rules_text = $("#rules_text_area").val().length;
    var water_pres;
    var water_presCHECK = $("#water_info_water_pressure").val();
    if(water_presCHECK=='Select'){
      water_pres=''
    }
    var  water_lev = $("#water_info_third_row h3").text();
    if(who_view==1){
            if(upload_image_status>0||announce_text!=announcement_default_message){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else if(who_view==2){
            if(upload_image_status>0||com_text>0){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else if(who_view==3){
    }else if(who_view==4){
            if(upload_image_status>0||rules_text>0){
              $("#confirm_alert").show("slide")
            }else if(who_view_click==1){
              who_view = 1;
              $("#addtosite").show()
              $("#announcement_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_announcement").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==2){
              who_view = 2;
            $("#addtosite").show()
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            $("#announcement_side_bar_input" ).hide();
            $("#community_side_bar_input" ).show("slide");
            $("#rules_side_bar_input" ).hide("slide");
            $("#water_info_side_bar_input" ).hide()
            $("#side_bar_community").addClass("side_bar_btn_active"); 
            $("#side_bar_announcement").removeClass("side_bar_btn_active");
            $("#side_bar_water_info").removeClass("side_bar_btn_active");
            $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==3){
              who_view = 3;
              $("#addtosite").show()
              $("#rules_side_bar_input" ).hide("slide");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).show("slide")
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").addClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
            }else if(who_view_click==4){
              who_view = 4;
              $("#announcement_side_bar_input" ).hide("slide");
              $("#rules_side_bar_input" ).show("slide");
              $("#community_side_bar_input" ).hide();
              $("#water_info_side_bar_input" ).hide();
              $("#side_bar_rules").addClass("side_bar_btn_active");
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_community").removeClass("side_bar_btn_active"); 
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
            }
    }else{
      who_view = 3;
      $("#addtosite").show()
      $("#rules_side_bar_input" ).hide("slide");
      $("#announcement_side_bar_input" ).hide();
      $("#community_side_bar_input" ).hide();
      $("#water_info_side_bar_input" ).show("slide")
      $("#side_bar_rules").removeClass("side_bar_btn_active");
      $("#side_bar_water_info").addClass("side_bar_btn_active");
      $("#side_bar_community").removeClass("side_bar_btn_active"); 
      $("#side_bar_announcement").removeClass("side_bar_btn_active");
      $("#side_bar_rules").removeClass("side_bar_btn_active");
    }
  });
  $(document).on("click","#main_announcement_btn_menu_1",function(){
    who_view = 1;
    $("#addtosite").show()
    $("#announcement_side_bar_input" ).show();
    $("#community_side_bar_input" ).hide();
    $("#water_info_side_bar_input" ).hide();
    $("#side_bar_menu" ).show("slide");
    $("#side_bar_background" ).show("slide");
    $("#side_bar_announcement").addClass("side_bar_btn_active");
    $("#side_bar_community").removeClass("side_bar_btn_active"); 
    $("#side_bar_water_info").removeClass("side_bar_btn_active");
    $("#side_bar_rules").removeClass("side_bar_btn_active");
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()                
  });
    $(document).on("click","#side_bar_rules",function(){
      who_view_confirm=2
      who_view_click=4
      var announce_text = $("#announcement_text_area").val();
      var com_text = $("#community_text_area").val().length;
      var water_pres;
      var water_presCHECK = $("#water_info_water_pressure").val();
      if(water_presCHECK=='Select'){
        water_pres=''
      }
      var  water_lev = $("#water_info_third_row h3").text();
      if(who_view==1){
              if(upload_image_status>0||announce_text!=announcement_default_message){
                $("#confirm_alert").show("slide")
              }else if(who_view_click==1){
                who_view = 1;
                $("#addtosite").show()
                $("#announcement_side_bar_input" ).show("slide");
                $("#rules_side_bar_input" ).hide("slide");
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).hide();
                $("#side_bar_rules").removeClass("side_bar_btn_active");
                $("#side_bar_announcement").addClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_water_info").removeClass("side_bar_btn_active");
                $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==2){
                who_view = 2;
              $("#addtosite").show()
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#water_info_side_bar_input" ).hide()
              $("#side_bar_community").addClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==3){
                who_view = 3;
                $("#addtosite").show()
                $("#rules_side_bar_input" ).hide("slide");
                $("#announcement_side_bar_input" ).hide();
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).show("slide")
                $("#side_bar_rules").removeClass("side_bar_btn_active");
                $("#side_bar_water_info").addClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_announcement").removeClass("side_bar_btn_active");
                $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==4){
                who_view = 4;
                $("#announcement_side_bar_input" ).hide("slide");
                $("#rules_side_bar_input" ).show("slide");
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).hide();
                $("#side_bar_rules").addClass("side_bar_btn_active");
                $("#side_bar_announcement").removeClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_water_info").removeClass("side_bar_btn_active");
              }
      }else if(who_view==2){
              if(upload_image_status>0||com_text>0){
                $("#confirm_alert").show("slide")
              }else if(who_view_click==1){
                who_view = 1;
                $("#addtosite").show()
                $("#announcement_side_bar_input" ).show("slide");
                $("#rules_side_bar_input" ).hide("slide");
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).hide();
                $("#side_bar_rules").removeClass("side_bar_btn_active");
                $("#side_bar_announcement").addClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_water_info").removeClass("side_bar_btn_active");
                $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==2){
                who_view = 2;
              $("#addtosite").show()
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#water_info_side_bar_input" ).hide()
              $("#side_bar_community").addClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==3){
                who_view = 3;
                $("#addtosite").show()
                $("#rules_side_bar_input" ).hide("slide");
                $("#announcement_side_bar_input" ).hide();
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).show("slide")
                $("#side_bar_rules").removeClass("side_bar_btn_active");
                $("#side_bar_water_info").addClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_announcement").removeClass("side_bar_btn_active");
                $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==4){
                who_view = 4;
                $("#announcement_side_bar_input" ).hide("slide");
                $("#rules_side_bar_input" ).show("slide");
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).hide();
                $("#side_bar_rules").addClass("side_bar_btn_active");
                $("#side_bar_announcement").removeClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_water_info").removeClass("side_bar_btn_active");
              }
      }else if(who_view==3){
              if(water_pres!=''||water_lev!=''||open_phaseall==1||open_phase1==1||open_phase2==1||open_phase3==1||open_phase4==1){
                $("#confirm_alert").show("slide")
              }else if(who_view_click==1){
                who_view = 1;
                $("#addtosite").show()
                $("#announcement_side_bar_input" ).show("slide");
                $("#rules_side_bar_input" ).hide("slide");
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).hide();
                $("#side_bar_rules").removeClass("side_bar_btn_active");
                $("#side_bar_announcement").addClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_water_info").removeClass("side_bar_btn_active");
                $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==2){
                who_view = 2;
              $("#addtosite").show()
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              $("#announcement_side_bar_input" ).hide();
              $("#community_side_bar_input" ).show("slide");
              $("#rules_side_bar_input" ).hide("slide");
              $("#water_info_side_bar_input" ).hide()
              $("#side_bar_community").addClass("side_bar_btn_active"); 
              $("#side_bar_announcement").removeClass("side_bar_btn_active");
              $("#side_bar_water_info").removeClass("side_bar_btn_active");
              $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==3){
                who_view = 3;
                $("#addtosite").show()
                $("#rules_side_bar_input" ).hide("slide");
                $("#announcement_side_bar_input" ).hide();
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).show("slide")
                $("#side_bar_rules").removeClass("side_bar_btn_active");
                $("#side_bar_water_info").addClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_announcement").removeClass("side_bar_btn_active");
                $("#side_bar_rules").removeClass("side_bar_btn_active");
              }else if(who_view_click==4){
                who_view = 4;
                $("#announcement_side_bar_input" ).hide("slide");
                $("#rules_side_bar_input" ).show("slide");
                $("#community_side_bar_input" ).hide();
                $("#water_info_side_bar_input" ).hide();
                $("#side_bar_rules").addClass("side_bar_btn_active");
                $("#side_bar_announcement").removeClass("side_bar_btn_active");
                $("#side_bar_community").removeClass("side_bar_btn_active"); 
                $("#side_bar_water_info").removeClass("side_bar_btn_active");
              }
      }else if(who_view==4){
      }else{
        who_view = 4;
        $("#announcement_side_bar_input" ).hide("slide");
        $("#rules_side_bar_input" ).show("slide");
        $("#community_side_bar_input" ).hide();
        $("#water_info_side_bar_input" ).hide();
        $("#side_bar_rules").addClass("side_bar_btn_active");
        $("#side_bar_announcement").removeClass("side_bar_btn_active");
        $("#side_bar_community").removeClass("side_bar_btn_active"); 
        $("#side_bar_water_info").removeClass("side_bar_btn_active");
      }
  });
  $(document).on("click","#community_page_rules_menu",function(){
    who_view = 4;
    $("#addtosite" ).show("slide");
    $("#side_bar_menu" ).show("slide");
    $("#side_bar_background" ).show("slide");
    $("#announcement_side_bar_input" ).hide("slide");
  $("#rules_side_bar_input" ).show("slide");
  $("#community_side_bar_input" ).hide();
  $("#water_info_side_bar_input" ).hide();
  $("#side_bar_rules").addClass("side_bar_btn_active");
  $("#side_bar_announcement").removeClass("side_bar_btn_active");
  $("#side_bar_community").removeClass("side_bar_btn_active"); 
  $("#side_bar_water_info").removeClass("side_bar_btn_active");
});
$(document).on("click","#water_info_menu",function(){
    who_view = 3;
    $("#addtosite").show('slide')
    $("#side_bar_menu").show('slide')
    $("#side_bar_background").show('slide')
    $("#rules_side_bar_input" ).hide("slide");
    $("#announcement_side_bar_input" ).hide();
    $("#community_side_bar_input" ).hide();
    $("#water_info_side_bar_input" ).show("slide")
    $("#side_bar_rules").removeClass("side_bar_btn_active");
    $("#side_bar_water_info").addClass("side_bar_btn_active");
    $("#side_bar_community").removeClass("side_bar_btn_active"); 
    $("#side_bar_announcement").removeClass("side_bar_btn_active");
    $("#side_bar_rules").removeClass("side_bar_btn_active");
});
  $(document).on("click","#side_bar_menu_config_table_btn_exit",function(){
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#config_table" ).hide("slide");
  });
  $(document).on("click","#side_table_show_more",function(){
    who_insert_table=1;
    $("#side_table_input_more").slideDown()
    $("#side_table_show_more h5").text("Don't add more information")
    $("#side_table_show_more h5").css("color","red")
  });
  $(document).on("dblclick","#side_table_show_more",function(){
    who_insert_table=0;
    $("#side_table_input_more").slideUp()
    $("#side_table_show_more h5").text("Add more information")
    $("#side_table_show_more h5").css("color","blue")
  });
  $(document).on("click","#table_btn_new",function(){
    who_table=0;
    $("#edit_account_information" ).hide("slide");
    $("#config_table").show();
    $("#table_new_side_bar_input").show("slide")
    $("#table_search_side_bar_input" ).hide("slide");
    $("#side_bar_menu" ).show("slide");
    $("#side_bar_background" ).show("slide");
    $("#side_bar_table_new").addClass("side_bar_btn_active");
    $("#side_bar_table_search").removeClass("side_bar_btn_active");
  });
  $(document).on("click","#table_btn_search",function(){
    who_table=1;
    $("#edit_account_information" ).hide("slide");
    $("#config_table").show();
    $("#table_new_side_bar_input").hide("slide")
    $("#table_search_side_bar_input" ).show("slide");
    $("#side_bar_menu" ).show("slide");
    $("#side_bar_background" ).show("slide");
    $("#side_bar_table_search").addClass("side_bar_btn_active");
    $("#side_bar_table_new").removeClass("side_bar_btn_active");
  });
  $(document).on("click","#side_bar_table_new",function(){
    who_table=0;
    $("#config_table").show();
    $("#table_new_side_bar_input").show("slide")
    $("#table_search_side_bar_input" ).hide("slide");
    $("#side_bar_table_new").addClass("side_bar_btn_active");
    $("#side_bar_table_search").removeClass("side_bar_btn_active");
  });
  $(document).on("click","#side_bar_table_search",function(){
    who_table=1;
    $("#config_table").show();
   $("#table_new_side_bar_input").hide("slide")
   $("#table_search_side_bar_input" ).show("slide");
   $("#side_bar_menu" ).show("slide");
   $("#side_bar_background" ).show("slide");
   $("#side_bar_table_search").addClass("side_bar_btn_active");
   $("#side_bar_table_new").removeClass("side_bar_btn_active");
 });
 function refresh_table_search(){
  if(refresh_table_search_status==0){
    $("#search_all_options").hide('slide')
    $("#side_table_search1").hide()
    $("#side_table_search2").show()
    $("#side_table_search2").focus()
  }else{
    $("#search_all_options").show('slide')
    $("#side_table_search2").hide()
    $("#side_table_search1").show()
    $("#side_table_search_firstname").focus()
  }
 }

$(document).on("click","#table_search_side_bar_input_btn_more",function(){
    if(refresh_table_search_status==0){
    refresh_table_search_status=1
    $("#table_search_side_bar_input_show").hide()
    $("#search_all_options").slideDown()
    $("#table_search_side_bar_input_btn_more h5").text("Close advance search")
    $("#table_search_side_bar_input_btn_more h5").css("color","red")
    $("#side_table_search2").hide()
    $("#side_table_search1").show()
    $("#side_table_search_firstname").focus()
    }else{
      refresh_table_search_status=0
    $("#search_all_options").slideUp()
    $("#table_search_side_bar_input_btn_more h5").text("Advance search")
    $("#table_search_side_bar_input_btn_more h5").css("color","blue")
    $("#side_table_search1").hide()
    $("#side_table_search2").show()
    $("#table_search_side_bar_input_show").show()
    $("#side_table_search2").focus()
    }
});
$(document).on("click","#payment_side_bar_search_input_btn_more",function(){
  if(refresh_payment_search_status==0){
    refresh_payment_search_status=1
    $("#payment_search_side_bar_input_show").hide()
    $("#payment_search_all_options").slideDown()
    $("#payment_side_bar_search_input_btn_more h5").text("Close advance search")
    $("#payment_side_bar_search_input_btn_more h5").css("color","red")
    $("#side_payment_search1").show()
    $("#side_payment_search2").hide()
    $("#side_payment_search_firstname").focus()
  }else{
    refresh_payment_search_status=0
    $("#payment_search_all_options").slideUp()
    $("#payment_side_bar_search_input_btn_more h5").text("Advance search")
    $("#payment_side_bar_search_input_btn_more h5").css("color","blue")
    $("#side_payment_search2").show()
    $("#side_payment_search1").hide()
    $("#payment_search_side_bar_input_show").show()
    $("#side_payment_search2").focus()
  }
});
$(document).on("keyup","#side_table_search2",function(){
  var val = $("#side_table_search2").val();
  if(val.length==0){
    value_push={
      "search":val,
     }
    search_table()
  }else{
    value_push={
      "search":val,
     }
    search_table()
  }
  
});
$(document).on("keyup","#side_payment_search2",function(){
  var val = $("#side_payment_search2").val();
  if(val.length==0){
    value_push_bills={
      "search":val,
      "year":payment_table_year,
      "month":payment_month,
     }
     search_payment_table()
  }else{
    value_push_bills={
      "search":val,
      "year":payment_table_year,
      "month":payment_month,
     }
     search_payment_table()
  }
  
});
$("#side_table_search_input_rows_slider").val(slider_val)
$("#side_table_search_input_rows").val(slider_val)
$(document).on("change","#side_table_search_input_rows_slider",function(){
  slider_val = $("#side_table_search_input_rows_slider").val()
  $("#side_table_search_input_rows").val(slider_val)
})
$(document).on("change","#side_table_search_input_rows",function(){
  slider_val = $("#side_table_search_input_rows").val()
  $("#side_table_search_input_rows_slider").val(slider_val)
})
  $(document).on("change","#water_info_water_level",function(){
    var water = $("#water_info_water_level").val()
    if(water==0){
      var val = water+"%";
    $("#water_info_third_row h3").text(val)
    }else{
    var val = water+"0%";
    $("#water_info_third_row h3").text(val)
    }
  });
  $(document).on("click","#home",function(){
    $("#config_table" ).hide();
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#payment_side_bar" ).hide("slide");
    $("#home_page" ).show();
    $("#table_page" ).hide();
    $("#payment_page" ).hide();
    $("#community_page" ).hide();
    $("#home").addClass("nav_active")
    $("#table").removeClass("nav_active")
    $("#payment").removeClass("nav_active")
    $("#community").removeClass("nav_active")
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()
  });
  $(document).on("click","#header img",function(){
    $("#config_table" ).hide();
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#payment_side_bar" ).hide("slide");
    $("#home_page" ).show();
    $("#table_page" ).hide();
    $("#payment_page" ).hide();
    $("#community_page" ).hide();
    $("#home").addClass("nav_active")
    $("#table").removeClass("nav_active")
    $("#payment").removeClass("nav_active")
    $("#community").removeClass("nav_active")
  });
  $(document).on("click","#table",function(){
    $("#addtosite" ).hide();
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#home_page" ).hide();
    $("#table_page" ).show();
    $("#payment_page" ).hide();
    $("#community_page" ).hide();
    $("#payment_side_bar" ).hide("slide");
    $("#home").removeClass("nav_active")
    $("#table").addClass("nav_active")
    $("#payment").removeClass("nav_active")
    $("#community").removeClass("nav_active")
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()
  });
  $(document).on("click","#payment",function(){
    show_payment_cash()
    $("#home_page" ).hide();
    $("#table_page" ).hide();
    $("#payment_page" ).show();
    $("#community_page" ).hide();
    $("#addtosite" ).hide();
    $("#config_table" ).hide();
    $("#table_search_side_bar_input" ).hide("slide");
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#payment_side_bar" ).hide("slide");
    $("#payment_side_bar_search_input" ).hide("slide");
    $("#payment_side_bar_update_input" ).hide("slide");
    $("#home").removeClass("nav_active")
    $("#table").removeClass("nav_active")
    $("#payment").addClass("nav_active")
    $("#community").removeClass("nav_active")
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()
  });
  $(document).on("click","#community",function(){
    $("#addtosite" ).hide();
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#home_page" ).hide();
    $("#table_page" ).hide();
    $("#payment_page" ).hide();
    $("#community_page" ).show();
    $("#payment_side_bar" ).hide("slide");
    $("#home").removeClass("nav_active")
    $("#table").removeClass("nav_active")
    $("#payment").removeClass("nav_active")
    $("#community").addClass("nav_active")
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide()
    show_community_comment()
  });
  $(document).on("click","#publish_addtosite_btn_exit",function(){
    $("#publish_addtosite" ).hide('slide');
    $("#publish_addtosite_image_show_div").empty()
    $("#publish_addtosite_container_text_notification p").text('');
    $("#publish_addtosite_date").text('');
    $("#publish_addtosite_paragraph").text('');
    $("#publish_addtosite_container_preview #title").text('');        
  });
  $(document).on("click","#edit_default_container_col1_btn_cancel",function(){
    edit_default_col1=0
    $("#edit_default_container_col1_row1_text_area").show()
    $("#edit_default_container_col1_row1_text_area_edit").hide()
    $("#edit_default_container_col1_row2_text_area").show()
    $("#edit_default_container_col1_row2_text_area_edit").hide()
    $("#edit_default_container_col1_row3_text_area").show()
    $("#edit_default_container_col1_row3_text_area_edit").hide()
    $("#edit_default_container_col1_row4_text_area").show()
    $("#edit_default_container_col1_row4_text_area_edit").hide()
  });
  $(document).on("click","#edit_default_container_col1_btn_save",function(){
    if(edit_default_col1==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text('Check your input')
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else{
      var data;
    if(edit_default_col1==1){
      data = $("#edit_default_container_col1_row1_text_area_edit").val()
    }else if(edit_default_col1==2){
      data = $("#edit_default_container_col1_row2_text_area_edit").val()
    }else if(edit_default_col1==3){
      data = $("#edit_default_container_col1_row3_text_area_edit").val()
    }else if(edit_default_col1==4){
      data = $("#edit_default_container_col1_row4_text_area_edit").val()
    }
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=save_default',
      data:  {
        "who": edit_default_col1,
        "data": data
   },
        success: function(response){
          $("#side_bar_menu_show_status").show();
          if(response.status == "error"){
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_red")
            $("#side_bar_menu_show_status").removeClass("status_green")
            hide()
          }else if(response.status == "success"){
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_green")
            $("#side_bar_menu_show_status").removeClass("status_red")
            hide()
            edit_default_col1=0
            $("#edit_default_container_col1_row1_text_area").show()
            $("#edit_default_container_col1_row1_text_area_edit").hide()
            $("#edit_default_container_col1_row2_text_area").show()
            $("#edit_default_container_col1_row2_text_area_edit").hide()
            $("#edit_default_container_col1_row3_text_area").show()
            $("#edit_default_container_col1_row3_text_area_edit").hide()
            $("#edit_default_container_col1_row4_text_area").show()
            $("#edit_default_container_col1_row4_text_area_edit").hide()
            show_your_default()
          }
            }
    });
    }
  });
  $(document).on("click","#edit_default_container_col2_btn_save",function(){
    if(edit_default_col2==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text('Check your input')
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
    }else{
      var data;
    if(edit_default_col2==1){
      data = $("#edit_default_container_col2_text_area_edit1").val()
    }else if(edit_default_col2==2){
      data = $("#edit_default_container_col2_text_area_edit2").val()
    }else if(edit_default_col2==3){
      data = $("#edit_default_container_col2_text_area_edit3").val()
    }
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=save_default2',
      data:  {
        "who": edit_default_col2,
        "data": data
   },
        success: function(response){
          $("#side_bar_menu_show_status").show();
          if(response.status == "error"){
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_red")
            $("#side_bar_menu_show_status").removeClass("status_green")
            hide()
          }else if(response.status == "success"){
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_green")
            $("#side_bar_menu_show_status").removeClass("status_red")
            hide()
            edit_default_col2=0
            $("#edit_default_container_col2_text_area1").show()
            $("#edit_default_container_col2_text_area_edit1").hide()
            $("#edit_default_container_col2_text_area2").show()
            $("#edit_default_container_col2_text_area_edit2").hide()
            $("#edit_default_container_col2_text_area3").show()
            $("#edit_default_container_col2_text_area_edit3").hide()
            show_your_default()
          }
            }
    });
    }
  });
  $(document).on("click","#edit_default_container_col3_btn_save",function(){
    var phase1=$("#edit_default_container_col3_row1_select_time").val()+'-'+$("#edit_default_container_col3_row1_select_ampm").val();
    var phase11=$("#edit_default_container_col3_row1_select_time2").val()+'-'+$("#edit_default_container_col3_row1_select_ampm2").val();
    var phase2=$("#edit_default_container_col3_row2_select_time").val()+'-'+$("#edit_default_container_col3_row2_select_ampm").val();
    var phase22=$("#edit_default_container_col3_row2_select_time2").val()+'-'+$("#edit_default_container_col3_row2_select_ampm2").val();
    var phase3=$("#edit_default_container_col3_row3_select_time").val()+'-'+$("#edit_default_container_col3_row3_select_ampm").val();
    var phase33=$("#edit_default_container_col3_row3_select_time2").val()+'-'+$("#edit_default_container_col3_row3_select_ampm2").val();
    var phase4=$("#edit_default_container_col3_row4_select_time").val()+'-'+$("#edit_default_container_col3_row4_select_ampm").val();
    var phase44=$("#edit_default_container_col3_row4_select_time2").val()+'-'+$("#edit_default_container_col3_row4_select_ampm2").val();
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=save_default3',
      data:  {
        "phase1": phase1,
        "phase11": phase11,
        "phase2": phase2,
        "phase22": phase22,
        "phase3": phase3,
        "phase33": phase33,
        "phase4": phase4,
        "phase44": phase44,
   },
        success: function(response){
          $("#side_bar_menu_show_status").show();
          if(response.status == "error"){
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_red")
            $("#side_bar_menu_show_status").removeClass("status_green")
            hide()
          }else if(response.status == "success"){
            $("#side_bar_menu_show_status h3").text(response.message)
            $("#side_bar_menu_show_status").addClass("status_green")
            $("#side_bar_menu_show_status").removeClass("status_red")
            hide()
            edit_default_col2=0
            $("#edit_default_container_col2_text_area1").show()
            $("#edit_default_container_col2_text_area_edit1").hide()
            $("#edit_default_container_col2_text_area2").show()
            $("#edit_default_container_col2_text_area_edit2").hide()
            $("#edit_default_container_col2_text_area3").show()
            $("#edit_default_container_col2_text_area_edit3").hide()
            show_your_default()
          }
            }
    });
  });
  $(document).on("dblclick","#edit_default_container_col1_row1_text_area",function(){
    console.log(edit_default_col1)
    if(edit_default_col1==0){
      edit_default_col1=1
    $("#edit_default_container_col1_row1_text_area").hide()
    $("#edit_default_container_col1_row1_text_area_edit").show()
    $("#edit_default_container_col1_row1_text_area_edit").focus()
    }else if(edit_default_col1==2){
      var text1 = $("#edit_default_container_col1_row2_text_area").text()
      var text2 = $("#edit_default_container_col1_row2_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=1
        $("#edit_default_container_col1_row1_text_area").hide()
        $("#edit_default_container_col1_row1_text_area_edit").show()
        $("#edit_default_container_col1_row1_text_area_edit").focus()
        $("#edit_default_container_col1_row2_text_area").text(text1)
        $("#edit_default_container_col1_row2_text_area_edit").val(text1)
        $("#edit_default_container_col1_row2_text_area").show()
        $("#edit_default_container_col1_row2_text_area_edit").hide()
      }
    }else if(edit_default_col1==3){
      var text1 = $("#edit_default_container_col1_row3_text_area").text()
      var text2 = $("#edit_default_container_col1_row3_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=1
        $("#edit_default_container_col1_row1_text_area").hide()
        $("#edit_default_container_col1_row1_text_area_edit").show()
        $("#edit_default_container_col1_row1_text_area_edit").focus()
        $("#edit_default_container_col1_row3_text_area").text(text1)
        $("#edit_default_container_col1_row3_text_area_edit").val(text1)
        $("#edit_default_container_col1_row3_text_area").show()
        $("#edit_default_container_col1_row3_text_area_edit").hide()
      }
    }else if(edit_default_col1==4){
      var text1 = $("#edit_default_container_col1_row4_text_area").text()
      var text2 = $("#edit_default_container_col1_row4_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=1
        $("#edit_default_container_col1_row1_text_area").hide()
        $("#edit_default_container_col1_row1_text_area_edit").show()
        $("#edit_default_container_col1_row1_text_area_edit").focus()
        $("#edit_default_container_col1_row4_text_area").text(text1)
        $("#edit_default_container_col1_row4_text_area_edit").val(text1)
        $("#edit_default_container_col1_row4_text_area").show()
        $("#edit_default_container_col1_row4_text_area_edit").hide()
      }
    }
  });
  $(document).on("dblclick","#edit_default_container_col1_row2_text_area",function(){
    console.log(edit_default_col1)
    if(edit_default_col1==0){
      edit_default_col1=2
    $("#edit_default_container_col1_row2_text_area").hide()
    $("#edit_default_container_col1_row2_text_area_edit").show()
    $("#edit_default_container_col1_row2_text_area_edit").focus()
    }else if(edit_default_col1==1){
      var text1 = $("#edit_default_container_col1_row1_text_area").text()
      var text2 = $("#edit_default_container_col1_row1_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=2
        $("#edit_default_container_col1_row2_text_area").hide()
        $("#edit_default_container_col1_row2_text_area_edit").show()
        $("#edit_default_container_col1_row2_text_area_edit").focus()
        $("#edit_default_container_col1_row1_text_area").text(text1)
        $("#edit_default_container_col1_row1_text_area_edit").val(text1)
        $("#edit_default_container_col1_row1_text_area").show()
        $("#edit_default_container_col1_row1_text_area_edit").hide()
      }
    }else if(edit_default_col1==3){
      var text1 = $("#edit_default_container_col1_row3_text_area").text()
      var text2 = $("#edit_default_container_col1_row3_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=2
        $("#edit_default_container_col1_row2_text_area").hide()
        $("#edit_default_container_col1_row2_text_area_edit").show()
        $("#edit_default_container_col1_row2_text_area_edit").focus()
        $("#edit_default_container_col1_row3_text_area").text(text1)
        $("#edit_default_container_col1_row3_text_area_edit").val(text1)
        $("#edit_default_container_col1_row3_text_area").show()
        $("#edit_default_container_col1_row3_text_area_edit").hide()
      }
    }else if(edit_default_col1==4){
      var text1 = $("#edit_default_container_col1_row4_text_area").text()
      var text2 = $("#edit_default_container_col1_row4_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=2
        $("#edit_default_container_col1_row2_text_area").hide()
        $("#edit_default_container_col1_row2_text_area_edit").show()
        $("#edit_default_container_col1_row2_text_area_edit").focus()
        $("#edit_default_container_col1_row4_text_area").text(text1)
        $("#edit_default_container_col1_row4_text_area_edit").val(text1)
        $("#edit_default_container_col1_row4_text_area").show()
        $("#edit_default_container_col1_row4_text_area_edit").hide()
      }
    }
  });
  $(document).on("dblclick","#edit_default_container_col1_row3_text_area",function(){
    console.log(edit_default_col1)
    if(edit_default_col1==0){
      edit_default_col1=3
      $("#edit_default_container_col1_row3_text_area").hide()
      $("#edit_default_container_col1_row3_text_area_edit").show()
      $("#edit_default_container_col1_row3_text_area_edit").focus()
    }else if(edit_default_col1==1){
      var text1 = $("#edit_default_container_col1_row1_text_area").text()
      var text2 = $("#edit_default_container_col1_row1_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=3
        $("#edit_default_container_col1_row3_text_area").hide()
        $("#edit_default_container_col1_row3_text_area_edit").show()
        $("#edit_default_container_col1_row3_text_area_edit").focus()
        $("#edit_default_container_col1_row1_text_area").text(text1)
        $("#edit_default_container_col1_row1_text_area_edit").val(text1)
        $("#edit_default_container_col1_row1_text_area").show()
        $("#edit_default_container_col1_row1_text_area_edit").hide()
      }
    }else if(edit_default_col1==2){
      var text1 = $("#edit_default_container_col1_row2_text_area").text()
      var text2 = $("#edit_default_container_col1_row2_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=3
        $("#edit_default_container_col1_row3_text_area").hide()
        $("#edit_default_container_col1_row3_text_area_edit").show()
        $("#edit_default_container_col1_row3_text_area_edit").focus()
        $("#edit_default_container_col1_row2_text_area").text(text1)
        $("#edit_default_container_col1_row2_text_area_edit").val(text1)
        $("#edit_default_container_col1_row2_text_area").show()
        $("#edit_default_container_col1_row2_text_area_edit").hide()
      }
    }else if(edit_default_col1==4){
      var text1 = $("#edit_default_container_col1_row4_text_area").text()
      var text2 = $("#edit_default_container_col1_row4_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=3
        $("#edit_default_container_col1_row3_text_area").hide()
        $("#edit_default_container_col1_row3_text_area_edit").show()
        $("#edit_default_container_col1_row3_text_area_edit").focus()
        $("#edit_default_container_col1_row4_text_area").text(text1)
        $("#edit_default_container_col1_row4_text_area_edit").val(text1)
        $("#edit_default_container_col1_row4_text_area").show()
        $("#edit_default_container_col1_row4_text_area_edit").hide()
      }
    }
  });
  $(document).on("dblclick","#edit_default_container_col1_row4_text_area",function(){
    console.log(edit_default_col1)
    if(edit_default_col1==0){
      edit_default_col1=4
      $("#edit_default_container_col1_row4_text_area").hide()
      $("#edit_default_container_col1_row4_text_area_edit").show()
      $("#edit_default_container_col1_row4_text_area_edit").focus()
    }else if(edit_default_col1==1){
      var text1 = $("#edit_default_container_col1_row1_text_area").text()
      var text2 = $("#edit_default_container_col1_row1_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=4
        $("#edit_default_container_col1_row4_text_area").hide()
        $("#edit_default_container_col1_row4_text_area_edit").show()
        $("#edit_default_container_col1_row4_text_area_edit").focus()
        $("#edit_default_container_col1_row1_text_area").text(text1)
        $("#edit_default_container_col1_row1_text_area_edit").val(text1)
        $("#edit_default_container_col1_row1_text_area").show()
        $("#edit_default_container_col1_row1_text_area_edit").hide()
      }
    }else if(edit_default_col1==2){
      var text1 = $("#edit_default_container_col1_row2_text_area").text()
      var text2 = $("#edit_default_container_col1_row2_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=4
        $("#edit_default_container_col1_row4_text_area").hide()
        $("#edit_default_container_col1_row4_text_area_edit").show()
        $("#edit_default_container_col1_row4_text_area_edit").focus()
        $("#edit_default_container_col1_row2_text_area").text(text1)
        $("#edit_default_container_col1_row2_text_area_edit").val(text1)
        $("#edit_default_container_col1_row2_text_area").show()
        $("#edit_default_container_col1_row2_text_area_edit").hide()
      }
    }else if(edit_default_col1==3){
      var text1 = $("#edit_default_container_col1_row3_text_area").text()
      var text2 = $("#edit_default_container_col1_row3_text_area_edit").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col1=4
        $("#edit_default_container_col1_row4_text_area").hide()
        $("#edit_default_container_col1_row4_text_area_edit").show()
        $("#edit_default_container_col1_row4_text_area_edit").focus()
        $("#edit_default_container_col1_row3_text_area").text(text1)
        $("#edit_default_container_col1_row3_text_area_edit").val(text1)
        $("#edit_default_container_col1_row3_text_area").show()
        $("#edit_default_container_col1_row3_text_area_edit").hide()
      }
    }
  });
  $(document).on("click","#side_right_menu_container_account_img_btn",function(){
    $('#side_right_menu_container_account_img_edit_show_input').trigger('click');
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
              
              get_username()
              hide()
            }
            })
  })
  $(document).on("click","#header_account_notification",function() {
    $("#side_right_menu").show('slide')
    $("#side_right_menu_container_notification").show()
  })
  $(document).on("click","#side_right_menu_container_notification_btn_exit",function() {
    $("#side_right_menu").hide('slide')
    $("#side_right_menu_container_notification").hide()
  })
  $(document).on("click","#header_account_img",function(){
    $("#header_menu").show();
    $("#header_menu_background").show();
  })
  $(document).on("click","#header_menu_background",function(){
    $("#header_menu").hide();
    $("#header_menu_background").hide();
  })
  $(document).on("click","#header_menu_container_btn1",function(){
    $("#side_right_menu").show('slide')
    $("#side_right_menu_container_account").show()
    search_side_right_menuinfo()
  })
  $(document).on("click","#header_menu_container_btn2",function(){
    $("#side_right_menu").show('slide')
    $("#side_right_menu_container_feedback").show()
    feedback_show()
  })
  $(document).on("click","#side_right_menu_container_feedback_btn_exit",function(){
    $("#side_right_menu").hide('slide')
    $("#side_right_menu_container_feedback").hide()
    $("#header_menu").hide();
    $("#header_menu_background").hide();
  })
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
  $(document).on("click","#header_menu_container_btn4",function(){
    $("#header_menu").hide();
    $("#header_menu_background").hide();
  })
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
  $(document).on("dblclick","#edit_default_container_col2_text_area2",function(){
    if(edit_default_col2==0){
      edit_default_col2=2
    $("#edit_default_container_col2_text_area2").hide()
    $("#edit_default_container_col2_text_area_edit2").show()
    $("#edit_default_container_col2_text_area_edit2").focus()
    }else if(edit_default_col2==1){
      var text1 = $("#edit_default_container_col2_text_area1").text()
      var text2 = $("#edit_default_container_col2_text_area_edit1").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col2=2
        $("#edit_default_container_col2_text_area2").hide()
        $("#edit_default_container_col2_text_area_edit2").show()
        $("#edit_default_container_col2_text_area_edit2").focus()
        $("#edit_default_container_col2_text_area1").text(text1)
        $("#edit_default_container_col2_text_area_edit1").val(text1)
        $("#edit_default_container_col2_text_area1").show()
        $("#edit_default_container_col2_text_area_edit1").hide()
      }
    }else if(edit_default_col2==3){
      var text1 = $("#edit_default_container_col2_text_area3").text()
      var text2 = $("#edit_default_container_col2_text_area_edit3").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col2=2
        $("#edit_default_container_col2_text_area2").hide()
        $("#edit_default_container_col2_text_area_edit2").show()
        $("#edit_default_container_col2_text_area_edit2").focus()
        $("#edit_default_container_col2_text_area3").text(text1)
        $("#edit_default_container_col2_text_area_edit3").val(text1)
        $("#edit_default_container_col2_text_area3").show()
        $("#edit_default_container_col2_text_area_edit3").hide()
      }
    }
  });
  $(document).on("dblclick","#edit_default_container_col2_text_area3",function(){
    if(edit_default_col2==0){
      edit_default_col2=3
    $("#edit_default_container_col2_text_area3").hide()
    $("#edit_default_container_col2_text_area_edit3").show()
    $("#edit_default_container_col2_text_area_edit3").focus()
    }else if(edit_default_col2==1){
      var text1 = $("#edit_default_container_col2_text_area1").text()
      var text2 = $("#edit_default_container_col2_text_area_edit1").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col2=3
        $("#edit_default_container_col2_text_area3").hide()
        $("#edit_default_container_col2_text_area_edit3").show()
        $("#edit_default_container_col2_text_area_edit3").focus()
        $("#edit_default_container_col2_text_area1").text(text1)
        $("#edit_default_container_col2_text_area_edit1").val(text1)
        $("#edit_default_container_col2_text_area1").show()
        $("#edit_default_container_col2_text_area_edit1").hide()
      }
    }else if(edit_default_col2==2){
      var text1 = $("#edit_default_container_col2_text_area2").text()
      var text2 = $("#edit_default_container_col2_text_area_edit2").val()
      if(text1!=text2){
        $("#confirm_alert").show('slide')
      }else{
        edit_default_col2=3
        $("#edit_default_container_col2_text_area3").hide()
        $("#edit_default_container_col2_text_area_edit3").show()
        $("#edit_default_container_col2_text_area_edit3").focus()
        $("#edit_default_container_col2_text_area2").text(text1)
        $("#edit_default_container_col2_text_area_edit2").val(text1)
        $("#edit_default_container_col2_text_area2").show()
        $("#edit_default_container_col2_text_area_edit2").hide()
      }
    }
  });
  $(document).on("mouseleave","#announcement_text_area",function(){
    var announce_textCOUNT = $('#announcement_text_area').val().length;
    var announce_val = $('#announcement_text_area').val();
    if(announce_val!=announcement_default_message && announce_textCOUNT>=30){
      draft_publish()
    }
  });
  $(document).on("mouseleave","#rules_text_area",function(){
    var announce_textCOUNT = $('#rules_text_area').val().length;
    if(announce_textCOUNT>=30){
      draft_publish()
    }
  });
  $(document).on("mouseleave","#community_text_area",function(){
    var announce_textCOUNT = $('#community_text_area').val().length;
    if(announce_textCOUNT>=30){
      draft_publish()
    }
  });
  $(document).on("click","#publish_addtosite_next",function(){
    $("#publish_addtosite_container_text_notification" ).hide();
    $("#publish_addtosite_container_visibility" ).show('slide');
  });
  $(document).on("click","#publish_addtosite_back",function(){
    $("#publish_addtosite_container_text_notification" ).show('slide');
    $("#publish_addtosite_container_visibility" ).hide();
  });
  $(document).on("click","#your_save_container_btn_exit",function(){
    save_files_val_status=0
    $("#your_save").hide('slide');
  });
  $(document).on("click","#main_announcement_btn_menu_2",function(){
    $("#your_save").show('slide')
    $("#main_announcement_btn_menu").hide()
    $("#menu_btn_background").hide() 
    show_your_save()
  });
  $(document).on("click","#main_announcement_btn_menu_3",function(){
    show_your_default()
  });
  $(document).on("click","#edit_default_container_btn_exit",function(){
    $("#edit_default").hide('slide')
  });
  $(document).on("click","#publish_addtosite_go",function(){
    if(visibility==0){
      $("#side_bar_menu_show_status").show();  
      $("#side_bar_menu_show_status h3").text("Select visibility")
      $("#side_bar_menu_show_status").removeClass("status_green")
      $("#side_bar_menu_show_status").addClass("status_red")
      hide()
    }else{
      if(who_view==1||who_view==2){
        publish()
      }else{
        publish_rules()
      }
    }
  });
  $(document).on("click","#water_info_second_row_btn_0",function(){
    if(open_phaseall==0){
      $("#water_info_second_row_btn_0_input").prop('checked', true);
      $("#water_info_second_row_btn_1_input").prop('checked', true);
      $("#water_info_second_row_btn_2_input").prop('checked', true);
      $("#water_info_second_row_btn_3_input").prop('checked', true);
      $("#water_info_second_row_btn_4_input").prop('checked', true);
      open_phaseall=1
      open_phase1=1
      open_phase2=1
      open_phase3=1
      open_phase4=1
    }else{
    $("#water_info_second_row_btn_0_input").prop('checked', false);
    open_phaseall=0
    }
  });
  $(document).on("click","#water_info_second_row_btn_1",function(){
    if(open_phase1==0){
      $("#water_info_second_row_btn_1_input").prop('checked', true);
      open_phase1=1
          if(open_phase1==1&&open_phase2==1&&open_phase3==1&&open_phase4==1){
            $("#water_info_second_row_btn_0_input").prop('checked', true);
            $("#water_info_second_row_btn_1_input").prop('checked', true);
            $("#water_info_second_row_btn_2_input").prop('checked', true);
            $("#water_info_second_row_btn_3_input").prop('checked', true);
            $("#water_info_second_row_btn_4_input").prop('checked', true);
            open_phaseall=1
            open_phase1=1
            open_phase2=1
            open_phase3=1
            open_phase4=1
          }
    }else{
      $("#water_info_second_row_btn_1_input").prop('checked', false);
      open_phase1=0
      if(open_phaseall==1){
        $("#water_info_second_row_btn_0_input").prop('checked', false);
        open_phaseall=0
      }
    }
  });
  $(document).on("click","#water_info_second_row_btn_2",function(){
    if(open_phase2==0){
      $("#water_info_second_row_btn_2_input").prop('checked', true);
      open_phase2=1
          if(open_phase1==1&&open_phase2==1&&open_phase3==1&&open_phase4==1){
            $("#water_info_second_row_btn_0_input").prop('checked', true);
            $("#water_info_second_row_btn_1_input").prop('checked', true);
            $("#water_info_second_row_btn_2_input").prop('checked', true);
            $("#water_info_second_row_btn_3_input").prop('checked', true);
            $("#water_info_second_row_btn_4_input").prop('checked', true);
            open_phaseall=1
            open_phase1=1
            open_phase2=1
            open_phase3=1
            open_phase4=1
          }
    }else{
      $("#water_info_second_row_btn_2_input").prop('checked', false);
      open_phase2=0
      if(open_phaseall==1){
        $("#water_info_second_row_btn_0_input").prop('checked', false);
        open_phaseall=0
      }
    }
  });
  $(document).on("click","#water_info_second_row_btn_3",function(){
    if(open_phase3==0){
      $("#water_info_second_row_btn_3_input").prop('checked', true);
      open_phase3=1
          if(open_phase1==1&&open_phase2==1&&open_phase3==1&&open_phase4==1){
            $("#water_info_second_row_btn_0_input").prop('checked', true);
            $("#water_info_second_row_btn_1_input").prop('checked', true);
            $("#water_info_second_row_btn_2_input").prop('checked', true);
            $("#water_info_second_row_btn_3_input").prop('checked', true);
            $("#water_info_second_row_btn_4_input").prop('checked', true);
            open_phaseall=1
            open_phase1=1
            open_phase2=1
            open_phase3=1
            open_phase4=1
          }
    }else{
      $("#water_info_second_row_btn_3_input").prop('checked', false);
      open_phase3=0
      if(open_phaseall==1){
        $("#water_info_second_row_btn_0_input").prop('checked', false);
        open_phaseall=0
      }
    }
  });
  $(document).on("click","#water_info_second_row_btn_4",function(){
    if(open_phase4==0){
      $("#water_info_second_row_btn_4_input").prop('checked', true);
      open_phase4=1
          if(open_phase1==1&&open_phase2==1&&open_phase3==1&&open_phase4==1){
            $("#water_info_second_row_btn_0_input").prop('checked', true);
            $("#water_info_second_row_btn_1_input").prop('checked', true);
            $("#water_info_second_row_btn_2_input").prop('checked', true);
            $("#water_info_second_row_btn_3_input").prop('checked', true);
            $("#water_info_second_row_btn_4_input").prop('checked', true);
            open_phaseall=1
            open_phase1=1
            open_phase2=1
            open_phase3=1
            open_phase4=1
          }
    }else{
      $("#water_info_second_row_btn_4_input").prop('checked', false);
      open_phase4=0
      if(open_phaseall==1){
        $("#water_info_second_row_btn_0_input").prop('checked', false);
        open_phaseall=0
      }
    }
  });
  $(document).on("click","#publish_addtosite_container_visibility_btn_draft",function(){
    visibility=1;
    $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
    $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', true);
    });
    $(document).on("click","#publish_addtosite_container_visibility_btn_publish",function(){
      visibility=2;
    $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', true);
    $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
      });
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
  $(document).on("click","#publish_addtosite_container_preview_btn_right",function(){
    if(preview_image_count==preview_image_total){
      $("#preview_announcement_image_"+preview_image_count).addClass("d-none");
      preview_image_count=1
      $("#preview_announcement_image_"+preview_image_count).removeClass("d-none");
    }else{
      $("#preview_announcement_image_"+preview_image_count).addClass("d-none");
      preview_image_count++
    $("#preview_announcement_image_"+preview_image_count).removeClass("d-none");
    }
    $("#publish_addtosite_image_show_count").text(preview_image_count)
  });
  $(document).on("click","#publish_addtosite_container_preview_btn_left",function(){
    if(preview_image_count==1){
      $("#preview_announcement_image_"+preview_image_count).addClass("d-none");
      var count = preview_image_total-preview_image_count+1;
      preview_image_count=count;
      $("#preview_announcement_image_"+preview_image_count).removeClass("d-none");
    }else{
      var count = preview_image_count-1;
      $("#preview_announcement_image_"+preview_image_count).addClass("d-none");
      preview_image_count=count
    $("#preview_announcement_image_"+count).removeClass("d-none");
    }
    $("#publish_addtosite_image_show_count").text(preview_image_count)
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
  $(document).on("click","#side_bar_btn_publish",function(){
    if(visibility==1){
      $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
      $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', true);
    }else if(visibility==2){
      $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', true);
      $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
    }
    if(upload_image_status>1){
      $("#publish_addtosite_container_preview_btn_left").show()
      $("#publish_addtosite_container_preview_btn_right").show()
    }else{
      $("#publish_addtosite_container_preview_btn_left").hide()
      $("#publish_addtosite_container_preview_btn_right").hide()
    }
    var announce_paragraphVAL =$("#announcement_text_area").val();
    var com_paragraphVAL =$("#community_text_area").val();
    var rules_paragraphVAL =$("#rules_text_area").val();
    if(who_view==1){
      var announce_imageCOUNT = upload_image_status;
      $("#publish_addtosite_image_show_count").text(preview_image_count)
      var announce_paragraphCOUNT = $("#announcement_text_area").val().length;
      var announce_calendarCOUNT = $("#announcement_calendar").val().length;
      if(announce_imageCOUNT==0 && announce_paragraphCOUNT ==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Check your input')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else if(announce_calendarCOUNT==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Check your schedule')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        if(draft_save_id==0){
      $("#publish_addtosite").show('slide')
      var calendar = $("#announcement_calendar").val();
      var calendar_split = calendar.split("-");
        var val;
        switch(calendar_split[1]) {
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
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=text',
          data:  {
            "ID": who_view
       },
            success: function(response){
              $("#publish_addtosite_container_text_notification p").text(response[0].message);
                }
        });
        $("#publish_addtosite_date").text(val+" "+calendar_split[2]+", "+calendar_split[0]);
          $("#publish_addtosite_paragraph").text(announce_paragraphVAL);
          $("#publish_addtosite_container_preview #title").text("Announcement");
          $("#publish_addtosite_container_preview_btn_left").hide()
          $("#publish_addtosite_container_preview_btn_right").hide()
          $("#publish_addtosite_image_show_count").hide()
        }else{
          $("#publish_addtosite").show('slide')
      var calendar = $("#announcement_calendar").val();
      var calendar_split = calendar.split("-");
        var val;
        switch(calendar_split[1]) {
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
        }
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=text',
          data:  {
            "ID": who_view
       },
            success: function(response){
              $("#publish_addtosite_container_text_notification p").text(response[0].message);
                }
        });
        var draft_id=draft_save_id;
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=search_view_img1',
          data:  {
            "ID": draft_id
       },
            success: function(response){
              preview_image_total=response.length;
              var image_id=1;
              for (let i = 0; i < preview_image_total; i++) {
                 if(image_id==1){
                  var row = $('<img class="publish_addtosite_image_show" id="preview_announcement_image_'+image_id+'" src="./public/image/announceIMG/'+response[i].image_name+'" alt="" srcset="">');
                  image_id++
                  $('#publish_addtosite_image_show_div').append(row);
                 }else{
                  var row = $('<img class="publish_addtosite_image_show d-none" id="preview_announcement_image_'+image_id+'" src="./public/image/announceIMG/'+response[i].image_name+'" alt="" srcset="">');
                  $('#publish_addtosite_image_show_div').append(row);
                  image_id++
                 }      
          }     
          if(preview_image_total<=1){
            $("#publish_addtosite_container_preview_btn_left").hide()
            $("#publish_addtosite_container_preview_btn_right").hide()
            $("#publish_addtosite_image_show_count").hide()
          }
                }
        });
        $("#publish_addtosite_date").text(val+" "+calendar_split[2]+", "+calendar_split[0]);
          $("#publish_addtosite_paragraph").text(announce_paragraphVAL);
          $("#publish_addtosite_container_preview #title").text("Announcement");
          
        }
      }
    }else if(who_view==2){
      var com_imageCOUNT = upload_image_status;
      $("#publish_addtosite_image_show_count").text(preview_image_count)
      var com_paragraphCOUNT = $("#community_text_area").val().length;
      var com_calendarCOUNT = $("#community_calendar").val().length;
      if(com_imageCOUNT==0 && com_paragraphCOUNT ==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Check your input')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else if(com_calendarCOUNT==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Check your schedule')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        if(draft_save_id==0){
      $("#publish_addtosite").show('slide')
      var calendar = $("#community_calendar").val();
      var calendar_split = calendar.split("-");
        var val;
        switch(calendar_split[1]) {
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
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=text',
          data:  {
            "ID": who_view
       },
            success: function(response){
              $("#publish_addtosite_container_text_notification p").text(response[0].message);
                }
        });
        $("#publish_addtosite_date").text(val+" "+calendar_split[2]+", "+calendar_split[0]);
          $("#publish_addtosite_paragraph").text(com_paragraphVAL);
          $("#publish_addtosite_container_preview #title").text("Community");
          $("#publish_addtosite_container_preview_btn_left").hide()
          $("#publish_addtosite_container_preview_btn_right").hide()
          $("#publish_addtosite_image_show_count").hide()
        }else{
          $("#publish_addtosite").show('slide')
      var calendar = $("#community_calendar").val();
      var calendar_split = calendar.split("-");
        var val;
        switch(calendar_split[1]) {
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
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=text',
          data:  {
            "ID": who_view
       },
            success: function(response){
              $("#publish_addtosite_container_text_notification p").text(response[0].message);
                }
        });
        var draft_id=draft_save_id;
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=search_view_img2',
          data:  {
            "ID": draft_id
       },
            success: function(response){
              if(response==0){
                preview_image_total=0;
              }else{
                preview_image_total=response.length;
              }
              var image_id=1;
              for (let i = 0; i <  preview_image_total; i++) {
                 if(image_id==1){
                  var row = $('<img class="publish_addtosite_image_show" id="preview_announcement_image_'+image_id+'" src="./public/image/communityIMG/'+response[i].image_name+'" alt="" srcset="">');
                  image_id++
                  $('#publish_addtosite_image_show_div').append(row);
                 }else{
                  var row = $('<img class="publish_addtosite_image_show d-none" id="preview_announcement_image_'+image_id+'" src="./public/image/communityIMG/'+response[i].image_name+'" alt="" srcset="">');
                  $('#publish_addtosite_image_show_div').append(row);
                  image_id++
                 }      
          }     
          if(preview_image_total<=1){
            $("#publish_addtosite_container_preview_btn_left").hide()
            $("#publish_addtosite_container_preview_btn_right").hide()
            $("#publish_addtosite_image_show_count").hide()
          }
                }
        });

        $("#publish_addtosite_date").text(val+" "+calendar_split[2]+", "+calendar_split[0]);
          $("#publish_addtosite_paragraph").text(com_paragraphVAL);
          $("#publish_addtosite_container_preview #title").text("Community");
          
        }
      }
    }else if(who_view==3){
      var water_presCHECK = $("#water_info_water_pressure").val();
      var water_pres;
      if(water_presCHECK=='Select'){
        water_pres=''
      }else{
        water_pres = $("#water_info_water_pressure").val();
      }
      var  water_lev = $("#water_info_water_level_h3").text();
      var water_open=0;
      if(open_phase1==1||open_phase2==1||open_phase3==1||open_phase4==1){
        water_open=1
      }
      if(water_pres==''||water_lev==''||water_open==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Check your input')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        publish_water()
      }
    }else{
      $("#publish_addtosite_image_show_count").text(preview_image_count)
      var rules_imageCOUNT = upload_image_status;
      var rules_paragraphCOUNT = $("#rules_text_area").val().length;
      if(rules_imageCOUNT==0 && rules_paragraphCOUNT ==0){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text('Check your input')
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        if(draft_save_id==0){
      $("#publish_addtosite").show('slide')
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=text',
          data:  {
            "ID": who_view
       },
            success: function(response){
              $("#publish_addtosite_container_text_notification p").text(response[0].message);
                }
        });
          $("#publish_addtosite_paragraph").text(rules_paragraphVAL);
          $("#publish_addtosite_container_preview #title").text("Rules");
          $("#publish_addtosite_container_preview_btn_left").hide()
          $("#publish_addtosite_container_preview_btn_right").hide()
          $("#publish_addtosite_image_show_count").hide()
        }else{
          $("#publish_addtosite").show('slide')
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=text',
          data:  {
            "ID": who_view
       },
            success: function(response){
              $("#publish_addtosite_container_text_notification p").text(response[0].message);
                }
        });
        var draft_id=draft_save_id;
        $.ajax({
          type: 'post',
          url: 'api/index.php?t=search_view_img3',
          data:  {
            "ID": draft_id
       },
            success: function(response){
              if(response==0){
                preview_image_total=0;
              }else{
                preview_image_total=response.length;
              }
              var image_id=1;
              for (let i = 0; i <  preview_image_total; i++) {
                 if(image_id==1){
                  var row = $('<img class="publish_addtosite_image_show" id="preview_announcement_image_'+image_id+'" src="./public/image/rulesIMG/'+response[i].image_name+'" alt="" srcset="">');
                  image_id++
                  $('#publish_addtosite_image_show_div').append(row);
                 }else{
                  var row = $('<img class="publish_addtosite_image_show d-none" id="preview_announcement_image_'+image_id+'" src="./public/image/rulesIMG/'+response[i].image_name+'" alt="" srcset="">');
                  $('#publish_addtosite_image_show_div').append(row);
                  image_id++
                 }      
          }     
          if(preview_image_total<=1){
            $("#publish_addtosite_container_preview_btn_left").hide()
            $("#publish_addtosite_container_preview_btn_right").hide()
            $("#publish_addtosite_image_show_count").hide()
          }
                }
        });

          $("#publish_addtosite_paragraph").text(rules_paragraphVAL);
          $("#publish_addtosite_container_preview #title").text("Rules");
          
        }
      }
    }
   
  });
  $(document).on("click","#table_btn_remove_search",function(){
    search_all_obj={};
    $("#table_btn_remove_search").hide()
    show_table()
    who_show_row=3;
  });
  $(document).on("click","#config_table_go",function(){
    var search = $("#side_table_search2").val()
    var search_firstname = $("#side_table_search_firstname").val()
    var search_middlename = $("#side_table_search_middlename").val()
    var search_lastname = $("#side_table_search_lastname").val()
    var search_houseno = $("#side_table_search_houseno").val()
    var search_street = $("#side_table_search_street").val()
    var search_brgy = $("#side_table_search_brgy").val()
    var search_phase = $("#side_table_search_phase").val()
    var search_rate = $("#side_table_search_rate").val()
    var search_household = $("#side_table_search_household").val()
    var search_contactno = $("#side_table_search_contactno").val()
    var search_number_rows = $("#side_table_search_input_rows_slider").val()
    if(who_table==0){
      insert_new_record(who_insert_table)
    }else{
      if(refresh_table_search_status==0){
        value_push={
         "search":search,
        }
        search_tablego()
       }else{
        if(search_firstname!==""){
          var newkey = "firstname";
          var newVal = search_firstname;
          search_all_obj[newkey] = newVal;
        }
        if(search_middlename!==""){
          var newkey = "middlename";
          var newVal = search_middlename;
          search_all_obj[newkey] = newVal;
        }
        if(search_lastname!==""){
          var newkey = "lastname";
          var newVal = search_lastname;
          search_all_obj[newkey] = newVal;
        }
        if(search_houseno!==""){
          var newkey = "houseno";
          var newVal =search_houseno;
          search_all_obj[newkey] = newVal;
        }
        if(search_street!==""){
          var newkey = "street";
          var newVal = search_street;
          search_all_obj[newkey] = newVal;
        }
        if(search_brgy!==""){
          var newkey = "brgy";
          var newVal = search_brgy;
          search_all_obj[newkey] = newVal;
        }
        if(search_phase!=="none"){
          var newkey = "phase";
          var newVal = search_phase;
          search_all_obj[newkey] = newVal;
        }
        if(search_rate!==""){
          var newkey = "rate";
          var newVal = search_rate;
          search_all_obj[newkey] = newVal;
        }
        if(search_household!==""){
          var newkey = "household";
          var newVal = search_household;
          search_all_obj[newkey] = newVal;
        }
        if(search_contactno!==""){
          var newkey = "contactno";
          var newVal = search_contactno;
          search_all_obj[newkey] = newVal;
        }
        if(search_number_rows!==""){
          var newkey = "rows";
          var newVal = search_number_rows;
          search_all_obj[newkey] = newVal;
        }
        search_table2()
       }
       
    }
  });
  function refresh_table_row_count(){
    var val=$("#table_btn_show_row").val()
    if(val=="ALL"){
      show_row = 9999999999;
    }else{
      show_row = val;
    }
  }
   $(document).on("change","#table_btn_show_row",function(){
    var val=$("#table_btn_show_row").val()
    if(val=="ALL"){
      show_row = table_show_response;
      if(who_show_row==0){
        show_table()
      }
      if(who_show_row==1){
        search_table22()
      }
      if(who_show_row==3){
        show_table()
      }
    }else{
      show_row = val;
      if(who_show_row==0){
        show_table()
      }
      if(who_show_row==1){
        search_table22()
      }
      if(who_show_row==3){
        show_table()
      }
    }
  });
  $(document).on("click","#announcement_first_row",function(){
    if(upload_image_status>0){
    $("#addtosite").hide()
    $("#upload-image").show("slide")
    $("#upload-image-scroll").show("slide")
    $("#upload-image-forth").show("slide")
    $("#upload-image-first").hide()
    }else{
    $("#addtosite").hide()
    $("#upload-image-scroll").hide()
    $("#upload-image-forth").hide()
    $("#upload-image").show("slide")
    $("#upload-image-first").show("slide")
    }
  });
  $(document).on("click","#rules_side_bar_row",function(){
    if(upload_image_status>0){
    $("#addtosite").hide()
    $("#upload-image").show("slide")
    $("#upload-image-scroll").show("slide")
    $("#upload-image-forth").show("slide")
    }else{
    $("#addtosite").hide()
    $("#upload-image-scroll").hide()
    $("#upload-image").show("slide")
    $("#upload-image-first").show("slide")
    }
  });
  $(document).on("click","#upload-image_btn_ok",function(){
    $("#upload-image" ).hide("slide");
    $("#addtosite" ).show("slide");
    $("#upload-image-third .row").empty()
  });
  $(document).on("click","#upload-image_btn_upload",function(){
    $("#addtosite").hide('slide')
    $("#upload-image").show("slide")
    $("#upload-image-first").show("slide")
    $("#upload-image-scroll").hide("slide")
    $("#upload-image-forth").hide("slide")
  });
  $(document).on("change","#upload-image-input",function(){
    $("#upload-image-first").hide()
    $("#upload-image-scroll").show("slide")
    $("#upload-image-forth").show("slide")
    $("#upload-image-third .row").empty()
    $("#upload-image-second .row").empty()
            const files_val = document.querySelector('#upload-image-input').files;
            for (let i = 0; i < files_val.length; i++) {
             var newkey = upload_image_files.length;
             upload_image_files[newkey]=files_val[i];
            } 
            image_show()
            
  });
  function image_show(){
    console.log(upload_image_files)
    visibility==1
    var message;
    upload_id_count=0
    upload_image_val_error=[]
    const formData = new FormData();
            count=0;
            countERROR=0;
            if(upload_image_files.length>0){
              for (let i = 0; i < upload_image_files.length; i++) {
                const index = upload_image_files[i].name.lastIndexOf('.');
                const after = upload_image_files[i].name.slice(index + 1);
                let lowercase = after.toLowerCase();
                if(lowercase=='png'||lowercase=='jpeg'||lowercase=='jpg'){
                  if (upload_image_files[i].size > 2097152) {
                    var newkey = count;
                    count++;
                    var name = upload_image_files[i].name.substring(0,12)+'...';
                    var newVal = name;
                    upload_image_val_error[newkey] = {name:newVal, status:"Large File"};
                    upload_image_val_error_index[countERROR] = {'index':i};
                    countERROR++
                  }else{
                    let file = upload_image_files[i];
                    formData.append('files[]', file);
                    console.log(file)
                  }
                }else{
                  var newkey = count;
                  count++;
                  var name = upload_image_files[i].name.substring(0,12)+'...';
                  var newVal = name;
                  upload_image_val_error[newkey] = {name:newVal, status:"Not Image"};
                  upload_image_val_error_index[countERROR] = {'index':i};
                    countERROR++
                } 
              } 
            }
            var normal_count=1;
            var error_count=1;
            var save_location;
            if(who_view==1){
              message = $("#announcement_text_area").val()
              save_location='./public/image/announceIMG/';
            }else if(who_view==2){
             var val = $("#community_text_area").val()
              if(val==''){
                message=''
              }else{
                message = $("#community_text_area").val()
              }
              save_location='./public/image/communityIMG/';
            }else if(who_view==4){
              var val = $("#rules_text_area").val()
              if(val==''){
                message=''
              }else{
                message = $("#rules_text_area").val()
              }
              save_location='./public/image/rulesIMG/';
            }
          var datepublish=date+"-"+strTime;
          console.log(datepublish)
          const url = 'api/index.php?t=IMGupload&ref='+draft_save_id+'[%]'+who_view+'[%]'+message+'[%]'+datepublish;
          const urls = 'api/index.php?t=IMGupload&ref='+draft_save_id+'[%]'+who_view+'[%]'+message+'[%]'+datepublish;
          if(draft_save_id==0){
            fetch(url, {
              method: 'POST',
              body: formData
            }).then(response => {
              return response.text();
          }).then(data => {
              draft_save_id=data
              $.ajax({
                type: 'post',
                url: 'api/index.php?t=v_image',
                data: {
                  'ID':draft_save_id,
                  'who_view':who_view,
                },
                success: function(response) {
                  upload_image_status=response.length;
                  if(response.status == "error"){
                  }else{
                    data_image=response;
                    for (var i=0; i<data_image.length; i++) {
                      var row = $('<div class="col-md-4" id="upload-image-div'+data_image[i].ID+'" btn-id="upload-image-btn-delete'+data_image[i].ID+'" >'
                    +'<h4 title="Remove" class="delete-upload-image" id="upload-image-btn-delete'+data_image[i].ID+'" image-div-id="'+data_image[i].ID+'"><i class="fa-solid fa-xmark"></i></h4>'
                    +'<p id="upload-image-count">'+normal_count+'</p>'
                    +'<p class="upload-image-title" id="name'+data_image[i].ID+'">'+data_image[i].image_name.substring(0,12)+'...'+'</p>'
                    +'<img src="'+save_location+data_image[i].image_name+'" alt="" srcset="">'
                    +'<p class="upload-image-success" id="info'+data_image[i].ID+'">Normal</p>'
                    +'</div>');
                    normal_count++
                    upload_id_count++
                    $('#upload-image-second .row').append(row);
                }
                    if(upload_image_val_error.length>0){
                      for (var i=0; i<upload_image_val_error.length; i++) {
                      var row = $('<div class="col-md-4" id="upload-image-div-error'+i+'" >'
                      +'<p id="upload-image-count">'+error_count+'</p>'
                      +'<p class="upload-image-title" id="name'+i+'">'+upload_image_val_error[i].name+'</p>'
                      +'<img src="" alt="" srcset="">'
                      +'<p class="upload-image-error" id="info'+i+'">'+upload_image_val_error[i].status+'</p>'
                      +'</div>');
                      error_count++
                      $('#upload-image-third .row').append(row);
                      }
                      upload_image_real_location=[]
                      for (let i = 0; i < upload_image_val_error.length; i++) {
                        const reader = new FileReader();      
                        reader.readAsDataURL(upload_image_files[upload_image_val_error_index[i].index]);
                        reader.onload = () => {
                          upload_image_real_location[i] ={'name':reader.result}
                          $("#upload-image-div-error"+i+" img").attr("src", reader.result);
                    };
                      } 
                    }
                    upload_image_files=[]
              }
                }
            });
          });
          }else{
            fetch(urls, {
              method: 'POST',
              body: formData
          }).then(response => {
            $.ajax({
              type: 'post',
              url: 'api/index.php?t=v_image',
              data: {
                'ID':draft_save_id,
                  'who_view':who_view,
              },
              success: function(response) {
                upload_image_status=response.length;
                  if(response.status == "error"){
                    
                  }else{
                      data_image=response;
                    for (var i=0; i<data_image.length; i++) {
                      var row = $('<div class="col-md-4" id="upload-image-div'+data_image[i].ID+'" btn-id="upload-image-btn-delete'+data_image[i].ID+'" >'
                    +'<h4 title="Remove" class="delete-upload-image" id="upload-image-btn-delete'+data_image[i].ID+'" image-div-id="'+data_image[i].ID+'"><i class="fa-solid fa-xmark"></i></h4>'
                    +'<p id="upload-image-count">'+normal_count+'</p>'
                    +'<p class="upload-image-title" id="name'+data_image[i].ID+'">'+data_image[i].image_name.substring(0,12)+'...'+'</p>'
                    +'<img src="'+save_location+data_image[i].image_name+'" alt="" srcset="">'
                    +'<p class="upload-image-success" id="info'+data_image[i].ID+'">Normal</p>'
                    +'</div>');
                    normal_count++
                    upload_id_count++
                    $('#upload-image-second .row').append(row);
                }
                    if(upload_image_val_error.length>0){
                      for (var i=0; i<upload_image_val_error.length; i++) {
                      var row = $('<div class="col-md-4 show_btn" id="upload-image-div-error'+i+'" >'
                      +'<p id="upload-image-count">'+error_count+'</p>'
                      +'<p class="upload-image-title" id="name'+i+'">'+upload_image_val_error[i].name+'</p>'
                      +'<img src="" alt="" srcset="">'
                      +'<p class="upload-image-error" id="info'+i+'">'+upload_image_val_error[i].status+'</p>'
                      +'</div>');
                      error_count++
                      $('#upload-image-third .row').append(row);
                      }
                      upload_image_real_location=[]
                      for (let i = 0; i < upload_image_val_error.length; i++) {
                        const reader = new FileReader();      
                        reader.readAsDataURL(upload_image_files[upload_image_val_error_index[i].index]);
                        reader.onload = () => {
                          upload_image_real_location[i] ={'name':reader.result}
                          $("#upload-image-div-error"+i+" img").attr("src", reader.result);
                    };
                      } 
                    }
                    upload_image_files=[]
                    
              }
              }
          });
        });
          }
  }
  $(document).on("click","#community_first_row",function(){
    if(upload_image_status>0){
      $("#addtosite").hide()
      $("#upload-image").show("slide")
      $("#upload-image-scroll").show("slide")
      $("#upload-image-forth").show("slide")
      }else{
      $("#addtosite").hide()
      $("#upload-image-scroll").hide()
      $("#upload-image").show("slide")
      $("#upload-image-first").show("slide")
      }
  });

  $(document).on("click","#payment_btn_year_j",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='01';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").addClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_f",function(){
    payment_search_all_obj={};
    $("#payment_btn_remove_search").hide()
    show_payment_cash()
    payment_who_show_row=3;
    payment_month='02';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").addClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_m",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='03';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").addClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_a",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='04';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").addClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_ma",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='05';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").addClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_ju",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='06';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").addClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_jul",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='07';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").addClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_au",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='08';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").addClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_s",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='09';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").addClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_o",function(){
    payment_search_all_obj={};
    $("#payment_btn_remove_search").hide()
    show_payment_cash()
    payment_who_show_row=3;
    payment_month='10';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").addClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_n",function(){
    payment_search_all_obj={};
    $("#payment_btn_remove_search").hide()
    show_payment_cash()
    payment_who_show_row=3;
    payment_month='11';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").addClass("payment_btn_year_active");
    $("#payment_btn_year_d").removeClass("payment_btn_year_active");
  });
  $(document).on("click","#payment_btn_year_d",function(){
    payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
    payment_month='12';
    show_payment_cash()
    $("#payment_page tbody").hide("slide")
    $("#payment_btn_year_j").removeClass("payment_btn_year_active");
    $("#payment_btn_year_f").removeClass("payment_btn_year_active");
    $("#payment_btn_year_m").removeClass("payment_btn_year_active");
    $("#payment_btn_year_a").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ma").removeClass("payment_btn_year_active");
    $("#payment_btn_year_ju").removeClass("payment_btn_year_active");
    $("#payment_btn_year_jul").removeClass("payment_btn_year_active");
    $("#payment_btn_year_au").removeClass("payment_btn_year_active");
    $("#payment_btn_year_s").removeClass("payment_btn_year_active");
    $("#payment_btn_year_o").removeClass("payment_btn_year_active");
    $("#payment_btn_year_n").removeClass("payment_btn_year_active");
    $("#payment_btn_year_d").addClass("payment_btn_year_active");
  });
  function search_table(){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=search',
      data: value_push,
      success: function(response) {
        $("#table_search_side_bar_input_show_scroll").empty();
        if(response.status == "error"){
          var row = $('<div class="row"><div class="col-12"><h6>'+response.message+'</h6></div></div>');
          $('#table_search_side_bar_input_show_scroll').append(row);
        }else{
          for (let i = 0; i <  response.length; i++) {
          var row = $('<div search-table-id="'+response[i].ID+'" class="search-table-id row">'
          +'<div class="col-2">'
          +'<h6>'+response[i].ID+'</h6>'
          +'</div>'
          +'<div class="col-4">'
          +' <h6>'+response[i].houseno+'</h6>'
          +'</div>'
          +'<div class="col-6">'
          +'<h6>'+response[i].firstname+' '+response[i].middlename+' '+response[i].lastname+'</h6>'
          +'</div>'
          +'</div>');
          $('#table_search_side_bar_input_show_scroll').append(row);
          }
    }
      }
  });
}
    function search_tablego(){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=search',
      data: value_push,
      success: function(response) {
       var val = response.length;
        $("#side_bar_menu_show_status").show();
        if(response.status == "error"){
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
        }else{
          $("#table_search_side_bar_input_show_scroll").empty()
          $("#table_btn_remove_search").show()
          $("#side_bar_menu_show_status h3").text(val+" Record Found")
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#side_bar_menu" ).hide("slide");
          $("#side_bar_background" ).hide("slide");
          $("#side_table_search2" ).val("");  
          hide()
          table(response)
          who_show_row=1;
        }
      }
  });
}
        function search_table2(){
          $.ajax({
            type: 'post',
            url: 'api/index.php?t=search2',
            data:search_all_obj,
            success: function(response) {
              var val = response.length;
              $("#side_bar_menu_show_status").show();
              if(response.status == "error"){
                $("#side_bar_menu_show_status h3").text(response.message)
                $("#side_bar_menu_show_status").addClass("status_red")
                $("#side_bar_menu_show_status").removeClass("status_green")
                hide()
              }else{
                $("#table_btn_remove_search").show()
                $("#side_bar_menu_show_status h3").text(val+" Record Found")
                $("#side_bar_menu_show_status").addClass("status_green")
                $("#side_bar_menu_show_status").removeClass("status_red")
                $("#side_bar_menu" ).hide("slide");
                $("#side_bar_background" ).hide("slide");
                hide()
                table2(response)
                who_show_row=1;
                $("#side_table_search_firstname" ).val("");
                $("#side_table_search_middlename" ).val("");
                $("#side_table_search_lastname" ).val("");
                $("#side_table_search_houseno" ).val("");
                $("#side_table_search_street" ).val("");
                $("#side_table_search_brgy" ).val("");
                $("#side_table_search_phase" ).val('none');
                $("#side_table_search_rate" ).val("");
                $("#side_table_search_household" ).val("");
                $("#side_table_search_contactno" ).val("");
          }
            }
        });
        }        
        function search_table22(){
          $.ajax({
            type: 'post',
            url: 'api/index.php?t=search2',
            data:search_all_obj,
            success: function(response) {
              var val = response.length;
              if(response.status == "error"){
                $("#side_bar_menu_show_status h3").text(response.message)
                $("#side_bar_menu_show_status").addClass("status_red")
                $("#side_bar_menu_show_status").removeClass("status_green")
                hide()
              }else{
                $("#side_bar_menu" ).hide("slide");
                $("#side_bar_background" ).hide("slide");
                hide()
                table2(response)
                who_show_row=1;
                $("#side_table_search_firstname" ).val("");
                $("#side_table_search_middlename" ).val("");
                $("#side_table_search_lastname" ).val("");
                $("#side_table_search_houseno" ).val("");
                $("#side_table_search_street" ).val("");
                $("#side_table_search_brgy" ).val("");
                $("#side_table_search_phase" ).val("");
                $("#side_table_search_household" ).val("");
                $("#side_table_search_contactno" ).val("");
          }
            }
        });
        }  
function check_announcement_sendTEXT(){
  $.ajax({
    url: "api/index.php?t=more_sendTEXT",
    success: function(response){
    }
  })
}
  function show_announcement(){
    $('#announcement_image_show_div_container').empty();
    $.ajax({
        url: "api/index.php?t=a",
        success: function(response){
         if(response.status=='error'){
          $("#announcement_image_show_div_btn_right").hide()
          $("#announcement_image_show_div_btn_left").hide()
          $("#announcement_image_show_div_img_count").hide()
          $("#announcement_sched").hide()
          $("#main_announcement #announcement_time").hide()
          $("#home_page #announcement_paragraph").text('No Announcement');
         }else{
          var announce_date = response[0].schedule_date.split("-");
          if(response[0].ms_status==0){
            if(announce_date[0]==Year&&announce_date[1]==Month&&Day-announce_date[2]>=1){
              check_announcement_sendTEXT()
            }
          }
          if(announce_date[0]!=Year||announce_date[1]<Month){
            $("#announcement_image_show_div_btn_right").hide()
            $("#announcement_image_show_div_btn_left").hide()
            $("#announcement_image_show_div_img_count").hide()
            $("#announcement_sched").hide()
            $("#main_announcement #announcement_time").hide()
            $("#home_page #announcement_paragraph").text('No Announcement');
          }else{
            $("#announcement_image_show_div_btn_right").show()
            $("#announcement_image_show_div_btn_left").show()
            $("#announcement_image_show_div_img_count").show()
            $("#show").hide()
            $("#main_announcement #announcement_time").show()
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
            $("#announcement_image_show_div_btn_left").hide()
            $("#announcement_image_show_div_btn_right").hide()
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
              +'            <p id="community_page_community_menu" community_id="'+response_community_data[iM].ID+'"><i class="fa-solid fa-pen-to-square"></i></p>'
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
              +'            <p id="community_page_community_menu" community_id="'+response_community_data[iM].ID+'"><i class="fa-solid fa-pen-to-square"></i></p>'
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
              +'            <p id="community_page_rules_menu" rules_id="'+response_rules_data[iM].ID+'"><i class="fa-solid fa-pen-to-square"></i></p>'
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
              +'            <p id="community_page_rules_menu" rules_id="'+response_rules_data[iM].ID+'"><i class="fa-solid fa-pen-to-square"></i></p>'
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
function send_text(){
  $.ajax({
      url: "api/index.php?t=sendTEXT",
      success: function(response){
       console.log(response)
      }
      
  });
}
function publish_rules(){
  var message = $("#rules_text_area").val()
    var vis;
    if(visibility==1){
      vis='draft'
    }else{
      vis='public'
    }
    if(draft_save_id==0){
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=irules',
        data:  {
          "datepublish": date+"-"+strTime,
          "status":vis,
          "message": message,
     },
      success: function(response) {
        draft_save_id=0
        show_rules()
          $("#side_bar_menu_show_status").show();  
          $("#rules_text_area").val("")
          $("#side_bar_menu_show_status h3").text("Publish Successfull")
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#publish_addtosite").hide('slide');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          hide()
      }
  });
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=irules',
      data:  {
        "datepublish": date+"-"+strTime,
        "status":vis,
        "message": message,  
        "ID":draft_save_id
   },
      success: function(response) {
        draft_save_id=0
        show_rules()
        $("#side_bar_menu_show_status").show();  
        $("#rules_text_area").val("")
          $("#side_bar_menu_show_status h3").text("Publish Successfull")
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#publish_addtosite").hide('slide');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          hide()
      }
  });
  } 
}

function publish(){
  if(who_view==1){
  var scheduledate = $("#announcement_calendar").val()
  var message = $("#announcement_text_area").val()
  var vis;
  if(visibility==1){
    vis='draft'
  }else{
    vis='public'
  }
  if(draft_save_id==0){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ia',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis
   },
      success: function(response) {
        draft_save_id=0
        show_announcement()
        $("#side_bar_menu_show_status").show();  
          $("#announcement_calendar").val("")
          $("#announcement_text_area").val(announcement_default_message)
          $("#side_bar_menu_show_status h3").text("Publish Successfull")
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#publish_addtosite").hide('slide');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          hide()
      }
  });
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ia',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis,
        "ID":draft_save_id
   },
      success: function(response) {
        draft_save_id=0
        show_announcement()
        $("#side_bar_menu_show_status").show();  
          $("#announcement_calendar").val("")
          $("#announcement_text_area").val(announcement_default_message)
          $("#side_bar_menu_show_status h3").text("Publish Successfull")
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#publish_addtosite").hide('slide');
          $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
          $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
          visibility=0
          $("#publish_addtosite_container_text_notification p").text('');
          $("#publish_addtosite_date").text('');
          $("#publish_addtosite_paragraph").text('');
          $("#publish_addtosite_container_preview #title").text('');
          $("#publish_addtosite_image_show_div").empty()
          $("#upload-image-second .row").empty()
          $("#upload-image-forth" ).hide();
          $("#publish_addtosite_container_text_notification" ).show('slide');
          $("#publish_addtosite_container_visibility" ).hide();
          upload_image_val_error=[]
          upload_image_status=0
          upload_image_real_location=[]
          hide()
      }
  });
  }
  }else{
    var scheduledate = $("#community_calendar").val()
    var message = $("#community_text_area").val()
    var vis;
    if(visibility==1){
      vis='draft'
    }else{
      vis='public'
    }
    if(draft_save_id==0){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ic',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis
   },
      success: function(response) {
        draft_save_id=0
        show_community()
        $("#community_calendar").val("")
        $("#community_text_area").val("")
        $("#side_bar_menu_show_status").show();  
        $("#side_bar_menu_show_status h3").text("Publish Successfull")
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        $("#publish_addtosite").hide('slide');
        $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
        $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
        visibility=0
        $("#publish_addtosite_container_text_notification p").text('');
        $("#publish_addtosite_date").text('');
        $("#publish_addtosite_paragraph").text('');
        $("#publish_addtosite_container_preview #title").text('');
        $("#publish_addtosite_image_show_div").empty()
        $("#upload-image-second .row").empty()
        $("#upload-image-forth" ).hide();
        $("#publish_addtosite_container_text_notification" ).show('slide');
        $("#publish_addtosite_container_visibility" ).hide();
        upload_image_val_error=[]
        upload_image_status=0
        upload_image_real_location=[] 
        hide()
    
      }
  });
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ic',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis,
        "ID":draft_save_id
   },
      success: function(response) {
        draft_save_id=0
        show_community()
        $("#community_calendar").val("")
        $("#community_text_area").val("")
        $("#side_bar_menu_show_status").show();  
        $("#side_bar_menu_show_status h3").text("Publish Successfull")
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        $("#publish_addtosite").hide('slide');
        $("#publish_addtosite_container_visibility_btn_publish_input").prop('checked', false);
        $("#publish_addtosite_container_visibility_btn_draft_input").prop('checked', false);
        visibility=0
        $("#publish_addtosite_container_text_notification p").text('');
        $("#publish_addtosite_date").text('');
        $("#publish_addtosite_paragraph").text('');
        $("#publish_addtosite_container_preview #title").text('');
        $("#publish_addtosite_image_show_div").empty()
        $("#upload-image-second .row").empty()
        $("#upload-image-forth" ).hide();
        $("#publish_addtosite_container_text_notification" ).show('slide');
        $("#publish_addtosite_container_visibility" ).hide();
        upload_image_val_error=[]
        upload_image_status=0
        upload_image_real_location=[] 
        hide()
    
      }
  });
  } 
}
}
function draft_publish(){
  visibility=1
  if(who_view==1){
  var scheduledate = $("#announcement_calendar").val()
  var message = $("#announcement_text_area").val()
  var vis;
  if(visibility==1){
    vis='draft'
  }else{
    vis='public'
  }
  if(draft_save_id==0){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ia',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis
   },
      success: function(response) {
        draft_save_id=response[0].ID
      }
  });
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ia',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis,
        "ID":draft_save_id
   },
      success: function(response) {
        show_announcement()
      }
  });
  }
  }else if(who_view==2){
    var scheduledate = $("#community_calendar").val()
    var message = $("#community_text_area").val()
    var vis;
    if(visibility==1){
      vis='draft'
    }else{
      vis='public'
    }
    if(draft_save_id==0){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ic',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis
   },
      success: function(response) {
        draft_save_id=response[0].ID
      }
  });
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=ic',
      data:  {
        "datepublish": date+"-"+strTime,
        "message": message,
        "scheduledate": scheduledate,
        "status":vis,
        "ID":draft_save_id
   },
      success: function(response) {
        show_community()
      }
  });
  } 
  }else{
    var message = $("#rules_text_area").val()
    var vis;
    if(visibility==1){
      vis='draft'
    }else{
      vis='public'
    }
    if(draft_save_id==0){
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=irules',
        data:  {
          "datepublish": date+"-"+strTime,
          "status":vis,
          "message": message,
     },
      success: function(response) {
        draft_save_id=response[0].ID
      }
  });
  }else{
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=irules',
      data:  {
        "datepublish": date+"-"+strTime,
        "status":vis,
        "message": message,  
        "ID":draft_save_id
   },
      success: function(response) {
        show_rules()
      }
  });
  } 
  }
}

function publish_water(){
  var pressure;
  var water_pressure = $("#water_info_water_pressure").val()
  var water_level = $("#water_info_water_level").val()
  if(water_pressure=="Slow"){
    pressure=1;
  }else if(water_pressure=="Normal"){
    pressure=2;
  }else if(water_pressure=="Select"){
    pressure="";
  }else{
    pressure=3;
  }
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=iw',
    data:  {
      "datepublish": date+"-"+strTime,
      "water_pressure": pressure,
      "phase1": open_phase1,
      "phase2": open_phase2,
      "phase3": open_phase3,
      "phase4": open_phase4,
      "water_level": water_level
 },
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else if(response.status == "success"){
        $("#water_info_second_row_btn_0_input").prop('checked', false);
        $("#water_info_second_row_btn_1_input").prop('checked', false);
        $("#water_info_second_row_btn_2_input").prop('checked', false);
        $("#water_info_second_row_btn_3_input").prop('checked', false);
        $("#water_info_second_row_btn_4_input").prop('checked', false);
        open_phase1=0
        open_phase2=0
        open_phase3=0
        open_phase4=0
        open_phaseall=0
        $("#water_info_water_level").val("0")
        $("#water_info_third_row h3").text("")
        $("#water_info_water_pressure").val("Select")
        $("#water_info_water_phase").val("Select")
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        hide()
        show_water_info()
  }
    }
});
}
function show_your_default(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=s_default',
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        show_your_default2()
        $("#edit_default_container_col1_row1_text_area").text(response[0].message)
        $("#edit_default_container_col1_row1_text_area_edit").val(response[0].message)
        $("#edit_default_container_col1_row2_text_area").text(response[0].Amount)
        $("#edit_default_container_col1_row2_text_area_edit").val(response[0].Amount)
        $("#edit_default_container_col1_row3_text_area").text(response[1].Amount)
        $("#edit_default_container_col1_row3_text_area_edit").val(response[1].Amount)
        $("#edit_default_container_col1_row4_text_area").text(response[2].Amount)
        $("#edit_default_container_col1_row4_text_area_edit").val(response[2].Amount)
        $("#edit_default").show('slide')
        $("#main_announcement_btn_menu").hide()
        $("#menu_btn_background").hide()
        
  }
    }
});
}
function show_your_default2(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=s_default2',
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        show_your_default3()
        $("#edit_default_container_col2_text_area1").text(response[0].message)
        $("#edit_default_container_col2_text_area_edit1").val(response[0].message)
        $("#edit_default_container_col2_text_area2").text(response[1].message)
        $("#edit_default_container_col2_text_area_edit2").val(response[1].message) 
        $("#edit_default_container_col2_text_area3").text(response[2].message)
        $("#edit_default_container_col2_text_area_edit3").val(response[2].message)   
  }
    }
});
}
function show_your_default3(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=s_default3',
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        var count=0;
        for (let i = 0; i < response.length; i++) {
          count++
          var set = response[i].first_time.split("-");
          var set2 = response[i].second_time.split("-");
        $("#edit_default_container_col3_row"+count+"_select_time").val(set[0])
        $("#edit_default_container_col3_row"+count+"_select_ampm").val(set[1])
        $("#edit_default_container_col3_row"+count+"_select_time2").val(set2[0])
        $("#edit_default_container_col3_row"+count+"_select_ampm2").val(set2[1])
         } 
  }
    }
});
}
function show_your_save(){
  $("#your_save_container_scroll1_container").empty()
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=s_image',
    success: function(response) {
    for (var i=0; i<response.length; i++) {
      var calendar_split = response[i].publish_date.split("-");
      var calendar_split2 = response[i].schedule_date.split("-");
      var val='';
      var val2='';
      switch(calendar_split[1]) {
        case "1":
          val = "January";
          break;
        case "2":
          val = "February";
          break;
        case "3":
          val = "March";
          break;
        case "4":
          val = "April";
          break;
        case "5":
          val = "May";
          break;
        case "6":
          val = "June";
          break;
        case "7":
          val = "July";
          break;
        case "8":
          val = "August";
          break;
        case "9":
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
      }
      switch(calendar_split2[1]) {
        case "01":
          val2 = "January";
          break;
        case "02":
          val2 = "February";
          break;
        case "03":
          val2 = "March";
          break;
        case "04":
          val2 = "April";
          break;
        case "05":
          val2 = "May";
          break;
        case "06":
          val2 = "June";
          break;
        case "07":
          val2 = "July";
          break;
        case "08":
          val2 = "August";
          break;
        case "09":
          val2 = "September";
          break;
        case "10":
          val2 = "October";
          break;
        case "11":
          val2 = "November";
          break;
        case "12":
          val2 = "December";
          break;
        default:
      }
      var schedule_val;
      var status=0;
          if(val2==''){
            schedule_val='N/A'
          }else{
            schedule_val=val2+' '+calendar_split2[2]+','+' '+calendar_split2[0]
          }
          if(response[i].status=='public'){
            status=1
          }else{
            status=0
          }
          var row = $('<div id="your_save_container_scroll1_container_row'+i+'" class="row">'
          +'<div class="col-5">'
          +'  <h5>'+response[i].message+'</h5>'
          +'</div>'
          +'<div class="col-2">'
          +'  <h5 id="your_save_container_scroll1_container_btn'+response[i].ID+'" status="'+status+'" class="edit_your_save_status" edit_your_save_id="'+response[i].ID+'">'+response[i].status+'<i class="pl-3 fa-solid fa-chevron-down"></i></h5>'
          +'</div>'
          +'<div class="col-2">'
          +'  <h5>'+val+' '+calendar_split[2]+','+' '+calendar_split[0]+'</h5>'
          +'</div>'
          +'<div class="col-2">'
          +'  <h5>'+schedule_val+'</h5>'
          +'</div>'
          +'<div class="col-1">'
          +'  <h5 class="edit_your_save" who_show="1" edit_your_save_id="'+response[i].ID+'"><i class="fa-solid fa-pen-to-square"></i></h5>'
          +'</div>'
          +'</div>');
          $("#your_save_container_scroll1_container").append(row); 
          val=''
          val2=''
          status=0

  }
    }
});            
}

function update_your_save_status(e){
  var status;
  console.log(update_your_save_id_default_status)
  if(update_your_save_id_status==0){
    status='draft'
  }else{
    status='public'
  }
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=update_your_save_status',
    data:  {
      "ID": e,
      "status": status,
 },
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else if(response.status == "success"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        hide()
        show_your_save()
        update_your_save_id=0
        update_your_save_id_default_status=0
        update_your_save_id_status=0
        $("#your_save_container_select_visibility").hide()
        $("#your_save_container_select_visibility_background").hide()
  }
    }
  });
}

function insert_new_record(e){
  var houseno = $("#side_table_houseno").val()
  var firstname = $("#side_table_firstname").val()
  var middlename = $("#side_table_middlename").val()
  var lastname = $("#side_table_lastname").val()
  var street = $("#side_table_street").val()
  var brgy = $("#side_table_brgy").val()
  var municipality = $("#side_table_municipality").val()
  var province = $("#side_table_province").val()
  var contactno = $("#side_table_contactno").val()
  var phase = $("#side_table_phase").val()
  var household = $("#side_table_household").val()
  var rate = $("#side_table_rate").val()
  var role;
  var rol = $("#side_table_role").val()
  if(rol==1){
    role='Admin'
  }else if(rol==2){
    role='User'
  }else{
    role=''
  }
  if(e==0){
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=inr',
      data:  {
        "houseno": houseno,
        "firstname": firstname,
        "middlename": middlename,
        "lastname": lastname,
        "role":role,
        "rate":rate,
        "date_joinIN":date,
        "who":who_insert_table
   },
      success: function(response) {
        show_announcement()
        show_community()
        $("#side_bar_menu_show_status").show();
        if(response.status == "error"){
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
        }else if(response.status == "success"){
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#side_table_houseno").val("")
          $("#side_table_firstname").val("")
          $("#side_table_middlename").val("")
          $("#side_table_lastname").val("")
          $("#side_table_user").val("")
          hide()
    }
      }
  });
  }else{
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=inr',
    data:  {
      "houseno": houseno,
      "firstname": firstname,
      "middlename": middlename,
      "lastname": lastname,
      "street": street,
      "brgy": brgy,
      "municipality": municipality,
      "province": province,
      "contactno": contactno,
      "phase": phase,
      "household": household,
      "rate": rate,
      "role": role,
      "date_joinIN":date,
      "who":who_insert_table
 },
    success: function(response) {
      show_announcement()
      show_community()
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else if(response.status == "success"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        $("#side_table_houseno").val("")
        $("#side_table_firstname").val("")
        $("#side_table_middlename").val("")
        $("#side_table_lastname").val("")
        $("#side_table_street").val("")
        $("#side_table_brgy").val("")
        $("#side_table_municipality").val("")
        $("#side_table_province").val("")
        $("#side_table_phase").val("")
        $("#side_table_household").val("")
        $("#side_table_rate").val("")
        $("#side_table_role").val("")
        $("#side_table_contactno").val("")
        hide()
  }
    }
});
  }
}


function show_table(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=t',
    data:  {
      "table_limit": show_row,
 },
      success: function(response){
          console.log(response)
          table(response)
          }
  });
}
function show_table_count(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=t_count',
      success: function(response){
        var val = response.length;
        table_show_response=val;
          }
  });
}
function count_total_phase1(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=ct1',
      success: function(response){
        var count = response.length;
        if(response.message=="No Record"){
          $("#table_phase1_count").text("0")
        }else{
          $("#table_phase1_count").text(count)
          $("#payment_table_phase1_count").text(count)
        }
          }
  });
}

function count_total_phase2(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=ct2',
      success: function(response){
        var count = response.length;
        if(response.message=="No Record"){
          $("#table_phase2_count").text("0")
        }else{
          $("#table_phase2_count").text(count)
          $("#payment_table_phase2_count").text(count)
        }
          }
  });
}

function count_total_phase3(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=ct3',
      success: function(response){
        var count = response.length;
        if(response.message=="No Record"){
          $("#table_phase3_count").text("0")
        }else{
          $("#table_phase3_count").text(count)
          $("#payment_table_phase3_count").text(count)
        }
          }
  });
}
function count_total_phase4(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=ct4',
      success: function(response){
        var count = response.length;
        if(response.message=="No Record"){
          $("#table_phase4_count").text("0")
        }else{
          $("#table_phase4_count").text(count)
          $("#payment_table_phase4_count").text(count)
        }
          }
  });
}
function count_total_user(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=user',
      success: function(response){
        var count = response.length;
        if(response.message=="No Record"){
          $("#table_user_count").text("0")
        }else{
          $("#table_user_count").text(count)
          $("#payment_table_user_count").text(count)
        }
          }
  });
}

function table(response){
  $("#table_page tbody tr").remove()
  for (var i=0; i<response.length; i++) {
      if(response[i].Role=='Admin'){
        var row = $('<tr class="table_admin"><td> <input class="table_check" title="select" id="'+ response[i].ID +'" type="checkbox"></td><td>' + response[i].ID + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].houseno+" "+response[i].street+" "+response[i].brgy+" "+response[i].municipality+" "+response[i].province + '</td><td>' + response[i].phase + '</td><td>' + response[i].rate + '</td><td>' + response[i].household + '</td><td>' + response[i].contactno + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check update_info" data-id="'+ response[i].ID +'"></i></td></tr>');
        $('#table_page tbody').append(row);
      }else{
        var row = $('<tr><td> <input class="table_check" title="select" id="'+ response[i].ID +'" type="checkbox"></td><td>' + response[i].ID + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].houseno+" "+response[i].street+" "+response[i].brgy+" "+response[i].municipality+" "+response[i].province + '</td><td>' + response[i].phase + '</td><td>' + response[i].rate + '</td><td>' + response[i].household + '</td><td>' + response[i].contactno + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check update_info" data-id="'+ response[i].ID +'"></i></td></tr>');
      $('#table_page tbody').append(row);
      }
  }
}
function table2(response){
  $("#table_page tbody tr").remove()
  var con;
  var val= $("#table_btn_show_row").val()
  var count_responce = response.length;
  if(val==10){
    if(count_responce<val){
      con=count_responce;
    }else{
      con=10;
    }
  }
  if(val==20){
    if(count_responce<val){
      con=count_responce;
    }else{
      con=20;
    }
  }
  if(val=="ALL"){
    con=count_responce;
  }
  var length=con;
  for (var i=0; i<length; i++) {
      var row = $('<tr><td> <input class="table_check" title="select" id="'+ response[i].ID +'" type="checkbox"></td><td>' + response[i].ID + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].houseno+" "+response[i].street+" "+response[i].brgy+" "+response[i].municipality+" "+response[i].province + '</td><td>' + response[i].phase + '</td><td>' + response[i].rate + '</td><td>' + response[i].household + '</td><td>' + response[i].contactno + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check update_info" data-id="'+ response[i].ID +'"></i></td></tr>');
      $('#table_page tbody').append(row);
  }
}

function hide(){
  setTimeout(function () {
    $("#side_bar_menu_show_status h3").text("");
    $("#side_bar_menu_show_status").hide();
    $("#side_bar_menu_show_status").removeClass("status_red")
    $("#side_bar_menu_show_status").removeClass("status_green")
    }, 2000);
}

$('#select_all_tr').click(function(event) {   
      $(':checkbox').each(function() {
          this.checked = true;                        
      });
      show_delete_btn()
}); 
$('#select_all_tr').dblclick(function(event) {   
  $(':checkbox').each(function() {
    this.checked = false;   
    show_delete_btn()    
});
}); 

$(document).on("change",":checkbox",function(){
  show_delete_btn()
})

function show_delete_btn(){
  countss_checkbox=0;
    $(':checkbox:checked').each(function(i){
      countss_checkbox++;
    });
    if(countss_checkbox>0){
      $("#table_delete_btn").show()
    }else{
      $("#table_delete_btn").hide()
    }
}
function checkbox(){
  var val = [];
  $(':checkbox:checked').each(function(i){ 
    if(this.id==""){

    }else{
      val[i] = this.id;
    }
  });
  for (i = 0; i < val.length; ++i) {
      delete_id+=val[i]+","; 
  }
  delete_id_final = delete_id.replace('undefined','');
  var sql=String(delete_id_final)
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=fdelete',
    data:{
      "sql":sql
    },
    success: function(fdelete) {
      if(fdelete.status == "error"){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text(fdelete.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#confirm_delete").show()
      for (var i=0; i<fdelete.length; i++) {
        var row = $('<li class="list-group-item">ID: '+fdelete[i].ID+" Name: "+fdelete[i].lastname+", "+fdelete[i].firstname+" "+fdelete[i].middlename+'</li>');
        $('#show_delete_name').append(row);
    }
  }
      
    }
})
}
$(document).on("click","#table_delete_btn",function(){
  checkbox()
});
$(document).on("click","#confirm_delete_btn_confirm",function(){
  delete_id_final = delete_id.replace('undefined','');
  var sql=String(delete_id_final)
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=delete',
    data:{
      "sql":sql
    },
    success: function(response) {
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#confirm_delete").hide()
        $('#show_delete_name li').remove();
        $("#table_btn_remove_search").hide();
        $("#table_delete_btn").hide();
        delete_id="";
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        hide()
        show_table()
  }
    }
});
})
$(document).on("click","#confirm_delete_btn_cancel",function(){
  $("#confirm_delete").hide()
  $('#show_delete_name li').remove();
})

$(document).on("click",".update_info",function(){
  $("#config_table").hide();
  var id = $(this).attr("data-id")
  selected_update_id=id;
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=fupdate',
    data:{
      "id":id
    },
    success: function(finfo) {
      if(finfo.status == "error"){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text(finfo.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#side_bar_menu" ).show("slide");
        $("#side_bar_background" ).show("slide");
        $("#edit_account_information" ).show("slide");
        var calendar_split = finfo[0].date_joinIN.split("-");
        var val='';
      switch(calendar_split[1]) {
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
      }
        $("#edit_account_information_firstname" ).val(finfo[0].firstname);
        $("#edit_account_information_middlename" ).val(finfo[0].middlename);
        $("#edit_account_information_lastname" ).val(finfo[0].lastname);
        $("#edit_account_information_houseno" ).val(finfo[0].houseno);
        $("#edit_account_information_street" ).val(finfo[0].street);
        $("#edit_account_information_brgy" ).val(finfo[0].brgy);
        $("#edit_account_information_municipality" ).val(finfo[0].municipality);
        $("#edit_account_information_province" ).val(finfo[0].province);
        $("#edit_account_information_contactno" ).val(finfo[0].contactno);
        $("#edit_account_information_phase" ).val("Phase "+finfo[0].phase);
        $("#edit_account_information_household" ).val(finfo[0].household);
        $("#edit_account_information_rate" ).val(finfo[0].rate);
        $("#edit_account_information_username" ).val(finfo[0].username);
        $("#edit_account_information_password" ).val(finfo[0].password);
        $("#edit_account_information_role" ).val(finfo[0].Role);
        $("#account_information_input_joinIN h5" ).text('Join in '+val+' '+calendar_split[2]+', '+calendar_split[0]);

            $("#confirm_updates_show1-old" ).text(finfo[0].firstname);
            $("#confirm_updates_show2-old" ).text(finfo[0].middlename);
            $("#confirm_updates_show3-old" ).text(finfo[0].lastname);
            $("#confirm_updates_show4-old" ).text(finfo[0].houseno);
            $("#confirm_updates_show5-old" ).text(finfo[0].street);
            $("#confirm_updates_show6-old" ).text(finfo[0].brgy);
            $("#confirm_updates_show7-old" ).text(finfo[0].municipality);
            $("#confirm_updates_show8-old" ).text(finfo[0].province);
            $("#confirm_updates_show9-old" ).text(finfo[0].contactno);
            $("#confirm_updates_show10-old" ).text(finfo[0].phase);
            $("#confirm_updates_show11-old" ).text(finfo[0].household);
            $("#confirm_updates_show12-old" ).text(finfo[0].rate);
            $("#confirm_updates_show13-old" ).text(finfo[0].username);
            $("#confirm_updates_show14-old" ).text(finfo[0].password);
            $("#confirm_updates_show15-old" ).text(finfo[0].Role);
        }
    }
})
})

$(document).on("click","#edit_account_information_btn_exit",function(){
    $("#side_bar_menu" ).hide("slide");
    $("#side_bar_background" ).hide("slide");
    $("#edit_account_information" ).hide("slide");
});

$(document).on("click","#edit_account_information_btn_update",function(){
   var val1 = $("#edit_account_information_firstname" ).val();
   var val2 = $("#edit_account_information_middlename" ).val();
   var val3 = $("#edit_account_information_lastname" ).val();
   var val4 = $("#edit_account_information_houseno" ).val();
   var val5 = $("#edit_account_information_street" ).val();
   var val6 = $("#edit_account_information_brgy" ).val();
   var val7 = $("#edit_account_information_municipality" ).val();
   var val8 = $("#edit_account_information_province" ).val();
   var val9 = $("#edit_account_information_contactno" ).val();
   var val10 = $("#edit_account_information_phase" ).val();
   var val11 = $("#edit_account_information_household" ).val();
   var val12 = $("#edit_account_information_rate" ).val();
   var val13 = $("#edit_account_information_username" ).val();
   var val14 = $("#edit_account_information_password" ).val();
   var val15 = $("#edit_account_information_role" ).val();
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=fupdate',
        data:{
          "id":selected_update_id
        },
        success: function(finfo) {
          if(finfo.status == "error"){
            $("#side_bar_menu_show_status").show();
            $("#side_bar_menu_show_status h3").text(finfo.message)
            $("#side_bar_menu_show_status").addClass("status_red")
            $("#side_bar_menu_show_status").removeClass("status_green")
            hide()
          }else{
            var count=0;
            if(val1==finfo[0].firstname){
              count++;
            }
            if(val2==finfo[0].middlename){
              count++;
            }
            if(val3==finfo[0].lastname){
              count++;
            }
            if(val4==finfo[0].houseno){
              count++;
            }
            if(val5==finfo[0].street){
              count++;
            }
            if(val6==finfo[0].brgy){
              count++;
            }
            if(val7==finfo[0].municipality){
              count++;
            }
            if(val8==finfo[0].province){
              count++;
            }
            if(val9==finfo[0].contactno){
              count++;
            }
            if(val10=="Phase "+finfo[0].phase){
              count++;
            }
            if(val11==finfo[0].household){
              count++;
            }
            if( val12==finfo[0].rate){
              count++;
            }
            if( val13==finfo[0].username){
              count++;
            }
            if( val14==finfo[0].password){
              count++;
            }
            if( val15==finfo[0].Role){
              count++;
            }
            if(count==15){
              $("#side_bar_menu_show_status").show();
              $("#side_bar_menu_show_status h3").text("Nothing is changed!")
              $("#side_bar_menu_show_status").addClass("status_red")
              $("#side_bar_menu_show_status").removeClass("status_green")
              hide()
            }else{
            $("#confirm_updates").show()
            $("#confirm_updates_show1-new" ).text(val1);
            $("#confirm_updates_show2-new" ).text(val2);
            $("#confirm_updates_show3-new" ).text(val3);
            $("#confirm_updates_show4-new" ).text(val4);
            $("#confirm_updates_show5-new" ).text(val5);
            $("#confirm_updates_show6-new" ).text(val6);
            $("#confirm_updates_show7-new" ).text(val7);
            $("#confirm_updates_show8-new" ).text(val8);
            $("#confirm_updates_show9-new" ).text(val9);
            $("#confirm_updates_show10-new" ).text(val10);
            $("#confirm_updates_show11-new" ).text(val11);
            $("#confirm_updates_show12-new" ).text(val12);
            $("#confirm_updates_show13-new" ).text(val13);
            $("#confirm_updates_show14-new" ).text(val14);
            $("#confirm_updates_show15-new" ).text(val15);
            }
            }
        }
    })

});

$(document).on("click","#confirm_updates_container_btn_exit",function(){
  $("#confirm_updates").hide('slide')
});
$(document).on("click","#confirm_updates_btn_update",function(){
  $("#confirm_update").hide('slide')
  var val1 = $("#edit_account_information_firstname" ).val();
   var val2 = $("#edit_account_information_middlename" ).val();
   var val3 = $("#edit_account_information_lastname" ).val();
   var val4 = $("#edit_account_information_houseno" ).val();
   var val5 = $("#edit_account_information_street" ).val();
   var val6 = $("#edit_account_information_brgy" ).val();
   var val7 = $("#edit_account_information_municipality" ).val();
   var val8 = $("#edit_account_information_province" ).val();
   var val9 = $("#edit_account_information_contactno" ).val();
   var val10 = $("#edit_account_information_phase" ).val();
   var val11 = $("#edit_account_information_household" ).val();
   var val12 = $("#edit_account_information_rate" ).val();
   var val13 = $("#edit_account_information_username" ).val();
   var val14 = $("#edit_account_information_password" ).val();
   var val15 = $("#edit_account_information_role" ).val();
  var phase;
  if(val10=="Phase 1"){
    phase=1;
  }else if(val10=="Phase 2"){
    phase=2;
  }else if(val10=="Phase 3"){
    phase=3;
  }else{
    phase=4;
  }
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=editupdate',
    data:{
      "ID": selected_update_id,
      "firstname": val1,
      "middlename": val2,
      "lastname": val3,
      "houseno": val4,
      "street": val5,
      "brgy": val6,
      "municipality": val7,
      "province": val8,
      "contactno": val9,
      "phase": phase,
      "household": val11,
      "rate": val12,
      "username": val13,
      "password":val14,
      "role": val15

    },
    success: function(finfo) {
      $("#side_bar_menu_show_status").show();
      if(finfo.status == "error"){
        $("#side_bar_menu_show_status h3").text(finfo.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#side_bar_menu_show_status h3").text(finfo.message)
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        $("#side_bar_menu" ).hide("slide");
        $("#side_bar_background" ).hide("slide");
        $("#confirm_updates").hide()
        hide()
        search_all_obj={};
        $("#table_btn_remove_search").hide()
        who_show_row=3;
        show_table()
        }
    }
})
});
function feedback_show(){
  $("#side_right_menu_container_feedback_scroll").empty()
  $.ajax({
    type: 'post',
      url: "api/index.php?t=feedback_show",
      data:{
        'ID':get_account_id,
        'what':what_feedback_show,
      },
      success: function(response){
        var not_readCOUNT=0;
        for (var i=0; i<response.length; i++) {
          var date = response[i].date_publish.split("-");
          var val='';
      switch(date[1]) {
        case "01":
          val = "Jan";
          break;
        case "02":
          val = "Feb";
          break;
        case "03":
          val = "Mar";
          break;
        case "04":
          val = "Apr";
          break;
        case "05":
          val = "May";
          break;
        case "06":
          val = "Jun";
          break;
        case "07":
          val = "Jul";
          break;
        case "08":
          val = "Aug";
          break;
        case "09":
          val = "Sept";
          break;
        case "10":
          val = "Oct";
          break;
        case "11":
          val = "Nov";
          break;
        case "12":
          val = "Dec";
          break;
        default:
      }
          if(response[i].image_name==''){
            if(response[i].status==0){
              not_readCOUNT++
              var row = $('<div class="row feedback_show_row feedback_show" feedback_show_id="'+response[i].ID+'" feedback_show_status="0">'
              +'<div class="col-6">'
              +'  <h6 id="feedback_show_row1">From: '+response[i].name+'</h6>'
              +'</div>'
              +'<div id="feedback_show_row2" class="col-5">'
              +'  <h6>'+val+' '+date[1]+'</h6>'
              +'</div>'
              +'<div id="feedback_show_row3" class="col-1 feedback_show_status_remove'+response[i].ID+'">'
              +'  <h6></h6>'
              +'</div>'
              +'<div class="col-12">'
              +'<div id="feeback_show_all'+response[i].ID+'" class="feedback_show_all">'
              +'  <h6>'+response[i].message+'</h6>'
              +'</div>'
              +'  <h6 id="feedback_message_'+response[i].ID+'">'+response[i].message.substring(0,50)+'...'+'</h6>'
              +'</div>'
              +'</div>');
              $('#side_right_menu_container_feedback_scroll').append(row);
            $('#side_right_menu_container_feedback_scroll').append(row);
            }else{
              var row = $('<div class="row feedback_show_row feedback_show" feedback_show_id="'+response[i].ID+'" feedback_show_status="1">'
              +'<div class="col-6">'
              +'  <h6 id="feedback_show_row1">From: '+response[i].name+'</h6>'
              +'</div>'
              +'<div id="feedback_show_row2" class="col-5">'
              +'  <h6>'+val+' '+date[1]+'</h6>'
              +'</div>'
              +'<div id="feedback_show_row3" class="col-1">'
              +'</div>'
              +'<div class="col-12">'
              +'<div id="feeback_show_all'+response[i].ID+'" class="feedback_show_all">'
              +'  <h6>'+response[i].message+'</h6>'
              +'</div>'
              +'  <h6 id="feedback_message_'+response[i].ID+'">'+response[i].message.substring(0,50)+'...'+'</h6>'
              +'</div>'
              +'</div>');
              $('#side_right_menu_container_feedback_scroll').append(row);
            $('#side_right_menu_container_feedback_scroll').append(row);
            }
        }else{
          if(response[i].status==0){
            not_readCOUNT++
            var row = $('<div class="row feedback_show_row feedback_show" feedback_show_id="'+response[i].ID+'" feedback_show_status="0">'
          +'<div class="col-6">'
          +'  <h6 id="feedback_show_row1">From: '+response[i].name+'</h6>'
          +'</div>'
          +'<div id="feedback_show_row2" class="col-5">'
          +'  <h6>'+val+' '+date[1]+'</h6>'
          +'</div>'
          +'<div id="feedback_show_row3" class="col-1 feedback_show_status_remove'+response[i].ID+'">'
          +'  <h6></h6>'
          +'</div>'
          +'<div class="col-12">'
          +'<div id="feeback_show_all'+response[i].ID+'" class="feedback_show_all">'
          +'  <img src="./public/image/feedbackIMG/'+response[i].image_name+'" alt="" srcset="">'
          +'  <h6>'+response[i].message+'</h6>'
          +'</div>'
          +'  <h6 id="feedback_message_'+response[i].ID+'">'+response[i].message.substring(0,50)+'...'+'</h6>'
          +'</div>'
          +'</div>');
          $('#side_right_menu_container_feedback_scroll').append(row);
          }else{
            var row = $('<div class="row feedback_show_row feedback_show" feedback_show_id="'+response[i].ID+'" feedback_show_status="1">'
          +'<div class="col-6">'
          +'  <h6 id="feedback_show_row1">From: '+response[i].name+'</h6>'
          +'</div>'
          +'<div id="feedback_show_row2" class="col-5">'
          +'  <h6>'+val+' '+date[1]+'</h6>'
          +'</div>'
          +'<div id="feedback_show_row3" class="col-1">'
          +'</div>'
          +'<div class="col-12">'
          +'<div id="feeback_show_all'+response[i].ID+'" class="feedback_show_all">'
          +'  <img src="./public/image/feedbackIMG/'+response[i].image_name+'" alt="" srcset="">'
          +'  <h6>'+response[i].message+'</h6>'
          +'</div>'
          +'  <h6 id="feedback_message_'+response[i].ID+'">'+response[i].message.substring(0,50)+'...'+'</h6>'
          +'</div>'
          +'</div>');
          $('#side_right_menu_container_feedback_scroll').append(row);
          $('#side_right_menu_container_feedback_scroll').append(row);
          }
        }
        }
        feedback_bug_count()
        feedback_suggestion_count()
        if(what_feedback_show==1){
          if(not_readCOUNT==0){

          }else{
            $("#side_right_menu_container_feedback_btn_comment span").text(not_readCOUNT)
          }
        }
      }
  });
}
function feedback_bug_count(){
  $.ajax({
    type: 'post',
      url: "api/index.php?t=feedback_show",
      data:{
        'ID':get_account_id,
        'what':2,
      },
      success: function(response){
        var not_readCOUNT=0;
        for (var i=0; i<response.length; i++) {
            if(response[i].status==0){
              not_readCOUNT++
            }
          }
        if(not_readCOUNT==0){

        }else{
          $("#side_right_menu_container_feedback_btn_bug span").text(not_readCOUNT)
        }
      }
  });
}
function feedback_suggestion_count(){
  $.ajax({
    type: 'post',
      url: "api/index.php?t=feedback_show",
      data:{
        'ID':get_account_id,
        'what':3,
      },
      success: function(response){
        var not_readCOUNT=0;
        for (var i=0; i<response.length; i++) {
            if(response[i].status==0){
              not_readCOUNT++
            }
          }
        if(not_readCOUNT==0){

        }else{
          $("#side_right_menu_container_feedback_btn_suggestion span").text(not_readCOUNT)
        }
      }
  });
}
function feedback_click(e){
  $.ajax({
    type: 'post',
      url: "api/index.php?t=feedback_click",
      data:{
        'ID':e,
        'what':what_feedback_show,
      },
      success: function(response){

      }
    })
  }
function refresh_payment_row_count(){
var val=$("#payment_table_btn_show_row").val()
  if(val=="ALL"){
    show_row_payment = 999;
  }else{
    show_row_payment = val;
  }
}
$(document).on("change","#payment_table_btn_show_row",function(){
  var val=$("#payment_table_btn_show_row").val()
  if(val=="ALL"){
    show_row_payment = 999;
    if(payment_who_show_row==0){
      show_payment_cash()
    }
    if(payment_who_show_row==1){
      search_table22()
    }
    if(payment_who_show_row==3){
      show_payment_cash()
    }
  }else{
    show_row_payment = val;
    if(payment_who_show_row==0){
      show_payment_cash()
    }
    if(payment_who_show_row==1){
      search_table22()
    }
    if(payment_who_show_row==3){
      show_payment_cash()
    }
  }
});

function show_payment_cash_year_btn(){
  $.ajax({
    type: 'post',
      url: "api/index.php?t=payment_year_btn",
      success: function(response){
        console.log(response)
        for (var i=0; i<response.length; i++) {
          var row = $('<option>'+response[i].year_publish+'</option>');
          $('#payment_year').append(row);
        }
      }
  });
}
function show_payment_cash(){
  if(payment_table_year==''){
    payment_table_year=Year
  }
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": payment_month,
      "payment_table_limit": show_row_payment,
 },
      success: function(response){
          payment_table(response)
            check_january()
            check_february()
            check_march()
            check_april()
            check_may()
            check_june()
            check_july()
            check_august()
            check_september()
            check_october()
            check_november()
            check_december()
          }
  });
}
function payment_table(response){
  $("#payment_page tbody").show("slide")
  $("#payment_page tbody tr").remove()
  if(response.status=="error"){
    $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("No record found")
      $("#side_bar_menu_show_status").addClass("status_red")
      $("#side_bar_menu_show_status").removeClass("status_green")
      hide()
  }else{
    for (var i=0; i<response.length; i++) {
      if(response[i].confirmation==""){
        if(response[i].Role=='Admin'){
          var row = $('<tr class="payment_table_admin"><td>' + response[i].account_information_id + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].method + '</td><td id="payment_btn_table'+response[i].ID+'"><button  id="'+response[i].ID+'" type="button" class="btn btn-primary confirm_payment" confirm_id="'+response[i].account_information_id+'" confirm_amount="'+response[i].amount+'" confirm_method="'+response[i].method+'">Confirm</button></td><td>' + response[i].amount + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check payment_info" data-id="'+ response[i].ID +'"></i></td></tr>');
        }else{
          var row = $('<tr><td>' + response[i].account_information_id + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].method + '</td><td id="payment_btn_table'+response[i].ID+'"><button  id="'+response[i].ID+'" type="button" class="btn btn-primary confirm_payment" confirm_id="'+response[i].account_information_id+'" confirm_amount="'+response[i].amount+'" confirm_method="'+response[i].method+'">Confirm</button></td><td>' + response[i].amount + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check payment_info" data-id="'+ response[i].ID +'"></i></td></tr>');
        }
      }else{  
        if(response[i].Role=='Admin'){
          var row = $('<tr class="payment_table_admin"><td>' + response[i].account_information_id + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].method + '</td><td>' + response[i].confirmation + '</td><td>' + response[i].amount + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check payment_info" data-id="'+ response[i].ID +'"></i></td></tr>');
        }else{
          var row = $('<tr><td>' + response[i].account_information_id + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].method + '</td><td>' + response[i].confirmation + '</td><td>' + response[i].amount + '</td><td><i id="'+ response[i].ID +'" class="fa-solid fa-pen-to-square table_check payment_info" data-id="'+ response[i].ID +'"></i></td></tr>');
        }
       
      }
        $('#payment_page tbody').append(row);
    }
    check_payment_chat(response)
  }
}

function check_payment_chat(e){
  for (var i=0; i<e.length; i++) {
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=check_payment_chat',
      data:  {
        "id": e[i].ID,
   },
        success: function(response){
          if(response.status=="error"){
          }else{
            var row=('<button  id="'+response[0].account_bills_table_id+'" type="button" class="btn btn-warning confirm_chat_payment" confirm_amount="'+response[0].amount+'" confirm_id="'+response[0].account_bills_table_id+'">Chat</button>')
            $(row).appendTo("#payment_btn_table"+response[0].account_bills_table_id)
          }
        }
      })
  }
}
function check_january(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 1,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_j_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
          if(payment_month==1){
            $("#payment_table_summary_count").text(payment_sum)
          }
          if(not_paid==0){
            $("#payment_btn_year_j_count h6").text(0)
          }else{
            $("#payment_btn_year_j_count h6").text(not_paid)
          }
        }
          }
  });
}
function check_february(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 2,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_f_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
          if(payment_month==2){
            $("#payment_table_summary_count").text(payment_sum)
          }
          if(not_paid==0){
            $("#payment_btn_year_f_count h6").text(0)
          }else{
            $("#payment_btn_year_f_count h6").text(not_paid)
          }
        }
          }
  });
}
function check_march(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 3,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_m_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==3){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_m_count h6").text(0)
        }else{
          $("#payment_btn_year_m_count h6").text(not_paid)
        }
      }
          }
  });
}
function check_april(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 4,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_a_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==4){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_a_count h6").text(0)
        }else{
          $("#payment_btn_year_a_count h6").text(not_paid)
        }
      }
          }
  });
}
function check_may(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 5,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_ma_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==5){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_ma_count h6").text(0)
        }else{
          $("#payment_btn_year_ma_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_june(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 6,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_ju_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==6){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_ju_count h6").text(0)
        }else{
          $("#payment_btn_year_ju_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_july(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 7,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_jul_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==7){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_jul_count h6").text(0)
        }else{
          $("#payment_btn_year_jul_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_august(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 8,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_au_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==8){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_au_count h6").text(0)
        }else{
          $("#payment_btn_year_au_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_september(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 9,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_s_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==9){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_s_count h6").text(0)
        }else{
          $("#payment_btn_year_s_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_october(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 10,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_o_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==10){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_o_count h6").text(0)
        }else{
          $("#payment_btn_year_o_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_november(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 11,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_n_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==11){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_n_count h6").text(0)
        }else{
          $("#payment_btn_year_n_count h6").text(not_paid)
        }
          }
        }
  });
}
function check_december(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payC',
    data:  {
      "year": payment_table_year,
      "month": 12,
      "payment_table_limit": 999,
 },
      success: function(response){
        var not_paid=0;
        var payment_sum=0;
        if(response.status=="error"){
          $("#payment_btn_year_d_count h6").text(0)
        }else{
          for (var i=0; i<response.length; i++) {
            if(response[i].confirmation==""){
              not_paid++
            }else{
              payment_sum+=response[i].amount
            }
          }
          payment_mont_allcount+=payment_sum
        if(payment_month==12){
          $("#payment_table_summary_count").text(payment_sum)
        }
        if(not_paid==0){
          $("#payment_btn_year_d_count h6").text(0)
        }else{
          $("#payment_btn_year_d_count h6").text(not_paid)
        }
          }
        }
  });
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
        +'  <p class="delete_comment" delete_id="'+response[i].ID+'"><i class="fa-solid fa-trash-can"></i></p>'
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
$(document).on("click","#confirm_chat_payment_container_row_btn2",function(){
  var message = $("#confirm_chat_payment_container_row_input").val();
    if(message.length==0){
      $("#side_bar_menu_show_status").show();
      $("#side_bar_menu_show_status h3").text("You don't have any input")
      $("#side_bar_menu_show_status").addClass("status_red")
      hide()
      $("#confirm_chat_payment_container_row_input").focus()
    }else{
      $.ajax({
        type: 'post',
        url: 'api/index.php?t=new_gcash_chat',
        data: {
          'id':get_account_id,
          'Bid':who_update_bills_id,
          'message':message,
        },
        success: function(response) {
            if(response.status == "error"){
              $("#side_bar_menu_show_status").show();
              $("#side_bar_menu_show_status h3").text(response.message)
              $("#side_bar_menu_show_status").addClass("status_red")
              hide()
            }else{
              $("#confirm_chat_payment_container_row_input").val('')
              show_chat_payment_scroll()
            }
          }
        })
    }
 })
 $(document).on("click","#confirm_chat_payment_container_row_btn1",function(){
  $('#confirm_chat_payment_container_row_image_input').trigger('click');
 })
 $(document).on("change","#confirm_chat_payment_container_row_image_input",function(){
  const files_val = document.querySelector('#confirm_chat_payment_container_row_image_input').files;
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
          const url = 'api/index.php?t=paymentchat_IMGupload&ref='+who_update_bills_id+'[%]'+get_account_id;
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
              show_chat_payment_scroll()
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
          show_chat_payment_scroll()
        }
      }
    })
 })
function show_chat_payment_scroll(){
  $.ajax({
    type: 'post',
    url: "api/index.php?t=show_gcash_chat",
    data:  {
      "id": who_update_bills_id,
 },
      success: function(response){
        $('#confirm_chat_payment_container_scroll').empty()
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
                $('#confirm_chat_payment_container_scroll').append(row)
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
                $('#confirm_chat_payment_container_scroll').append(row)
               }            
               
              }
            }
            $("#confirm_chat_payment_container_scroll").animate({ scrollTop: $('#confirm_payment_container_row2_2_scroll').prop("scrollHeight")}, 1000);
      }
  });
 }
function refresh_payment_search(){
  if(refresh_payment_search_status==0){
    $("#payment_search_all_options").hide('slide')
    $("#side_payment_search1").hide()
    $("#side_payment_search2").show()
    $("#side_payment_search2").focus()
  }else{
    $("#payment_search_all_options").show('slide')
    $("#side_payment_search2").hide()
    $("#side_payment_search1").show()
    $("#side_payment_search_firstname").focus()
  }
}

$(document).on("change","#payment_year",function(){
  var data = $("#payment_year").val()
  payment_table_year=data
  what_month_to_show()
});
$(document).on("click","#payment_table_btn_search",function(){
  payment_who_table=1;
  $("#payment_side_bar_search_input" ).show("slide");
  $("#table_search_side_bar_input" ).hide("slide");
  $("#side_bar_menu" ).show("slide");
  $("#side_bar_background" ).show("slide");
  $("#payment_side_bar" ).show("slide");
  $("#payment_side_bar_search" ).addClass("side_bar_btn_active");
  $("#payment_side_bar_update" ).removeClass("side_bar_btn_active");
});
$(document).on("click","#payment_side_bar_update",function(){
  payment_who_table=0;
  $("#payment_side_bar_search_input" ).hide("slide");
  $("#payment_side_bar_update_input" ).show("slide");
  $("#payment_side_bar_update" ).addClass("side_bar_btn_active");
  $("#payment_side_bar_search" ).removeClass("side_bar_btn_active");
});
$(document).on("click","#payment_side_bar_search",function(){
  payment_who_table=1;
  $("#payment_side_bar_search_input" ).show("slide");
  $("#payment_side_bar_update_input" ).hide("slide");
  $("#payment_side_bar_update" ).removeClass("side_bar_btn_active");
  $("#payment_side_bar_search" ).addClass("side_bar_btn_active");
});
$(document).on("change","#payment_side_bar_update_confimation",function(){
 var val= $("#payment_side_bar_update_confimation").val();
  if(val=="Edit"){
    $("#flex_payment_calendar" ).show("slide");
    $("#flex_payment_calendar" ).css("display","flex")
    $("#payment_side_bar_update_confimation" ).hide("slide");
  }
});
$(document).on("click","#payment_side_bar_calendar_exit",function(){
     $("#flex_payment_calendar" ).css("display","none")
     $("#payment_side_bar_update_confimation" ).show("slide");
     $("#payment_side_bar_update_confimation" ).val("");
 });
 $(document).on("click","#side_bar_menu_payment_btn_exit",function(){
  $("#payment_side_bar_search_input" ).hide("slide");
  $("#payment_side_bar_update_input" ).hide("slide");
  $("#payment_side_bar_update" ).removeClass("side_bar_btn_active");
  $("#payment_side_bar_search" ).removeClass("side_bar_btn_active");
  $("#side_bar_menu" ).hide("slide");
  $("#side_bar_background" ).hide("slide");
});

$(document).on("click","#side_payment_go",function(){
  var id = $("#side_payment_search2").val()
  var search_firstname = $("#side_payment_search_firstname").val()
  var search_middlename = $("#side_payment_search_middlename").val()
  var search_lastname = $("#side_payment_search_lastname").val()
  var search_houseno = $("#side_payment_search_houseno").val()
  var search_street = $("#side_payment_search_street").val()
  var search_brgy = $("#side_payment_search_brgy").val()
  var search_phase = $("#side_payment_search_phase").val()
  var search_rate = $("#side_payment_search_rate").val()
  var search_household = $("#side_payment_search_household").val()
  var search_contactno = $("#side_payment_search_contactno").val()
  var search_number_rows = $("#side_payment_search_input_rows_slider").val()
  if(payment_who_table==0){
    update_bills(who_update_bills_id)
  }else{
    if(refresh_payment_search_status==0){
      value_push_bills={
        "year":payment_table_year,
       "month":payment_month,
       "search":id,
      }
      search_payment_tablego()
     }else{
        var newkey2 = "year";
        var newVal2 = Year;
        var newkey3 = "month";
        var newVal3 = payment_month;
        payment_search_all_obj[newkey2] = newVal2;
        payment_search_all_obj[newkey3] = newVal3;
      if(search_firstname!==""){
        var newkey = "firstname";
        var newVal = search_firstname;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_middlename!==""){
        var newkey = "middlename";
        var newVal = search_middlename;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_lastname!==""){
        var newkey = "lastname";
        var newVal = search_lastname;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_houseno!==""){
        var newkey = "houseno";
        var newVal =search_houseno;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_street!==""){
        var newkey = "street";
        var newVal = search_street;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_brgy!==""){
        var newkey = "brgy";
        var newVal = search_brgy;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_phase!=="none"){
        var newkey = "phase";
        var newVal = search_phase;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_rate!==""){
        var newkey = "rate";
        var newVal = search_rate;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_household!==""){
        var newkey = "household";
        var newVal = search_household;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_contactno!==""){
        var newkey = "contactno";
        var newVal = search_contactno;
        payment_search_all_obj[newkey] = newVal;
      }
      if(search_number_rows!==""){
        var newkey = "rows";
        var newVal = search_number_rows;
        payment_search_all_obj[newkey] = newVal;
      }
      payment_search_table2()
     }
     
  }
});

function update_bills(e){
  var id=e;
  var method = $("#payment_side_bar_update_method").val()
  var calendar = $("#payment_side_bar_calendar").val()
  var cancel = $("#payment_side_bar_update_confimation").val()
  var confirmation;
  if(cancel=="Cancel"){
    confirmation="";
  }else if(cancel=="Edit"){
    confirmation=calendar;
  }else{
    confirmation=cancel;
  }
  if(id==""){
    $("#side_bar_menu_show_status").show();
    $("#side_bar_menu_show_status h3").text("Plss select first!")
    $("#side_bar_menu_show_status").addClass("status_red")
    $("#side_bar_menu_show_status").removeClass("status_green")
    hide()
  }else{
  var amount = $("#edit_account_information_amount").val()
    $.ajax({
      type: 'post',
      url: 'api/index.php?t=updatebill',
      data:  {
        "method": method,
        "confirmation": confirmation,
        "amount": amount,
        "ID":e
   },
      success: function(response) {
        $("#side_bar_menu_show_status").show();
        if(response.status == "error"){
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_red")
          $("#side_bar_menu_show_status").removeClass("status_green")
          hide()
        }else if(response.status == "success"){
          $("#side_bar_menu_show_status h3").text(response.message)
          $("#side_bar_menu_show_status").addClass("status_green")
          $("#side_bar_menu_show_status").removeClass("status_red")
          $("#payment_side_bar_update_method").val("")
         $("#payment_side_bar_calendar").val("")
          $("#payment_side_bar_update_confimation").val("")
          $("#edit_account_information_amount").val("")
          $("#payment_side_bar_search_input" ).hide("slide");
          $("#payment_side_bar_update_input" ).hide("slide");
          $("#payment_side_bar_update" ).removeClass("side_bar_btn_active");
          $("#payment_side_bar_search" ).removeClass("side_bar_btn_active");
          $("#side_bar_menu" ).hide("slide");
          $("#side_bar_background" ).hide("slide");
          hide()
          show_payment_cash()
    }
      }
  })
}
}

function search_payment_table(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=searchbills',
    data: value_push_bills,
    success: function(response) {
      $("#payment_search_side_bar_input_show_scroll").empty();
        if(response.status == "error"){
          var row = $('<div class="row"><div class="col-12"><h6>'+response.message+'</h6></div></div>');
          $('#payment_search_side_bar_input_show_scroll').append(row);
        }else{
          for (let i = 0; i <  response.length; i++) {
          var row = $('<div search-payment-table-id="'+response[i].ID+'" class="search-payment-table-id row">'
          +'<div class="col-2">'
          +'<h6>'+response[i].account_information_id+'</h6>'
          +'</div>'
          +'<div class="col-4">'
          +' <h6>'+response[i].houseno+'</h6>'
          +'</div>'
          +'<div class="col-6">'
          +'<h6>'+response[i].firstname+' '+response[i].middlename+' '+response[i].lastname+'</h6>'
          +'</div>'
          +'</div>');
          $('#payment_search_side_bar_input_show_scroll').append(row);
          }
    }
    }
});
}
function search_payment_tablego(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=searchbills',
    data: value_push_bills,
    success: function(response) {
      var val = response.length;
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#payment_search_side_bar_input_show_scroll").empty()
        $("#payment_btn_remove_search").show()
        $("#side_bar_menu_show_status h3").text(val+" Record Found")
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        $("#side_payment_search2" ).val("");  
        $("#payment_side_bar_search_input" ).hide("slide");
        $("#payment_side_bar_update_input" ).hide("slide");
        $("#payment_side_bar_update" ).removeClass("side_bar_btn_active");
        $("#payment_side_bar_search" ).removeClass("side_bar_btn_active");
        $("#side_bar_menu" ).hide("slide");
        $("#side_bar_background" ).hide("slide");
        hide()
        payment_table(response)
        payment_who_show_row=1;
  }
    }
});
}

$(document).on("click",".payment_info",function(){
  $("#edit_account_information_amount" ).val("");
  $("#payment_side_bar_calendar" ).val("");
  $("#payment_side_bar_update_confimation" ).val("");
  $("#payment_side_bar_update_method" ).val("");
  var id = $(this).attr("data-id")
  who_update_bills_id=id;
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=fpaymentbills',
    data:{
      "id":id
    },
    success: function(finfo) {
      if(finfo.status == "error"){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text(finfo.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        payment_who_table=0;
        $("#side_bar_menu" ).show("slide");
        $("#side_bar_background" ).show("slide");
        $("#payment_side_bar" ).show("slide");
        $("#payment_side_bar_search_input" ).hide("slide");
        $("#payment_side_bar_update_input" ).show("slide");
        $("#payment_side_bar_update" ).addClass("side_bar_btn_active");
        $("#payment_side_bar_search" ).removeClass("side_bar_btn_active");
        $("#payment_side_bar_update_method" ).val(finfo[0].method);
        $("#payment_side_bar_calendar" ).val(finfo[0].confirmation);
        $("#payment_side_bar_update_confimation option:nth-child(2)" ).text(finfo[0].confirmation);
        $("#payment_side_bar_update_confimation").val(finfo[0].confirmation).change();
        $("#edit_account_information_amount" ).val(finfo[0].amount);
        }
    }
})
})

$(document).on("click",".confirm_payment",function(){
  var id = $(this).attr("confirm_id")
  who_update_bills_id=id
  confirm_payment(id)
  
})
function confirm_payment(id){
  $.ajax({
    type: 'post',
      url: 'api/index.php?t=searchbill_payment',
      data:  {
        "year": payment_table_year,
        "ID":id
   },
    success: function(response) {
      if(response.status == "error"){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        confirm_payment_show(response)
        }
    }
})
}
function confirm_payment_show(data){
  var id = data[0].account_information_id;
  $.ajax({
    type: 'post',
      url: 'api/index.php?t=searchinfo_payment',
      data:  {
        "ID":id
   },
    success: function(response) {
      if(response.status == "error"){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#confirm_payment_show").show('slide')
        var calendar_split = response[0].date_joinIN.split("-");
        var val;
        switch(calendar_split[1]) {
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
        }
        var month_btn1 ='';
        var month_btn2 ='';
        for (var i=0; i<data.length; i++) {
            if(i<6){
              console.log(data)
              console.log(data[i].confirmation)
              if(data[i].confirmation==""){
                month_btn1+='<div id="active_pys_btn'+data[i].ID+'" month="'+data[i].month_publish+'" active_pys_btn="'+data[i].ID+'" active_pys_amount="'+data[i].amount+'" class="active_pys_btn confirm_payment_show_year col-2 confirm_payment_show_r">'
                +'    <h5>'+data[i].month_publish+'</h5>'
                +'  </div>';
              }else{
                month_btn1+='<div class="confirm_payment_show_year confirm_payment_show_g col-2">'
                +'    <h5>'+data[i].month_publish+'</h5>'
                +'  </div>';
              }
            }else{
              if(data[i].confirmation==""){
                month_btn2+='<div id="active_pys_btn'+data[i].ID+'" month="'+data[i].month_publish+'" active_pys_btn="'+data[i].ID+'" active_pys_amount="'+data[i].amount+'" class="active_pys_btn confirm_payment_show_year col-2 confirm_payment_show_r">'
                +'    <h5>'+data[i].month_publish+'</h5>'
                +'  </div>';
              }else{
                month_btn2+='<div class="confirm_payment_show_year confirm_payment_show_g col-2">'
                +'    <h5>'+data[i].month_publish+'</h5>'
                +'  </div>';
              }
            }
        }
          var row = $('<div id="confirm_payment_show_container1" class="col-md-6">'
          +'<div class="row">'
          +'  <div id="confirm_payment_show_container_img" class="col-3">'
          +'    <img src="./public/image/userIMG/'+response[0].image_name+'" alt="" srcset="">'
          +'  </div>'
          +'  <div class="col-9">'
          +'    <h5>Status: <span>Online</span></h5>'
          +'    <h5>Name: <span>'+response[0].firstname+' '+response[0].middlename+' '+response[0].lastname+'</span></h5>'
          +'    <h5>Join in: <span>'+val+' '+calendar_split[2]+calendar_split[0]+'</span></h5>'
          +'    <h5>Address: <span>'+response[0].houseno+' '+response[0].street+' '+response[0].brgy+'</span></h5>'
          +'    <h5>Phase: <span>'+response[0].phase+'</span></h5>'
          +'    <h5>Household no#: <span>'+response[0].household+'</span></h5>'
          +'    <h5>Rate:  <span>'+response[0].rate+'</span></h5>'
          +'    <h5>Contact no#: <span>'+response[0].contactno+'</span></h5>'
          +'  </div>'
          +'</div>'
          +'</div>'
          +'<div id="confirm_payment_show_container2" class="col-md-6">'
          +'<div id="confirm_payment_show_container_show_year" class="row">'
          +'<div class="col-12">'
          +'<h5>Year: '+payment_table_year+'</h5>'
          +'</div>'
          +'</div>'
          +'<div class="row">'
          +month_btn1
          +'</div>'
          +'<div class="row">'
          +month_btn2
          +'</div>'
          +'<div id="confirm_payment_show_container_show_status" class="row">'
          +'</div>'
          +'<div id="confirm_payment_show_total" class="row">'
          +'  <div class="col-6">'
          +'    <h5>Total</h5>'
          +'  </div>'
          +'  <div class="col-6">'
          +'    <h5 id="confirm_payment_show_total_count">0</h5>'
          +'  </div>'
          +'</div>'
          +'</div>');
        $('#confirm_payment_show_container_show').append(row);
        }
    }
})
}
$(document).on("click","#payment_btn_remove_search",function(){
  payment_search_all_obj={};
  $("#payment_btn_remove_search").hide()
  show_payment_cash()
  payment_who_show_row=3;
});

function payment_search_table2(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=payment_search2',
    data:payment_search_all_obj,
    success: function(response) {
      var val = response.length;
      $("#side_bar_menu_show_status").show();
      if(response.status == "error"){
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else{
        $("#payment_btn_remove_search").show()
        $("#side_bar_menu_show_status h3").text(val+" Record Found")
        $("#side_bar_menu_show_status").addClass("status_green")
        $("#side_bar_menu_show_status").removeClass("status_red")
        $("#side_bar_menu" ).hide("slide");
        $("#side_bar_background" ).hide("slide");
        hide()
        payment_table(response)
        payment_who_show_row=1;
        $("#side_payment_search_firstname" ).val("");
        $("#side_payment_search_middlename" ).val("");
        $("#side_payment_search_lastname" ).val("");
        $("#side_payment_search_houseno" ).val("");
        $("#side_payment_search_street" ).val("");
        $("#side_payment_search_brgy" ).val("");
        $("#side_payment_search_phase" ).val('none');
        $("#side_payment_search_rate" ).val("");
        $("#side_payment_search_household" ).val("");
        $("#side_payment_search_contactno" ).val("");
  }
    }
});
}        
$("#side_payment_search_input_rows_slider").val(payment_slider_val)
$("#side_payment_search_input_rows").val(payment_slider_val)
$(document).on("change","#side_payment_search_input_rows_slider",function(){
  payment_slider_val = $("#side_payment_search_input_rows_slider").val()
  $("#side_payment_search_input_rows").val(payment_slider_val)
})
function create_water_bills_for_this_month(){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=create_bills',
    data:{
      "year":Year,
      "month":Month
    },
    success: function(response) {
      var val = response.length;
      if(response.status == "error"){
        $("#side_bar_menu_show_status").show();
        $("#side_bar_menu_show_status h3").text(response.message)
        $("#side_bar_menu_show_status").addClass("status_red")
        $("#side_bar_menu_show_status").removeClass("status_green")
        hide()
      }else if(response.status=="mron"){
      }else if(val>0){
        for (var i=0; i<val; i++) {
          $.ajax({
            type: 'post',
            url: 'api/index.php?t=create_bills_row',
            data:{
              "ID":response[i].ID,
              "year":Year,
              "month":Month,
              "amount":response[i].rate,
            },
            success: function(response) {
              
            }
        });
        }
      }
    }
});
}
$(document).on("click","#payment_btn_collect",function(){
  redirect1()
  function redirect1(){
    setTimeout(function () {
        window.location = "http://localhost/pwbms/offline.php";
      }, 2000);
}
});
$(document).on("click","#account",function(){
 if(confirm("Do you want to logout?")){
  $.ajax({
    type: 'post',
    url: 'api/index.php?t=logout',
    success: function(response) {
      redirect1()
    }
});
  function redirect1(){
    setTimeout(function () {
        window.location = "http://localhost/pwbms/login.php";
      }, 2000);
}
 }
});