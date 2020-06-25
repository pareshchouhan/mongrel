import React from 'react';
import listStyles from './assets/list.scss';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.selectItem = this.selectItem.bind(this);
	}
	selectItem(index, selectedListItem) {
		if (this.props.onChange) {
			this.props.onChange(index, selectedListItem, this.props.metadata);
		}
	}
	render() {
		let list = '';
		if (this.props.options) {
			list = this.props.options.map((listItem, index)  => {
				return 	<div key={listItem.value} className={listStyles.listItem} onClick={() => this.selectItem(index, listItem)} >
					{listItem.text}
				</div>;
			});
		}
		return (
			!this.props.isHide ? <div className={this.props.styledList || this.props.className ? `${listStyles.listBox} ${listStyles.styledListBox} ${this.props.className}` : `${listStyles.listBox}`} >
				{list}
			</div> : null
		);
	}
}

export default List;