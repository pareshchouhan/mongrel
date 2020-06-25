import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import icons from '../../assets/fonts.scss';
import styles from '../styles/Modal.scss';
import {nullCheck} from '../../modules/common/utils';
class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: this.props.isOpen
		};
		this.onClose = this.onClose.bind(this);
	}


	static getDerivedStateFromProps(nextProps, state) {
		if (typeof nextProps.isOpen !== 'undefined' && nextProps.isOpen !== state.isOpen) {
			return {
				isOpen: nextProps.isOpen
			};
		}

		return {
			isOpen: state.isOpen
		};
	}

	onClose(e) {
		this.setState({
			isOpen: false
		}, () => {
			if (this.props.onRequestClose) {
				this.props.onRequestClose(e);
			}
		});
	}

	render() {
		const isCloseButtonEnabled = nullCheck(this.props.isCloseButtonEnabled) ? true : this.props.isCloseButtonEnabled;
		const Modal = <div className='ReactModalPortal'>
			<div className={styles.ReactModal__Overlay}>
				<div
					className={`flex flex-col absolute rounded-5 p-0 overflow-hidden ${styles.ReactModal__Content} ${this.props.className ? this.props.className : ''}`}
					style={this.props.style}
				>
					<div className={`flex items-center justify-between px-8 py-4 w-full h-20 ${styles.ReactModal__Header} r-react-modal-header`}>
						<span className={`text-2xl ${styles.ReactModal__Title}`}>
							{this.props.title}
						</span>
						{
							isCloseButtonEnabled ? <Button className={`w-10 h-10 p-0 ${styles.ReactModal__Close}`} onClick={this.onClose}>
								<i className={`r-icons ${icons['r-close']} text-header-icon`} />
							</Button> : null
						}

					</div>
					<div className={`flex flex-grow p-0 w-full ${styles.ReactModal__Body} ${this.props.bodyClass ? this.props.bodyClass : ''} r-react-modal-body`}>
						{this.props.children}
					</div>
					{
						this.props.footer &&
						<div className={`flex items-center justify-end px-8 py-4 w-full h-20 ${styles.ReactModal__Footer} r-react-modal-footer`}>
							{this.props.footer}
						</div>
					}
				</div>
			</div>
		</div>;

		if (this.state.isOpen) {
			return ReactDOM.createPortal(Modal, document.body);
		}

		return null;
	}
}

export default Modal;
