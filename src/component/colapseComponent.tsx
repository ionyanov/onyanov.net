/** @format */

import { FC, ReactNode, useState } from 'react';

interface ColapceComponentProp {
	children: ReactNode;
	title?: string;
	deffold?: boolean;
}

export const ColapceComponent: FC<ColapceComponentProp> = ({ children, title, deffold = false }) => {
	const [fold, setFold] = useState(deffold);

	const arrow = fold ? `\u2B99` : `\u2B9B`;
	return (
		<>
			<button type="button" className="collapsible" onClick={() => setFold((perv) => !perv)}>
				<h1>{`${arrow}${title}${arrow}`}</h1>
			</button>
			<div className={fold ? '' : 'hidden'}>{children}</div>
		</>
	);
};
