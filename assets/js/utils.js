/**
 * @author sendQueue <Vincent Ullrich>
 *
 *         Further info at Vinii.de or github@vinii.de, file created at 17.01.2021 and last edited 01.02.2021.
 * 
 */

function newCordula(factor) {
	var cordula = document.createElement("img");
	cordula.setAttribute("src", "assets/img/c.png");
	cordula.setAttribute("height", factor);
	cordula.setAttribute("width", factor);
	cordula.setAttribute("id", "cordula");
	return cordula;
}

function newPlayer(factor) {
	var player = document.createElement("img");
	player.setAttribute("src", "assets/img/ss.png");
	player.setAttribute("height", factor);
	player.setAttribute("width", factor);
	player.setAttribute("id", "player");
	return player;
}

function round(float){
	return Math.round(float);
}

function getNextMove(pI, gI, width) {
	var gXNode = Math.round((gI / width - parseInt(gI / width)) * width);
	var pXNode = Math.round((pI / width - parseInt(pI / width)) * width);
	var gYNode = parseInt(gI / width);
	var pYNode = parseInt(pI / width)
	let xDir = 0;
	if(gXNode > pXNode){
		xDir = -1;
	}else if(gXNode < pXNode){
		xDir = 1;
	}

	let yDir = 0;
	if(gYNode > pYNode){
		yDir = -width;
	}else if(gYNode < pYNode) {
		yDir = width;
	}
	var betterDirs = [xDir, xDir, xDir, -xDir, yDir, yDir, yDir, -yDir];
	return betterDirs[Math.floor(Math.random() * betterDirs.length)]
}

function getDis(pI, gI, width) {
	var gXNode = Math.round((gI / width - parseInt(gI / width)) * width);
	var pXNode = Math.round((pI / width - parseInt(pI / width)) * width);
	var gYNode = parseInt(gI / width);
	var pYNode = parseInt(pI / width);

	var xDiff = Math.abs(gXNode - pXNode);
	var yDiff = Math.abs(gYNode - pYNode);
	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}




