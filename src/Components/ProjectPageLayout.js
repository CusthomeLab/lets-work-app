import React from 'react'
import {Layout, Row} from 'antd'
import JiraAccess from '../Components/JiraAccess'
import BitbucketAccess from '../Components/BitbucketAccess'
import ItermAccess from '../Components/ItermAccess'
import HeaderContent from '../Components/HeaderContent'
import SectionContent from '../Components/SectionContent'

const {Content} = Layout

const ProjectPageLayout = ({params, projectKey, hasDev}) => {
  let arrayUrls = []
  params.JIRA_URL && arrayUrls.push(params.JIRA_URL)
  params.BITBUCKET_FRONT_URL && arrayUrls.push(params.BITBUCKET_FRONT_URL)
  params.BITBUCKET_BACK_URL && arrayUrls.push(params.BITBUCKET_BACK_URL)
  return (
    <Content style={{margin: '24px 16px', overflow: 'initial'}}>
      <HeaderContent projectKey={projectKey} urls={arrayUrls} />
      {/* Partie Gestion de Projet */}
      <SectionContent sectionTitle="Gestion de Projet">
        <JiraAccess url={params.JIRA_URL} />
      </SectionContent>
      {/* Partie Développement */}
      {hasDev && (
        <SectionContent sectionTitle="Développement">
          {/* Dépôt front */}
          <Row style={{display: 'flex', alignItems: 'center'}}>
            {/* Bitbucket dépôt front */}
            <BitbucketAccess label="Dépôt Front" url={params.BITBUCKET_FRONT_URL} />
            {/* iTerm dépôt front */}
            <ItermAccess path={params.paths.front} cmd={params.cmds.front} />
          </Row>
          {/* Dépôt back */}
          <Row style={{marginTop: '20px', display: 'flex', alignItems: 'center'}}>
            {/* Bitbucket dépôt back */}
            <BitbucketAccess label="Dépôt Back" url={params.BITBUCKET_BACK_URL} />
            {/* iTerm dépôt back */}
            <ItermAccess path={params.paths.back} cmd={params.cmds.back} />
          </Row>
        </SectionContent>
      )}
    </Content>
  )
}

export default ProjectPageLayout
