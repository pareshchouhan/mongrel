import React from 'react';
import styles from '../styles/Button.scss';

const Button = props => {
	let padding = 'px-primary';
	let height = 'h-primary-button';
	let className = `flex items-center justify-center rounded-4 text-base font-bold cursor-pointer ${padding} ${height} ${styles.button} ${props.className} r-button-element`;

	if (props.type !== undefined && props.type !== null) {
		if (props.type === 'secondary') {
			padding = 'px-secondary';
			height = 'h-secondary-button';
			className = `flex items-center justify-center rounded-4 text-base font-bold cursor-pointer ${padding} ${height} ${styles.button} ${props.className} r-button-element-secondary`;
		} else if (props.type === 'link') {
			padding = 'px-link';
			height = 'h-link-button';
			className = `flex items-center justify-center rounded-4 text-base font-bold cursor-pointer ${padding} ${height} ${styles.link} ${props.className} r-button-element-link`;
		}
	}

	return <button
		title={props.title}
		className={className}
		disabled={props.disabled}
		id={props.id}
		onClick={props.onClick}
		title={props.title}
	>
		{props.children}
	</button>;
};

export default Button;
