<!DOCTYPE html>
<html lang="en" dir="lrt">

<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
  <?php include('include/head.php');
  $correntpage = "blog";
  ?>
</head>

<body>
  <?php include('include/header.php'); ?>
      <?php include('include/navmenu.php');?>

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
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Latest blog</h1>
        </div>
      </div>
    </section>
    <!-- End-of Breadcrumb Area -->

    <!-- Blog S t a r t -->
    <section class="blog-section-three top-bottom-padding">
      <div class="container">
        <div class="row gy-24">
          <?php
          $sql = "select * from blogs ";
          $res = mysqli_query($con, $sql);
          while ($row = mysqli_fetch_assoc($res)) { ?>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div class="single-blog h-calc">
                <div class="blog-img">
                  <a href="blog-details.php?blog_url=<?php echo $row['blog_url']; ?>">
                    <img src="uploads/blogs/<?php echo $row['image']; ?>" alt="<?php echo $row['image_alt_tag']; ?>" class="img-fluid w-100">
                  </a>
                </div>
                <div class="blog-info">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="blog-info-title">
                      <div class="flex mb-15 gap-16 align-items-center">
                        <div class="user flex gap-10 align-items-center">
                          <i class="ri-calendar-line"></i>
                          <p class="info"><?php echo date('M d, Y', strtotime($row['createdAt'])); ?></p>
                        </div>
                      </div>
                      <h4 class="title text-capitalize"><a href="blog-details.php?blog_url=<?php echo $row['blog_url']; ?>"><?php echo $row['title']; ?></a></h4>
                      <p class="subtitle"><?php echo substr($row['short_description'], 0, 100), "..."; ?></p>
                    </div>
                  </div>
                </div>
                <div class="button-section"><a href="blog-details.php?blog_url=<?php echo $row['blog_url']; ?>" class="read-btn">Read More</a></div>
              </div>
            </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <!-- End-of Blog -->
  </main>
  <!-- Footer S t a r t -->
  <?php include('include/footer.php'); ?>
  <!-- Add an overlay element -->
  <div class="overlay"></div>
  <!-- jquery-->
  <?php include('include/foot.php'); ?>
</body>


</html>