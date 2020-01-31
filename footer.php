<?php
/*
*********************************************************************************
 * File 		: footer.php
 * Purpose	: General footer template for Jamie Doak Joinery website
 *						
 * Author	: Mark Fletcher
 * Date			: 11.07.2016
 *  
 * Notes: 
 *
 * Revision:
 *		
 *
*********************************************************************************
*/
?>
<footer class="clearfix">
<div id="ftrNavbar">
<a href="sitemap.php" title="site map">site map</a>&nbsp;|&nbsp;
<a href="policy.php?policy=termsConditions" title="terms and conditions">terms &amp; conditions</a>&nbsp;|&nbsp;
<a href="policy.php?policy=privacyPolicy" title="privacy policy">privacy policy</a>&nbsp;|&nbsp;
<a href="policy.php?policy=disclaimer" title="web site disclaimer">disclaimer</a>&nbsp;|&nbsp;
<a href="policy.php?policy=copyright" title="copyright notice">copyright</a>
</div> <!-- end #ftrNavbar -->

<div id="copyright">
website copyright &copy; <?php echo date_stamp(2016);?> Jamie Doak Joinery. All rights reserved.
</div><!-- end #copyright -->

<div id ="ftrButtons">
<!-- twitter button -->
<a href="https://www.twitter.com/jdoakjoinery">
<img src="images/twitter-bird-white-on-blue.png" width="25" height="25" title="Follow Me on Twitter" alt="Twitter Button" />
</a>&nbsp;&nbsp;
<!-- facebook button -->
<a href="https://www.facebook.com/JamieDoakJoinery/?fref=ts">
<img src="images/FacebookButton.png" width="25" height="25" title="Follow Me on Facebook" alt="Facebook Button" />
</a>&nbsp;&nbsp;
<!-- linkedin button -->
<a href="http://uk.linkedin.com/in/ ">
<img src="images/LinkedInButton.png" width="25" height="25" title="Follow Me on LinkedIn" alt="LinkedIn Button" />
</a>&nbsp;&nbsp;
<!-- instagram button -->
<a href="https://www.instagram.com/jamiedoakjoinery/">
<img src="images/instagramButton.png" width="25" height="25" title="Follow Me on Instagram" alt="Instagram Button" />
</a>
</div> <!-- end #ftrButtons -->
</footer> <!-- end #footer -->
</div> <!-- end #wrapper -->

<div id="dbmNotice">
<?php include 'dbmNotice.php' ?>
</div> <!-- end #dbmNotice -->
</body>
</html>