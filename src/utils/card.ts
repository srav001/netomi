import gameData, { Card } from './app.mock';
import { shuffle } from './shuffle';

const selectedCards = new Map();
let lastSelectedCard: Card | null = null;

export function activateCard(card: Card) {
	if (card.isOpen === true) return null;

	card.isOpen = true;

	if (selectedCards.has(card.name) && lastSelectedCard?.name === card.name) {
		selectedCards.get(card.name).add(card.id);
		lastSelectedCard = null;
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
