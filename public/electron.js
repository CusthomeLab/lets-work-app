const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const {autoUpdater} = require('electron-updater')
const log = require('electron-log')

// Gardez une reference globale de l'objet window, si vous ne le faites pas, la fenetre sera
// fermee automatiquement quand l'objet JavaScript sera garbage collected.
let win

function mainWindow() {
  // Créer le browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    titleBarStyle: 'hiddenInset',
    title: "Let's Work",
    icon: path.join(__dirname, '../public/icons/macOS/Icon.icns')
  })

  // Définit le menu de l'app
  let template = [
    {
      label: 'Affichage',
      submenu: [
        {role: 'reload', label: 'Recharger'},
        {role: 'forcereload', label: 'Recharger en force'},
        {type: 'separator'},
        {role: 'resetzoom', label: 'Taille réelle'},
        {role: 'zoomin', label: 'Zoom avant'},
        {role: 'zoomout', label: 'Zoom arrière'},
        {type: 'separator'},
        {role: 'togglefullscreen', label: 'Plein écran'}
      ]
    },
    {
      role: 'window',
      label: 'Fenêtre',
      submenu: [{role: 'minimize', label: 'Réduire'}, {role: 'close', label: 'Fermer'}]
    },
    {
      role: 'help',
      label: 'Aide',
      submenu: [
        {
          label: 'En savoir plus',
          click() {
            require('electron').shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'about', label: 'À propos de'},
        {type: 'separator'},
        {role: 'services', label: 'Services', submenu: []},
        {type: 'separator'},
        {role: 'hide', label: 'Masquer'},
        {role: 'hideothers', label: 'Masquer les autres'},
        {role: 'unhide', label: 'Afficher'},
        {type: 'separator'},
        {role: 'quit', label: 'Quitter'}
      ]
    })
    // Window menu
    template[2].submenu = [
      {role: 'close', label: 'Fermer la fenêtre'},
      {role: 'minimize', label: 'Réduire'},
      {role: 'zoom', label: 'Zoomer'},
      {type: 'separator'},
      {role: 'front', label: 'Tout ramener au premier plan'}
    ]
  }
  // Créé le Menu
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  // et charge le index.html de l'application.
  //win.loadFile('index.html')
  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

  // Ouvre les DevTools.
  // win.webContents.openDevTools()

  // Émit lorsque la fenêtre est fermée.
  win.on('closed', () => {
    // Dé-référence l'objet window , normalement, vous stockeriez les fenêtres
    // dans un tableau si votre application supporte le multi-fenêtre. C'est le moment
    // où vous devez supprimer l'élément correspondant.
    win = null
  })
}

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quand cet événement est émit.
app.on('ready', mainWindow)

// Quitte l'application quand toutes les fenêtres sont fermées.
app.on('window-all-closed', () => {
  // Sur macOS, il est commun pour une application et leur barre de menu
  // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Sur macOS, il est commun de re-créer une fenêtre de l'application quand
  // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
  if (win === null) {
    mainWindow()
  }
})

// Dans ce fichier, vous pouvez inclure le reste de votre code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.

// Logs pour la mise à jour automatique
autoUpdater.logger = log
autoUpdater.logger.transports.file.level = 'info'
log.info('App starting...')

function sendStatusToWindow(text) {
  log.info(text)
  win.webContents.send('message', text)
}

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...')
})
autoUpdater.on('update-available', info => {
  sendStatusToWindow('Update available.')
})
autoUpdater.on('update-not-available', info => {
  sendStatusToWindow('Update not available.')
})
autoUpdater.on('error', err => {
  sendStatusToWindow('Error in auto-updater. ' + err)
})
autoUpdater.on('download-progress', progressObj => {
  let log_message = 'Download speed: ' + progressObj.bytesPerSecond
  log_message = log_message + ' - Downloaded ' + Math.round(progressObj.percent) + '%'
  log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')'
  sendStatusToWindow(log_message)
})
autoUpdater.on('update-downloaded', info => {
  sendStatusToWindow('Update downloaded')
})

//-------------------------------------------------------------------
// Auto updates - Option 1 - Simplest version
//
// This will immediately download an update, then install when the
// app quits.
//-------------------------------------------------------------------
app.on('ready', function() {
  autoUpdater.checkForUpdatesAndNotify()
})
