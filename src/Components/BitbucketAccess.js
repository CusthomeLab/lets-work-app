import React from 'react'
import {Button, Col} from 'antd'
import {BitbucketIcon} from '@atlaskit/logo'
import styled from 'styled-components'
import openExternal from '../Tools/openExternal'

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin-right: 10px;
  color: rgb(14, 22, 36);
  background: rgb(223, 225, 230);
`

const BitbucketIconCustom = styled(BitbucketIcon)`
  width: 20px;
  height: 20px;
`

const BitbucketAccess = ({label, url}) => {
  return (
    <React.Fragment>
      <Col span={2}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <WrapperDiv>
            <BitbucketIconCustom />
          </WrapperDiv>
        </div>
      </Col>
      <Col span={4}>
        <span style={{fontSize: '16px', fontWeight: '700'}}>{label}</span>
      </Col>
      <Col span={4}>
        <Button type="default" icon="right-circle" size="small" onClick={() => openExternal([url])}>
          Accéder
        </Button>
      </Col>
    </React.Fragment>
  )
}
export default BitbucketAccess
