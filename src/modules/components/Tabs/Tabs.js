import React, {useState, useEffect} from 'react';
import './assets/Tabs.scss';
const Tabs = props => {
	const [activeTab, setActiveTab] = useState((props.tabsData && props.tabsData[0].value) || null);
	const [tabStyle, setTabStyle] = useState(null);
	useEffect(() => {
		if (props.tabStyle === 'horizontal') {
			setTabStyle('tabsWrapper horizontal');
		} else if (props.tabStyle === 'vertical') {
			setTabStyle('tabsWrapper vertical');
		} else {
			return null;
		}
	}, []);
	function selectTab(tabData) {
		setActiveTab(tabData.value);
		props.onSelect(tabData);
	}
	function tabsList() {
		if (props.tabsData) {
			return props.tabsData.map((tab, index) => {
				return <div key={index} onClick={() => selectTab(tab)} className={activeTab === tab.value ? `${props.activeClass} tabItems` : 'tabItems' } >
					{tab.text}
				</div>;
			});
		}
	}
	return <div className={props.className + ' ' + tabStyle} >
		{tabsList()}
	</div>;
};

export default Tabs;
