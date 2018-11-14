import React from 'react'
import {Button, Row, Col} from 'antd'
import {JiraIcon} from '@atlaskit/logo'
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

const JiraIconCustom = styled(JiraIcon)`
  width: 20px;
  height: 20px;
`

const JiraAccess = ({url}) => {
  return (
    <Row style={{display: 'flex', alignItems: 'center'}}>
      <Col span={2}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <WrapperDiv>
            <JiraIconCustom />
          </WrapperDiv>
        </div>
      </Col>
      <Col span={4}>
        <span style={{fontSize: '16px', fontWeight: '700'}}>Jira</span>
      </Col>
      <Col span={4}>
        <Button type="default" icon="right-circle" size="small" onClick={() => openExternal([url])}>
          Accéder
        </Button>
      </Col>
    </Row>
  )
}
export default JiraAccess
