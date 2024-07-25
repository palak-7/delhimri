<!DOCTYPE html>
<html lang="en" dir="lrt">

<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
  <?php include('include/head.php');
  $correntpage = "contact";
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
              <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" class="single">contact</a></li>
            </ul>
          </nav>
          <h1 class="title wow fadeInUp" data-wow-delay="0.1s">contact us</h1>
        </div>
      </div>
    </section>
    <!-- End-of Breadcrumb Area -->

    <!-- Contact area S t a r t-->
    <div class="volunteer-details top-bottom-padding2">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="contact-section">
              <div class="contact-list">
                <div class="contact-icon-list">
                  <div class="single-icon">
                    <i class="ri-phone-fill"></i>
                  </div>
                  <div class="divider-ver"></div>
                  <div class="contact-content">
                    <p class="subtitle">Phone</p>
                    <a class="title" href="tel:+911146183333">(+91) 114618 3333</a> <br>
                    <a class="title" href="tel:+911146183333">(+91) 9667554447</a>
                  </div>
                </div>
                <div class="contact-icon-list">
                  <div class="single-icon">
                    <i class="ri-mail-fill"></i>
                  </div>
                  <div class="divider-ver"></div>
                  <div class="contact-content">
                    <p class="subtitle">Email</p>
                    <a class="title" href="mailto:delhimriscan@gmail.com">delhimriscan@gmail.com</a>
                  </div>
                </div>
                <div class="contact-icon-list">
                  <div class="single-icon">
                    <i class="ri-map-pin-line"></i>
                  </div>
                  <div class="divider-ver"></div>
                  <div class="contact-content">
                    <p class="subtitle">Location</p>
                    <a class="title" href="https://maps.app.goo.gl/1efNLhWMh3euuEDk6" target="_blank">M-2, Hauz Khas, Delhi 110016</a>
                  </div>
                </div>
                <!-- <div class="contact-icon-list">
                  <div class="single-icon">
                    <i class="ri-whatsapp-fill"></i>
                  </div>
                  <div class="divider-ver"></div>
                  <div class="contact-content">
                    <p class="subtitle">WhatsApp</p>
                    <a class="title" href="https://wa.me/919811137198">(+91) 9811137198</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="top-padding4">
          <div class="row gy-24">
            <div class="col-xl-6">
              <div class="send-box">
                <section id="form"></section>
                <form action="form.php" method="post" class="custom-form">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="form-group">
                        <label class="custom-label" for="exampleFormControlInput1">Full Name</label>
                        <input type="text" class="form-control custom-input" name="name" placeholder="Enter Your Name..">
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="form-group">
                        <label class="custom-label" for="exampleFormControlInput2">Email address</label>
                        <input type="email" class="form-control custom-input" name="email" placeholder="name@example.com">
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="form-group">
                        <label class="custom-label" for="exampleFormControlInput5">Phone</label>
                        <input type="text" class="form-control custom-input" name="phone" placeholder="Phone">
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="form-group">
                      <label class="custom-label" for="exampleFormControlTextarea1">Message</label>
                      <textarea class="form-control custom-textarea" name="message" placeholder="Type You message here"></textarea>
                    </div>
                  </div>
                  <button type="submit" class="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
            <div class="col-xl-6">
              <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.545046430229!2d77.20312517549785!3d28.553391475708093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20d55198eb3%3A0x4bfc42e45c55a67a!2sDelhi%20mri%20scan!5e0!3m2!1sen!2sin!4v1716357348784!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End-of contact-->
  </main>
  <!-- Footer S t a r t -->
  <?php include('include/footer.php'); ?>
  <!-- Add an overlay element -->
  <div class="overlay"></div>
  <!-- jquery-->
  <?php include('include/foot.php'); ?>
</body>

</html>