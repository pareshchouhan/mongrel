import React from 'react';
import checkboxStyle from './assets/checkbox.scss';

const CheckboxGroup = props => {
	return (
		<div className={props.type === 'inline' ? `${checkboxStyle.checkboxGroup} ${checkboxStyle.checkboxGroup__inline}` : `${checkboxStyle.checkboxGroup} ${checkboxStyle.checkboxGroup__block}`}>
			{props.children}
		</div>
	); 
};

export default CheckboxGroup;