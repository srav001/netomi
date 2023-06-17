import CardItem from './CardItem.react';
import { resetCards } from '../../utils/card';
import { initClickHandler } from './cardAction';
import gameData from '../../utils/app.mock';
import { shuffle } from '../../utils/shuffle';
import './styles.css';
import { useState } from 'react';

export default function () {
	const [cardList, setCardList] = useState(shuffle(gameData));
	initClickHandler({ cardList, setCardList });

	function resetGame() {
		setCardList(resetCards());
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<section className="-mt-4 grid grid-cols-4 gap-4">
				{cardList.map((item, itemIndex) => (
					<CardItem key={itemIndex} {...item}></CardItem>
				))}
			</section>
			<button onClick={resetGame} className="btn btn-react mt-10">
				Reset
			</button>
		</div>
	);
}
