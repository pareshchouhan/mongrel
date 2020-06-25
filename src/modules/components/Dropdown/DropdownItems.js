import React from 'react';
import ItemStyles from './assets/dropdown.scss';

class DropdownItems extends React.Component {
	render() {
		return (
			<div key={this.props.Key} onClick={this.props.onclick} className={ItemStyles.dropdownItems}>
				{this.props.children}
			</div>
		);
	}    
}

export default DropdownItems;
