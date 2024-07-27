<!DOCTYPE html>
<html lang="en" dir="lrt">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
  <?php
  $currentpage = "services";  // Corrected spelling
  include('include/connect.php');

  if (isset($_GET['url'])) {
    $url = $_GET['url'];
    $sql = "SELECT * FROM `services` WHERE `url`='$url'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
  } else {
    // Handle the case when 'url' is not set
    $row = [
      'meta_desc' => '',
      'meta_keyword' => '',
      'meta_title' => '',
      'title' => 'Default Title'
    ];
  }
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
  <!-- RTL CSS::When Need RTL Uncomment File -->
  <!-- <link rel="stylesheet" type="text/css" href="assets/css/rtl-style.css"> -->
</head>

<body>
  <?php include('include/header.php'); ?>
  <?php include('include/navmenu.php'); ?>
  <main>
    <!-- Breadcrumb Area S t a r t -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" class="single">services</a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">DG Shipping Approved Doctor</h1>
        </div>
      </div>
    </section>
    <!-- End-of Breadcrumb Area -->

    <!-- Blog-details S t a r t -->
    <section class="blog-details top-bottom-padding2">
      <div class="container">
        <div class="row gy-24">
          <div class="col-xxl-9 col-xl-8 col-lg-8">
            <div class="single-blog">
              <div class="blog-img">
                <a href="javascript:void(0)">
                  <img src="assets/images/gallery/ship.jpg" class="img-fluid w-100">
                </a>
              </div>
              <div class="blog-info">
                <div class="blog-info-title">
                  <div class="flex gap-16 mb-20 align-items-center">
                  </div>
                  <h4 class="title">About Us: DG Shipping Approved Doctor</h4>
                  <p class="subtitle">Welcome to Delhi MRI Scan, a premier diagnostic center approved by DG Shipping. To meet the needs of seafarers and mariners in Northern India, specifically in Delhi, we have established our state-of-the-art DG Shipping approved medical clinic under the expertise of Dr. Manoj Rastogi. Our clinic, located in Hauz Khas, New Delhi, is designed to adhere to the highest medical standards set by the Maritime Administration, IMO, and DG Shipping.</p>
                  <p class="subtitle">Delhi MRI Scan is equipped with modern facilities to conduct a comprehensive range of tests and provide detailed reports in accordance with ILO and MLC 2006 guidelines. We guarantee that all medical tests are 100% genuine and DG Shipping approved. Our services are offered at highly competitive rates, ensuring affordability without compromising on the quality and integrity of the medical examinations.</p>
                  <p class="subtitle">We cater to medical needs in Shipping, Merchant Navy, Oil and Gas, Offshore, and maritime sectors. At Delhi MRI Scan, we pride ourselves on being the best DG Shipping approved medical center in North India. Trust us for reliable, confidential, and top-notch medical services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-4">
            <div class="right-element">
              <!-- category -->
              <div class="category-section">
                <p class="pera">Our Services</p>
                <div class="dotted">
                  <div class="active-dot"></div>
                  <div class="inactive-dot"></div>
                </div>
                <div class="category-box">
                  <ul class="listing">
                    <?php
                    $sql = "SELECT * FROM services";
                    $res = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_assoc($res)) { ?>
                      <li class="single-list">
                        <a class="single" href="services-details.php?url=<?php echo $row['url']; ?>"><?php echo $row['title']; ?></a>
                      </li>
                    <?php } ?>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- End-of Blog-details -->
  </main>
  <!-- Footer S t a r t -->
  <?php include('include/footer.php'); ?>
  <!-- Add an overlay element -->
  <div class="overlay"></div>
  <!-- jquery-->
  <?php include('include/foot.php'); ?>
</body>
</html>
