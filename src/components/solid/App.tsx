import CardItem from './CardItem';
import gameData from '../../utils/app.mock';
import { shuffle } from '../../utils/shuffle';
import { activateCard, resetCards } from '../../utils/card';
import { For, createSignal } from 'solid-js';
import './styles.css';

export default function () {
	const [getCardList, setCardList] = createSignal(shuffle(gameData));

	function onClickHandler(currentId: number) {
		console.log(currentId);
		const card = getCardList().find(item => item.id === currentId);
		if (!card) return;
		const lastCardName = activateCard(card);
		if (lastCardName) {
			for (const item of getCardList()) {
				if (item.name === lastCardName) {
					item.isOpen = false;
				}
			}
		}
		console.log(structuredClone(getCardList()));
		setCardList(getCardList());
		console.log(structuredClone(getCardList()));
	}

	function resetGame() {
		setCardList(resetCards());
	}

	return (
		<div class="flex h-screen flex-col items-center justify-center">
			<section class="-mt-4 grid grid-cols-4 gap-4">
				<For each={getCardList()}>{item => <CardItem item={item} onCardClick={onClickHandler}></CardItem>}</For>
			</section>
			<button
				onClick={resetGame}
				class="mb-5 mt-10 cursor-pointer rounded-lg px-10 py-4 text-xl font-bold text-white shadow-md outline-none transition-all duration-300 ease-in-out hover:shadow-lg">
				Reset
			</button>
		</div>
	);
}
