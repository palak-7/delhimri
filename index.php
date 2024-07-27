<!DOCTYPE html>
<html lang="en" dir="lrt">

<head>
    <?php include('include/head.php');
  $correntpage = "index";
  ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<style>
.helpful-area-three1 {
    background-image: url('assets/images/gallery/helpfulAreabg.png');
    background-size: cover;
    background-position: center;
}

.hoverline:hover {
    text-decoration: underline;
}
</style>

<body>
    <?php include('Top.php'); ?>
    <?php include('include/header.php'); ?>
    <?php include('include/navmenu.php');?>
    <main>
        <!-- Hero area S t a r t-->
        <section class="hero-area">
            <div class="single-slider hero-padding">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12 position-relative">
                            <img src="uploads/home/banner.png" class="img-fluid" alt="banner">
                            <div class="d-flex gap-20 flex-wrap position-absolute"
                                style="top: 75%; left: 17%; transform: translate(-50%, -50%);">

                                <a href="services.php" class="btn-primary-fill hero-btn wow fadeInLeft"
                                    data-wow-delay="0.4s">Know more services</a>
                                <a href="contact-us.php" class="btn-tertiary-fill hero-btn wow fadeInRight"
                                    data-wow-delay="0.4s">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End-of Hero-->

        <!-- Helpful Area Start -->
        <section class="helpful-area-three1 helpful-area-three section-padding">
            <div class="container">
                <div class="row g-24">
                    <!-- DG Shipping Approved Medical Clinic Card -->
                    <div class="col-xl-6 col-md-6 col-lg-6 d-flex">
                        <div class="helpful-card wow fadeInUp w-100" data-wow-delay="0.0s">
                            <div class="helpful-card-icon">
                                <i class="ri-anchor-line"></i> <!-- Icon representing shipping/anchor -->
                            </div>
                            <div class="helpful-card-caption">
                                <h4 class="caption-title">DG Shipping Approved Medical Clinic</h4>
                                <p class="caption-para">Providing comprehensive medical examinations for seafarers as
                                    per DG Shipping, IMO, ILO, and MLC guidelines.</p>
                                <a href="dgapprove.php" class="imp-link">Read More <i
                                        class="ri-arrow-right-up-line"></i></a>
                            </div>
                            <div class="number-watermark">
                                <h4 class="number">01</h4>
                            </div>
                        </div>
                    </div>
                    <!-- NABH Accredited Facility Card -->
                    <div class="col-xl-6 col-md-6 col-lg-6 d-flex">
                        <div class="helpful-card wow fadeInUp w-100" data-wow-delay="0.10s">
                            <div class="helpful-card-icon">
                                <i class="ri-shield-check-line"></i> <!-- Icon representing accreditation/check mark -->
                            </div>
                            <div class="helpful-card-caption">
                                <h4 class="caption-title">NABH Accredited Facility</h4>
                                <p class="caption-para">Our clinic meets the highest standards of healthcare quality and
                                    patient safety as set by the National Accreditation Board for Hospitals & Healthcare
                                    Providers (NABH).</p>
                                <a href="" class="imp-link">Read More <i class="ri-arrow-right-up-line"></i></a>
                            </div>
                            <div class="number-watermark">
                                <h4 class="number">02</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- End of Helpful Area -->


        <!-- helpful area S t a r t-->
        <section class="helpful-area p-5" id="specialty">
            <div class="container">
                <div class="row gy-24">
                    <div class="col-xl-3 col-md-6 col-lg-6">
                        <div class="helpful-card h-calc  wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="helpful-card-icon">
                                <i class="ri-hospital-line"></i>
                            </div>
                            <div class="helpful-card-caption">
                                <h4 class="caption-title">Services</h4>
                                <p class="caption-para">MRI, CT, X-ray, Ultrasound</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-6">
                        <div class="helpful-card h-calc  wow fadeInLeft" data-wow-delay="0.0s">
                            <div class="helpful-card-icon">
                                <i class="ri-home-gear-line"></i>
                            </div>
                            <div class="helpful-card-caption">
                                <h4 class="caption-title">Technology</h4>
                                <p class="caption-para">3 Tesla, Multi-slice, Digital, Doppler</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-6">
                        <div class="helpful-card h-calc wow fadeInRight" data-wow-delay="0.0s">
                            <div class="helpful-card-icon">
                                <i class="ri-nurse-line"></i>
                            </div>
                            <div class="helpful-card-caption">
                                <h4 class="caption-title">Specialties</h4>
                                <p class="caption-para">Cardiology, Neurology, Orthopedics, Pediatrics</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-6">
                        <div class="helpful-card h-calc  wow fadeInRight" data-wow-delay="0.2s">
                            <div class="helpful-card-icon">
                                <i class="ri-calendar-2-line"></i>
                            </div>
                            <div class="helpful-card-caption">
                                <h4 class="caption-title">Accessibility</h4>
                                <p class="caption-para">Convenient, Affordable, Reliable, Experienced</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End-of helpful-->

        <div class="container-fluid hero-padding">
            <div class="row position-relative">
                <div class="col-12">
                    <img src="uploads/home/resizeImg.jpg" class="img-fluid d-none d-sm-none" alt="banner">
                </div>

                <div
                    class="row text-center stats-container position-absolute top-50 start-50 translate-middle gap-5 d-flex flex-wrap justify-content-evenly">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 stat mb-4">
                        <i class="fa-solid fa-chart-line fa-2x"></i>
                        <h1>22+</h1>
                        <p>Over 22 years of experience and expertise in our field</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 stat mb-4">
                        <i class="fa-solid fa-user fa-2x"></i>
                        <h1>50+</h1>
                        <p>Teams working together to achieve outstanding results</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 stat mb-4">
                        <i class="fa-solid fa-face-smile fa-2x"></i>
                        <h1>5 Lakh+</h1>
                        <p>Satisfied patients benefit from our dedicated care and service</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- About us Area S t a r t -->
        <section class="about-area mt-100 pt-5" style="margin-top: 50px;" id="aboutcompany">
            <div class="container">
                <div class="row g-24 justify-content-between">
                    <div class="col-xl-6 col-lg-6">
                        <div class="section-tittle mb-50">
                            <span class="sub-tittle text-capitalize font-700">About us</span>
                            <h2 class="title mb-20 font-700">Welcome to Delhi MRI Scan</h2>
                            <p class="pera"> Discover excellence in diagnostic imaging at Delhi MRI Scan, a premier unit
                                of Sahyog Imaging Company. Located in the heart of New Delhi at M-2, Hauz Khas, we are
                                committed to delivering accurate diagnoses and superior patient care through
                                state-of-the-art technology and a team of expert radiologists.</p>
                        </div>
                        <div class="about-info">
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="d-flex gap-20">
                                        <div class="info-icon">
                                            <i class="ri-hand-heart-line"></i>
                                        </div>
                                        <div class="info-content">
                                            <h4 class="title">Delhi MRI Scan</h4>
                                            <p class="pera">State-of-the-art diagnostic center in New Delhi.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="divider"></div>
                                </div>
                                <div class="col-lg-10 mb-20">
                                    <div class="d-flex gap-20">
                                        <div class="info-icon">
                                            <i class="ri-user-line"></i>
                                        </div>

                                        <div class="info-content">
                                            <h4 class="title">Delhi MRI Scan</h4>
                                            <p class="pera">Equipped with advanced Siemens MRI and CT scan technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-10 mt-10">
                                    <a href="about.php" class="btn btn-primary-fill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6">

                        <img class="w-75 rounded" src="assets/images/gallery/aboutus1.png" alt="image">
                    </div>
                </div>
            </div>
            </div>
        </section>
        <!-- End-of About us Area -->

        <!-- urgent Area S t a r t -->
        <section class="urgent-area section-padding2">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7">
                        <!-- Section Tittle -->
                        <div class="section-tittle text-center mb-50">
                            <span class="sub-tittle text-capitalize font-600">In urgent cases</span>
                            <h2 class="title font-700">Immediate Diagnostic Services</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xxl-7 col-xl-8 col-lg-8 p-0 urgent-area-slide xs-p-12">
                        <!-- Single Slider-->
                        <div class="image-container position-relative h-100">
                            <img class="w-100 h-100" src="assets/images/gallery/img1.3.png" alt="img">
                            <div class="image-overlay-text rounded" style="background-color: #000000ad !important; ">

                            </div>
                        </div>
                        <!-- Single Slider-->
                        <div class="image-container position-relative h-100">
                            <img class="w-100 h-100" src="assets/images/gallery/img1.1 (1).png" alt="img">
                            <div class="image-overlay-text rounded" style="background-color: #000000ad !important; ">

                            </div>
                        </div>
                        <!-- Single Slider -->
                        <div class="image-container position-relative h-100">
                            <img class="w-100 h-100" src="assets/images/gallery/img1.2.png" alt="img">
                            <div class="image-overlay-text rounded" style="background-color: #000000ad !important; ">

                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-xl-4 col-lg-4 p-0 xs-p-12">
                        <div class="image-right-card">
                            <div class="tab-section tab-section-one" id="tab-section-one">

                                <div>
                                    <h4 class="title">Emergency Diagnostic Services</h4>
                                </div>
                                <div>
                                    <p class="subtitle">Our facility is always ready to handle urgent diagnostic needs
                                        with advanced technology and skilled professionals.</p>
                                </div>
                                <div class="progress custom-progress mx-2">
                                    <div class="" style="width: 100%">
                                        <!-- <p class="pera">100%</p> -->
                                    </div>
                                </div>
                                <div class="flex justify-content-between mt-8">
                                    <div class="charges">
                                        <h4 class="title">Goals</h4>
                                        <p class="pera">Immediate Diagnosis</p>
                                    </div>
                                    <div class="charges">
                                        <h4 class="title">Success Rate</h4>
                                        <p class="pera">High</p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-section tab-section-two" id="tab-section-two">

                                <div>
                                    <h4 class="title">Contact Us</h4>
                                </div>
                                <div>
                                    <p class="subtitle">Our facility is always ready to handle urgent diagnostic needs
                                        with advanced technology and skilled professionals.</p>
                                </div>
                                <div class="d-flex justify-content-evenly">
                                    <div>
                                        <div>
                                            <p class="text-white fw-bold fs-5">Phone</p>
                                            <a href="tel:+911146183333" class="text-white hoverline">(+91) 114618
                                                3333</a> <br>
                                            <a href="tel:+919667554447" class="text-white hoverline">(+91) 966755
                                                4447</a>
                                        </div>

                                        <div>
                                            <p class="text-white fw-bold fs-5">Email</p>
                                            <a href="mailto:delhimriscan@gmail.com"
                                                class="text-white hoverline">delhimriscan@gmail.com</a> <br>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-white fw-bold fs-5">Location</p>
                                        <a href="https://maps.app.goo.gl/1efNLhWMh3euuEDk6" class="text-white hoverline"
                                            target="_blank">M-2, Hauz Khas, Delhi 110016</a> <br>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-content-center mt-30">
                                <div class="tab-btn">
                                    <a href="javascript:void(0)" class="urgent-tab active"
                                        data-tab-id="tab-section-one">Details</a>
                                    <a href="javascript:void(0)" class="urgent-tab"
                                        data-tab-id="tab-section-two">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End-of urgent area -->

        <!-- Any Question Area S t a r t -->
        <section class="question-area bottom-padding" id="anyQuestion">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 my-auto">
                        <!-- Section Tittle -->
                        <div class="section-tittle mb-50">
                            <h2 class="title font-700">Any Questions</h2>
                            <p class="pera">Feel free to reach out to us if you have any questions about our services,
                                appointments, or procedures. We're here to help!</p>
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">How do I schedule an appointment?</button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">You can schedule an appointment by calling our center
                                        directly at +011 1146183333,+91 9667554447 or by filling out the appointment
                                        form on our website.</div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">What should I bring to my appointment?</button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">Please bring any relevant medical records, insurance
                                        information, and a valid ID. If you have previous imaging scans, it's helpful to
                                        bring those as well.</div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">How long does an MRI or CT scan take?</button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">The duration of an MRI or CT scan can vary depending on
                                        the type of scan and area being examined. Generally, scans take between 30
                                        minutes to an hour.</div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">Is the radiation exposure from a CT scan
                                        harmful?</button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">While CT scans do involve radiation, the amount is
                                        typically considered safe. Our equipment is calibrated to minimize radiation
                                        exposure while still providing high-quality images.</div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">Are there any special preparations required for
                                        specific tests?</button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">Some tests may require fasting or specific preparations.
                                        Our staff will provide you with detailed instructions when you schedule your
                                        appointment to ensure you're adequately prepared for your test.</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-5">
                        <img class="w-100 d-none d-lg-block tilt-effect rounded"
                            src="assets/images/gallery/faq-home.png" alt="image">
                    </div>
                </div>
            </div>
        </section>
        <!-- End-of Question Area -->

        <!-- Our event S t a r t-->
        <section class="our-event bottom-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7">
                        <!-- Section Tittle -->
                        <div class="section-tittle text-center ">
                            <span class="sub-tittle text-capitalize font-600">Services</span>
                            <h2 class="title font-700">Our Services</h2>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-20 flex-wrap  mx-auto mt-0">
                    <!-- Helpful Area Start -->
                    <section class="helpful-area-three mt-50">
                        <div class="container">
                            <div class="row g-24">
                                <!-- High Resolution Imaging Card -->
                                <div class="col-xl-3 col-md-6 col-lg-6 d-flex">
                                    <div class="helpful-card wow fadeInUp" data-wow-delay="0.0s">
                                        <div class="helpful-card-icon">
                                            <i class="ri-body-scan-line"></i>
                                        </div>
                                        <div class="helpful-card-caption">
                                            <h4 class="caption-title">Radiology</h4>
                                            <p class="caption-para">MRI 3 Tesla, CT Scan, Digital X-Ray, Clinical
                                                Pathology Collection Centre, DEXA Bone Densitometry, Ultrasound & Colour
                                                Doppler, Clinical Pathology Collection Centre</p>
                                            <a href="services.php?category=Radiology" class="imp-link">Read More <i
                                                    class="ri-arrow-right-up-line"></i></a>
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
                                            <i class="ri-flask-line"></i>
                                        </div>
                                        <div class="helpful-card-caption">
                                            <h4 class="caption-title">Pathology</h4>
                                            <p class="caption-para">URINE ROUTINE, THYROID PROFILE, LFT, HCP PLUS, PSA,
                                                KFT</p>
                                            <a href="pathology.php" class="imp-link">Read More <i
                                                    class="ri-arrow-right-up-line"></i></a>
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
                                            <i class="ri-brain-line"></i>
                                        </div>
                                        <div class="helpful-card-caption">
                                            <h4 class="caption-title">Neurology</h4>
                                            <p class="caption-para">EEG (Electroencephalogram), <br> EMG
                                                (Electromyography),<br> NCS (Nerve Conduction studies)</p>
                                            <a href="services.php?category=Neurology" class="imp-link">Read More <i
                                                    class="ri-arrow-right-up-line"></i></a>
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
                                            <i class="ri-heart-pulse-line"></i>
                                        </div>
                                        <div class="helpful-card-caption">
                                            <h4 class="caption-title">Cardiology</h4>
                                            <p class="caption-para">Echo Cardiography, ECG (Electrocardiogram)</p>
                                            <a href="services.php?category=Cardiology" class="imp-link">Read More <i
                                                    class="ri-arrow-right-up-line"></i></a>
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
                </div>
            </div>
        </section>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>

        <script>
        $(document).ready(function() {
            $(".ourservce-slider").slick({
                dots: false,
                infinite: true,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            autoplay: true,
                            autoplaySpeed: 1000,
                            arrows: false,
                        },
                    },
                ],
            });
        });
        </script>
        <!-- End-of All Product -->

        <!-- Testimonial S t a r t-->
        <section class="testimonial-section-two" id="testimonials">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-xl-7">
                        <!-- Section Tittle -->
                        <div class="section-tittle mb-50">
                            <span class="sub-tittle text-capitalize font-600">Testimonials</span>
                            <h2 class="title font-700">What They’re Talking About Us</h2>
                        </div>
                    </div>
                </div>
                <div class="row g-24 testimonial-slider-two">
                    <?php
                    $sql = "select * from testimonial ";
                    $res = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_assoc($res)) {
                    ?>
                    <div class="col-xl-4">
                        <div class="single-testimonial position-relative">
                            <div class="client-info">
                                <div class="client-details">
                                    <h3 class="name"><?php echo $row['name']; ?></h3>
                                </div>
                            </div>
                            <div class="position-absolute quote">
                                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="33" viewBox="0 0 54 33"
                                    fill="none">
                                    <path opacity="0.25"
                                        d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V29.4951C22 31.0437 20.3158 32.0048 18.9825 31.217L0.98254 20.5806C0.373596 20.2208 0 19.5661 0 18.8587V2Z"
                                        fill="#00715D" />
                                    <path opacity="0.25"
                                        d="M32 2C32 0.895431 32.8954 0 34 0H52C53.1046 0 54 0.895431 54 2V29.4951C54 31.0437 52.3158 32.0048 50.9825 31.217L32.9825 20.5806C32.3736 20.2208 32 19.5661 32 18.8587V2Z"
                                        fill="#00715D" />
                                </svg>
                            </div>
                            <div class="position-relative">
                                <p class="pera"><i><?php echo substr($row['comment'], 0, 1000); ?></i></p>
                            </div>
                            <div class="rating">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>

            </div>
        </section>
        <!-- End-of Testimonial -->

        <!-- Blog S t a r t -->
        <section class="blog-section bottom-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7">
                        <!-- Section Tittle -->
                        <div class="section-tittle text-center mb-50">
                            <span class="sub-tittle text-capitalize font-600">Blog</span>
                            <h2 class="title font-700">Our Blog & Feeds</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <?php
            $sql = "select * from blogs LIMIT 3";
            $res = mysqli_query($con, $sql);
            while ($row = mysqli_fetch_assoc($res)) { ?>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="single-blog h-calc wow fadeInUp" data-wow-delay="0.2s">
                            <div class="blog-img position-relative">
                                <a href="blog-details.php?blog_url=<?php echo $row['blog_url']; ?>">
                                    <img src="uploads/blogs/<?php echo $row['image']; ?>" class="img-fluid w-100"
                                        alt="img">
                                </a>
                            </div>
                            <div class="blog-info">
                                <div class="blog-info-title">
                                    <p>
                                        <?php $format = strtotime($row['createdAt']);
                                    echo date('d,MY', $format); ?>
                                    </p>
                                    <h4 class="title text-capitalize">
                                        <a href="blog-details.php?blog_url=<?php echo $row['blog_url']; ?>">
                                            <?php echo $row['title']; ?>
                                        </a>
                                    </h4>
                                    <p class="subtitle"><?php echo substr($row['short_description'], 0, 100); ?>...</p>
                                </div>
                            </div>
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