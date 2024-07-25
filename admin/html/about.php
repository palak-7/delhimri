<?php
require('../include/top.inc.php');

// Check if user is an admin, redirect if not
isAdmin();

$name = '';
$description = '';
$description1 = '';
$image_alt_tag = '';
$phone = '';
$email = '';
$address = '';
$embed = '';
$image_required = 'required';
$msg = '';

// Check if editing an existing entry
if (isset($_GET['id']) && $_GET['id'] != '') {
    $id = get_safe_value($con, $_GET['id']);
    $image_required = '';
    $res = mysqli_query($con, "SELECT * FROM about WHERE id='$id'");
    $row = mysqli_fetch_assoc($res);
    if (!$row) {
        header('location:manage_about.php');
        exit();
    }
    // Extract data from row
    extract($row);
}

// Handle form submission
if (isset($_POST['submit'])) {
    // Sanitize and get form data
    $name = get_safe_value($con, $_POST['name']);
    $description = get_safe_value($con, $_POST['description']);
    $description1 = get_safe_value($con, $_POST['description1']);
    $image_alt_tag = get_safe_value($con, $_POST['image_alt_tag']);
    $phone = get_safe_value($con, $_POST['phone']);
    $email = get_safe_value($con, $_POST['email']);
    $address = get_safe_value($con, $_POST['address']);
    $embed = get_safe_value($con, $_POST['embed']);

    // Check if image file is uploaded and validate its type
    if (!empty($_FILES['image']['type']) && !in_array($_FILES['image']['type'], ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'])) {
        $msg = "Please select only png, jpg, webp, or jpeg image format";
    }

    if ($msg == '') {
        if (isset($_GET['id']) && $_GET['id'] != '') {
            // Update existing entry
            if (!empty($_FILES['image']['name'])) {
                $image = $_FILES['image']['name'];
                move_uploaded_file($_FILES['image']['tmp_name'], "../../uploads/about/" . $image);
            }
            // Update entry data in the database
            $update_query = "UPDATE about SET name='$name', description='$description', description1='$description1', image='$image', image_alt_tag='$image_alt_tag', phone='$phone', email='$email', address='$address', embed='$embed' WHERE id='$id'";
            mysqli_query($con, $update_query);
        } else {
            // Insert new entry
            $image = rand(111111111, 999999999) . '_' . $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'], "../../uploads/about/" . $image);
            // Insert data into the database
            $insert_query = "INSERT INTO about (name, description, description1, image, image_alt_tag, phone, email, address, embed) VALUES ('$name','$description','$description1', '$image','$image_alt_tag','$phone', '$email','$address','$embed')";
            mysqli_query($con, $insert_query);
        }
        // Redirect after action
        header('location:manage_about.php');
        exit();
    }
}
?>

<?php include("../include/head.inc.php") ?>

<div class="page-breadcrumb">
    <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
            <h4 class="page-title" style="margin-right:10px;"> About </h4>
            <div class="ms-auto text-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid" style="height: calc(100vh - 120px);">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 m-auto bg-white">
                <div class="card">
                    <div class="card-header"><strong>About</strong><small> Form</small></div>
                    <form method="post" enctype="multipart/form-data">
                        <div class="card-body card-block">
                            <div class="form-group">
                                <label for="Title" class="form-control-label">Name</label>
                                <input type="text" name="name" placeholder="Enter Name" class="form-control" required value="<?php echo $name ?>">
                            </div>
                            <div class="form-group">
                                <label for="heading1" class="form-control-label">Image</label>
                                <input type="file" name="image" class="form-control" <?php echo $image_required ?>>
                                <?php if ($image != ''): ?>
                                    <a target='_blank' href='<?php echo "../../uploads/about/" . $image ?>'><img width='150px' src='<?php echo "../../uploads/about/" . $image ?>' /></a>
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
                                <label for="description" class="form-control-label">Description 2</label>
                                <textarea class="form-control" name="description1" id="editor2" rows="10" cols="80" placeholder="Enter Description"><?php echo $description1 ?></textarea>
                            </div>
                            <div class="form-group">
                                <label for="url" class="form-control-label">Phone</label>
                                <input type="text" name="phone" placeholder="Enter Phone" class="form-control" required value="<?php echo $phone ?>">
                            </div>
                            <div class="form-group">
                                <label for="meta_title" class="form-control-label">Email</label>
                                <input type="text" name="email" placeholder="Enter Email" class="form-control" value="<?php echo $email ?>">
                            </div>
                            <div class="form-group">
                                <label for="meta_desc" class="form-control-label">Address</label>
                                <input type="text" name="address" placeholder="Enter Address" class="form-control" value="<?php echo $address ?>">
                            </div>
                            <div class="form-group">
                                <label for="embed" class="form-control-label">Embed a map</label>
                                <textarea name="embed" placeholder="Enter Embed Code" class="form-control" rows="8"><?php echo $embed ?></textarea>
                            </div>
                            <button id="payment-button" name="submit" type="submit" class="btn btn-lg btn-info btn-block">
                                <span id="payment-button-amount">Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
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
    var editor1 = CKEDITOR.replace('editor1');
    CKFinder.setupCKEditor(editor1);
    var editor2 = CKEDITOR.replace('editor2');
    CKFinder.setupCKEditor(editor2);
</script>
</body>
</html>
