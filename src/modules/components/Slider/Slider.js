import React from 'react';
import sliderStyles from './assets/slider.scss';
import icons from '../../assets/fonts.scss';

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false,
			min:0,
			max: 100,
			step: 1,
			value: 0
		};
		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.value !== prevProps.value) {
			this.setState({
				value: this.props.value
			});
		}	
	}

	componentDidMount() {
		const localState = {};
		if (this.props.min) {
			localState.min = this.props.min;
		}

		if (this.props.max) {
			localState.max = this.props.max;
		}

		if (this.props.step) {
			localState.step = this.props.step;
		}

		if (this.props.value) {
			localState.value = this.props.value;
		}

		this.setState(localState);
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
		this.props.onChange({
			value : e.target.value
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className={sliderStyles.rangeWrapper}>
					<input type="range" className={sliderStyles.inputRange + ` ${this.props.className ? this.props.className : ''}`} value={this.state.value} min={this.state.min} step={this.state.step} max={this.state.max} onChange={e => this.onChange(e)} />
				</div>	
			</React.Fragment>
		);
	}
}

export default Slider;