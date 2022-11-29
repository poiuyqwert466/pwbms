<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./offline/bootstrap.min.css">
    <link rel="stylesheet" href="./offline/offline.css">
    <title>Offline Input</title>
</head>
<body>
  <div id="home" class="container">
    <div class="row">
        <div class="col-8">

        </div>
        <div class="col-2">
            <button  id="offline_exit" type="button" class="btn">Exit</button>
        </div>
        <div class="col-2">
            <button  id="offline_update" type="button" class="btn">Update</button>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phase</th>
                    <th>Payment Method</th>
                    <th>Confimation</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
        </div>
    </div>
  </div>
</body>
<script src="./offline/jquery.js"></script>
<script src="./offline/offline.js"></script>
</html>