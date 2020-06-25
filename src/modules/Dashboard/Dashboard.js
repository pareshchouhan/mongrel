import React from 'react'
import './assets/dashboard.scss';
import '../../renderer/renderer'

export const Dashboard = props => {
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
                Get started by creating a <a>connection</a>
            </div>
        </div>
    </div>;
}
