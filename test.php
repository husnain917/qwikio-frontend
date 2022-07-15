<h1 class="d-none">RykMall - Responsive Marketplace </h1>
        <!-- Start of Header -->
        <header class="header">
            <div class="header-top">
                <div class="container">
                    <div class="header-left">
                        <p class="welcome-msg">Welcome to RYK Mall message or remove it!</p>
                    </div>
                    <div class="header-right">
                        <div class="dropdown">
                            <a href="#currency">PKR</a>
                            <div class="dropdown-box">
                                <a href="#PKR">PKR</a>
                            </div>
                        </div>
                        <!-- End of DropDown Menu -->

                        <div class="dropdown">
                            <a href="#language"><img src="<?= asset_front(); ?>images/flags/eng.png" alt="ENG Flag" width="14"
                                    height="8" class="dropdown-image" /> ENG</a>
                            <div class="dropdown-box">
                                <a href="#ENG">
                                    <img src="<?= asset_front(); ?>images/flags/eng.png" alt="ENG Flag" width="14" height="8"
                                        class="dropdown-image" />
                                    ENG
                                </a>
                            </div>
                        </div>
                        <!-- End of Dropdown Menu -->
                        <span class="divider d-lg-show"></span>
                        <a target="_blank"  href="<?= base_url('blog')?>" class="d-lg-show">Blog</a>
                        <a href="<?= base_url('contact-us')?>" class="d-lg-show">Contact Us</a>
                        <a href="<?= base_url('login')?>" class="d-lg-show">My Account</a>
                        <a href="<?= base_url('login')?>" class="d-lg-show"><i class="w-icon-account"></i>Sign In</a>
                        <span class="delimiter d-lg-show">/</span>
                        <a href="<?= base_url('sign-up')?>" class="ml-0 d-lg-show">Register</a>
                    </div>
                </div>
            </div>
            <!-- End of Header Top -->

            <div class="header-middle">
                <div class="container">
                    <div class="header-left mr-md-4">
                        <a href="#" class="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle">
                        </a>
                        <a href="<?= base_url(); ?>" class="logo ml-lg-0">
                            <img src="<?= asset_front(); ?>images/logo.png" alt="logo" width="144" height="45" />
                        </a>
                        <form method="get" action="#"
                            class="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
                            <div class="select-box">
                                <select id="category" name="category">
                                    <option value="">All Categories</option>
                                    <option value="4">Fashion</option>
                                    <option value="5">Furniture</option>
                                    <option value="6">Shoes</option>
                                    <option value="7">Sports</option>
                                    <option value="8">Games</option>
                                    <option value="9">Computers</option>
                                    <option value="10">Electronics</option>
                                    <option value="11">Kitchen</option>
                                    <option value="12">Clothing</option>
                                </select>
                            </div>
                            <input type="text" class="form-control" name="search" id="search" placeholder="Search in..."
                                required />
                            <button class="btn btn-search" type="submit"><i class="w-icon-search"></i>
                            </button>
                        </form>
                    </div>
                    <div class="header-right ml-4">
                        <div class="header-call d-xs-show d-lg-flex align-items-center">
                            <a href="tel:#" class="w-icon-call"></a>
                            <div class="call-info d-lg-show">
                                <h4 class="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                                    <a href="mailto:#" class="text-capitalize">Live Chat</a> or :</h4>
                                <a href="tel:#" class="phone-number font-weight-bolder ls-50"> 0685-884505</a>
                            </div>
                        </div>
                        <!-- <a class="wishlist label-down link d-xs-show" href="wishlist.html">
                            <i class="w-icon-heart"></i>
                            <span class="wishlist-label d-lg-show">Wishlist</span>
                        </a>
                        <a class="compare label-down link d-xs-show" href="compare.html">
                            <i class="w-icon-compare"></i>
                            <span class="compare-label d-lg-show">Compare</span>
                        </a> -->
                        <div class="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                            <div class="cart-overlay"></div>
                            <a href="#" class="cart-toggle label-down link">
                                <i class="w-icon-cart">
                                    <span class="cart-count">2</span>
                                </i>
                                <span class="cart-label">Cart</span>
                            </a>
                            <div class="dropdown-box">
                                <div class="cart-header">
                                    <span>Shopping Cart</span>
                                    <a href="#" class="btn-close">Close<i class="w-icon-long-arrow-right"></i></a>
                                </div>

                                <div class="products">
                                    <div class="product product-cart">
                                        <div class="product-detail">
                                            <a href="product-default.html" class="product-name">Beige knitted
                                                elas<br>tic
                                                runner shoes</a>
                                            <div class="price-box">
                                                <span class="product-quantity">1</span>
                                                <span class="product-price">$25.68</span>
                                            </div>
                                        </div>
                                        <figure class="product-media">
                                            <a href="product-default.html">
                                                <img src="<?= asset_front(); ?>images/cart/product-1.jpg" alt="product" height="84"
                                                    width="94" />
                                            </a>
                                        </figure>
                                        <button class="btn btn-link btn-close" aria-label="button">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>

                                    <div class="product product-cart">
                                        <div class="product-detail">
                                            <a href="product-default.html" class="product-name">Blue utility
                                                pina<br>fore
                                                denim dress</a>
                                            <div class="price-box">
                                                <span class="product-quantity">1</span>
                                                <span class="product-price">$32.99</span>
                                            </div>
                                        </div>
                                        <figure class="product-media">
                                            <a href="product-default.html">
                                                <img src="<?= asset_front(); ?>images/cart/product-2.jpg" alt="product" width="84"
                                                    height="94" />
                                            </a>
                                        </figure>
                                        <button class="btn btn-link btn-close" aria-label="button">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="cart-total">
                                    <label>Subtotal:</label>
                                    <span class="price">$58.67</span>
                                </div>

                                <div class="cart-action">
                                    <a href="cart.html" class="btn btn-dark btn-outline btn-rounded">View Cart</a>
                                    <a href="checkout.html" class="btn btn-primary  btn-rounded">Checkout</a>
                                </div>
                            </div>
                            <!-- End of Dropdown Box -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Header Middle -->

            <div class="header-bottom sticky-content fix-top sticky-header has-dropdown">
                <div class="container">
                    <div class="inner-wrap">
                        <div class="header-left">
                            <div class="dropdown category-dropdown has-border" data-visible="true">
                                <a href="#" class="category-toggle text-dark" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true" data-display="static"
                                    title="Browse Categories">
                                    <i class="w-icon-category"></i>
                                    <span>Browse Categories</span>
                                </a>

                                <div class="dropdown-box">
                                    <ul class="menu vertical-menu category-menu">



 <?php $main = $this->db->get('hx_main_cateogries')->result_array(); foreach ($main as $mai){

$main_id = $mai['mca_id'];
?>

                                        <li>
                                            <a href="<?php echo base_url();?>category/<?php echo $mai['mca_slug'];?>">
                                                <i class="w-icon-furniture"></i><?php echo $mai['mca_name'];?>
                                            </a>
                                            <ul class="megamenu type2">
                                                <li class="row">

             <?php $mega = $this->db->get_where('hx_mega_categories', array('mca_id' => $main_id))->result_array(); foreach ($mega as $meg){  $mega_id = $meg['meg_id'];
            ?>         
                 
                                                    <div class="col-md-3 col-lg-3 col-6">
                                                        <h4 class="menu-title"><a href="<?php echo base_url();?>category/<?php echo $mai['mca_slug'];?>/<?php echo $meg['meg_slug'];?>"><?php echo $meg['meg_name'];?></a></h4>
                                                        <hr class="divider" />
                                                        <ul>

                     <?php $sub = $this->db->get_where('hx_sub_categories', array('meg_id' => $mega_id))->result_array(); foreach ($sub as $suc){  $sub_id = $suc['meg_id'];
                     ?>  

                                                            <li><a href="<?php echo base_url();?>category/<?php echo $mai['mca_slug'];?>/<?php echo $meg['meg_slug'];?>/<?php echo $suc['suc_slug'];?>"><?php echo $suc['suc_name']; ?></a>
                                                            </li>

                    <?php } ?>
                                                         </ul>
                                                    </div>

             <?php } ?>
          

          

             </li>

        <!-- <li class="row">
            <div class="col-6">
                <div class="banner banner-fixed menu-banner5 br-xs">
                    <figure>
                        <img src="<?= asset_front(); ?>images/menu/banner-5.jpg" alt="Banner"
                            width="410" height="123"
                            style="background-color: #D2D2D2;" />
                    </figure>
                    <div class="banner-content text-right y-50">
                        <h4
                            class="banner-subtitle font-weight-normal text-default text-capitalize">
                            New Arrivals</h4>
                        <h3
                            class="banner-title font-weight-bolder text-capitalize ls-normal">
                            Amazing Sofa</h3>
                        <div
                            class="banner-price-info font-weight-normal ls-normal">
                            Starting at <strong>$125.00</strong></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="banner banner-fixed menu-banner5 br-xs">
                    <figure>
                        <img src="<?= asset_front(); ?>images/menu/banner-6.jpg" alt="Banner"
                            width="410" height="123"
                            style="background-color: #9F9888;" />
                    </figure>
                    <div class="banner-content y-50">
                        <h4
                            class="banner-subtitle font-weight-normal text-white text-capitalize">
                            Best Seller</h4>
                        <h3
                            class="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                            Chair &amp; Lamp</h3>
                        <div
                            class="banner-price-info font-weight-normal ls-normal text-white">
                            From <strong>$165.00</strong></div>
                    </div>
                </div>
            </div>
        </li> -->
</ul>
</li>

<?php } ?>

