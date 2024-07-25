<!DOCTYPE html>
<html lang="en" dir="lrt">
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
  <?php include('include/head.php'); 
  $correntpage = "services";
  
  ?>
</head>

<body>
  <?php include('include/header.php');
      include('include/navmenu.php');
  $category = isset($_GET['category']) ? mysqli_real_escape_string($con, $_GET['category']) : null;
  ?>
  <main>
      <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">-->
        <!--<a class="navbar-brand" href="#">Medical Services</a>-->
        <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
        <!--    <span class="navbar-toggler-icon"></span>--> 
        <!--</button>-->
      <!--  <div class="collapse navbar-collaps d-block mx-auto" id="navbarNav">-->
      <!--      <ul class="navbar-nav gap-3">-->
      <!--          <li class="nav-item ">-->
      <!--              <a class="nav-link fw-bold text-dar hover-text-primary" href="#">-->
      <!--                  Pathology-->
      <!--              </a>-->
      <!--          </li>-->
      <!--          <li class="nav-item dropdown">-->
      <!--              <a class="nav-link dropdown-toggle fw-bold" href="#" id="radiologyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">-->
      <!--                  Radiology-->
      <!--              </a>-->
      <!--              <div class="dropdown-menu" aria-labelledby="radiologyDropdown">-->
      <!--                  <a class="dropdown-item" href="#">3T Digital MRI</a>-->
      <!--                  <a class="dropdown-item" href="#">Open Standing MRI</a>-->
      <!--                  <a class="dropdown-item" href="#">128/64/16 Slice CT</a>-->
      <!--                  <a class="dropdown-item" href="#">X-Ray and Fluoroscopy</a>-->
      <!--              </div>-->
      <!--          </li>-->
      <!--          <li class="nav-item dropdown">-->
      <!--              <a class="nav-link dropdown-toggle fw-bold" href="#" id="nuclearMedicineDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
      <!--                  Nuclear Medicine-->
      <!--              </a>-->
      <!--              <div class="dropdown-menu" aria-labelledby="nuclearMedicineDropdown">-->
      <!--                  <a class="dropdown-item" href="#">Cardiac Imaging/PFT</a>-->
      <!--                  <a class="dropdown-item" href="#">Ultrasound and Doppler</a>-->
      <!--                  <a class="dropdown-item" href="#">Dexa Bone Densitometry</a>-->
      <!--              </div>-->
      <!--          </li>-->
      <!--      </ul>-->
      <!--  </div>-->
    <!--</nav>-->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- Breadcrumb Area S t a r t -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" class="single">Services</a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Services <?php echo $category ;?></h1>
        </div>
      </div>
    </section>
    <!-- End-of Breadcrumb Area -->

    <!-- donate S t a r t -->
    <section class="donate-section top-bottom-padding">
      <div class="container">
        <div class="row gy-24">
          <?php
            // $category = isset($_GET['category']) ? $_GET['category'] : null; $sql = "SELECT * FROM services WHERE category = 'Radiology'";
        //   $category = $_GET['category'];
        //  if ($category) {
        //         $sql = "SELECT * FROM services WHERE `category` = '$category';
        //     } else {
        //         $sql = "SELECT * FROM services";
        //     }
        // 
         
         // Check if the category parameter is set in the GET request
            
            
            // Construct the SQL query based on whether a category is provided or not
            if ($category) {
                $sql = "SELECT * FROM services WHERE category = '$category'";
            } else {
                $sql = "SELECT * FROM services";
            }
          $res = mysqli_query($con, $sql);
          while ($row = mysqli_fetch_assoc($res)) { ?>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div class="single-donate h-calc">
                <div class="donate-img position-relative">
                  <a href="services-details.php?url=<?php echo $row['url']; ?>"> <img class="w-100" src="uploads/services/<?php echo $row['image']; ?>" alt="<?php echo $row['image_alt_tag']; ?>"> </a>
                </div>
                <div class="donate-info">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="donate-info-title">
                    <h4><a class="title text-capitalize" href="services-details.php?url=<?php echo $row['url']; ?>"><?php echo $row['title']; ?></a></h4>
                      <p class="subtitle text-black"><?php echo substr($row['short_description'], 0, 100), "..."; ?></p>   
                      <a href="services-details.php?url=<?php echo $row['url']; ?>" class="btn donate-btn w-100">Know More.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <!-- End-of donate -->
  </main>
  <!-- Footer S t a r t -->
  <?php include('include/footer.php'); ?>
  <!-- Add an overlay element -->
  <div class="overlay"></div>
  <!-- jquery-->
  <?php include('include/foot.php'); ?>
</body>

<!-- Mirrored from charitfix.vercel.app/theme/donation.php by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 09 May 2024 09:00:36 GMT -->

</html>