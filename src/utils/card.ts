import gameData, { Card } from './app.mock';
import { throwAparty } from './confetti';
import { shuffle } from './shuffle';

const selectedCards = new Map();
let lastSelectedCard: Card | null = null;

function isGameOver() {
	let totalSelectedCards = 0;
	for (const [_, value] of selectedCards.entries()) {
		totalSelectedCards += value.size;
	}
	if (totalSelectedCards === gameData.length) {
		console.log('You Win!!!');
		throwAparty();

		setTimeout(() => {
			alert(
				'Why you still here ? I am too lazy to figure out how to stop this. So unless you want an endless confetti show, bye bye.'
			);
		}, 10000);
	}
}

export function activateCard(card: Card) {
	if (card.isOpen === true) return null;

	card.isOpen = true;

	if (selectedCards.has(card.name) && lastSelectedCard?.name === card.name) {
		selectedCards.get(card.name).add(card.id);
		lastSelectedCard = null;
		isGameOver();
		return null;
	}

	let lastSelectedCardName = null;
	if (Object.keys(lastSelectedCard ?? {}).length > 0 && lastSelectedCard?.name !== card.name) {
		selectedCards.delete(lastSelectedCard?.name);
		lastSelectedCardName = lastSelectedCard?.name ?? null;
	}

	selectedCards.set(card.name, new Set([card.id]));

	lastSelectedCard = { ...card };

	return lastSelectedCardName;
}

export function resetCards() {
	selectedCards.clear();
	lastSelectedCard = null;
	return shuffle(gameData);
}
