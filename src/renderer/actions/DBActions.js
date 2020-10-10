const { ipcRenderer } = window.require('electron')

export const connectToDb = config => {
    // send connection request to electron
    ipcRenderer.send('connect-db', config)
}