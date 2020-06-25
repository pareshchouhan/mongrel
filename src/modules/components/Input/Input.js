import React, { Component } from 'react';
import Button from '../Button/Button';
import styles from '../styles/Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.defaultValue || ''
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		e.persist();
		this.setState({
			value: e.target.value
		}, () => {
			if (this.props.onChange) {
				this.props.onChange(e);
			}
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.value !== prevProps.value && this.state.value !== this.props.value) {
			this.setState({
				value: this.props.value
			});
		}
	}

	render() {
		const { success, error, action } = this.props;
		let wrapperClasses = `flex flex-col items-start justify-center w-full h-full p-0 r-input-wrapper ${styles.wrapper} r-input-element-wrapper`;

		if (success) {
			wrapperClasses = `flex flex-col items-start justify-center w-full h-full p-0 r-input-wrapper ${styles.wrapper} ${styles.success} r-input-element-success`;
		}

		if (error) {
			wrapperClasses = `flex flex-col items-start justify-center w-full h-full p-0 r-input-wrapper ${styles.wrapper} ${styles.error} r-input-element-error`;
		}

		let input = <input
			className={`flex items-center justify-start w-full h-full p-5 rounded-4 text-base r-input ${styles.input} ${this.props.className} r-input-element`}
			id={this.props.id}
			onChange={this.onChange}
			onKeyPress={this.props.onKeyPress}
			onBlur={this.props.onBlur}
			onInput={this.props.onInput}
			placeholder={this.props.placeholder}
			type={this.props.type}
			value={this.state.value}
		/>;

		if (action && action.content && action.onClick) {
			input = <div className={`flex items-center justify-start w-full h-full p-0 ${styles.inputButton}`}>
				<input
					className={`flex items-center justify-start w-4/5 h-full p-5 rounded-l-4 text-base ${styles.input} ${this.props.className} r-input-element`}
					id={this.props.id}
					onChange={this.onChange}
					onKeyPress={this.props.onKeyPress}
					onBlur={this.props.onBlur}
					onInput={this.props.onInput}
					placeholder={this.props.placeholder}
					type={this.props.type}
					value={this.state.value}
				/>
				<Button
					className={`flex items-center justify-center w-1/5 h-full rounded-r-4 ${styles.button}`}
					onClick={action.onClick}
					type='primary'
				>
					{action.content}
				</Button>
			</div>;
		}

		return <div className={wrapperClasses}>
			{
				this.props.label ?
					<label
						className={`mb-3 text-base font-semibold ${styles.label}`}
						htmlFor={this.props.id}
					>
						{this.props.label}
					</label> :
					null
			}
			{input}
			{
				this.props.message ?
					<span
						className={`mt-3 text-sm ${styles.message}`}
					>
						{this.props.message}
					</span> :
					null
			}
		</div>;
	}
}

export default Input;
