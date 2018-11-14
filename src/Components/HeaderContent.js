import React from 'react'
import {Button} from 'antd'
import openExternal from '../Tools/openExternal'

export default ({urls, projectKey}) => (
  <div style={{display: 'flex', padding: 24, background: '#fff'}}>
    <span
      style={{
        flex: 'auto',
        alignSelf: 'center',
        color: '#000',
        fontSize: '18px',
        fontWeight: '500',
        float: 'left'
      }}>
      Clé projet : <span style={{fontWeight: '700'}}>{projectKey}</span>
    </span>
    <Button type="primary" style={{float: 'right'}} onClick={() => openExternal(urls)}>
      Tout ouvrir
    </Button>
  </div>
)
