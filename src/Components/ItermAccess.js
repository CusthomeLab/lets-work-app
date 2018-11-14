import React from 'react'
import {Button, Icon, Col} from 'antd'
// import script from './AutomatoriTerm.applescript'

// const {exec} = window.require('child_process')
// var osascript = require('node-osascript')

// const script =
// 'on run set argsCmd to "docker-sync-stack start" set argsPwd to "cd Documents/Projets/webApp" scriptRun(argsCmd, argsPwd) end run on scriptRun(argsCmd, argsPwd) set withCmd to (argsCmd) set withPwd to (argsPwd) CommandRun(withCmd, withPwd) end scriptRun on CommandRun(withCmd, withPwd) tell application "iTerm" if it is running then if application "iTerm" is running then splitPane(withPwd, withCmd) of me end if else activate application "iTerm" splitPane(withPwd, withCmd) of me end if end tell end CommandRun on SplitPane(argsPwd, argsCmd) tell application "iTerm" tell the current window create tab with default profile end tell tell first session of current tab of current window split vertically with default profile write text argsPwd end tell tell second session of current tab of current window write text argsPwd write text argsCmd end tell end tell end SplitPane'

const openApp = () => {
  // exec('open /Applications/iTerm.app')
  // exec(
  //   '/usr/bin/osascript -e \'tell application "iTerm" to activate and create tab with default profile and write text "cd Documents/"\''
  // )
  // console.log(script)
  // exec(
  //   '/usr/bin/osascript -e tell application "iTerm" to activate and tell applecatioon "iTerm" create window with default profile end tell',
  //   {},
  //   function(err, result, raw) {
  //     if (err) return console.error(err)
  //     console.log(result, raw)
  //   }
  // )
}

const ItermAccess = () => {
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
        <Button disabled type="default" icon="right-circle" size="small" onClick={() => openApp()}>
          Accéder
        </Button>
      </Col>
    </React.Fragment>
  )
}
export default ItermAccess
