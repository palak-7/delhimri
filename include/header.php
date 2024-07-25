<!--<div class="loading-page" id="preloader-active">-->
<!--  <div class="counter">-->
<!--    <p class="text text-capitalize">DELHI MRI</p>-->
<!--    <span class="number">0%</span>-->
<!--    <span class="line"></span>-->
<!--  </div>-->
<!--</div>-->
<header>
  <div class="header-area">
    <div class="main-header header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="menu-wrapper d-flex align-items-center justify-content-between">
              <div class="header-left d-flex align-items-center justify-content-between">
                <!-- Logo-->
                <div class="logo logo-large light-logo">
                  <a href="index.php"><img class="img-fluid" src="./assets/images/logo/logo02.png" alt="logo"></a>
                </div>
                <!-- Logo Mobile-->
                <div class="logo logo-mobile light-logo">
                  <a href="index.php"><img src="./assets/images/logo/logo02.png" alt="img"></a>
                </div>
              </div>

              <!--<div class="search-container">-->
              <!--  <input type="text" id="searchField" class="search-field" placeholder="Search...">-->
              <!--  <button id="closeSearch" class="close-search-btn"><i class="ri-close-line"></i></button>-->
              <!--</div>-->

              <!-- Main-menu for desktop -->
              <div class="main-menu d-none d-lg-block">
                <nav>
                  <ul class="listing" id="navigation">
                    <li class="single-list">
                    <a href="index.php" class="single <?php echo ($correntpage == "index")? "active" : "";?>">Home</a>
                      <!-- <ul class="submenu">
                        <li class="single-list"><a href="index.php" class="single">Home 01</a></li>
                        <li class="single-list"><a href="index-two.php" class="single">Home 02</a></li>
                        <li class="single-list"><a href="index-three.php" class="single">Home 03</a></li>
                      </ul> -->
                    </li>
                    <!--<li class="single-list"><a href="services.php" class="single">Services</a></li>-->
                    <li class="single-list">
                      <a href="javascript:void(0)" class="single  <?php echo ($correntpage == "about")? "active" : "";?>">About<i class="ri-arrow-down-s-line"></i></a>
                      <ul class="submenu">
                        <li class="single-list"><a href="about.php" class="single <?php echo ($correntpage == "about")? "active" : "";?>">About</a></li>
                        <!--<li class="single-list"><a href="dgapprove.php" class="single">DG Approved</a></li>-->
                        
                        <li class="single-list"><a href="team.php" class="single <?php echo ($correntpage == "team")? "active" : "";?>">Team</a></li>
                         <li class="single-list"><a href="gallery.php" class="single <?php echo ($correntpage == "gallery")? "active" : "";?>">Gallery</a></li>
                         <li class="single-list"><a href="videos.php" class="single <?php echo ($correntpage == "videos")? "active" : "";?>">Videos</a></li>
                      </ul>
                        <li class="single-list"><a href="dgapprove.php" class="single">DG Approved</a></li>
                    </li>
                    <li class="single-list">
                      <a href="services-category.php" class="single  <?php echo ($correntpage == "services")? "active" : "";?>">Services <i class="ri-arrow-down-s-line"></i></a>
                      <ul class="submenu">
                        <li class="single-list"><a href="services.php?category=Radiology" class="single">Radiology</a></li>
                        <li class="single-list"><a href="pathology.php" class="single">Pathology</a></li>
                        <li class="single-list"><a href="services.php?category=Neurology" class="single">Neurology</a></li>
                        <li class="single-list"><a href="services.php?category=Cardiology" class="single">Cardiology</a></li>
                      
                        <!--<li class="single-list"><a href="services.php" class="single">All Services</a></li>-->
                      </ul>
                    </li>
                    <li class="single-list">
                      <a href="blog.php" class="single  <?php echo ($correntpage == "blog" && $correntpage == "blog" )? "active" : "";?>">Blogs</a>
                     
                    </li>
                  
                    <li class="single-list"><a href="contact-us.php" class="single <?php echo ($correntpage == "contact")? "active" : "";?>">Contact</a></li>
                  </ul>
                </nav>
              </div>

              <div class="header-right  d-none d-lg-block">
                <div class="cart">
                  <!-- search button -->
                  <!--<a href="javascript:void(0)" class="rounded-btn search-bar"><i class="ri-search-line"></i></a>-->
                  <a href="contact-us.php#form" class="btn-primary-fill pill-btn">Make Appointment</a>
                </div>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="div">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
