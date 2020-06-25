import React from 'react';
import radioStyle from './assets/radio.scss';

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked || false
		};
		this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
	}

	getDerivedStateFromProps(nextProps) {
		if (typeof nextProps.checked !== 'undefined' && nextProps.checked !== this.state.checked) {
			return {
				checked: nextProps.checked
			};
		}
	}
	
	toggleCheckboxChange(e) {
		console.log(e.target.value);
		if (this.props.enabled || this.state.checked) {
			const { checked } = this.state;
			this.setState({
				checked: !this.state.checked
			});
			if (this.props.onChange) {
				this.props.onChange(e.target.value, {
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
			<div className={this.props.disabled ? `${radioStyle.radio} ${this.props.className} ${radioStyle.disabled}` : `${radioStyle.radio} ${this.props.className} ` } >
				<input 
					type="radio" 
					id={this.props.id}
					value={this.props.value}
					checked={checkedValue}
					onChange={this.toggleCheckboxChange}
					name={this.props.name}
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
