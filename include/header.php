<style>
.btnclr {
    background-color: #1991d2;
    color: #fff;
}

@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.animate-zoomInOut {
    animation: zoomInOut 2s infinite;
}

/* Hide button on large screens */
@media only screen and (min-width: 768px) {
    .btn-dg-approved {
        display: none;
    }
}

/* Hide the button on all screens by default */
.btn-dg-approved {
    display: none;
}

/* Show the button only on screens narrower than 768px (mobile devices) */
@media only screen and (max-width: 767px) {
    .btn-dg-approved {
        display: block;
    }
}
</style>

<header>
    <div class="header-area">
        <div class="main-header header-sticky">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="menu-wrapper d-flex align-items-center justify-content-between">
                            <div>
                                <div class="header-left d-flex align-items-center justify-content-between">
                                    <!-- Logo -->
                                    <div class="logo logo-large light-logo">
                                        <a href="index.php"><img class="img-fluid" src="./assets/images/logo/logo02.png"
                                                alt="logo"></a>
                                    </div>
                                    <!-- Logo Mobile -->
                                    <div class="logo logo-mobile light-logo">
                                        <a href="index.php"><img src="./assets/images/logo/logo02.png" alt="img"></a>
                                    </div>
                                </div>
                            </div>

                            <!-- Main-menu for desktop -->
                            <div>
                                <div class="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul class="listing" id="navigation">
                                            <li class="single-list">
                                                <a href="index.php"
                                                    class="single <?php echo ($correntpage == "index") ? "active" : "";?>">Home</a>
                                            </li>
                                            <li class="single-list">
                                                <a href="javascript:void(0)"
                                                    class="single <?php echo ($correntpage == "about") ? "active" : "";?>">About<i
                                                        class="ri-arrow-down-s-line"></i></a>
                                                <ul class="submenu">
                                                    <li class="single-list"><a href="about.php"
                                                            class="single <?php echo ($correntpage == "about") ? "active" : "";?>">About</a>
                                                    </li>
                                                    <li class="single-list"><a href="team.php"
                                                            class="single <?php echo ($correntpage == "team") ? "active" : "";?>">Team</a>
                                                    </li>
                                                    <li class="single-list"><a href="gallery.php"
                                                            class="single <?php echo ($correntpage == "gallery") ? "active" : "";?>">Gallery</a>
                                                    </li>
                                                    <li class="single-list"><a href="videos.php"
                                                            class="single <?php echo ($correntpage == "videos") ? "active" : "";?>">Videos</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="single-list">
                                                <a href="services-category.php"
                                                    class="single <?php echo ($correntpage == "services") ? "active" : "";?>">Services
                                                    <i class="ri-arrow-down-s-line"></i></a>
                                                <ul class="submenu">
                                                    <li class="single-list"><a href="services.php?category=Radiology"
                                                            class="single">Radiology</a></li>
                                                    <li class="single-list"><a href="pathology.php"
                                                            class="single">Pathology</a></li>
                                                    <li class="single-list"><a href="services.php?category=Neurology"
                                                            class="single">Neurology</a></li>
                                                    <li class="single-list"><a href="services.php?category=Cardiology"
                                                            class="single">Cardiology</a></li>
                                                </ul>
                                            </li>
                                            <li class="single-list">
                                                <a href="blog.php"
                                                    class="single <?php echo ($correntpage == "blog") ? "active" : "";?>">Blogs</a>
                                            </li>
                                            <li class="single-list"><a href="contact-us.php"
                                                    class="single <?php echo ($correntpage == "contact") ? "active" : "";?>">Contact</a>
                                            </li>

                                            <!-- Hidden on large screens -->
                                            <li class="single-list btn-dg-approved d-lg-none">
                                                <div class="cart">
                                                    <a href="dgapprove.php"
                                                        class="btn-primary-fill pill-btn animate-zoomInOut">DG
                                                        Approved</a>
                                                </div>
                                            </li> 
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div class="flex">
                                <div class="header-right visible d-none d-lg-block">
                                    <div class="cart">
                                        <a href="dgapprove.php" class="btn-primary-fill pill-btn animate-zoomInOut">DG
                                            Approved</a>
                                    </div>
                                </div>

                                <div class="header-right d-none d-lg-block mx-3">
                                    <div class="cart">
                                        <a href="contact-us.php#form" class="btn-primary-fill pill-btn">Make
                                            Appointment</a>
                                    </div>
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