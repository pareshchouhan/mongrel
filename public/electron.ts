const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('path')
const isDev  = require('electron-is-dev')
process.env['PATH'] = process.env['PATH'] + (process.env.OS.startsWith('Windows') ? ';' : ':') + path.join(__dirname, 'BIN');
import DB from './src/db/db';

function createWindow (): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      // enableRemoteModule: true,
      contextIsolation: false,
    },
    show: false
  })

  win.maximize()
  win.show()
  // and load the index.html of the app.
  win.loadURL(
      isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`
  ).catch(error => console.log('error', error))

  // Open the DevTools.
  isDev ? win.webContents.openDevTools() : null
}

// const menuTemplate = getMenuTemplate(server)
// const menu = Menu.buildFromTemplate(menuTemplate)
// Menu.setApplicationMenu(menu)


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// ipcMain.on('asynchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.reply('asynchronous-reply', 'pong')
// })

// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.returnValue = 'pong'
// })

ipcMain.on('connect-db', async (event, arg) => {
  console.log('connecting to db')
  const db = new DB()
  //TODO: store this object in DB Connection Manager
  const dbConnection = await db.connect()
  console.log(dbConnection)
  event.reply('connect-db-response', dbConnection)
})