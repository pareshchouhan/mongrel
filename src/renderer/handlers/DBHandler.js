const { ipcRenderer } = window.require('electron')

ipcRenderer.on('connect-db-response', (event, dbConnection) => {
    // do something on connect-db-resposne.
    //TODO: update store.
    console.log(dbConnection)
})
