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
    <meta property="og:description"
        content="Delhi MRI Scan offers state-of-the-art diagnostic imaging services including 3 Tesla MRI and 32 Slice CT Scan, along with a range of other radiological services.">
    <meta name="twitter:title" content="Delhi MRI Scan - Advanced Diagnostic Imaging">
    <meta name="twitter:description"
        content="Delhi MRI Scan provides high-quality imaging services with advanced technology and a team of experienced radiologists.">
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
                            <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)"
                                    class="single">services</a></li>
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
                <div class="row gy-24 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg1.png" class="img-fluid uniform-size"
                                    alt="DG Shipping Approved Doctor">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">DG Shipping Approved Doctor in South
                                    Delhi</h4>
                                <p class="text-black fs-6 mt-2">Dr. Manoj Rastogi is a DG Shipping approved doctor in
                                    Hauz
                                    Khas.
                                    Dr. Manoj
                                    Rastogi
                                    has been authorized by the Directorate General (DG) of Shipping, Government of
                                    India, to conduct Seafarers Medical Examinations (PEME). Our clinic in M-2, Hauz
                                    Khas, is equipped with state-of-the-art testing equipment and facilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center flex-lg-row-reverse">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg2.png" class="img-fluid uniform-size"
                                    alt="Pre–Employment Examination (PEME)/ILO Medicals">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Pre–Employment Examination (PEME)/ILO Medicals</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, we conduct comprehensive PEME/ILO
                                    Medicals
                                    in accordance with the
                                    International Labour Organization (ILO) and Maritime Labour Convention (MLC) 2006
                                    guidelines. Our state-of-the-art facilities and experienced medical professionals
                                    provide accurate and reliable medical assessments, ensuring compliance with industry
                                    standards and regulations.<br>These examinations ensure that employees meet the
                                    required health standards and are capable of performing their duties without risk to
                                    their own or others' safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg7.png" class="img-fluid uniform-size"
                                    alt="Cruise Line Medical">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Cruise Line Medical</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, we offer comprehensive Cruise Line
                                    Medical
                                    examinations adhering
                                    to international maritime standards. Our clinic, equipped with modern medical
                                    facilities, provides thorough health checks to certify the fitness of cruise line
                                    staff. With the expertise of Dr. Manoj Rastogi, we ensure that all medical
                                    evaluations are conducted meticulously, guaranteeing the safety and well-being of
                                    crew members while at sea.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center flex-lg-row-reverse">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg8.png" class="img-fluid uniform-size"
                                    alt="Off Shore Medical">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Off Shore Medical</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, we provide comprehensive Offshore
                                    Medical
                                    examinations in
                                    accordance with international standards. Under the guidance of Dr. Manoj Rastogi,
                                    our clinic offers detailed health checks and certifications to ensure the fitness
                                    and safety of offshore personnel. Our state-of-the-art facilities and experienced
                                    medical team guarantee accurate and reliable assessments, supporting the well-being
                                    of workers in offshore industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg6.png" class="img-fluid uniform-size"
                                    alt="Medical for MMD Examination/COC/CDC/GOC">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Medical for MMD Examination/COC/CDC/GOC</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, we offer comprehensive medical
                                    assessments
                                    for MMD certifications
                                    under the expertise of Dr. Manoj Rastogi. Our clinic, equipped with advanced medical
                                    facilities, adheres to the stringent guidelines set by the Directorate General of
                                    Shipping and international maritime organizations. We provide thorough health
                                    evaluations to ensure seafarers are fit for duty, guaranteeing the safety and
                                    efficiency of maritime operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center flex-lg-row-reverse">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg5.png" class="img-fluid uniform-size"
                                    alt="Sign off Medical">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Sign off Medical</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, under the expertise of Dr. Manoj
                                    Rastogi,
                                    we offer thorough Sign
                                    off Medical examinations. Our state-of-the-art clinic in Hauz Khas, New Delhi, is
                                    equipped with the latest medical technology to perform detailed health checks. We
                                    adhere to the highest medical standards set by the Directorate General of Shipping
                                    and international maritime organizations to ensure the well-being of seafarers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg4.png" class="img-fluid uniform-size"
                                    alt="Pre Sea Medicals for College Admissions">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Pre Sea Medicals for College Admissions</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, under the expertise of Dr. Manoj
                                    Rastogi,
                                    we offer detailed Pre
                                    Sea Medical examinations. Our clinic in Hauz Khas, New Delhi, is equipped with
                                    advanced medical facilities to conduct a full range of tests. We adhere to the
                                    stringent standards set by the Directorate General of Shipping and other maritime
                                    authorities to guarantee that aspiring seafarers are medically fit for their
                                    training and future maritime careers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row gy-24 align-items-center flex-lg-row-reverse">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-img">
                            <a href="javascript:void(0)">
                                <img src="assets/images/gallery/dg3.png" class="img-fluid uniform-size"
                                    alt="Periodic Medical Examination">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="blog-info">
                            <div class="blog-info-title">
                                <h4 class="title fs-2 text-center">Periodic Medical Examination</h4>
                                <p class="text-black fs-6 mt-2">At Delhi MRI Scan, led by Dr. Manoj Rastogi, we provide
                                    comprehensive Periodic
                                    Medical Examinations tailored to meet the needs of various industries. Our
                                    state-of-the-art facilities in Hauz Khas, New Delhi, allow us to perform thorough
                                    health assessments in line with industry regulations and safety standards. Regular
                                    medical evaluations help in early detection of potential health issues, ensuring
                                    that personnel remain fit and healthy throughout their careers.</p>
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