<script setup lang="ts">
import { computed } from 'vue';
import { blankCard as defaultImage } from '../../assets/images';
import type { Card } from '../../utils/app.mock';

const props = defineProps<{
	item: Card;
}>();
const imagePath = computed(() => (props.item.isOpen ? props.item.pic : defaultImage));
defineEmits<{
	'card-click': [number];
}>();
</script>

<template>
	<div
		:id="String(item.id)"
		class="m-3 cursor-pointer rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"
		@click="$emit('card-click', item.id)">
		<img height="150" width="120" style="min-width: 50px; min-height: 50px" :src="imagePath" alt="Image" />
	</div>
</template>

<style scoped>
div {
	border: 2px solid green;
}
</style>
