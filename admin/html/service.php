<?php
require('../include/top.inc.php');

isAdmin();
$category = '';
$title = '';
$short_description = '';
$image = '';
$image_alt_tag = '';
$description = '';
$url = '';
$meta_title = '';
$meta_desc = '';
$meta_keyword = '';
$msg = '';

if (isset($_GET['id']) && $_GET['id'] != '') {
    $id = get_safe_value($con, $_GET['id']);
    $res = mysqli_query($con, "SELECT * FROM services WHERE id='$id'");
    $check = mysqli_num_rows($res);
    if ($check > 0) {
        $row = mysqli_fetch_assoc($res);
        $category = $row['category'];
        $title = $row['title'];
        $short_description = $row['short_description'];
        $image = $row['image'];
        $image_alt_tag = $row['image_alt_tag'];
        $description = $row['description'];
        $url = $row['url'];
        $meta_title = $row['meta_title'];
        $meta_desc = $row['meta_desc'];  
        $meta_keyword = $row['meta_keyword'];  
    } else {
        header('location:manage_service.php');
        exit();
    }
}

if (isset($_POST['submit'])) {
    $category = get_safe_value($con, $_POST['category']);
    $title = get_safe_value($con, $_POST['title']);
    $short_description = get_safe_value($con, $_POST['short_description']);
    $image_alt_tag = get_safe_value($con, $_POST['image_alt_tag']);
    $description = get_safe_value($con, $_POST['description']);
    $url = get_safe_value($con, $_POST['url']);
    $meta_title = get_safe_value($con, $_POST['meta_title']);
    $meta_desc = get_safe_value($con, $_POST['meta_desc']);
    $meta_keyword = get_safe_value($con, $_POST['meta_keyword']);
    
    // Check if image is uploaded
    if (!empty($_FILES['image']['name'])) {
        $image_name = $_FILES['image']['name'];
        $image_tmp = $_FILES['image']['tmp_name'];
        $image_type = $_FILES['image']['type'];
        $image_error = $_FILES['image']['error'];
        
        // Check image file type and validate
        $allowed_types = array('image/png', 'image/jpg', 'image/jpeg', 'image/webp');
        if (in_array($image_type, $allowed_types)) {
            // Move uploaded image to destination directory
            $image = rand(111111111, 999999999) . '_' . $image_name;
            move_uploaded_file($image_tmp, "../../uploads/services/" . $image);
        } else {
            $msg = "Please select only png, jpg, webp, or jpeg image format";
        }
    }

    if ($msg == '') {
        if (isset($_GET['id']) && $_GET['id'] != '') {
            // Update existing record
            $update_query = "UPDATE `services` SET `category`='$category', `title`='$title', `short_description`='$short_description', `image`='$image', `image_alt_tag`='$image_alt_tag', `description`='$description', `url`='$url', `meta_title`='$meta_title', `meta_desc`='$meta_desc',`meta_keyword`='$meta_keyword' WHERE `id`='$id'";
            mysqli_query($con, $update_query);
        } else {
            // Insert new record
            $insert_query = "INSERT INTO `services`(`category`,`title`, `short_description`, `image`, `image_alt_tag`, `description`, `url`, `meta_title`, `meta_desc`,`meta_keyword`) VALUES ('$category','$title', '$short_description', '$image', '$image_alt_tag', '$description', '$url', '$meta_title', '$meta_desc','$meta_keyword')";
            mysqli_query($con, $insert_query);
        }
        header('location:manage_service.php');
        exit();
    }
}
?>

<?php include("../include/head.inc.php"); ?>
<div class="page-breadcrumb">
    <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
            <h4 class="page-title">Service</h4>
            <div class="ms-auto text-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Service</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid" style="height: calc(100vh - 120px);">
    <div class="row">
        <div class="col-md-8 m-auto bg-white">
            <div class="card">
                <div class="card-header"><strong>Services</strong><small> Form</small></div>
                <form method="post" enctype="multipart/form-data">
                    <div class="card-body card-block">
                        <div class="form-group">
                            <label for="category" class="form-control-label">Category</label>
                            <select name="category" id="category" class="form-control" required>
                                <option value="">Select a category</option>
                                <option value="Pathology" <?php echo $category == "Pathology" ? 'selected' : ''; ?>>Pathology</option>
                                <option value="Radiology" <?php echo $category == "Radiology" ? 'selected' : ''; ?>>Radiology</option>
                                <option value="Neurology" <?php echo $category == "Neurology" ? 'selected' : ''; ?>>Neurology</option>
                                <option value="Cardiology" <?php echo $category == "Cardiology" ? 'selected' : ''; ?>>Cardiology</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="Title" class="form-control-label">Title</label>
                            <input type="text" name="title" placeholder="Enter Title" class="form-control" required value="<?php echo $title ?>">
                        </div>
                        <div class="form-group">
                            <label for="Short_Description" class="form-control-label">Short Description</label>
                            <input type="text" name="short_description" placeholder="Enter Short Description" class="form-control" required value="<?php echo $short_description ?>">
                        </div>
                        <div class="form-group">
                            <label for="heading1" class="form-control-label">Image</label>
                            <input type="file" name="image" class="form-control">
                            <?php if ($image != ''): ?>
                                <a target='_blank' href='<?php echo "../../uploads/services/" . $image ?>'><img width='150px' src='<?php echo "../../uploads/services/" . $image ?>' alt='Service Image'/></a>
                                <input type="hidden" name="prev_image" value="<?php echo $image ?>">
                            <?php endif; ?>
                        </div>
                        <div class="form-group">
                            <label for="Alt_tag" class="form-control-label">Image Alt Tag</label>
                            <input type="text" name="image_alt_tag" placeholder="Enter Image Alt Tag" class="form-control" required value="<?php echo $image_alt_tag ?>">
                        </div>
                        <div class="form-group">
                            <label for="description" class="form-control-label">Description</label>
                            <textarea class="form-control" name="description" id="editor1" rows="10" cols="80" placeholder="Enter Description"><?php echo $description ?></textarea>
                        </div>
                        <div class="form-group">
                            <label for="url" class="form-control-label">URL</label>
                            <input type="text" name="url" placeholder="Enter Url" class="form-control" required value="<?php echo $url ?>">
                        </div>
                        <div class="form-group">
                            <label for="meta_title" class="form-control-label">Meta Title</label>
                            <input type="text" name="meta_title" placeholder="Enter Meta Title" class="form-control" value="<?php echo $meta_title ?>">
                        </div>
                        <div class="form-group">
                            <label for="meta_desc" class="form-control-label">Meta Description</label>
                            <input type="text" name="meta_desc" placeholder="Enter Meta Description" class="form-control" value="<?php echo $meta_desc ?>">
                        </div>
                        <div class="form-group">
                            <label for="meta_desc" class="form-control-label">Meta Keywords</label>
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

<!-- All Jquery -->
<script src="../assets/libs/jquery/dist/jquery.min.js"></script>
<script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
<script src="../assets/extra-libs/sparkline/sparkline.js"></script>
<script src="../dist/js/waves.js"></script>
<script src="../dist/js/sidebarmenu.js"></script>
<script src="../dist/js/custom.min.js"></script>
<script src="../assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
<script src="../assets/extra-libs/multicheck/jquery.multicheck.js"></script>
<script src="../assets/extra-libs/DataTables/datatables.min.js"></script>
<script src="../ckeditor/ckeditor.js"></script>
<script src="../ckfinder/ckfinder.js"></script>
<script>
    var editor = CKEDITOR.replace('editor1');
    CKFinder.setupCKEditor(editor);
</script>
</body>
</html>
