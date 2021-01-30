/**
 * @author sendQueue <Vincent Ullrich>
 *
 *         Further info at Vinii.de or github@vinii.de, file created at 17.01.2021 and last edited 29.01.2021.
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


