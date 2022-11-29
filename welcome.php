<?php
   session_start();  
  if(!isset($_SESSION["username"])){
    header("location:login.php");
  }else{
        header("location:user.php");
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
    <title>Welcome page</title>
</head>
<body>
   <div class="container">
    <div class="row">
        <div class="col-12">
            <img style="width: 70%;height:70%;margin-right: auto;margin-left: auto;display: block;" src="./public/image/pageIMG/LOGO.png" alt="" srcset="">
        </div>
        <div class="col-12">
            <h4 class="text-center">Welcome to our capstone project</h4>
            <h4 class="text-center" style="font-weight:600 ;">WEB-BASED WATER BILLING MANAGEMENT SYSTEM WITH DUE DATE FOR PAYMENT NOTIFICATION VIA SMS IN SITIO PEAS, DUALE, LIMAY, BATAAN</h4>
            <p class="text-center"><span style="color:red">Note! </span>Your overall input and output data is purely used for educational purpose. We appreciate your participation. Once the system is ready, you will be able to test all of its features.</p>
            <p class="p-2 text-center"><span style="color: blue;">More: </span>The study will be carried out in Peas, Duale, Limay, Bataan; this location was chosen because the water management are still using manual recording of information and payment transaction. Due to a lack of a system that help them manage their customer information and the absence of water information provided to consumers, the water management currently experiencing difficulties in managing all the information, payment transaction and updating their consumers. This study was put to the test in Peas, Duale, Limay, Bataan to make sure that the water management can provide better service and provide information to their consumers about the availability of water and encourage them to pay their bills on time.</p>
        </div>
    </div>
   </div>
</body>
</html>