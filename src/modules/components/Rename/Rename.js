import React, { createRef } from 'react';
import styles from './style.scss';
import ReactDOM from 'react-dom';

class Rename extends React.Component {
	constructor(props) {
		super(props);
		this.renameData = this.renameData.bind(this);
		this.renameRef = React.createRef();
		this.preventEnterEvent = this.preventEnterEvent.bind(this);
		this.focusElement = this.focusElement.bind(this);
	}
	focusElement() {
		this.renameRef.current.focus();
	}
	renameData(e) {
		if (this.props.onChange) {
			this.props.onChange(e, this.renameRef.current.innerText);
		}
	}
	componentDidMount() {
		this.renameRef.current.contentEditable = 'true';
		if (this.props.preventEnter)
			this.renameRef.current.addEventListener('keypress', this.preventEnterEvent);
	}
	preventEnterEvent(evt) {
		if (evt.which === 13) {
			evt.preventDefault();
		}
	}
	componentWillUnmount() {
		if (this.renameRef && this.renameRef.current) {
			this.renameRef.current.removeEventListener('keypress', this.preventEnterEvent);
		}
	}

	render() {
		if (this.props.focus) {
			setTimeout(() => {
				this.renameRef.current.focus();
			}, 0);
		}
		return (
			<div
				data-tip={this.props.title || undefined}
				data-for='tooltip'
				className={`${this.props.className} ${styles.editableDiv}`}
				data-placeholder={this.props.placeholder}
				spellCheck="false"
				onBlur={this.renameData}
				ref={this.renameRef}
				data-place={this.props.data_place || undefined}
			>
				{this.props.data}
			</div>
		);
	}
}


export default Rename;
