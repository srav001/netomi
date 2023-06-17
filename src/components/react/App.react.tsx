import CardItem from './CardItem.react';
import gameData from '../../utils/app.mock';
import { shuffle } from '../../utils/shuffle';
import { activateCard, resetCards } from '../../utils/card';
import { useState } from 'react';
import './styles.css';

export default function () {
	const [cardList, setCardList] = useState(shuffle(gameData));

	function onClickHandler(currentId: number) {
		const cardListNew = structuredClone(cardList);
		const card = cardListNew.find(item => item.id === currentId);
		if (!card) return;
		const lastCardName = activateCard(card);
		if (lastCardName) {
			for (const item of cardListNew) {
				if (item.name === lastCardName) {
					item.isOpen = false;
				}
			}
		}
		setCardList(cardListNew);
	}

	function resetGame() {
		setCardList(resetCards());
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<section className="-mt-4 grid grid-cols-4 gap-4">
				{cardList.map((item, itemIndex) => (
					<CardItem key={itemIndex} item={item} onCardClick={onClickHandler}></CardItem>
				))}
			</section>
			<button
				onClick={resetGame}
				className="mb-5 mt-10 cursor-pointer rounded-lg px-10 py-4 text-xl font-bold text-white shadow-md outline-none transition-all duration-300 ease-in-out hover:shadow-lg">
				Reset
			</button>
		</div>
	);
}
