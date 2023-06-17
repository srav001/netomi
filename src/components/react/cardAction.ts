import type { Card } from '../../utils/app.mock';
import { activateCard } from '../../utils/card';

let cardList: Card[];
let setCardList: (newState: Card[]) => void;

export function initClickHandler(extras: { cardList: typeof cardList; setCardList: typeof setCardList }) {
	if (extras) {
		cardList = extras.cardList;
		setCardList = extras.setCardList;
	}
}

export function clickHandler(currentId: number) {
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
