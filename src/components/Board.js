import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {

	render () {
		return (
			<div className="game-board">
				<Cell
					isWinner = { this.props.isWinner }
					winnerLine = { this.props.winnerLine }
					onClick = { () => this.props.onClick() }
				/>
			</div>
		)
	}
}