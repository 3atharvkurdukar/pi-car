//This function initializes all the pins to OUT mode
function initialize() {
	var up = document.getElementById('up');
	var down = document.getElementById('down');
	var left = document.getElementById('left');
	var right = document.getElementById('right');

	if (isTouchDevice()) {
		up.addEventListener('touchstart', startTouchUp, false);
		up.addEventListener('touchend', endTouchUp, false);
		down.addEventListener('touchstart', startTouchDown, false);
		down.addEventListener('touchend', endTouchDown, false);
		left.addEventListener('touchstart', startTouchLeft, false);
		left.addEventListener('touchend', endTouchLeft, false);
		right.addEventListener('touchstart', startTouchRight, false);
		right.addEventListener('touchend', endTouchRight, false);
	}
	else {
		up.addEventListener('mousedown', startTouchUp, false);
		up.addEventListener('mouseup', endTouchUp, false);
		down.addEventListener('mousedown', startTouchDown, false);
		down.addEventListener('mouseup', endTouchDown, false);
		left.addEventListener('mousedown', startTouchLeft, false);
		left.addEventListener('mouseup', endTouchLeft, false);
		right.addEventListener('mousedown', startTouchRight, false);
		right.addEventListener('mouseup', endTouchRight, false);
	}
	var request = new XMLHttpRequest();
	request.open( "GET" , "init.php", true);
	request.send();
}
function isTouchDevice() {
	return !!('ontouchstart' in window);
}
function startTouchUp(e) {
	e.preventDefault();
	up.style.backgroundImage= "url('img/pressed/up.png')";
	start(0);
}
function endTouchUp(e) {
	e.preventDefault();
	up.style.backgroundImage= "url('img/up.png')";
	stop();
}
function startTouchDown(e) {
	e.preventDefault();
	down.style.backgroundImage= "url('img/pressed/down.png')";
	start(1);
}
function endTouchDown(e) {
	e.preventDefault();
	down.style.backgroundImage= "url('img/down.png')";
	stop();
}
function startTouchLeft(e) {
	e.preventDefault();
	left.style.backgroundImage= "url('img/pressed/left.png')";
	start(2);
}
function endTouchLeft(e) {
	e.preventDefault();
	left.style.backgroundImage= "url('img/left.png')";
	stop();
}
function startTouchRight(e) {
	e.preventDefault();
	right.style.backgroundImage= "url('img/pressed/right.png')";
	start(3);
}
function endTouchRight(e) {
	e.preventDefault();
	right.style.backgroundImage= "url('img/right.png')";
	stop();
}
function shutdown() {
	var request = new XMLHttpRequest();
	request.open( "GET" , "shutdown.php", true);
	request.send();
	return 0;
}
function restart() {
	var request = new XMLHttpRequest();
	request.open( "GET" , "restart.php", true);
	request.send();
	return 0;
}
//This function is asking for start.php, receiving to start the motors
function start(num) {
	//send the number to start.php for changes
	//this is the http request
	var request = new XMLHttpRequest();
	request.open( "GET" , "start.php?num=" + num, true);
	request.send();
	return 0;
}

//This function is asking for start.php, receiving to start the motors
function stop(num) {
	//this is the http request
	var request = new XMLHttpRequest();
	request.open( "GET" , "stop.php", true);
	request.send();
	return 0;
}
