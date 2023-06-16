import type { Card } from './app.mock';

export function shuffle(shuffleItems: Array<Card>): Array<Card> {
	const cards = structuredClone(shuffleItems);
	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = cards[i]!;
		cards[i] = cards[j]!;
		cards[j] = temp;
	}

	return cards;
}
