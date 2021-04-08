import {app, BrowserWindow} from 'electron';

const {createConnection} = eval('require')('typeorm');

console.log('main process', __dirname);

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      devTools:true
    }
  });
  mainWindow.webContents.openDevTools();

  const rendererUrl = 'file://' + __dirname + '/renderer/index.html';
  console.log('rendererUrl', rendererUrl);
  mainWindow.loadURL(rendererUrl);
});
