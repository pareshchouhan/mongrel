import React from 'react';
import {Button, Modal} from '../index';
import styles from './assets/ConfirmationPopup.scss';

/** Renders the Confirmation popup
 * @param props
 * @param props.active - is popup active
 * @param props.message - Message to be displayed
 * @param props.onClose - update state on close of popup
 * @param props.onConfirm - update state on confirm
 * @param props.onCancel - optional - if any updates required on click of cancel
 * @param props.confirmMessage - Message on confirm button, default Confirm
 * @param props.cancelMessage - Message on cancel button, default Cancel
 */
const ConfirmationPopup = props => {
	return props.active && <div><Modal
		isOpen={true}
		onRequestClose={() => props.onClose()}
		className={styles.deleteCampaignModalInnerWrapper}
	>
		<div className={styles.deleteCampaignModal} >
			<p>{props.message}</p>
			<div>
				<Button className={styles.confirmButton} onClick={() => {
					if (typeof props.onConfirm === 'function') {
						props.onConfirm();
					} else {
						props.onClose();
					}
				}} >{`${props.confirmMessage || 'Confirm'}`}</Button>
				<Button className={styles.cancelButton} onClick={() => {
					if (typeof props.onCancel === 'function') {
						props.onCancel();
					} else {
						props.onClose();
					}
				}} >{`${props.cancelMessage || 'Cancel'}`}</Button>
			</div>
		</div>
	</Modal></div>;
};

export default ConfirmationPopup;
