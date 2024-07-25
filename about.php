<!DOCTYPE html>
<html lang="en" dir="ltr"> <!-- Corrected dir attribute -->

<head>
  <?php include('include/head.php');
  $correntpage = "about";
  ?>
</head>

<body>

  <?php include('include/header.php'); ?>
      <?php include('include/navmenu.php');?>

  <main>
    <!-- Breadcrumb Area Start -->
    <section class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="breadcrumb-text">
          <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
            <ul class="breadcrumb listing">
              <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
              <li class="breadcrumb-item single-list active" aria-current="page">About Us</li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">About Us</h1>
        </div>
      </div>
    </section>
    <!-- End of Breadcrumb Area -->

    <!-- Helpful Area Start -->
    <section class="helpful-area-three section-padding">
      <div class="container">
        <div class="row g-24">
          <!-- High Resolution Imaging Card -->
          <div class="col-xl-3 col-md-6 col-lg-6 d-flex">
            <div class="helpful-card wow fadeInUp" data-wow-delay="0.0s">
              <div class="helpful-card-icon">
                <i class="ri-focus-3-line"></i>
              </div>
              <div class="helpful-card-caption">
                <h4 class="caption-title">High Resolution Imaging</h4>
                <p class="caption-para">Quantum Gradients with integrated Panoramic Array system for homogenous signals over large Field of View.</p>
                <a href="services.php" class="imp-link">Read More <i class="ri-arrow-right-up-line"></i></a>
              </div>
              <div class="number-watermark">
                <h4 class="number">01</h4>
              </div>
            </div>
          </div>
          <!-- Advanced Stroke Detection Card -->
          <div class="col-xl-3 col-md-6 col-lg-6 d-flex">
            <div class="helpful-card wow fadeInUp" data-wow-delay="0.10s">
              <div class="helpful-card-icon">
                <i class="ri-heart-pulse-line"></i>
              </div>
              <div class="helpful-card-caption">
                <h4 class="caption-title">Advanced Stroke Detection</h4>
                <p class="caption-para">Diffusion and perfusion imaging for early stroke detection.</p>
                <a href="services.php" class="imp-link">Read More <i class="ri-arrow-right-up-line"></i></a>
              </div>
              <div class="number-watermark">
                <h4 class="number">02</h4>
              </div>
            </div>
          </div>
          <!-- Comprehensive Abdominal Imaging Card -->
          <div class="col-xl-3 col-md-6 col-lg-6 d-flex">
            <div class="helpful-card wow fadeInUp" data-wow-delay="0.20s">
              <div class="helpful-card-icon">
                <i class="ri-body-scan-line"></i>
              </div>
              <div class="helpful-card-caption">
                <h4 class="caption-title">Comprehensive Abdominal Imaging</h4>
                <p class="caption-para">Advanced abdominal imaging with HASTE sequences for MRCP & MR Urography.</p>
                <a href="services.php" class="imp-link">Read More <i class="ri-arrow-right-up-line"></i></a>
              </div>
              <div class="number-watermark">
                <h4 class="number">03</h4>
              </div>
            </div>
          </div>
          <!-- Complete Radiological Services Card -->
          <div class="col-xl-3 col-md-6 col-lg-6 d-flex">
            <div class="helpful-card wow fadeInUp" data-wow-delay="0.30s">
              <div class="helpful-card-icon">
                <i class="ri-hospital-line"></i>
              </div>
              <div class="helpful-card-caption">
                <h4 class="caption-title">Complete Radiological Services</h4>
                <p class="caption-para">Sonography, Color Doppler, Digital X-Ray, and Dexa Scan available for a full range of radiological investigations.</p>
                <a href="services.php" class="imp-link">Read More <i class="ri-arrow-right-up-line"></i></a>
              </div>
              <div class="number-watermark">
                <h4 class="number">04</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Helpful Area -->

    <!-- About Us Area Start -->
    <section class="about-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6 my-auto">
            <!-- Section Title -->
            <div class="section-tittle mb-35">
              <span class="sub-tittle text-capitalize font-600">About us</span>
              <h2 class="title font-700 pb-15">Delhi MRI Scan - Sahyog Imaging Company</h2>
              <p class="pera-subtitle mb-15">
                Delhi MRI Scan, located at M-2, Hauz Khas, New Delhi, is a unit of Sahyog Imaging Company. Our center is equipped with state-of-the-art imaging technology.
              </p>
              <p class="pera-subtitle">
                We offer a comprehensive range of radiological services including high-resolution imaging, advanced stroke detection, and complete abdominal imaging.
              </p>
            </div>
            <div class="about-info">
              <div class="row">
                <div class="col-lg-10 mb-20">
                  <div class="d-flex gap-20">
                    <div class="info-icon">
                      <i class="ri-focus-3-line"></i>
                    </div>
                    <div class="info-content">
                      <h4 class="title">Advanced Imaging Technology</h4>
                      <p class="pera">Featuring Siemens Magnetom Spectra 3 Tesla MRI and CT Scan 32 Slice Somatom Go Now.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-10 mb-20">
                  <div class="d-flex gap-20">
                    <div class="info-icon">
                      <i class="ri-team-line"></i>
                    </div>
                    <div class="info-content">
                      <h4 class="title">Expert Team</h4>
                      <p class="pera">Led by Dr. Vinay Guglany and Dr. Raj Kumar Meena, experienced in advanced radiology.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-10 mt-10">
                  <!--<a href="about.php" class="btn btn-primary-fill">Read More</a>-->
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="position-relative h-100">
              <div>
                <img class="w-100 d-none d-lg-block" src="assets/images/gallery/aboutaf.png" alt="image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of About Us Area -->

    <!-- Team Area Start -->
    <section class="team-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7">
            <!-- Section Title -->
            <div class="section-tittle text-center mb-50">
              <span class="sub-tittle text-capitalize font-600">Expert Doctors</span>
              <h2 class="title font-700">Meet Our Doctors</h2>
            </div>
          </div>
        </div>
        <div class="row gy-24">
          <?php
          $sql = "select * from doctors limit 3";
          $res = mysqli_query($con, $sql);
          while ($row = mysqli_fetch_assoc($res)) { ?>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper">
              <div class="single-team h-calc">
                <div class="team-img">
                  <a href="volunteer-details.php">
                    <img src="uploads/doctors/<?php echo $row['image']; ?>" class="img-fluid w-100" alt="img">
                  </a>
                </div>
                <div class="team-info">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="team-info-title mb-8">
                      <div class="d-flex gap-40 align-items-center">
                        <div class="content">
                          <h4 class="title text-capitalize"><a href="teams-details.php?doctor_url=<?php echo $row['doctor_url']; ?>"><?php echo $row['title']; ?></a></h4>
                          <p class="pera"><?php echo $row['department']; ?></p>
                        </div>
                        <div class="socia">
                          <a class="btn btn-primary float-end hover-icon" href="teams-details.php?doctor_url=<?php echo $row['doctor_url']; ?>"> <span>know</span> <i class="ri-send-plane-2-fill"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <!-- End of Team Area -->

    <!-- Testimonial Start -->
    <section class="testimonial-section-three section-padding">
      <div class="container">
        <div class="row gy-24 align-items-center">
          <div class="col-xl-4">
            <!-- Section Title -->
            <div class="section-tittle">
              <span class="sub-tittle text-capitalize font-600">Testimonials</span>
              <h2 class="title font-700">What Our Patients Say</h2>
              <p class="pera">Best and affordable place to get you scans done and run the required investigation.<br> Less crowded but it’s better to take an appointment prior to visit.</p>
              <p class="pera py-2"><strong>Located on the main road.</strong></p>
              <p class="pera">Cleanliness and hygiene is well maintained. Strict Covid rules and regulation are followed.
MRI, 3T, Ultrasound And various other investigation.
The reports are handed as soon as possible.</p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-9">
            <div class="position-relative">
              <div class="testimonial-slider-three-active flex">
                <div class="quote-with-img">
                  <div class="testimonial-images">
                    <img class="w-100" src="assets/images/gallery/abouttest04.jpeg" alt="image">
                  </div>
                </div>
                <div class="testimonial-images">
                  <img class="w-100" src="assets/images/gallery/abouttest05.jpeg" alt="image">
                </div>
                <div class="testimonial-images">
                  <img class="w-100" src="assets/images/gallery/abouttest07.jpeg" alt="image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Testimonial -->
    
     <!-- Why choose us S t a r t -->
    <section class="question-area bottom-padding" id="anyQuestion">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 my-auto">
            <!-- Section Tittle -->
            <div class="section-tittle mb-50">
              <h2 class="title font-700">Why Choose Delhi MRI Scan</h2>
              <p class="pera">why patients should choose Delhi MRI Scan</p>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Qualified Medical Staff
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        The doctors at Delhi MRI Scan are highly qualified and experienced in their specialties. They possess extensive knowledge about various tests and procedures, ensuring high-quality patient care.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Use of Latest Equipment
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Our diagnostic center uses state-of-the-art equipment and advanced technology to carry out various scans and tests. This ensures precision and reliability in diagnostics.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Hygiene & Safety Measures
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Proper hygiene is maintained at Delhi MRI Scan. Our staff ensures all safety rules are followed meticulously while performing tests on patients.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Range of Tests and Quality of Services
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Delhi MRI Scan offers a wide range of tests, including MRI and CT scans. Our commitment to quality ensures that all services provided meet the highest standards.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Ease of Scheduling an Appointment
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Appointments at Delhi MRI Scan can be scheduled very quickly, either over the phone or in person, making it convenient for patients.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Accuracy in Test Results
                      </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        The test reports at Delhi MRI Scan are highly accurate, providing reliable results for better diagnosis and treatment.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Time for Test Results
                      </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        At Delhi MRI Scan, accurate results are provided within a short period. Test reports can often be collected on the same day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEight">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        Delhi MRI scan provides
                      </button>
                    </h2>
                    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Delhi MRI Scan provides high-quality services and is one of the best diagnostic centers in South Delhi. Our competitive pricing ensures better value for all tests compared to other diagnostic centers.
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
          <!--<div class="col-lg-5">-->
          <!--  <img class="w-100 d-none d-lg-block tilt-effect rounded" src="assets/images/gallery/faq-home.png" alt="image">-->
          <!--</div>-->
        </div>
      </div>
    </section>
    <!-- Why choose us -->
  </main>
  <!-- Footer Start -->
  <?php include('include/footer.php'); ?>
  <!-- Add an overlay element -->
  <div class="overlay"></div>
  <!-- jQuery -->
  <?php include('include/foot.php'); ?>
</body>

</html>
