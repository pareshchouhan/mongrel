import React from 'react';
import styles from '../styles/Chip.scss';
import icons from '../../assets/fonts.scss';

const Chip = props => {

	function removeTag() {
		props.removeTag(props.itemName);
	}
	return <div className={`${styles.chipStyle} ${props.chipStyleClassName}`} key={props.index}>{props.itemName}
		<i onClick={removeTag} className={`${'r-icons ' + icons['r-add-new']} ${styles.removeTag} ${props.removeTagClassName}`}/>
	</div>;
};

export default Chip;
