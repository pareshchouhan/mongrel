import React from 'react';
import listStyles from './assets/listWithEllipsis.scss';
import icons from '../../assets/fonts.scss';

class ListWithEllipsis extends React.Component {
	constructor(props) {
		super(props);
		this.selectItem = this.selectItem.bind(this);
		this.state = {
			openMenu: false
		};
		this.showMenu = this.showMenu.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	selectItem(index, selectedListItem) {
		if (this.props.onChange) {
			this.props.onChange(index, selectedListItem, this.props.metadata);
		}
	}

	showMenu() {
		this.setState({
			openMenu: true
		});
	}

	handleClickOutside() {
		this.setState({ openMenu : false});
	}
	handleClick(e) {
		if (this.node && this.node.contains(e.target)) {
			return;
		}
		this.handleClickOutside();
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick, false);
	}

	render() {
		let list = '';
		if (this.props.options) {
			list = this.props.options.map((listItem, index)  => {
				return 	<div key={listItem.value} className={listStyles.listItem} onClick={() => this.selectItem(index, listItem.value)} >
					{listItem.text}
				</div>;
			});
		}
		return (
			<React.Fragment>
				<span ref={node => this.node = node} className={listStyles.ellipsis} onClick={e => this.showMenu()}><i className={`r-icons ${ icons['r-ellipsis']}`}></i>
				</span>
				{ this.state.openMenu ? <div className={'rktm-list-with-ellipsis ' + ( this.props.styledList || this.props.className ? `${listStyles.listBox} ${listStyles.styledListBox} ${this.props.className}` : `${listStyles.listBox}` ) } >
					{list}
				</div> : null }
			</React.Fragment>
		);
	}
}

export default ListWithEllipsis;