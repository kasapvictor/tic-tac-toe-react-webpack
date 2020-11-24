import React from 'react';

export default class Cell extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			cells: [0, 1, 2, 3, 4, 5, 6, 7, 8]
		}
	}

	renderCell = () => {
		const winnerLine = this.props.winnerLine;

		return this.state.cells.map(cell => {
			let cellClass = this.props.isWinner ? `board-cell clicked` : 'board-cell';

			/*
			 Если есть победная линия
			 то присвоить соответствующим ячейкам класс winner-cell
			 */
			if (winnerLine) {
				if (winnerLine[0] === cell || winnerLine[1] === cell || winnerLine[2] === cell) {
					cellClass = 'board-cell clicked winner-cell';
				}
			}
			return <div key={cell} className={cellClass} data-cell-num={cell} onClick={this.props.onClick()}/>
		})
	}

	render () {
		return (
			this.renderCell()
		)
	}
}