import { blankCard as defaultImage } from '../../assets/images';
import type { Card } from '../../utils/app.mock';

type Props = { item: Card; onCardClick: (id: number) => void };
export default function ({ item, onCardClick }: Props) {
	const imagePath = item.isOpen ? item.pic : defaultImage;
	console.log('re-run');
	return (
		<div
			id={String(item.id)}
			style={{ border: '2px solid green' }}
			className="m-3 cursor-pointer rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"
			onClick={() => onCardClick(item.id)}>
			<img height="150" width="120" src={imagePath} alt="rmage" />
		</div>
	);
}
