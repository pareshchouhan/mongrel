import React from 'react'
import './assets/dashboard.scss';
import Tabs from '../components/Tabs/Tabs';
// import '../../renderer/renderer'
const tabs = [
    {text: 'Home', value:'home1'},
    {text: 'Console 1', value:'home2'},
    {text: 'Console 2', value:'home3'}
];
export const Dashboard = props => {
    function selectTab(tabData) {
        console.log(tabData);
    }
    return <div className="content">
        <div className="header-options">
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Connect</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Shell</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Export</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Import</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Users</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Roles</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Schema</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Tasks</span>
            </div>
            <div className="header-options__item">
                <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
                <span className="header-options__item__hint">Feedback</span>
            </div>
        </div>
        <div className="main-window">
            <div className="left-panel">
                <div className="connections-pane">
                    <div className="connections">
                        <div className="connection">
                            localhost:27017
                        </div>
                        <div className="connection">
                            dev.ec2.google.com:27017
                        </div>
                        <div className="connection">
                            dev1.google.com:27017
                        </div>
                    </div>
                </div>
                <div className="tasks-pane">
                    Lsit of task goes here
                </div>
            </div>
            <div className="right-panel">
            <Tabs
				tabsData={tabs}
				onSelect={tabData => selectTab(tabData)}
				tabStyle='horizontal'
				className='tabWrapper_settings'
				activeClass='activeTab'
			/>
            </div>
        </div>
    </div>;
}
