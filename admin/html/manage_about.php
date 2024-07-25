<?php
require('../include/top.inc.php');
isAdmin();

// Handle status update and deletion
if (isset($_GET['type']) && $_GET['type'] != '') {
    $type = get_safe_value($con, $_GET['type']);
    if ($type == 'status' && isset($_GET['operation'], $_GET['id'])) {
        $operation = get_safe_value($con, $_GET['operation']);
        $id = get_safe_value($con, $_GET['id']);
        $status = ($operation == 'active') ? '1' : '0';
        $update_status_sql = "UPDATE about SET status='$status' WHERE id='$id'";
        mysqli_query($con, $update_status_sql);
    }

    if ($type == 'delete' && isset($_GET['id'])) {
        $id = get_safe_value($con, $_GET['id']);
        $delete_sql = "DELETE FROM about WHERE id='$id'";
        mysqli_query($con, $delete_sql);
    }
}

$sql = "SELECT * FROM about";
$res = mysqli_query($con, $sql);

include ("../include/head.inc.php");
?>

<div class="page-breadcrumb">
    <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
            <h4 class="page-title" style="margin-right:10px;"> About </h4>
            <div class="flex gap-2">
                <!-- Edit and Delete Buttons -->
                <?php while ($row = mysqli_fetch_assoc($res)) : ?>
                <span class="add_button">
                    <a href="about.php?type=edit&id=<?php echo $row['id']; ?>" class="btn btn-sm btn-primary">Edit</a>
                </span>
                <?php endwhile; ?>
            </div>
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
        <?php mysqli_data_seek($res, 0); // Resetting the pointer to the beginning of the result set ?>
        <?php while ($row = mysqli_fetch_assoc($res)) : ?>
        <div class="row about-section">
            <div class="col-md-6">
                <img src="../../uploads/about/<?php echo $row['image']; ?>" class="img-fluid" alt="<?php echo $row['image_alt_tag']; ?>">
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center flex-column">
                <h1 class="title"><?php echo $row['name']; ?></h1>
                <h3>Description</h3>
                <p class="description"><?php echo $row['description']; ?></p>
                <h3>Description1</h3>
                <p class="description1"><?php echo $row['description1']; ?></p>
            </div>
        </div>

        <div class="row details-section mt-5">
            <div class="col-12 d-flex align-items-center justify-content-center flex-column">
                <h1>Contact Details</h1>
                <ul class="list-unstyled">
                    <li><h5>Phone: <span><?php echo $row['phone']; ?></span></h5></li>
                    <li><h5>Email: <span><?php echo $row['email']; ?></span></h5></li>
                    <li><h5>Address: <span><?php echo $row['address']; ?></span></h5></li>
                </ul>
            </div>
            <div class="col-md-12">
                <h3>Location</h3>
                <div class="embed-responsive embed-responsive-16by9">
                    <?php echo $row['embed']; ?>
                </div>
            </div>
        </div>
        <?php endwhile; ?>
    </div>
</div>
