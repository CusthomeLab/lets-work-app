import React, {Component} from 'react'
import {Layout, Icon, Input, Button, Select, message} from 'antd'
import SectionContent from '../Components/SectionContent'
import Store from '../Tools/Store'
import styled from 'styled-components'
const remote = window.require('electron').remote
const {dialog} = window.require('electron').remote

const Option = Select.Option

const IconWrapper = styled(Icon)`
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #faad14;
  }
`

const {Header, Content} = Layout

// Créé le store
const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    paths: {},
    cmds: {}
  }
})

function handleChange(value) {
  console.log(`selected ${value}`)
}

// Pemet de masquer la fenêtre
let w = remote.getCurrentWindow()

class Preferences extends Component {
  state = {
    pathMetodBack: '',
    pathMetodFront: '',
    pathBackoffBack: '',
    pathBackoffFront: '',
    pathConfiguratorBack: '',
    pathConfiguratorFront: '',
    cmdMetodBack: '',
    cmdMetodFront: '',
    cmdBackoffBack: '',
    cmdBackoffFront: '',
    cmdConfiguratorBack: '',
    cmdConfiguratorFront: ''
  }

  componentDidMount() {
    this.getParams()
  }
  // Récupère les chemins des répertoires enegistrés
  getParams = () => {
    const paths = store.get('paths')
    const cmds = store.get('cmds')
    this.setState({
      pathMetodBack: paths.pathMetodBack,
      pathMetodFront: paths.pathMetodFront,
      pathBackoffBack: paths.pathBackoffBack,
      pathBackoffFront: paths.pathBackoffFront,
      pathConfiguratorBack: paths.pathConfiguratorBack,
      pathConfiguratorFront: paths.pathConfiguratorFront,
      cmdMetodBack: cmds.cmdMetodBack,
      cmdMetodFront: cmds.cmdMetodFront,
      cmdBackoffBack: cmds.cmdBackoffBack,
      cmdBackoffFront: cmds.cmdBackoffFront,
      cmdConfiguratorBack: cmds.cmdConfiguratorBack,
      cmdConfiguratorFront: cmds.cmdConfiguratorFront
    })
  }
  // Ouvre la dialogue native de sélection du répertoire
  openDialog = path => {
    dialog.showOpenDialog({properties: ['openDirectory']}, filePaths => {
      filePaths && this.setState({[path]: filePaths[0]})
    })
  }
  // Permet la modification manuelle du path dans l'input
  onChange = (e, path) => {
    this.setState({[path]: e.target.value})
  }
  // Enregistre les chemins des répertoires
  onSave = () => {
    const paths = {
      pathMetodBack: this.state.pathMetodBack,
      pathMetodFront: this.state.pathMetodFront,
      pathBackoffBack: this.state.pathBackoffBack,
      pathBackoffFront: this.state.pathBackoffFront,
      pathConfiguratorBack: this.state.pathConfiguratorBack,
      pathConfiguratorFront: this.state.pathConfiguratorFront
    }
    const cmds = {
      cmdMetodBack: this.state.cmdMetodBack,
      cmdMetodFront: this.state.cmdMetodFront,
      cmdBackoffBack: this.state.cmdBackoffBack,
      cmdBackoffFront: this.state.cmdBackoffFront,
      cmdConfiguratorBack: this.state.cmdConfiguratorBack,
      cmdConfiguratorFront: this.state.cmdConfiguratorFront
    }
    store.set('paths', paths)
    store.set('cmds', cmds)
    const successMessage = () => {
      message.success('Modifications enregistrées')
    }
    successMessage()
  }

  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Header
          style={{
            backgroundColor: '#fff',
            position: 'fixed',
            zIndex: 2,
            width: '100%',
            borderBottom: '1px solid #e8e8e8'
          }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h1 style={{marginBottom: '0'}}>Préferences</h1>
            <Icon
              type="close-circle"
              theme="twoTone"
              twoToneColor="#faad14"
              style={{fontSize: '24px', cursor: 'pointer', justifySelf: 'end'}}
              onClick={() => w.hide()}
            />
          </div>
        </Header>
        <Content style={{margin: '88px 16px 0 16px', overflow: 'initial'}}>
          <SectionContent sectionTitle="Général">
            <span style={{fontSize: '14px', fontWeight: '500', paddingRight: '10px'}}>Rôle :</span>
            <Select placeholder="Choisir votre profil" style={{width: 180}} onChange={handleChange} disabled>
              <Option value="po">Suivi de Projets</Option>
              <Option value="dev">Développeur</Option>
            </Select>
          </SectionContent>
        </Content>
        <Content style={{margin: '24px 16px 0 16px', overflow: 'initial'}}>
          <SectionContent sectionTitle="Développeurs">
            <div style={{marginBottom: '32px'}}>
              <Icon type="project" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
              <span style={{paddingLeft: '10px', fontSize: '14px', fontWeight: '500'}}>Projet Method</span>
              <div style={{margin: '10px 0'}}>
                <Input
                  addonBefore="Repo Back"
                  addonAfter={<IconWrapper onClick={() => this.openDialog('pathMetodBack')} type="setting" />}
                  placeholder="Chemin du répertoire"
                  onChange={e => this.onChange(e, 'pathMetodBack')}
                  value={this.state.pathMetodBack}
                />
              </div>
              <div style={{margin: '10px 0 24px'}}>
                <Input
                  addonBefore="Cmd Back"
                  placeholder="Ligne de commande"
                  onChange={e => this.onChange(e, 'cmdMetodBack')}
                  value={this.state.cmdMetodBack}
                />
              </div>
              <div style={{margin: '10px 0'}}>
                <Input
                  addonBefore="Repo Front"
                  addonAfter={<IconWrapper onClick={() => this.openDialog('pathMetodFront')} type="setting" />}
                  placeholder="Chemin du répertoire"
                  onChange={e => this.onChange(e, 'pathMetodFront')}
                  value={this.state.pathMetodFront}
                />
              </div>
              <div style={{margin: '10px 0 24px'}}>
                <Input
                  addonBefore="Cmd Front"
                  placeholder="Ligne de commande"
                  onChange={e => this.onChange(e, 'cmdMetodFront')}
                  value={this.state.cmdMetodFront}
                />
              </div>
            </div>
            <div style={{marginBottom: '32px'}}>
              <Icon type="fund" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
              <span style={{paddingLeft: '10px', fontSize: '14px', fontWeight: '500'}}>Projet Backoff</span>
              <div style={{margin: '10px 0'}}>
                <Input
                  addonBefore="Repo Back"
                  addonAfter={<IconWrapper onClick={() => this.openDialog('pathBackoffBack')} type="setting" />}
                  placeholder="Chemin du répertoire"
                  onChange={e => this.onChange(e, 'pathBackoffBack')}
                  value={this.state.pathBackoffBack}
                />
              </div>
              <div style={{margin: '10px 0 24px'}}>
                <Input
                  addonBefore="Cmd Back"
                  placeholder="Ligne de commande"
                  onChange={e => this.onChange(e, 'cmdBackoffBack')}
                  value={this.state.cmdBackoffBack}
                />
              </div>
              <div style={{margin: '10px 0'}}>
                <Input
                  addonBefore="Repo Front"
                  addonAfter={<IconWrapper onClick={() => this.openDialog('pathBackoffFront')} type="setting" />}
                  placeholder="Chemin du répertoire"
                  onChange={e => this.onChange(e, 'pathBackoffFront')}
                  value={this.state.pathBackoffFront}
                />
              </div>
              <div style={{margin: '10px 0 24px'}}>
                <Input
                  addonBefore="Cmd Front"
                  placeholder="Ligne de commande"
                  onChange={e => this.onChange(e, 'cmdBackoffFront')}
                  value={this.state.cmdBackoffFront}
                />
              </div>
            </div>
            <div style={{marginBottom: '32px'}}>
              <Icon type="shop" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
              <span style={{paddingLeft: '10px', fontSize: '14px', fontWeight: '500'}}>Projet Config. 3D</span>
              <div style={{margin: '10px 0'}}>
                <Input
                  addonBefore="Repo Back"
                  addonAfter={<IconWrapper onClick={() => this.openDialog('pathConfiguratorBack')} type="setting" />}
                  placeholder="Chemin du répertoire"
                  onChange={e => this.onChange(e, 'pathConfiguratorBack')}
                  value={this.state.pathConfiguratorBack}
                />
              </div>
              <div style={{margin: '10px 0 24px'}}>
                <Input
                  addonBefore="Cmd Back"
                  placeholder="Ligne de commande"
                  onChange={e => this.onChange(e, 'cmdConfiguratorBack')}
                  value={this.state.cmdConfiguratorBack}
                />
              </div>
              <div style={{margin: '10px 0'}}>
                <Input
                  addonBefore="Repo Front"
                  addonAfter={<IconWrapper onClick={() => this.openDialog('pathConfiguratorFront')} type="setting" />}
                  placeholder="Chemin du répertoire"
                  onChange={e => this.onChange(e, 'pathConfiguratorFront')}
                  value={this.state.pathConfiguratorFront}
                />
              </div>
              <div style={{margin: '10px 0 24px'}}>
                <Input
                  addonBefore="Cmd Front"
                  placeholder="Ligne de commande"
                  onChange={e => this.onChange(e, 'cmdConfiguratorFront')}
                  value={this.state.cmdConfiguratorFront}
                />
              </div>
            </div>
            <div>
              <Button block size="large" icon="save" type="primary" onClick={() => this.onSave()}>
                Sauvegader
              </Button>
            </div>
          </SectionContent>
        </Content>
      </Layout>
    )
  }
}

export default Preferences
