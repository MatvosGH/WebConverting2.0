<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Multiple File Uploader</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">


      <link rel="stylesheet" href="./style.css">


</head>

<body>

  <form method="post" class="file-uploader" action="" enctype="multipart/form-data">
  <div class="file-uploader__message-area">
    <p>Select a file to upload</p>
  </div>
  <div class="file-chooser">
    <input class="file-chooser__input" type="file">
  </div>
  <input class="file-uploader__submit-button" type="submit" value="Upload">
</form>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>



    <script  src="./script.js"></script>




</body>

</html>