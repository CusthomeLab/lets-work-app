import React from 'react'
import {Divider} from 'antd'
import styled from 'styled-components'

const SectionWrapper = styled.div`
  padding: 24px;
  background: #fff;
`

export default ({sectionTitle, children}) => (
  <SectionWrapper>
    <Divider orientation="left">{sectionTitle}</Divider>
    {children}
  </SectionWrapper>
)
