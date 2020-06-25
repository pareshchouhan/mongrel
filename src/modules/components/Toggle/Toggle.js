import React from 'react';
import toggleStyle from './assets/toggle.scss';

export default class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked : this.props.checked || false
		};
		this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps && this.props.checked !== nextProps.checked) {
			this.setState({
				checked: nextProps.checked
			});
		}
	}
	componentDidMount() {
		if (this.props.defaultChecked) {
			this.setState({ checked : true });
		}
	}
	toggleCheckboxChange(e, data) {
		const { checked } = this.state;
		this.setState({
			checked: !this.state.checked
		});
		this.props.onChange(e, {
			...this.props,
			checked: !checked
		});
		if (this.props.isChecked) {
			this.setState({checked: this.props.isChecked});
		}
	}
	render() {
		return (
			<div className={this.props.toggleSize === 'small' ? `${toggleStyle.toggleWrapper} ${toggleStyle.small}` : `${toggleStyle.toggleWrapper}` }>
				<input 
					type="checkbox" 
					id={this.props.id}
					checked={this.state.checked}
					onChange={this.toggleCheckboxChange}
				/>
				<label htmlFor={this.props.id} className={toggleStyle.toggleButton}></label>
			</div>
		); 
	}
}
