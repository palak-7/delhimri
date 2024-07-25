<!DOCTYPE html>
<html lang="en" dir="lrt">
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
  <?php
  $correntpage = "team";
  include('include/connect.php');
  $doctor_url = $_GET['doctor_url'];
  $sql = "SELECT * FROM `doctors` WHERE `doctor_url`='$doctor_url'";
  $result = mysqli_query($con, $sql);
  $row = mysqli_fetch_assoc($result);
  ?>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $row['meta_desc']; ?>">
  <meta name="keywords" content="<?php echo $row['meta_keyword']; ?>">
  <meta name="title" content="<?php echo $row['meta_title']; ?>">
  <meta name="author" content="arjun54244">
<meta property="og:type" content="website">
<meta property="og:title" content="Delhi MRI Scan">
<meta property="og:site_name" content="Delhi MRI Scan">
<meta property="og:url" content="www.delhimriscan.com">
<meta property="og:image" content="www.delhimriscan.com/assets/images/gallery/center.jpg">
<meta property="og:description" content="Delhi MRI Scan offers state-of-the-art diagnostic imaging services including 3 Tesla MRI and 32 Slice CT Scan, along with a range of other radiological services.">
<meta name="twitter:title" content="Delhi MRI Scan - Advanced Diagnostic Imaging">
<meta name="twitter:description" content="Delhi MRI Scan provides high-quality imaging services with advanced technology and a team of experienced radiologists.">
<meta name="twitter:image" content="www.delhimriscan.com/assets/images/gallery/center.jpg">
<meta name="twitter:card" content="summary">
  <title><?php echo $row['title']; ?></title>
  <link rel="icon" type="image/x-icon" sizes="20x20" href="assets/images/icon/favicon1.png">

  <!-- Bootstrap -->
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-5.3.0.min.css">
  <!-- fonts & icon -->
  <link rel="stylesheet" type="text/css" href="assets/css/remixicon.css">
  <!-- Plugin -->
  <link rel="stylesheet" type="text/css" href="assets/css/plugin.css">
  <!-- Main CSS -->
  <link rel="stylesheet" type="text/css" href="assets/css/main-style.css">
</head>

<body>
  <?php include('include/header.php') ?>
  <main>
    <!-- Breadcrumb Area S t a r t -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list" aria-current="page"><a href="team.php" class="single">Doctors</a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s"><?php echo $row['title'];?></h1>
        </div>
      </div>
    </section>
    <!-- End-of Breadcrumb Area -->

    <!-- volunteer details area S t a r t-->
    <section class="volunteer-details top-bottom-padding2">
      <div class="container">
        <div class="row gy-24">
          <div class="col-xl-4 col-md-5 col-lg-5">
            <div class="volunteer-img">
              <img src="uploads/doctors/<?php echo $row['image']; ?>" alt="image">
            </div>
          </div>
          <div class="col-xl-8 col-md-7 col-lg-7">
            <div class="volunteer-info-card">
              <div class="volunteer-info">
                <div class="naming-section">
                  <!--<h3 class="title"><?php // echo $row['title'];?></h3>-->
                  <!--<span class="subtitle mr-20"><?php// echo $row['department'];?></span>-->
                </div>
              </div>
              <div class="divider"></div>
              <p class="pera"><?php echo $row['description'];?></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End-of volunteer details-->
  </main>
  <?php include('include/footer.php') ?>
  <?php include('include/foot.php') ?>

</body>

<!-- Mirrored from charitfix.vercel.app/theme/volunteer-details.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 09 May 2024 09:00:46 GMT -->

</html>