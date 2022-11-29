if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
      navigator.serviceWorker
      .register('sw.js')
      .then(reg =>console.log('Service Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error : ${err}`))
    })
  }
const d = new Date();
var Year = d.getFullYear();
var Month= d.getMonth()+1;
var Day = ("0" + d.getDate()).slice(-2);
var date = Year+"-"+Month+"-"+Day;
function show_payment_cash(){
    $.ajax({
      type: 'post',
      url: 'offline/api/index.php?t=payC',
      data:  {
        "month": Month,
        "year": Year,
   },
        success: function(response){
          localStorage.setItem("response", JSON.stringify(response));
            payment_table()
            }
    });
  }

  function payment_table(){
    var retrievedObject = localStorage.getItem("response");
    var response = JSON.parse(retrievedObject)
    if(response.status=="error"){
    }else{
      for (var i=0; i<response.length; i++) {
        if(response[i].confirmation==""){
          var row = $('<tr><td>' + response[i].account_information_id + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].phase + '</td><td>' + response[i].method + '</td><td id="'+response[i].account_information_id+'"><button  id="'+response[i].account_information_id+'" type="button" class="btn btn-success confirm_payment" confirm_id="'+response[i].account_information_id+'" confirm_amount="'+response[i].amount+'" confirm_method="'+response[i].method+'">Confirm Payment</button></td><td>' + response[i].amount + '</td></tr>');
        }else{
          var row = $('<tr><td>' + response[i].account_information_id + '</td><td>' + response[i].lastname+", "+response[i].firstname +" "+response[i].middlename+ '</td><td>' + response[i].phase + '</td><td>' + response[i].method + '</td><td>' + response[i].confirmation + '</td><td>' + response[i].amount + '</td></tr>');
        }
          $('#home tbody').append(row);
      }
    }
  }

  $(document).on("click",".confirm_payment",function(){
    $id = $(this).attr("confirm_id")
    var retrievedObject = localStorage.getItem("response");
    var result_response = JSON.parse(retrievedObject)
    if(confirm("Do you want to confirm the payment?")){
    elementIndex = result_response.findIndex((obj => obj.account_information_id == $id));
    result_response[elementIndex].confirmation = date;
    localStorage.removeItem("response")
    localStorage.setItem("response", JSON.stringify(result_response));
    $("#"+$id).text(date);
    }
  })
  $(document).on("click","#offline_update",function(){
    var retrievedObject = localStorage.getItem("response");
    var result_response = JSON.parse(retrievedObject)
    var val = result_response.length
    for (var i=0; i<val; i++) {
        var id = result_response[i].account_information_id;
        var ypub = result_response[i].year_publish;
        var mpub = result_response[i].month_publish;
        var confirm = result_response[i].confirmation;
        $.ajax({
          type: 'post',
          url: 'offline/api/index.php?t=updatebill',
          data:{
            "id":id,
            "year":ypub,
            "month":mpub,
            "confirm":confirm,
          },
          success: function(response) {
            
          }
      });
      }
  })

window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);
  
    window.addEventListener("online", () => {
      // Set hasNetwork to online when they change to online.
      hasNetwork(true);
    });
  
    window.addEventListener("offline", () => {
      // Set hasNetwork to offline when they change to offline.
      hasNetwork(false);
    });
  });

  function hasNetwork(online) {
    const element = document.querySelector(".status");
    // Update the DOM to reflect the current status
    if (online) {
    $("#offline_update").attr("disabled", false);
    show_payment_cash()
    $("#offline_update").text("Update");
    } else {
    $("#offline_update").attr("disabled", true);
    var retrievedObject = localStorage.getItem("response");
    var mydata = JSON.parse(retrievedObject)
    payment_table(mydata)
    $("#offline_update").text("Offline");
    window.onbeforeunload = confirmExit();
    }
  }
function confirmExit() {
    if(localStorage.length > 0){
    let text = "Your data will not be save if you leave this page!";
    if (confirm(text) == true) {
    } else {
    }
    }else{
    }   

  }
  $(document).on("click","#offline_exit",function(){
    localStorage.removeItem("response")
    let text = "Your data will not be save if you leave this page!";
    if (confirm(text) == true) {
      redirect1()
    function redirect1(){
      setTimeout(function () {
          window.location = "http://localhost/pwbms/admin.php";
        }, 2000);
  }
    } 
  });