<!-- 
                                        <li>
                                            <a href="shop-fullwidth-banner.html">
                                                <i class="w-icon-furniture"></i>Furniture
                                            </a>
                                            <ul class="megamenu type2">
                                                <li class="row">
                                                    <div class="col-md-3 col-lg-3 col-6">
                                                        <h4 class="menu-title">Furniture</h4>
                                                        <hr class="divider" />
                                                        <ul>
                                                            <li><a href="shop-fullwidth-banner.html">Sofas & Couches</a>
                                                            </li>
                                                            <li><a href="shop-fullwidth-banner.html">Armchairs</a></li>
                                                            <li><a href="shop-fullwidth-banner.html">Bed Frames</a></li>
                                                            <li><a href="shop-fullwidth-banner.html">Beside Tables</a>
                                                            </li>
                                                            <li><a href="shop-fullwidth-banner.html">Dressing Tables</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li class="row">
                                                    <div class="col-6">
                                                        <div class="banner banner-fixed menu-banner5 br-xs">
                                                            <figure>
                                                                <img src="<?= asset_front(); ?>images/menu/banner-5.jpg" alt="Banner"
                                                                    width="410" height="123"
                                                                    style="background-color: #D2D2D2;" />
                                                            </figure>
                                                            <div class="banner-content text-right y-50">
                                                                <h4
                                                                    class="banner-subtitle font-weight-normal text-default text-capitalize">
                                                                    New Arrivals</h4>
                                                                <h3
                                                                    class="banner-title font-weight-bolder text-capitalize ls-normal">
                                                                    Amazing Sofa</h3>
                                                                <div
                                                                    class="banner-price-info font-weight-normal ls-normal">
                                                                    Starting at <strong>$125.00</strong></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="banner banner-fixed menu-banner5 br-xs">
                                                            <figure>
                                                                <img src="<?= asset_front(); ?>images/menu/banner-6.jpg" alt="Banner"
                                                                    width="410" height="123"
                                                                    style="background-color: #9F9888;" />
                                                            </figure>
                                                            <div class="banner-content y-50">
                                                                <h4
                                                                    class="banner-subtitle font-weight-normal text-white text-capitalize">
                                                                    Best Seller</h4>
                                                                <h3
                                                                    class="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                                                    Chair &amp; Lamp</h3>
                                                                <div
                                                                    class="banner-price-info font-weight-normal ls-normal text-white">
                                                                    From <strong>$165.00</strong></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li> -->


                                        <li>
                                            <a href="shop-banner-sidebar.html"
                                                class="font-weight-bold text-primary text-uppercase ls-25">
                                                View All Categories<i class="w-icon-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <nav class="main-nav">
                                <ul class="menu active-underline">
                                    <li class="active">
                                        <a href="<?= base_url(); ?>">Home</a>
                                    </li>
                                    <li class="">
                                        <a href="">Services</a>
                                        <ul>

                                            <li><a target="_blank" href="http://rykfoodies.com/">RYK Foodies</a></li>
                                            <li><a target="_blank" href="http://rykcourier.com/">RYK Couriers</a></li>
                                        </ul>
                                    </li>
                                    <li class="">
                                        <a href="<?= base_url('about-us')?>">About Us</a>
                                    </li>
                                    <li class="">
                                        <a target="_blank"  href="<?= base_url('blog')?>">Blog</a>
                                    </li>
                                    <li class="">
                                        <a href="<?= base_url('contact-us')?>">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-right">
                            <a href="#" class="d-xl-show"><i class="w-icon-map-marker mr-1"></i>Track Order</a>
                            <a href="#"><i class="w-icon-sale"></i>Daily Deals</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- End of Header -->
