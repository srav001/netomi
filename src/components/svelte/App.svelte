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

<div class="flex flex-col items-center">
	<section class="grid grid-cols-4 gap-4">
		{#each cardList as item}
			<CardItem {item} on:card-click={onClickHandler} />
		{/each}
	</section>
	<button on:click={resetGame} class="btn btn-svelte mt-10"> Reset </button>
</div>
