<!DOCTYPE html>
<html lang="en" dir="lrt">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
  <?php include('include/head.php') ?>
</head>

<body>
  <?php include('include/header.php') ?>
      <?php include('include/navmenu.php');?>
  <main>
    <!-- Breadcrumb Area S t a r t -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" class="single">Gallery</a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Gallery</h1>
        </div>
      </div>
    </section>
    <!-- End-of Breadcrumb Area -->

    <!-- volunteer details area S t a r t-->
    <section class="team-section top-bottom-padding">
      <div class="container">
        <div class="row gy-24">
        <?php
          $sql = "select * from gallery ";
          $res = mysqli_query($con, $sql);
          while ($row = mysqli_fetch_assoc($res)) { ?>
         <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper">
              <div class="single-team h-calc">
                <div class="team-img">
                  <a href="#">
                    <img src="uploads/gallery/<?php echo htmlspecialchars($row['image']); ?>" height="100" class="img-fluid w-100" alt="img">
                  </a>
                </div>
                <div class="team-info">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="team-info-title mb-8">
                      <div class="d-flex gap-40 align-items-center">
                        <div class="content">
                          <!--<h4 class="title text-capitalize"><?php // echo $row['image_alt_tag']; ?></h4>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <?php } ?>
        </div>
        <!-- pagination -->
        <!-- <nav class="pagination-nav">
          <ul class="pagination">
            <li class="page-item" aria-current="page"><span class="page-link active">1</span></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
            <li class="page-item">
              <a class="page-link next" href="javascript:void(0)" rel="next" aria-label="Next »"><i class="ri-arrow-right-line"></i></a>
            </li>
          </ul>
        </nav> -->
        <!-- End pagination -->
      </div>
    </section>
    <!-- End-of volunteer details-->
  </main>
  <!-- Footer S t a r t -->
  <?php include('include/footer.php'); ?>
  <?php include('include/foot.php'); ?>
</body>


</html>