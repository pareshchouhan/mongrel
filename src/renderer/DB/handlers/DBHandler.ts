const { ipcRenderer } = window.require('electron')

ipcRenderer.on('connect-db-response', (event: any, dbConnection: any) => {
    // do something on connect-db-resposne.
    //TODO: update store.
    console.log(dbConnection)
})

export {};