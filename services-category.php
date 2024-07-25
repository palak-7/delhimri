<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <?php 
    include 'include/head.php'; 
    $currentPage = "services";
    // $category = isset($_GET['category']) ? $_GET['category'] : null;
  ?>
</head>
<body>
  <?php include 'include/header.php'; ?>
  <main>
      
    <!-- Breadcrumb Area Start -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" class="single">All Departments</a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">All Departments</h1>
        </div>
      </div>
    </section>
    
        <section class="helpful-area my-5" id="specialty">
      <div class="container">
        <div class="row gy-24">
        <!-- HCP PLUS -->
        <div class="col-xl-3 col-md-6 col-lg-6">
             <a href="services.php?category=Radiology">
            <div class="helpful-card h-calc wow fadeInRight" data-wow-delay="0.2s">
                <div class="helpful-card-icon">
                    <i class="ri-heart-line"></i>
                </div>
                <div class="helpful-card-caption">
                    <h4 class="caption-title">RADIOLOGY</h4>
                    <p class="caption-para">Comprehensive Health Checkup</p>
                </div>
            </div>
            </a>
        </div>
        <!-- CBC -->
        <div class="col-xl-3 col-md-6 col-lg-6">
             <a href="pathology.php">
            <div class="helpful-card h-calc wow fadeInRight" data-wow-delay="0.2s">
                <div class="helpful-card-icon">
                    <i class="ri-test-tube-line"></i>
                </div>
                <div class="helpful-card-caption">
                    <h4 class="caption-title">PATHOLOGY</h4>
                    <p class="caption-para">Complete Blood Count</p>
                </div>
            </div>
            </a>
        </div>
        
        <!-- LFT -->
        <div class="col-xl-3 col-md-6 col-lg-6">
             <a href="services.php?category=Neurology">
            <div class="helpful-card h-calc wow fadeInRight" data-wow-delay="0.2s">
                <div class="helpful-card-icon">
                    <i class="ri-flask-line"></i>
                </div>
                <div class="helpful-card-caption">
                    <h4 class="caption-title">NEUROLOGY</h4>
                    <p class="caption-para">Liver Function Test</p>
                </div>
            </div>
            </a>
        </div>
        
        <!-- KFT -->
        <div class="col-xl-3 col-md-6 col-lg-6">
             <a href="services.php?category=Cardiology">
            <div class="helpful-card h-calc wow fadeInRight" data-wow-delay="0.2s">
                <div class="helpful-card-icon">
                    <i class="ri-flask-line"></i>
                </div>
                <div class="helpful-card-caption">
                    <h4 class="caption-title">CARDIOLOGY</h4>
                    <p class="caption-para">Kidney Function Test</p>
                </div>
            </div>
            </a>
        </div>
        </div>
      </div>
    </section>
  </main>
  <!-- Footer Start -->
  <?php include 'include/footer.php'; ?>
  <!-- Add an overlay element -->
  <div class="overlay"></div>
  <!-- jquery-->
  <?php include 'include/foot.php'; ?>
</body>
</html>
