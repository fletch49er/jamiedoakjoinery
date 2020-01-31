<?php
/*
 * ========================================================================
 * File 		: index.php
 * Purpose	: Home Page for Jamie Doak Joinery website
 *						
 * Author	: Mark Fletcher
 * Date			: 11.07.2016
 *  
 * Notes		: 
 *
 * Revision	:
 *		
 *
 * ========================================================================*/
//array of example photos
$example_photos =  array(
	'kitchens' => 4,
	'balustrades' => 3,
	'flooring' => 2,
	'doors' => 5
); 

//include functions file
include 'jdj_functions.php';

include 'header.php';
?>

<div id="navbar">
<?php include 'navbar.php'; ?>
</div> <!-- end #navbar -->

<section id="about">
<h1>Welcome to Jamie Doak Joinery</h1>
<p><b class="highlight">Jamie Doak Joinery</b> was established in 2015...<!--Lorem ipsum dolor sit amet, prompta facilisi invenire ad per, duo ex elit movet. Adhuc vidisse nonumes in eam, mei an euismod disputationi. Vix cibo saepe prompta te, in eam sonet doming eloquentiam. Nisl propriae molestiae te vel, ea sed autem idque regione, admodum ceteros partiendo nec ad.</p>
<p>Discere salutandi reprehendunt ei duo, ius adhuc diceret cu. At tempor persius eos, everti habemus appetere te ius, at duo reque blandit. At sonet saperet duo. Pri vocibus luptatum et. Harum nostrum an has, vix legere referrentur in.</p>
<p>Graece tractatos ex vis, meis semper reprimique eam ea. Etiam sonet nonumes eos ad. Omnes inermis honestatis no ius. Eos amet aperiri sententiae id, velit consul melius te mea, persius voluptua complectitur quo ex. Case quando sea in, est viderer impedit ad. Cu porro oratio efficiantur vim.</p>
<p>No nam odio iudico. Quis veritus appareat per ut, mei ea sint velit, eam id nostrud percipitur quaerendum. Ex autem labores similique nam, idque sadipscing eam ei. Quo te case accusam facilisi, quot solet sensibus ea has. Ferri nemore sea cu.</p>
<p>Inani comprehensam no mei, at mea agam clita. Mollis audiam vis et, te vim duis accusam principes. Solum aliquid mea at, ut verear invidunt consequuntur eum. Oblique deleniti electram te sea, eu justo viderer fuisset mea. Quo viris tincidunt adolescens ei.--></p>
</section><!-- end #heading -->

<section id="news" class="clearfix">
<h2>News</h2>

<div id="social_media">
<div id="twitter">
	<a class="twitter-timeline" href="https://twitter.com/jdoakjoinery">Tweets by jdoakjoinery</a>
	<script async src="//platform.twitter.com/widgets.js"></script>
</div><!-- end #twitter -->
<!--
<div id="facebook">
	facebook
</div> --><!-- end #facebook -->
<!--
<div id="linkedin">
	linkedin
</div> --><!-- end #linkedin -->
</div><!-- end #social_media -->

<div class="returnLink">
	<a href="#navbar">Back to top</a>
</div><!-- end .returnLink -->
</section><!-- end #news -->

<section id="gallery">
<h2>Gallery of Work</h2>
<!--<div id="instagram">
	<iframe src="http://www.instagram-widget.com/jamiedoakjoinery.html?3,h,3,1,0,150,5,170,480" style="height: 480px; width: 170px; border: 1px solid #CCCCCC;" sandbox="allow-same-origin allow-scripts"></iframe>
</div> --><!-- end #instagram -->

<?php
	foreach($example_photos as $key => $value) {
		$title = $key;
		echo '<div id="'.$key.'" class="clearfix">'.PHP_EOL;
		echo '<h3>'.ucfirst($title).'</h3>'.PHP_EOL;
		for($x = 1; $x <= $value; $x++) {
			echo '<a href="images/photos/'.$key.$x.'_large.jpeg" target="_blank"><img class="left" src="images/photos/'.$key.$x.'.jpeg" alt="Example No.'.$x.' - '.ucfirst($key).'" /></a>'.PHP_EOL;
		}
		echo '</div><!-- end #'.$key.' -->'.PHP_EOL;
	}
?>

<div class="returnLink">
	<a href="#navbar">Back to top</a>
</div>
</section><!-- end #about -->

<section id="contact">
<h2>Contact Us</h2>
<p>
Contact details:<br/><br />
Phone: 07813&nbsp;624692<br />
Email: <a class="email" href="mailto:info@jamiedoakjoinery.co.uk">info@jamiedoakjoinery.co.uk</a>
</p>
<div class="returnLink">
	<a href="#navbar">Back to top</a>
</div>
</section><!-- end #contact -->
		
<?php include 'footer.php'; ?>