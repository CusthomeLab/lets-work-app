import React from 'react'
import {Layout} from 'antd'
const {Content} = Layout

const Dashboard = () => {
  return (
    <React.Fragment>
      <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
          My Awesome Dashboard{' '}
          <span role="img" aria-label="">
            😎
          </span>
        </div>
        <div style={{padding: 24, background: '#fff', textAlign: 'center', fontStyle: 'italic'}}>Coming soon..</div>
      </Content>
    </React.Fragment>
  )
}

export default Dashboard
