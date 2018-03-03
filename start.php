<?php
//This page is requested by the JavaScript, it stops the motors
//Getting and using values
if (isset ( $_GET["num"] )) {
	$num = strip_tags ( $_GET["num"] );

	//set the gpio's mode to output
	//system("./script/start.sh");

	//For Forward Motion
	if ( $num == 0) {
		//set the gpio to high and wait for a second
        system("./script/forward.sh");
	}
	//For Backward Rotation
	elseif ( $num == 1) {
        system("./script/backward.sh");
	}
	//For Left Rotation
	elseif ( $num == 2) {
        system("./script/left.sh");
	}
	//For Right Motion
	elseif ( $num == 3) {
        system("./script/right.sh");
	}
	else {
		echo("Fail!");
	}
} //print fail if cannot use values
else {
	echo ("Fail!");
}
?>
