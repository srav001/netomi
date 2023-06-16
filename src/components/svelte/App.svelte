<script lang="ts">
	import CardItem from './CardItem.svelte';
	import gameData from '../../utils/app.mock';
	import { shuffle } from '../../utils/shuffle';
	import { activateCard, resetCards } from '../../utils/card';

	let cardList = shuffle(gameData);

	function onClickHandler(event: CustomEvent) {
		const card = cardList.find(item => item.id === event.detail);
		if (!card) return;

		const lastCardName = activateCard(card);
		if (lastCardName) {
			for (const item of cardList) {
				if (item.name === lastCardName) {
					item.isOpen = false;
				}
			}
		}
		cardList = cardList;
	}

	function resetGame() {
		cardList = resetCards();
	}
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<section class="-mt-4 grid grid-cols-4 gap-4">
		{#each cardList as item}
			<CardItem {item} on:card-click={onClickHandler} />
		{/each}
	</section>
	<button
		on:click={resetGame}
		class="mb-5 mt-10 cursor-pointer rounded-lg px-10 py-4 text-xl font-bold text-white shadow-md outline-none transition-all duration-300 ease-in-out hover:shadow-lg">
		Reset
	</button>
</div>

<style>
	button {
		border: 2px solid green;
		background-color: green;
	}

	button:hover {
		background-color: #f6f6f6;
		border: 2px solid green;
		color: green;
	}
</style>
