<?php
require('../include/top.inc.php');

isAdmin();

$title = '';
$department = '';
$image = '';
$description = '';
$doctor_url = '';
$meta_title = '';
$meta_desc = '';
$meta_keyword = '';
$image_required = 'required';

$msg = '';

if (isset($_GET['id']) && $_GET['id'] != '') {
    $id = get_safe_value($con, $_GET['id']);
    $image_required = '';
    $res = mysqli_query($con, "SELECT * FROM doctors WHERE id='$id'");
    $check = mysqli_num_rows($res);
    if ($check > 0) {
        $row = mysqli_fetch_assoc($res);
        $title = $row['title'];
        $department = $row['department'];
        $image = $row['image'];
        $description = $row['description'];
        $doctor_url = $row['doctor_url'];
        $meta_title = $row['meta_title'];
        $meta_desc = $row['meta_desc'];
        $meta_keyword = $row['meta_keyword'];
    } else {
        header('location:manage_doctors.php');
        die();
    }
}

if (isset($_POST['submit'])) {
    $title = get_safe_value($con, $_POST['title']);
    $department = get_safe_value($con, $_POST['department']);
    $description = get_safe_value($con, $_POST['description']);
    $doctor_url = get_safe_value($con, $_POST['doctor_url']);
    $meta_title = get_safe_value($con, $_POST['meta_title']);
    $meta_desc = get_safe_value($con, $_POST['meta_desc']);
    $meta_keyword = get_safe_value($con, $_POST['meta_keyword']);

    if ($_FILES['image']['name'] != '') {
        $allowed_types = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
        if (!in_array($_FILES['image']['type'], $allowed_types)) {
            $msg = "Please select only png, jpg, webp and jpeg image formats";
        }
    }

    if ($msg == '') {
        if (isset($_GET['id']) && $_GET['id'] != '') {
            if ($_FILES['image']['name'] != '') {
                $image = rand(111111111, 999999999) . '_' . $_FILES['image']['name'];
                move_uploaded_file($_FILES['image']['tmp_name'], "../../uploads/doctors/" . $image);
                $query = "UPDATE `doctors` SET `title`='$title', `department`='$department', `image`='$image', `description`='$description', `doctor_url`='$doctor_url', `meta_title`='$meta_title', `meta_desc`='$meta_desc', `meta_keyword`='$meta_keyword' WHERE `id`='$id'";
            } else {
                $query = "UPDATE `doctors` SET `title`='$title', `department`='$department', `description`='$description', `doctor_url`='$doctor_url', `meta_title`='$meta_title', `meta_desc`='$meta_desc', `meta_keyword`='$meta_keyword' WHERE `id`='$id'";
            }
            mysqli_query($con, $query);
        } else {
            $image = rand(111111111, 999999999) . '_' . $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'], "../../uploads/doctors/" . $image);
            $query = "INSERT INTO `doctors` (`title`, `department`, `image`, `description`, `doctor_url`, `meta_title`, `meta_desc`, `meta_keyword`) VALUES ('$title', '$department', '$image', '$description', '$doctor_url', '$meta_title', '$meta_desc', '$meta_keyword')";
            mysqli_query($con, $query);
        }
        header('location:manage_doctors.php');
        die();
    }
}
?>


<?php
include("../include/head.inc.php")
?>
<!-- ============================================================== -->
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="page-breadcrumb">
    <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
            <h4 class="page-title">Doctor</h4>
            <div class="ms-auto text-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index ">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Doctor
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid" style="
    height: calc(100vh - 120px);">
    <!-- ============================================================== -->
    <!-- Start Page Content -->
    <!-- ============================================================== -->
    <div class="row">
        <div class="col-md-8 m-auto bg-white">
            <div class="card">
                <div class="card-header"><strong>Doctor</strong><small> Form</small></div>
                <form method="post" enctype="multipart/form-data">
                    <div class="card-body card-block">
                        <div class="form-group">
                            <label for="Title" class="form-control-label">Title</label>
                            <input type="text" name="title" placeholder="Enter Doctor Title" class="form-control" required value="<?php echo $title ?>">
                        </div>
                        <div class="form-group">
                            <label for="Department" class="form-control-label">Department</label>
                            <input type="text" name="department" placeholder="Enter Department" class="form-control" required value="<?php echo $department ?>">
                        </div>
                        <div class="form-group">
                            <label for="Image" class="form-control-label">Image</label>
                            <input type="file" name="image" class="form-control" <?php echo $image_required ?>>
                            <?php
                            if ($image != '') {
                                echo "<a target='_blank' href='" . "../../uploads/doctors/" . $image . "'><img width='150px' src='" . "../../uploads/doctors/" . $image . "'/></a>";
                            }
                            ?>
                        </div>
                        
                        <div class="form-group">
                            <label for="Description" class="form-control-label">Description</label>
                            <textarea class="form-control" name="description" id="editor1" rows="10" cols="80" placeholder="Enter Description"><?php echo $description ?></textarea>
                        </div>
                        <div class="form-group">
                            <label for="Doctor_URL" class="form-control-label">Doctor URL</label>
                            <input type="text" name="doctor_url" placeholder="Enter Doctor URL" class="form-control" required value="<?php echo $doctor_url ?>">
                        </div>
                        <div class="form-group">
                            <label for="Meta_Title" class="form-control-label">Meta Title</label>
                            <input type="text" name="meta_title" placeholder="Enter Meta Title" class="form-control" value="<?php echo $meta_title ?>">
                        </div>
                        <div class="form-group">
                            <label for="Meta_Desc" class="form-control-label">Meta Description</label>
                            <input type="text" name="meta_desc" placeholder="Enter Meta Description" class="form-control" value="<?php echo $meta_desc ?>">
                        </div>
                        <div class="form-group">
                            <label for="Meta_Keyword" class="form-control-label">Meta Keywords</label>
                            <input type="text" name="meta_keyword" placeholder="Enter Meta Keywords" class="form-control" value="<?php echo $meta_keyword ?>">
                        </div>
                        <button id="payment-button" name="submit" type="submit" class="btn btn-lg btn-info btn-block">
                            <span id="payment-button-amount">Submit</span>
                        </button>
                        <div class="field_error"><?php echo $msg ?></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
<!-- All Jquery -->
<!-- ============================================================== -->
<script src="../assets/libs/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap tether Core JavaScript -->
<script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<!-- slimscrollbar scrollbar JavaScript -->
<script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
<script src="../assets/extra-libs/sparkline/sparkline.js"></script>
<!--Wave Effects -->
<script src="../dist/js/waves.js"></script>
<!--Menu sidebar -->
<script src="../dist/js/sidebarmenu.js"></script>
<!--Custom JavaScript -->
<script src="../dist/js/custom.min.js"></script>
<!-- this page js -->
<script src="../assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
<script src="../assets/extra-libs/multicheck/jquery.multicheck.js"></script>
<script src="../assets/extra-libs/DataTables/datatables.min.js"></script>
<script>
    /****************************************
     *       Basic Table                   *
     ****************************************/
    $("#zero_config").DataTable();
</script>
<script src="../ckeditor/ckeditor.js"></script>
<script src="../ckfinder/ckfinder.js"></script>
<script>
    var editor = CKEDITOR.replace('editor1');
    CKFinder.setupCKEditor(editor);
</script>
</body>

</html>