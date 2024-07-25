
    <div class="nav-linkbox mt-2" style="background: #145473 ;">
      <div class="nav-inside" style="background: #145473 ;">
        <ul>
          <li class="drop-downmenu">
            <a href="pathology">Pathology<span></span></a>
            <div class="sub-menu-box">
              <div class="full-menu">
                <ul>
                  <li><a href="pathology.php">URINE ROUTINE</a></li>
                  <li><a href="pathology.php">THYROID PROFILE</a></li>
                  <li><a href="pathology.php">LFT</a></li>
                  <li><a href="pathology.php)">HCP PLUS</a></li>
                  <li><a href="pathology.php">PSA</a></li>
                  <li><a href="pathology.php">KFT</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="drop-downmenu">
            <a href="javascript:void(0)">Radiology<span></span></a>
            <div class="sub-menu-box">
              <div class="full-menu">
                <ul>
                    <?php 
                     $sqls = "SELECT * FROM services WHERE category = 'Radiology'";
                      $ress = mysqli_query($con, $sqls);
                      while ($row = mysqli_fetch_assoc($ress)) { 
                      ?>
                  <li><a href="services-details.php?url=<?php echo $row['url']; ?>"><?php echo $row['title']; ?></a></li>
                    <?php }?>
                </ul>
              </div>
            </div>
          </li>
          <li class="drop-downmenu">
            <a href="javascript:void(0)">Neurology<span></span></a>
            <div class="sub-menu-box">
              <div class="full-menu">
                <ul>
                  <?php 
                     $sqls = "SELECT * FROM services WHERE category = 'Neurology'";
                      $ress = mysqli_query($con, $sqls);
                      while ($row = mysqli_fetch_assoc($ress)) { 
                      ?>
                  <li><a href="services-details.php?url=<?php echo $row['url']; ?>"><?php echo $row['title']; ?></a></li>
                    <?php }?>
                </ul>
              </div>
            </div>
          </li>
          <li class="drop-downmenu">
            <a href="javascript:void(0)">Cardiology<span></span></a>
            <div class="sub-menu-box">
              <div class="full-menu">
                <ul>
                  <?php 
                     $sqls = "SELECT * FROM services WHERE category = 'Cardiology'";
                      $ress = mysqli_query($con, $sqls);
                      while ($row = mysqli_fetch_assoc($ress)) { 
                      ?>
                  <li><a href="services-details.php?url=<?php echo $row['url']; ?>"><?php echo $row['title']; ?></a></li>
                    <?php }?>
                </ul>
              </div>
            </div>
          </li>
          <!--<li>-->
          <!--  <a href="genomics/genomics">Genomics<span></span></a>-->
          <!--</li>-->
          <!--<li class="drop-downmenu">-->
          <!--  <a href="javascript:void(0)">Health Packages<span></span></a>-->
          <!--  <div class="sub-menu-box">-->
          <!--    <div class="full-menu">-->
          <!--      <ul>-->
          <!--        <li>-->
          <!--          <a href="health-packages/full-body-checkup-packages"-->
          <!--            >Full Body Checkup Packages</a-->
          <!--          >-->
          <!--        </li>-->
          <!--      </ul>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</li>-->
        </ul>
      </div>
    </div>

    <style>
      /*nav-bar-whitestrip*/
      .nav-linkbox {
        margin-top: -25px;
        transition: all 0.5s ease;
      }
      .nav-inside {
        background: #fff;
        max-width: 1024px;
        margin: 0 auto;
        box-shadow: 0px 5px 16px #0000000d;
      }
      .nav-linkbox ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .nav-linkbox li {
        position: relative;
        transition: all 0.5s ease;
      }
      .nav-linkbox ul li:hover {
        background: #fff;
      }
      .drop-downmenu {
            overflow: hidden; 
        }
      .drop-downmenu:hover {
          /*border : 1px solid #145473;*/
      }
      .nav-linkbox li a {
        display: block;
        padding: 15px 20px;
        color: #fff;
        font-size: var(--font14);
        line-height: 24px;
        margin: 0 10px 0 0;
        position: relative;
      }
      .nav-linkbox ul li:hover a {
        color: #145473;
      }
      .nav-linkbox li.drop-downmenu span {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #fff;
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translate(0, -50%);
        transition: all 0.5s ease;
      }
      .nav-linkbox ul li:hover a span {
        border-top: 6px solid #fff;
      }
      .nav-linkbox li.drop-downmenu:hover span {
        transform: translate(0, -50%) rotate(180deg);
      }
      .nav-linkbox .sub-menu-box {
        position: fixed;
        top: 162px;
        left: 0;
        right: 0;
        width: 100%;
        height: 0;
        z-index: 10;
        overflow: hidden;
      }
      .full-menu {
        position: relative;
        padding: 20px;
        background: #fff;
        box-shadow: 0px 5px 16px #37a9891d;
        max-width: 1024px;
        margin: 0 auto;
      }
      .full-menu ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .full-menu li {
        flex: 0 0 32%;
        max-width: 32%;
        position: relative;
      }
      .full-menu li:after {
        content: "";
        position: absolute;
        left: 0;
        top: 20px;
        height: 7px;
        width: 7px;
        background: #145473;
        border-radius: 50%;
      }
      .full-menu li:hover {
        background: none !important;
      }
      .full-menu li a {
        margin: 0;
        color: #303030 !important;
      }
      .full-menu li:hover a {
        color: #145473 !important;
      }
      .nav-linkbox li.drop-downmenu:hover .sub-menu-box {
        height: auto;
        transition: height 1s;
        overflow: inherit;
      }

      /*fix-header*/
      header.fix-header .nav-linkbox {
        background: #fff;
        box-shadow: 0px 8px 6px -6px #00000029;
      }
      header.fix-header .nav-inside {
        box-shadow: none;
      }
      header.fix-header .color-bg {
        padding: 10px 0 35px;
      }
      header.fix-header .logo {
        width: 280px;
      }
      header.fix-header .search-bar {
        width: 29%;
      }
      header.fix-header .nav-linkbox li a {
        padding: 12px 20px;
      }
      header.fix-header .nav-linkbox .sub-menu-box {
        top: 127px;
      }
      header.fix-header .full-menu {
        padding: 15px 20px;
      }

      /*burger-menu*/
      header .wrapper {
        position: relative;
      }
      .hamburger-icon {
        cursor: pointer;
        z-index: 50;
      }
      .hamburger-icon > span {
        display: inline-block;
        position: relative;
        height: 2px;
        width: 28px;
        border-radius: 1px;
        background: #145473;
        vertical-align: middle;
      }
      .hamburger-icon > span:before,
      .hamburger-icon > span:after {
        display: inline-block;
        position: absolute;
        content: "";
        height: 2px;
        width: 28px;
        border-radius: 1px;
        background: #145473;
        transition: all 200ms;
      }
      .hamburger-icon > span:before {
        top: -9px;
        left: 0;
      }
      .hamburger-icon > span:after {
        top: 9px;
        left: 0;
      }
      .menu-humburger .wrapper {
        position: relative;
        margin-top: 40px;
      }
      .menu-humburger {
        overflow-y: auto;
        visibility: hidden;
        opacity: 0;
        transition: all 500ms ease-in-out;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .menu-humburger:before {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100vh;
        background: #145473;
        background: linear-gradient(
          180deg,
          rgb(55, 148, 169) 0%,
          rgb(33, 142, 169) 100%
        );
        transition: all 500ms ease-in-out;
        clip-path: circle(30px at calc(100% - 65px) 65px);
        visibility: hidden;
      }
      .menu-humburger.open-menu:before {
        visibility: visible;
        clip-path: circle(100%);
      }
      .menu-humburger.open-menu {
        visibility: visible;
        opacity: 1;
        transition: all 500ms ease-in-out;
        z-index: 39;
      }
      .hamburger-icon.closeicon span {
        height: 0;
      }
      .hamburger-icon.closeicon span:after,
      .hamburger-icon.closeicon span:before {
        top: 0px;
        left: 0;
        width: 34px;
        background: #fff;
      }
      .hamburger-icon.closeicon span:after {
        transform: rotate(-45deg);
      }
      .hamburger-icon.closeicon span:before {
        transform: rotate(45deg);
      }
      .links-humburger {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .links-humburger ul li {
        font-size: var(--font30);
        font-weight: 400;
        margin-bottom: 50px;
      }
      .links-humburger ul li a {
        color: #ffffff;
      }
      .side-links {
        background: #eaeaea1f;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        padding: 30px 40px;
        border-radius: 10px;
        margin-top: 20px;
      }
      .caring-logo {
        margin-top: 30px;
        display: none;
      }
      .caring-logo img {
        margin: 0 0 0 auto;
      }
      .extralinks {
        padding: 35px 0;
      }
      .extralinks li {
        width: 50%;
        padding: 0 15px;
        float: left;
        text-align: center;
        font-size: var(--font16);
        line-height: 26px;
      }
      .extralinks li a {
        color: #fff;
      }
      .extralinks li .icon-img {
        height: 60px;
        overflow: hidden;
        margin-bottom: 15px;
      }
      .extralinks li .icon-img img {
        margin: 0 auto;
      }
      .border-bottom {
        border-bottom: 1px solid #fff;
      }
      .copy-txtbx {
        padding: 20px 0;
      }
      .copy-txtbx li {
        float: left;
        width: 40%;
        padding: 0 15px;
        color: #fff;
      }
      .copy-txtbx li:first-child {
        width: 60%;
      }
      .copy-txtbx li span {
        background: url(../images/mail-icon.svg) no-repeat left center;
        padding-left: 25px;
        display: block;
      }
      .copy-txtbx li .copy-txt {
        display: inline-block;
      }
      .copy-txtbx li.whatsapp span {
        background: url(../images/whatsapp-icon.svg) no-repeat left center;
      }
      .social-iconbx {
        padding-top: 20px;
      }
      .social-iconbx h2 {
        font-weight: 400;
        color: #fff;
        font-size: var(--font16);
        margin-bottom: 12px;
        line-height: 26px;
      }
      .social-iconbx li {
        display: inline-block;
        margin-right: 40px;
      }
    </style>
