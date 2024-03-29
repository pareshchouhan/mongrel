import React from 'react';
import {Modal, Button, Input} from 'antd';
import './assets/ConnectModal.scss';
const sendConnectionDataObject: any = {};
const ConnectModal = (props: any) => {
    function handleCancel() {
        props.modalClose();
    }
    function setConnectionName(e: any) {
        sendConnectionDataObject.connectionName = e.target.value;
    }
    function setServerName(e: any) {
        sendConnectionDataObject.serverName = e.target.value;
    }
    function setServerPort(e: any) {
        sendConnectionDataObject.serverPort = e.target.value;
    }
    function sendConnectionData() {
        console.log(sendConnectionDataObject);
    }
    return (
        <div>
            <Modal
                title="Connect DB"
                visible={true}
                onCancel={handleCancel}
                centered
                footer={[
                    <Button key="submit" type="primary"  onClick={sendConnectionData}>
                        Connect
                    </Button>,
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                ]}
            >
                <div className='modalWrapper'>
                    <div className='connectionForm' >
                        <div>
                            <label htmlFor="">Connection Name</label>
                            <Input onChange={setConnectionName}/>
                        </div>
                        <div>
                           <div>
                               <label htmlFor="">Server</label>
                               <Input onChange={setServerName}/>
                           </div>
                            <div>
                                <label htmlFor="">Port</label>
                                <Input onChange={setServerPort}/>
                            </div>
                        </div>
                    </div>
                    <div className='connectionList' style={{display:'none'}} >
                        <div className='modalTableHeader' >
                            <div>Name</div>
                            <div>Db Server</div>
                            <div>Security</div>
                        </div>
                        <div className='modaltableList' >
                            <div>Rocketium</div>
                            <div>Rocketium DB</div>
                            <div>Hash code</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
export default ConnectModal;