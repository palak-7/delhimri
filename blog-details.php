<!DOCTYPE html>
<html lang="en" dir="lrt">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
  <?php
  $correntpage = "blog";
  include('include/connect.php');
  $blog_url = $_GET['blog_url'];
  $sql = "SELECT * FROM `blogs` WHERE `blog_url`='$blog_url'";
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
<!-- RTL CSS::When Need RTL Uncomment File -->
<!-- <link rel="stylesheet" type="text/css" href="assets/css/rtl-style.css"> -->

</head>

<body>
 
    <?php include('include/header.php'); ?>
  <main>
    <!-- Breadcrumb Area S t a r t -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" class="single">Blog </a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s"><?php echo $row['title']; ?></h1>
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
                  <img src="uploads/blogs/<?php echo $row['image']; ?>" alt="<?php echo $row['image_alt_tag']; ?>" class="img-fluid w-100">
                </a>
              </div>
              <div class="blog-info">
                <div class="blog-info-title">
                  <div class="flex gap-16 mb-20 align-items-center">
                    <div class="donate flex gap-10 align-items-center">
                      <i class="ri-calendar-line"></i>
                      <p class="info"><?php echo date('M d, Y', strtotime($row['createdAt'])); ?></p>
                    </div>
                  </div>
                  <h4 class="title"><?php echo $row['title']; ?></h4>
                  <p class="subtitle"><?php echo $row['description']; ?></p>
                  <div class="divider"></div>
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
                    $sql = "select * from services ";
                    $res = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_assoc($res)) { ?>
                      <li class="single-list">
                        <a class="single" href="services-details.php?url=<?php echo $row['url']; ?>"><?php echo $row['title']; ?></a>
                      </li>
                    <?php } ?>
                  </ul>
                </div>
              </div>

              <!-- Related post -->
              <div class="related-post-section">
                <p class="pera text-capitalize">Related post</p>
                <div class="dotted">
                  <div class="active-dot"></div>
                  <div class="inactive-dot"></div>
                </div>
                <div class="related-box">
                <?php
                  $sql = "select * from blogs ";
                  $res = mysqli_query($con, $sql);
                  while ($row = mysqli_fetch_assoc($res)) { ?>
                  <div class="single-post">
                    <div class="post-img">
                      <a href="blog-details.php"><img src="uploads/blogs/<?php echo $row['image']; ?>" alt="<?php echo $row['image_alt_tag']; ?>""></a>
                    </div>
                    <div class="post-info">
                      <div class="date-time">
                        <i class="ri-time-line"></i>
                        <p class="pera"><?php echo date('M d, Y', strtotime($row['createdAt'])); ?></p>
                      </div>
                      <h4 class="title"><a href="blog-details.php?blog_url=<?php echo $row['blog_url']; ?>"><?php echo $row['title']; ?></a></h4>
                    </div>
                  </div>
                  <div class="divider"></div>
                  <?php } ?>
                </div>
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