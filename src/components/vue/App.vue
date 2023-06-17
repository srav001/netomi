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
		<button @click="resetGame" class="btn btn-vue mt-10">Reset</button>
	</div>
</template>
