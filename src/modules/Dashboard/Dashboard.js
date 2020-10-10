import React, {useState} from 'react'
import './assets/dashboard.scss';
import Tabs from '../components/Tabs/Tabs';
import ConnectModal from './ConnectModal';
// import '../../renderer/renderer'
const tabs = [
    {text: 'Home', value:'home1'},
    {text: 'Console 1', value:'home2'},
    {text: 'Console 2', value:'home3'}
];
const AppOptions = [
    {text: 'Connect', value:'connect', key: 'connect'},
    {text: 'Shell', value:'shell', key: 'shell'},
    {text: 'Export', value:'export', key: 'export'},
    {text: 'Import', value:'import', key: 'import'},
    {text: 'Users', value:'users', key: 'users'},
    {text: 'Schema', value:'schema', key: 'schema'},
    {text: 'Roles', value:'roles', key: 'roles'},
    {text: 'Tasks', value:'tasks', key: 'tasks'}
    ];
export const Dashboard = props => {
    function selectTab(tabData) {
        console.log(tabData);
    }
    const [openConnectModal, setOpenConnectModal] = useState(false);
    function appOptionsClickHandler(index) {
        switch (index) {
            case 0 : {
                setOpenConnectModal(true);
                break;
            }
            default :
                return;
        }
    }
    function AppOptionsHandler() {
        const listApp = AppOptions.map((item, index) => {
           return <div onClick={() => appOptionsClickHandler(index)} className="header-options__item">
               <img className="header-options__item__icon" src="/assets/images/console--v2.png"></img>
               <span className="header-options__item__hint">{item.text}</span>
           </div>
        });
        return listApp;
    }
    function modalClose() {
        setOpenConnectModal(false);
    }
    return <div className="content">
        <div className="header-options">
            {AppOptionsHandler()}
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
        {!openConnectModal ? <ConnectModal modalClose={modalClose}/> : null }
    </div>;
}
