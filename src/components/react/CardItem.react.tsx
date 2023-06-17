import { blankCard as defaultImage } from '../../assets/images';
import { clickHandler } from './cardAction';
import React from 'react';

type Props = { isOpen: boolean; id: number; pic: string };

export default React.memo(({ id, pic, isOpen }: Props) => {
	const imagePath = isOpen ? pic : defaultImage;
	return (
		<div
			style={{ border: '2px solid var(--primary)' }}
			className="cursor-pointer rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"
			onClick={() => clickHandler(id)}>
			<img className="card-img" height="150" width="120" src={imagePath} alt="rmage" />
		</div>
	);
});
