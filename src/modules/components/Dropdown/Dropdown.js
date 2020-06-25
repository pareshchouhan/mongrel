import React from 'react';
import dropdownStyles from './assets/dropdown.scss';
import { nullCheck } from '../../modules/common/utils';
import icons from '../../assets/fonts.scss';
import DropDownItems from './DropdownItems';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu : false,
			filteredOptions: this.props.options,
			placeholder: this.props.placeholder || 'select',
			fakeRender: false
		};
		this.openMenuItems = this.openMenuItems.bind(this);
		this.selectDrop = this.selectDrop.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.dropdownSearchHandler = this.dropdownSearchHandler.bind(this);
		this.deleteSelectedTag = this.deleteSelectedTag.bind(this);
		this.selectedItemArray = [];
		this.getTextFromValue = this.getTextFromValue.bind(this);
		this.isActive = this.isActive.bind(this);
	}

	openMenuItems() {
		if (this.props.search) {
			this.setState({
				openMenu : true
			});
		} else {
			this.setState({
				openMenu : !this.state.openMenu
			});
		}

	}
	componentWillMount() {
		document.addEventListener('click', this.handleClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick, false);
	}
	componentDidMount () {
		if (this.props.defaultValue) {
			
			if (this.props.multiple && Array.isArray(this.props.defaultValue)) {
				this.selectedItemArray = [...this.props.defaultValue];
			} 

			this.props.options.forEach(dVal => {
				if (typeof dVal.value === 'string' || typeof dVal.value === 'number') {
					if (this.props.defaultValue === dVal.value) {
						this.setState({ openMenu : false, placeholder: dVal.text });
						this.props.onChange('e', dVal);
					}
				} else if (typeof this.props.comparator === 'function') {
					if (this.props.comparator(this.props.defaultValue, dVal.value)) {
						if (this.state.placeholder !== dVal.text) {
							this.setState({
								placeholder: dVal.text
							});
							// this.props.onChange('e', dVal);
						}
					}
				} else {
					if (this.props.defaultValue === dVal.value) {
						this.setState({ openMenu : false, placeholder: dVal.text });
						this.props.onChange('e', dVal);
					}
				}
			});
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.options && prevProps.options && JSON.stringify(this.props.options) !== JSON.stringify(prevProps.options)) {
			let placeholder = 'select';
			if (!nullCheck(this.props.placeholder)) {
				({ placeholder } = this.props);
			}
			this.selectedItemArray = [];
			this.props.options.map(option => {
				if (option.value === this.props.defaultValue || (nullCheck(option.value) && option.text === this.props.defaultValue)) {
					placeholder = option.text;
				}
				return option;
			});
			this.setState({
				filteredOptions: this.props.options,
				placeholder
			});
		}
		if (this.props.defaultValue !== prevProps.defaultValue) {
			this.props.options.forEach(dVal => {
				if (this.props.defaultValue === dVal.value) {
					this.setState({ openMenu : false, placeholder: dVal.text });
				}
			});
			// this.setState({ openMenu : false, placeholder: this.props.defaultValue});
		}
	}

	selectDrop(e, val) {
		if (this.props.multiple) {
			if (this.selectedItemArray.indexOf(val.value) >= 0) {
				return;
			}
			this.selectedItemArray.push(val.value);
			if (this.props.onChange) {
				this.props.onChange(e, val, this.selectedItemArray);
			}
		} else {
			const newProps = Object.assign({}, this.props, val);
			if (this.props.onChange) {
				this.props.onChange(e, newProps, val);
			}
		}
		if (this.props.selectionType && this.props.selectionType === 'noSelect') {
			this.setState({ openMenu : false});
		} else {
			this.setState({ openMenu : false, placeholder: val.text});
		}
		this.setState({ filteredOptions : this.props.options });
		if (document.getElementById('searchInput')) {
			document.getElementById('searchInput').value = '';
		}
	}
	handleClickOutside() {
		this.setState({ openMenu : false});
	}
	handleClick(e) {
		if (this.node.contains(e.target)) {
			return;
		}
		this.handleClickOutside();
	}
	dropdownSearchHandler(e) {
		const getInputValue = e.target.value.toLowerCase();
		this.setState({filteredOptions : this.props.options.filter(val => {
			return val.text.toLowerCase().indexOf(getInputValue) > -1; 	
		}), placeholder : e.target.value });
		// this.props.onSearchChange(e, e.target.value);
	}
	deleteSelectedTag(e, id) {
		this.selectedItemArray.splice(id, 1);
		this.setState({fakeRender: true});
		if (this.props.onChange) {
			this.props.onChange(e, id, this.selectedItemArray);
		}
	}
	getTextFromValue(value) {
		const outputArr = this.props.options.filter(option => option.value === value);
		if (outputArr.length > 0) {
			return outputArr[0].text;
		}
		return value;
	}
	isActive(value) {
		if (this.props.multiple) {
			return this.selectedItemArray.indexOf(value.value) > -1;
		}
		return value.text === this.state.placeholder;
	}
	render() {
		let dropdownListItem;
		let selectedItem;
		let searchableDropdownHeader;
		if (this.selectedItemArray.length > 0) {
			selectedItem = this.selectedItemArray.map((val, index) => {
				return <span>{this.getTextFromValue(val)} <span className={dropdownStyles.deleteTags} onClick={e => this.deleteSelectedTag(e, index)} >X</span></span>;
			});
		}
		if (this.props.search) {
			searchableDropdownHeader = <div className={this.state.openMenu ? `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.active} ${dropdownStyles.dropdownHeadInput} r-dropdown-head r-active` : `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.dropdownHeadInput} r-dropdown-head` } style={this.props.dropdownUserStyle} onClick={this.openMenuItems}>
				{ this.props.search ? <input type="text" placeholder={this.state.placeholder} id = "searchInput" onChange={this.dropdownSearchHandler} autoComplete="false" autoComplete="off" /> : <input type="text" value={this.state.placeholder} id = "searchInput" onChange={this.dropdownSearchHandler} autoComplete="false" autoComplete="off" /> }
				<span className={this.state.openMenu ? `${dropdownStyles.arrowDownIcon} ${dropdownStyles.animate} r-dropdown-icon` : `${dropdownStyles.arrowDownIcon} r-dropdown-icon`} />
			</div>;
		}
		if (this.props.options) {
			dropdownListItem = this.state.filteredOptions.map((val, index) => {
				return <div key={index} onClick={() => this.selectDrop(index, val)} className={this.isActive(val) ? `${dropdownStyles.dropdownItems} ${dropdownStyles.active} r-dropdown-list-item r-active` : `${dropdownStyles.dropdownItems} r-dropdown-list-item`}>
					{val.text}
				</div>;
			});
		}
		let dropdownHeader;
		if (this.props.dropdownStyle && this.props.dropdownStyle === 'success') {
			dropdownHeader = <div className={this.state.openMenu ? `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.active} ${dropdownStyles.success} r-dropdown-head r-active` : `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.success} r-dropdown-head` } style={this.props.dropdownUserStyle} onClick={this.openMenuItems}>
				{this.state.placeholder}
				<span className={this.state.openMenu ? `${dropdownStyles.arrowDownIcon} ${dropdownStyles.animate} r-dropdown-icon` : `${dropdownStyles.arrowDownIcon} r-dropdown-icon`} />
			</div>;
		} else if (this.props.dropdownStyle && this.props.dropdownStyle === 'primary') {
			dropdownHeader = <div className={this.state.openMenu ? `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.active} ${dropdownStyles.primary} r-dropdown-head r-active` : `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.primary} r-dropdown-head` } style={this.props.dropdownUserStyle} onClick={this.openMenuItems}>
				{this.state.placeholder}
				<span className={this.state.openMenu ? `${dropdownStyles.arrowDownIcon} ${dropdownStyles.animate} r-dropdown-icon` : `${dropdownStyles.arrowDownIcon} r-dropdown-icon`} />
			</div>;
		} else {
			dropdownHeader = <div className={this.state.openMenu ? `${dropdownStyles.dropdownHead} dropdownHead ${dropdownStyles.active} r-dropdown-head r-active` : `${dropdownStyles.dropdownHead} dropdownHead r-dropdown-head` } style={this.props.dropdownUserStyle} onClick={this.openMenuItems}>
				{this.state.placeholder}
				<span className={this.state.openMenu ? `${dropdownStyles.arrowDownIcon} ${dropdownStyles.animate} r-dropdown-icon` : `${dropdownStyles.arrowDownIcon} r-dropdown-icon`} />
			</div>;
		}

		return (
			<div ref={node => this.node = node} className={`${this.props.changeActionEvent && this.props.changeActionEvent ? `${dropdownStyles.dropdown} ${this.props.className ? this.props.className : ''} ${dropdownStyles.dropdownHover}` : dropdownStyles.dropdown} ${this.props.className ? this.props.className : ''}`}>
				{this.props.multiple ? <div className={dropdownStyles.dropdownTags} > {selectedItem} </div> : ''}
				{ this.props.search ? searchableDropdownHeader : dropdownHeader }
				<div className={`${this.state.openMenu ? `${dropdownStyles.dropdownList} ${dropdownStyles.dropdownListAnimate} dropdownItemWrapper r-dropdown-item-wrapper` : `${dropdownStyles.dropdownList} dropdownItemWrapper r-dropdown-item-wrapper`} ${this.props.dropUp === true ? dropdownStyles.dropup : ''}` }>
					{dropdownListItem}
				</div>
			</div>
		);
	}    
}

export default Dropdown;
