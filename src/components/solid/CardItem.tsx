/** @jsxImportSource solid-js */
import { createMemo } from 'solid-js';
import { blankCard as defaultImage } from '../../assets/images';
import type { Card } from '../../utils/app.mock';

type Props = { item: Card; onCardClick: (id: number) => void };
export default function (props: Props) {
	const imagePath = createMemo(() => (props.item.isOpen ? props.item.pic : defaultImage));

	return (
		<div
			id={String(props.item.id)}
			style="{border: 2px solid green;}"
			class="m-3 cursor-pointer rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"
			onClick={() => props.onCardClick(props.item.id)}>
			{props.item.name}
			{props.item.id}
			{JSON.stringify(props.item.isOpen)}
			<img height="150" width="120" src={imagePath()} alt="Image" />
		</div>
	);
}
