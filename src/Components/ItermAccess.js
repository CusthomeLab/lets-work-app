import React from 'react'
import {Button, Icon, Col} from 'antd'
import Store from '../Tools/Store'

const app = window.require('electron').remote.app
const isDev = window.require('electron-is-dev')
const pathFile = window.require('path')
const osascript = window.require('node-osascript')

const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    paths: {},
    cmds: {}
  }
})

const openApp = (path, cmd) => {
  const paths = store.get('paths')
  const projectPath = paths[path]
  const cmds = store.get('cmds')
  const projectCmd = cmds[cmd]
  let pathScript
  if (isDev) {
    pathScript = 'public/scripts/AutomatoriTerm.scpt'
  } else {
    pathScript = pathFile.join(app.getAppPath(), '../AutomatoriTerm.scpt')
  }
  osascript.executeFile(pathScript, {projectPath: projectPath, projectCmd: projectCmd}, function(err, result, raw) {
    if (err) return console.error(err)
    console.log(result, raw)
  })
}

const ItermAccess = ({path, cmd}) => {
  return (
    <React.Fragment>
      <Col span={2} offset={2}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Icon type="code" style={{fontSize: '30px', marginRight: '10px'}} />
        </div>
      </Col>
      <Col span={4}>
        <span style={{fontSize: '16px', fontWeight: '700'}}>iTerm</span>
      </Col>
      <Col span={4}>
        <Button type="default" icon="right-circle" size="small" onClick={() => openApp(path, cmd)}>
          Accéder
        </Button>
      </Col>
    </React.Fragment>
  )
}
export default ItermAccess
