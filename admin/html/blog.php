<?php
require('../include/top.inc.php');

isAdmin();
$title = '';
$short_description = '';
$image = '';
$image_alt_tag = '';
$description = '';
$blog_url = '';
$meta_title = '';
$meta_desc = '';
$meta_keyword = '';
$msg = '';
$image_required = 'required';

if (isset($_GET['id']) && $_GET['id'] != '') {
    $id = get_safe_value($con, $_GET['id']);
    $image_required = '';
    $res = mysqli_query($con, "SELECT * FROM blogs WHERE id='$id'");
    $check = mysqli_num_rows($res);
    if ($check > 0) {
        $row = mysqli_fetch_assoc($res);
        $title = $row['title'];
        $short_description = $row['short_description'];
        $image = $row['image'];
        $image_alt_tag = $row['image_alt_tag'];
        $description = $row['description'];
        $blog_url = $row['blog_url'];
        $meta_title = $row['meta_title'];
        $meta_desc = $row['meta_desc'];  
        $meta_keyword = $row['meta_keyword'];  
    } else {
        header('location:manage_blog.php');
        die();
    }
}

if (isset($_POST['submit'])) {
    $title = get_safe_value($con, $_POST['title']);
    $short_description = get_safe_value($con, $_POST['short_description']);
    $image_alt_tag = get_safe_value($con, $_POST['image_alt_tag']);
    $description = get_safe_value($con, $_POST['description']);
    $url = get_safe_value($con, $_POST['blog_url']);
    $meta_title = get_safe_value($con, $_POST['meta_title']);
    $meta_desc = get_safe_value($con, $_POST['meta_desc']);
    $meta_keyword = get_safe_value($con, $_POST['meta_keyword']);
    
    // Check if image file is uploaded and validate its type
    if (!empty($_FILES['image']['type']) && !in_array($_FILES['image']['type'], array('image/png', 'image/jpg', 'image/jpeg', 'image/webp'))) {
        $msg = "Please select only png, jpg, webp, or jpeg image format";
    }

    if ($msg == '') {
        if (isset($_GET['id']) && $_GET['id'] != '') {
            // Update existing blog entry
            if (!empty($_FILES['image']['name'])) {
                $image = $_FILES['image']['name'];
                move_uploaded_file($_FILES['image']['tmp_name'], "../../uploads/blogs/" . $image);
            }
            // Update blog entry data in the database
            $update_query = "UPDATE `blogs` SET `title`='$title',`short_description`='$short_description', `image`='$image',`image_alt_tag`='$image_alt_tag',`description`='$description', `blog_url`='$url',`meta_title`='$meta_title',`meta_desc`='$meta_desc',`meta_keyword`='$meta_keyword' WHERE `id`='$id'";
            mysqli_query($con, $update_query);
        } else {
            // Insert new blog entry
            $image = rand(111111111, 999999999) . '_' . $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'], "../../uploads/blogs/" . $image);
            // Insert new blog entry data into the database
            $insert_query = "INSERT INTO `blogs`(`title`, `short_description`, `image`, `image_alt_tag`, `description`, `blog_url`, `meta_title`, `meta_desc`,`meta_keyword`) 
            VALUES ('$title','$short_description', '$image','$image_alt_tag','$description','$blog_url', '$meta_title','$meta_desc','$meta_keyword')";
            mysqli_query($con, $insert_query);
        }
        // Redirect to manage blog page after action
        header('location:manage_blog.php');
        die();
    }
}
?>

<?php 
include("../include/head.inc.php")
?>
<div class="page-breadcrumb">
    <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
            <h4 class="page-title">Blog</h4>
            <div class="ms-auto text-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Blog</li>
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
                <div class="card-header"><strong>blogs</strong><small> Form</small></div>
                <form method="post" enctype="multipart/form-data">
                    <div class="card-body card-block">
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
                            <input type="file" name="image" class="form-control" <?php echo $image_required ?>>
                            <?php if ($image != ''): ?>
                                <a target='_blank' href='<?php echo "../../uploads/blogs/" . $image ?>'><img width='150px' src='<?php echo "../../uploads/blogs/" . $image ?>'/></a>
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
                            <input type="text" name="blog_url" placeholder="Enter Url" class="form-control" required value="<?php echo $blog_url ?>">
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
