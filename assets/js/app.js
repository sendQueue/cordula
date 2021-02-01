/**
 * @author sendQueue <Vincent Ullrich>
 *
 *         Further info at Vinii.de or github@vinii.de, file created at 17.01.2021 and last edited 01.02.2021.
 * 
 */

// 28x28
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
var layout = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, //---
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];//1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8


var needToWin = 0;
var count = 0;

var xDown = null;
var yDown = null;

var unscareTime;
let gameOver = false;

document.addEventListener("DOMContentLoaded", () => {
	const fW = parseInt((document.documentElement.clientWidth - 28) / 28);
	const fH = parseInt((document.documentElement.clientHeight - 28) / 28);

	const factor = Math.min(fW, fH);
	console.log(factor);
	var newWidth = factor * 28;

	var style = document.createElement('style');
	style.innerHTML = `
	.grid {
		height: ${newWidth}px;
		width: ${newWidth}px;
	}
	.grid div {
		width: ${factor}px;
		height: ${factor}px;
	  }
	`;
	document.head.appendChild(style);

	const player = newPlayer(factor);
	const width = 28;
	let score = 0;
	const scoreDisplay = document.getElementById("score");
	const highscore = document.getElementById("highscore");
	const grid = document.querySelector(".grid");
	const squares = [];
	var pelletPositions = [];

	const pacmanSpeed = 150;
	//ghost index = 680
	let pacmanCurrentIndex = 435;

	function newPellet() {
		var all = ["green", "blue", "red", "purple", "orange"];
		var img = document.createElement("img");
		img.setAttribute("src", "assets/img/" + all[parseInt(getRandom(0, all.length - 1))] + ".png");
		img.setAttribute("height", parseInt(factor * 0.72));
		img.setAttribute("width", parseInt(factor * 0.72));
		return img;
	}

	function createBoard() {
		for (let i = 0; i < layout.length; i++) {
			const square = document.createElement("div");
			grid.appendChild(square);
			squares.push(square);

			if (layout[i] === 0) {
				squares[i].classList.add("pac-dot");
				pelletPositions.push(i);
				needToWin++;
			} else if (layout[i] === 1) {
				squares[i].classList.add("wall");
			} else if (layout[i] === 2) {
				squares[i].classList.add("ghost-lair");
			} else if (layout[i] === 3) {
				squares[i].classList.add("power-pellet");
				squares[i].appendChild(newPellet());
			}
		}
	}
	createBoard();

	let pacmanVelocity = {
		x: 0,
		y: 0,
	};

	squares[pacmanCurrentIndex].classList.add("pac-man");
	squares[pacmanCurrentIndex].appendChild(player);

	function setPacmanVelocityTouch(evt) {

		if (!xDown || !yDown) {
			return;
		}

		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;


		if (Math.abs(xDiff) * 0.75 > Math.abs(yDiff)) {
			if (xDiff > 0) {
				/* left swipe */
				if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains(
					"wall") && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")) {
					pacmanVelocity.y = 0;
					pacmanVelocity.x = 1;
				}
			} else {
				/* right swipe */
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains(
					"wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")) {
					pacmanVelocity.y = 1;
					pacmanVelocity.x = 0;
				}

			}
		} else {
			if (yDiff > 0) {
				/* up swipe */
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains(
					"wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) {
					pacmanVelocity.y = 0;
					pacmanVelocity.x = -1;
				}
			} else {
				/* down swipe */
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList
					.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
					pacmanVelocity.y = -1;
					pacmanVelocity.x = 0;
				}
			}
		}

		// xDown = null;
		// yDown = null;
		checkForGameOver();
	};
	function setPacmanVelocityKeys(e) {
		switch (e.keyCode) {
			case 37:
				if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains(
					"wall") && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")) {
					pacmanVelocity.y = 0;
					pacmanVelocity.x = 1;
				}
				break;
			case 38:
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains(
					"wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) {
					pacmanVelocity.y = 0;
					pacmanVelocity.x = -1;
				}
				break;
			case 39:
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains(
					"wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")) {
					pacmanVelocity.y = 1;
					pacmanVelocity.x = 0;
				}
				break;
			case 40:
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList
					.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
					pacmanVelocity.y = -1;
					pacmanVelocity.x = 0;
				}
				break;
		}
		checkForGameOver();
	}


	function movePacman() {
		squares[pacmanCurrentIndex].classList.remove("pac-man");
		setInterval(() => {
			if (pacmanVelocity.x === 1 && pacmanVelocity.y == 0) {
				if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains(
					"wall") && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")) {
					squares[pacmanCurrentIndex].classList.remove("pac-man");
					pacmanCurrentIndex -= 1;
				}
				if (squares[pacmanCurrentIndex - 1] === squares[363]) {
					pacmanCurrentIndex = 391;
				}
			}
			if (pacmanVelocity.x === -1 && pacmanVelocity.y == 0) {
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains(
					"wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) {
					squares[pacmanCurrentIndex].classList.remove("pac-man");
					pacmanCurrentIndex -= width;
				}
			}
			if (pacmanVelocity.x === 0 && pacmanVelocity.y == 1) {
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains(
					"wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")) {
					squares[pacmanCurrentIndex].classList.remove("pac-man");
					pacmanCurrentIndex += 1;
				}
				if (squares[pacmanCurrentIndex + 1] === squares[392]) {
					pacmanCurrentIndex = 364;
				}
			}
			if (pacmanVelocity.x === 0 && pacmanVelocity.y == -1) {
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList
					.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
				) {
					document.getElementsByClassName("pac-man").innerHTML = "";
					squares[pacmanCurrentIndex].classList.remove("pac-man");
					pacmanCurrentIndex += width;
				}
			}
			squares[pacmanCurrentIndex].classList.add("pac-man");
			squares[pacmanCurrentIndex].appendChild(player);
			pacDotEaten();
			powerPelletEaten();
		}, pacmanSpeed);
	}

	function pacDotEaten() {
		if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
			score++;
			if (score < 50) {
				document.getElementById("score").classList.add("low-score");
			} else if (score > 100) {
				document.getElementById("score").classList.add("mid-score");
			} else if (score > 200) {
				document.getElementById("score").classList.add("high-score");
			}
			scoreDisplay.innerHTML = score;
			squares[pacmanCurrentIndex].classList.remove("pac-dot");
			checkForWin();
		}
	}

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function powerPelletEaten() {
		if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
			score += 10;
			var newPallet = pelletPositions[parseInt(getRandom(0, pelletPositions.length - 1))];
			if (squares[newPallet].classList.contains("pac-dot")) {
				squares[newPallet].classList.remove("pac-dot");
			}
			if (unscareTime != null) {
				clearTimeout(unscareTime);
			}
			squares[newPallet].classList.add("power-pellet");
			squares[newPallet].appendChild(newPellet());
			ghosts.forEach((ghost) => (ghost.isScared = true));
			unscareTime = setTimeout(unScareGhosts, Math.max(4000, 10000 - count * 20));
			squares[pacmanCurrentIndex].classList.remove("power-pellet");
			squares[pacmanCurrentIndex].innerHTML = "";
			checkForWin();
		}
	}

	function unScareGhosts() {
		ghosts.forEach((ghost) => (ghost.isScared = false));
	}

	class Ghost {
		constructor(className, startIndex, speed, icon) {
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.isScared = false;
			this.timerId = NaN;
			this.icon = icon;
		}
	}

	ghosts = [
		new Ghost("Cordula", 627, 250, newCordula(factor)),
	];

	ghosts.forEach((ghost) => {
		squares[ghost.currentIndex].classList.add(ghost.className);
		squares[ghost.currentIndex].classList.add("ghost");
		squares[ghost.currentIndex].appendChild(ghost.icon);
	});

	function moveGhost(ghost) {
		const directions = [-1, +1, width, -width];
		let direction = directions[Math.floor(Math.random() * directions.length)];

		ghost.timerId = setInterval(function () {

			if (!squares[ghost.currentIndex + direction].classList.contains("ghost") && !squares[ghost.currentIndex +
				direction].classList.contains("wall")) {

				squares[ghost.currentIndex].classList.remove(ghost.className);
				squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
				var nD = getNextMove(pacmanCurrentIndex, ghost.currentIndex, width);
				if (!squares[ghost.currentIndex +
					nD].classList.contains("wall") && getDis(pacmanCurrentIndex, ghost.currentIndex, width) > getDis(pacmanCurrentIndex, ghost.currentIndex + nD, width) + ghost.isScared ? 2 : 0
				) {
					direction = nD;
				}

				ghost.currentIndex += direction;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");

			} else {
				// direction = directions[Math.floor(Math.random() * directions.length)];
				var nD = getNextMove(pacmanCurrentIndex, ghost.currentIndex, width);
				console.log(nD)
				direction = nD;
				// console.log(Math.round((ghost.currentIndex / 28 - parseInt(ghost.currentIndex / 28)) * width));
				// console.log(Math.round((pacmanCurrentIndex / 28 - parseInt(pacmanCurrentIndex / 28)) * width));
			}

			if (ghost.isScared) {
				squares[ghost.currentIndex].classList.add("scared-ghost");
				ghost.icon.setAttribute("src", "assets/img/ca.png");
			} else {
				ghost.icon.setAttribute("src", "assets/img/c.png");
			}

			if (ghost.isScared && (squares[ghost.currentIndex].classList.contains("pac-man") || squares[ghost.currentIndex + direction].classList.contains("pac-man") || squares[ghost.currentIndex - direction].classList.contains("pac-man"))) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
				ghost.currentIndex = pelletPositions[parseInt(getRandom(0, pelletPositions.length - 1))];;
				score += 100;
				scoreDisplay.innerHTML = score;
				count++;

				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
			}
			ghost.speed -= 5;

			squares[ghost.currentIndex].appendChild(ghost.icon);
			checkForGameOver();
		}, ghost.speed);
		console.log(ghost.speed);
	}

	function checkForGameOver() {
		if (squares[pacmanCurrentIndex].classList.contains("ghost") && !squares[pacmanCurrentIndex].classList
			.contains("scared-ghost")) {
			gameOver = true;
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));

			document.removeEventListener("keyup", movePacman);
			document.getElementById("game-over-screen").style.display = "flex";

			pacmanVelocity.x = 0;
			pacmanVelocity.y = 0;

			if (localStorage.getItem("cordula_score") != null) {
				if (localStorage.getItem("cordula_score") < score) {
					localStorage.setItem("cordula_score", score);
				}
				highscore.innerHTML = localStorage.getItem("cordula_score");
			} else {
				localStorage.setItem("cordula_score", score);
			}

			document.addEventListener("keydown", restart);
		}
	}

	function checkForWin() {
		if (count == 100) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener("keyup", movePacman);
			document.getElementById("you-won-screen").style.display = "flex";

			pacmanVelocity.x = 0;
			pacmanVelocity.y = 0;

			setTimeout(function () {
				window.location.reload();
			}, 3500);
		}
	}
	function restart(event) {
		if (event.keyCode === 13 && gameOver) {
			document.removeEventListener("keydown", restart);
			window.location.reload();
		}
	}
	function startGame(event) {
		if (event.keyCode === 13) {
			document.removeEventListener("keydown", startGame);
			document.getElementById("start-screen").style.display = "none";
			document.addEventListener("keydown", setPacmanVelocityKeys);

			movePacman();
			ghosts.forEach((ghost) => moveGhost(ghost));
		}
	}

	function handleTouchStart(evt) {
		xDown = evt.touches[0].clientX;
		yDown = evt.touches[0].clientY;
		console.log("start" + yDown);
	};

	function startGameTouch(event) {
		document.removeEventListener("touchstart", startGameTouch);
		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchmove', setPacmanVelocityTouch, false);
		document.getElementById("start-screen").style.display = "none";

		movePacman();
		ghosts.forEach((ghost) => moveGhost(ghost));
	}

	document.addEventListener("keydown", startGame);
	document.addEventListener('touchstart', startGameTouch, false);
});
