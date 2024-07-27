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
    <?php include('include/navmenu.php');?>
    <main>

        <!-- Breadcrumb Area Start -->
        <section class="breadcrumb-section breadcrumb-bg">
            <div class="container">
                <div class="breadcrumb-text">
                    <nav aria-label="breadcrumb" class="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                        <ul class="breadcrumb listing">
                            <li class="breadcrumb-item single-list"><a href="index.php" class="single">Home</a></li>
                            <li class="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)"
                                    class="single">Vidoes</a></li>
                        </ul>
                    </nav>
                    <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Videos</h1>
                </div>
            </div>
        </section>

        <section class="helpful-area my-5" id="specialty">
            <div class="container">
                <div class="row gy-24">
                    <?php
                    $sql = "SELECT * FROM `videos`";
                    $result = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                    <!-- HCP PLUS -->
                    <div class="col-xl-6 col-md-6 col-lg-6">
                        <iframe class="embed-responsive-item" width="100%" height="315"
                            src="<?php echo $row['youtube']?>" allowfullscreen></iframe>
                    </div>
                    <?php } ?>
                    <!-- CBC -->

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