import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			moves: Array(9).fill(null),
			xIsNext: true,
			isWinner: false,
			winnerLine: null
		}
	}

	/*
	 Клик по ячейке заполянет массив moves
	 */
	handleCellClick = (e) => {
		const indexMove = e.target.dataset.cellNum;
		const xIsNext = this.state.xIsNext ? '×' : '୦';
		const cell = e.target;

		/*
		 Проверяем есть ли содержимое в ячейке и присутствует ли класс clicked
		 если нету то ставим символ хода
		 */
		const moves = this.state.moves.slice();

		if (!cell.innerText && !cell.classList.contains('clicked')) {
			moves[indexMove] = xIsNext;
			cell.innerText = xIsNext;
			cell.classList.add('clicked');
		}

		this.setState({
			moves: moves,
			isWinner: this.isWinner(moves),
			xIsNext: !this.state.xIsNext
		});
	}

	/*
	 Проверка победителя
	 */
	isWinner = (moves) => {
		const winnerLines = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

		for ( let i = 0; i < winnerLines.length; i++) {
			const [a,b,c] = winnerLines[i];

			if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
				this.setState({ winnerLine: winnerLines[i] });
				return {winner: true, winnerLine: winnerLines[i]}
			}
		}
		return null;
	}

	/*
	 Сброс игры
	 очистка ячеек
	 */
	handleReset = (e) => {
		const cells = document.querySelectorAll('.board-cell');

		this.setState({
			moves: Array(9).fill(null),
			xIsNext: true,
			isWinner: false,
			winnerLine: null
		});

		/*
		 чистим содержимое ячеек
		 */
		cells.forEach(cell => {
			cell.innerHTML = '';
			cell.classList.remove('clicked');
		});
	}

	render () {
		const xIsNext = this.state.xIsNext ? '×' : '୦';
		const winner = !this.state.xIsNext ? '×' : '୦';
		const winnerLine = this.state.winnerLine;
		let infoMove = this.state.isWinner ? `Выйграл:` : `Ходит:`;
		let infoWinner = this.state.isWinner ? winner : xIsNext;
		let reset;

		if ( !this.state.isWinner && !this.state.moves.includes(null) )
		{
			infoMove = `Победила... дружба!`;
			infoWinner = '';
			reset = 'reset-game';
		}
		else if (this.state.isWinner) {
			reset = 'reset-game';
		}
		else {
			reset = 'reset-game hide';
		}

		return (
			<div className="container">
				<h1>tic-tac-toe</h1>
				<div className="wrap-game">
					<Board
						isWinner = {this.state.isWinner}
						winnerLine = {winnerLine}
						onClick = {() => this.handleCellClick}
					/>
				</div>
				<div className="game-info"><span>{infoMove}</span><span>{infoWinner}</span></div>
				<button className={reset} onClick={this.handleReset}>Новая игра</button>
			</div>
		)
	}
}