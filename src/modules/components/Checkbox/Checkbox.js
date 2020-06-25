import React from 'react';
import checkboxStyle from './assets/checkbox.scss';

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked || false
		};
		this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
	}

	static getDerivedStateFromProps(nextProps, state) {
		if (typeof nextProps.checked !== 'undefined' && nextProps.checked !== state.checked) {
			return {
				checked: nextProps.checked
			};
		}
	}
	
	toggleCheckboxChange(e) {
		if (this.props.enabled || this.state.checked) {
			const { checked } = this.state;
			this.setState({
				checked: !this.state.checked
			});
			if (this.props.onChange) {
				this.props.onChange(e, {
					checked: !checked
				});
			}
		}
	}

	render() {
		let checkedValue = this.state.checked;
		if (this.props.forcedValue === true || this.props.forcedValue === false) {
			checkedValue = this.props.forcedValue;
		}
		return (
			<div className={this.props.disabled ? `${checkboxStyle.checkbox} ${this.props.className} ${checkboxStyle.disabled} r-checkbox-element r-checkbox-element-diabled` : `${checkboxStyle.checkbox} ${this.props.className} r-checkbox-element` } >
				<input 
					type="checkbox" 
					id={this.props.id}
					value={this.props.value}
					checked={checkedValue}
					onChange={this.toggleCheckboxChange}
					disabled = {this.props.disabled ? 'disabled' : null}
				/>
				<label style= {this.props.checkboxLabelStyle ? this.props.checkboxLabelStyle : null } htmlFor={this.props.id}>{this.props.children}</label>
			</div>
		); 
	}
};

Checkbox.defaultProps = {
	enabled : true
};

export default Checkbox;
