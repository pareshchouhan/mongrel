import React from 'react';
import styles from './assets/feedback.scss';
import { Button } from '../index';
import { Loader } from 'semantic-ui-react';
import { getParameterByName } from '../../modules/common/utils';
import icons from '../../assets/fonts.scss';

const FeedBack = props => {
	const stars = [];
	for (let i = 1; i <= 5; i = i + 1 ) {
		if (i <= props.rating) {
			stars.push(<img key={i} id={i} onClick ={props.onRatingChange} className={styles.stars} src="/img/amazon/Star-selected.svg" />);
		} else {
			stars.push(<img key={i} id={i} onClick ={props.onRatingChange} className={styles.stars} src="/img/amazon/Star.svg" />);
		}
	}
	return <div className= {styles.feedbackContainer} >
		{!props.feedbackLoader ? <div className={styles.loaderBox}>
			<span className={styles.resolvedIcon} ><i className={`r-icons ${icons['r-resolved']}`} /></span>
			<span className={styles.resolvedIconText} >Your files have been downloaded.</span>
			<div className={styles.afterGenerationButton}>
				<Button onClick={() => {
					window.open(`/advertising/amazon${getParameterByName('product') === 'brand-store' ? '&product=brand-store' : ''}`, '_self');
				}} >Create new campaign</Button>
				<Button onClick={() => {
					window.open(`/advertising/amazon?tab=pastCampaign${getParameterByName('product') === 'brand-store' ? '&product=brand-store' : ''}`, '_self');
				}} >Go to past campaigns</Button>
			</div>
		</div> : <div className={styles.loaderBox}>
			<Loader active={true} />
			<span>Your downloads will begin shortly. Please do not close the browser window.</span>
		</div> }
		{!props.showFeedbackContent ? <span className={styles.afterSubmitText} >Thanks for your response <span className={styles.thumb}>👍</span>.</span> : <div className={styles.beforeSubmitText}>
			<div className={styles.headingText} >While you wait, please rate your experience with us</div>
			<div className={styles.subheadingText} >You may also send across any suggestions you have for us to address</div>
			<div className= {styles.starRatingContainer} >
				{stars}
			</div>
			<textarea onInput={props.onCommentChange} className={styles.textArea} placeholder= {'Add your suggestions and comments here'} />
			<Button
				onClick = {props.onsubmit}
				className= {styles.submitButton}
			>
				Submit
			</Button>
		</div> }
	</div>;
};

export default FeedBack;
