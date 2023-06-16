<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { blankCard as defaultImage } from '../../assets/images';
	import type { Card } from '../../utils/app.mock';

	export let item: Card;
	$: imagePath = item.isOpen ? item.pic : defaultImage;

	const dispatcher = createEventDispatcher();
	function cardClickHandler() {
		dispatcher('card-click', item.id);
	}
</script>

<div
	id={String(item.id)}
	class="m-3 cursor-pointer rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"
	on:click={cardClickHandler}>
	<img height="150" width="120" src={imagePath} alt="SampleImage" />
</div>

<style>
	div {
		border: 2px solid green;
	}
</style>
