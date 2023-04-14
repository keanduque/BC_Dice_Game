/**
 *
 * Title : Dice Challenge
 * Author: Kean Duque
 *
 */

"use strict";

class Dice {
	constructor() {
		const titleHolder = document.querySelector("h3");
		const player1 = this.randomImage("img1");
		const player2 = this.randomImage("img2");

		titleHolder.innerHTML = this.checkWinner(player1, player2);
	}

	checkWinner(player1, player2) {
		let playerWins = "";

		playerWins =
			player1 > player2 ? `🏆 Player 1 Wins!` : "Player 2 Wins! 🏆";

		if (player1 === player2) playerWins = "Draw!";

		return playerWins;
	}

	randomizeNumber() {
		let randomNum = Math.random();
		randomNum = Math.ceil(randomNum * 6);

		return randomNum;
	}

	randomImage(className) {
		let randomNumber = this.randomizeNumber();
		let randomDiceImage = `dice${randomNumber}.png`;
		let imgSrc = `images/${randomDiceImage}`;
		let queryImg = document.querySelector(`.${className}`);

		queryImg.setAttribute("src", imgSrc);

		return randomNumber;
	}
}

const dice = new Dice();
