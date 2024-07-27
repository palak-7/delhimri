<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Include Font Awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Include animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <?php include('include/head.php');?>
</head>
<style>
.btnclr {
    background-color: #1991d2;
    color: #fff;
}

.btnclr:hover {
    background-color: #1991d2;
    color: #fff;
}

/* Make the header sticky and set it at the top */
.sticky-header {
    position: -webkit-sticky;
    /* For Safari */
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #145473;
    /* Ensure the background color covers the whole header */
}

/* Custom zoom in and zoom out animation */
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
</style>

<body>
    <div class="container-fluid">
        <div class="row py-2 px-4 sticky-header d-flex justify-content-between">
            <div class="col-sm-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                <a href="https://wa.me/9196675544447" target="_blank"
                    class="text-white fs-5 py-2 animate-zoomInOut rounded p-2">
                    CALL US: +91-96675 544447
                </a>
            </div>
            <div class="col-sm-12 col-md-6 text-center">
                <div class="d-flex justify-content-center justify-content-md-end">
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/profile.php?id=61559367246129" target="_blank"
                        class="btn text-white rounded-circle d-flex align-items-center justify-content-center me-2 fs-4"
                        style="width: 40px; height: 40px;">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <!-- YouTube -->
                    <a href="https://www.youtube.com/@delhimriscan8690" target="_blank"
                        class="btn text-white rounded-circle d-flex align-items-center justify-content-center me-2 fs-4"
                        style="width: 40px; height: 40px;">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/delhimricentre/" target="_blank"
                        class="btn text-white rounded-circle d-flex align-items-center justify-content-center me-2 fs-4"
                        style="width: 40px; height: 40px;">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/company/delhi-mri-centre/?viewAsMember=true" target="_blank"
                        class="btn text-white rounded-circle d-flex align-items-center justify-content-center fs-4"
                        style="width: 40px; height: 40px;">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>


    <!-- Include Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>