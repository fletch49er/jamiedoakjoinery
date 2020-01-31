<?php
/*
 * ========================================================================
 * File 		: policy.php
 * Purpose	: Website policy notices for Jamie Doak Joinery website
 *							Website policies, T&Cs, privacy policy, disclaimer, copyright
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

	//include functions file
	include 'jdj_functions.php';
?>

<?php include 'header.php' ?>

<div id="navbar">
<a href="index.php">home</a>&nbsp;|&nbsp;
<a href="policy.php?policy=termsConditions" title="terms and conditions">terms &amp; conditions</a>&nbsp;|&nbsp;
<a href="policy.php?policy=privacyPolicy" title="privacy policy">privacy policy</a>&nbsp;|&nbsp;
<a href="policy.php?policy=disclaimer" title="web site disclaimer">disclaimer</a>&nbsp;|&nbsp;
<a href="policy.php?policy=copyright" title="copyright notice">copyright</a>
</div> <!-- end navbar -->

<div id="mainbody">
<?php
//function to display relevant policy document
//add navigation as option
function displayPolicy($policy, $policyTitle){
	echo "<h1>$policyTitle</h1>";
	include "data/$policy.txt";
}

//check for existance of a variable
if(empty($_GET['policy'])){
	echo '<h1>ERROR: No document found. Click <a href="index.php" title="home page">home</a> to return.</h1>';
}else{
	// retrieve details sent along with link and set as $policy variable
	$policy = $_GET['policy'];

	//test for policy title value
	switch($policy){
		case 'termsConditions':
			$policyTitle = 'Website usage terms and conditions';
			//invoke function
			displayPolicy($policy, $policyTitle);
			break;
		case 'privacyPolicy':
			$policyTitle = 'Business Privacy Policy';
			//invoke function
			displayPolicy($policy, $policyTitle);
			break;
		case 'disclaimer':
			$policyTitle = 'Web Site Disclaimer';
			//invoke function
			displayPolicy($policy, $policyTitle);
			break;
		case 'copyright':
			$policyTitle = 'Copyright Notice';
			//invoke function
			displayPolicy($policy, $policyTitle);
			break;
			default:
			echo '<h1>ERROR: No document found. Click <a href="index.php" title="home page">home</a> to return.</h1>';
	}
}
?>
</div> <!-- end #mainbody-->

<?php include "footer.php"; ?>