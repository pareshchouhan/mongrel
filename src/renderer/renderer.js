// Handlers goes here
import './handlers/DBHandler'



// Actions goes here.
import * as DBActions from './actions/DBActions'
// In renderer process (web page).
const { ipcRenderer } = window.require('electron')

// console.log(ipcRenderer.sendSync('synchronous-message', 'init store')) // prints "pong"

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//     console.log(arg) // prints "pong"
// })
// ipcRenderer.send('asynchronous-message', 'ping')

DBActions.connectToDb()