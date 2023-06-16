<script setup lang="ts">
import CardItem from './CardItem.vue';
import gameData from '../../utils/app.mock';
import { shuffle } from '../../utils/shuffle';
import { ref } from 'vue';
import { activateCard, resetCards } from '../../utils/card';

const cardList = ref(shuffle(gameData));

function onClickHandler(currentId: number) {
	const card = cardList.value.find(item => item.id === currentId);
	if (!card) return;

	const lastCardName = activateCard(card);
	if (lastCardName) {
		for (const item of cardList.value) {
			if (item.name === lastCardName) {
				item.isOpen = false;
			}
		}
	}
}

function resetGame() {
	cardList.value = resetCards();
}
</script>

<template>
	<div class="flex h-screen flex-col items-center justify-center">
		<section class="-mt-4 grid grid-cols-4 gap-4">
			<CardItem
				v-for="item in cardList"
				:key="item.id"
				:item="item"
				@card-click="onClickHandler($event)"></CardItem>
		</section>
		<button
			@click="resetGame"
			class="mb-5 mt-10 cursor-pointer rounded-lg px-10 py-4 text-xl font-bold text-white shadow-md outline-none transition-all duration-300 ease-in-out hover:shadow-lg">
			Reset
		</button>
	</div>
</template>

<style scoped>
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
