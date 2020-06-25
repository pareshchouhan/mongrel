import React from 'react';
import radioStyle from './assets/radio.scss';

const RadioGroup = props => {
	return (
		<div className={props.type === 'inline' ? `${radioStyle.radioGroup} ${radioStyle.radioGroup__inline}` : `${radioStyle.radioGroup} ${radioStyle.radioGroup__block}`}>
			{props.children}
		</div>
	); 
};

export default RadioGroup;