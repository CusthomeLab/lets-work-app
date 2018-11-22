import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {Layout, Menu, Icon, Tag} from 'antd'
import styled, {keyframes} from 'styled-components'
import logo from '../logo.svg'

const {Sider, Header} = Layout

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const LogoSpin = styled.img`
  animation: ${spin} infinite 20s linear;
`

class AppLayout extends Component {
  state = {
    collapsed: false,
    finishedCollapsed: true
  }

  onCollapse = collapsed => {
    this.setState({collapsed: collapsed, finishedCollapsed: false})
    if (!collapsed) {
      setTimeout(() => {
        this.setState({finishedCollapsed: true})
      }, 100)
    }
  }

  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          collapsible
          breakpoint="md"
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          onBreakpoint={this.onCollapse}
          theme="light"
          width="220"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            paddingTop: '30px',
            borderRight: '1px solid #e8e8e8'
          }}>
          <div
            style={{
              height: '32px',
              margin: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: this.state.collapsed ? 'center' : 'initial'
            }}>
            <LogoSpin
              src={logo}
              style={{transition: 'width 0.25s ease-in-out'}}
              width={this.state.collapsed ? '48' : '36'}
              alt="logo"
            />
            {this.state.finishedCollapsed && (
              <span style={{fontWeight: '700', fontSize: '18px', verticalAlign: 'middle'}}>Let's Work</span>
            )}
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={[this.props.location.pathname]}>
            <Menu.Item key="/">
              <NavLink className="nav-text" to="/">
                <Icon type="appstore" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{fontSize: '16px'}}>
                  Dashboard
                </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/metod">
              <NavLink className="nav-text" to="/metod">
                <Icon type="project" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{paddingRight: '10px', fontSize: '16px'}}>
                  Metod
                </span>
                {this.state.finishedCollapsed && <Tag color="green">Magelan</Tag>}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/backoffice">
              <NavLink className="nav-text" to="/backoffice">
                <Icon type="fund" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{paddingRight: '10px', fontSize: '16px'}}>
                  Backoff
                </span>
                {this.state.finishedCollapsed && <Tag color="green">Magelan</Tag>}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/configurator">
              <NavLink className="nav-text" to="/configurator">
                <Icon type="shop" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{paddingRight: '10px', fontSize: '16px'}}>
                  Config. 3D
                </span>
                {this.state.finishedCollapsed && <Tag color="green">Magelan</Tag>}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/production">
              <NavLink className="nav-text" to="/production">
                <Icon type="tool" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{paddingRight: '10px', fontSize: '16px'}}>
                  Production
                </span>
                {this.state.finishedCollapsed && <Tag color="blue">Inovalia</Tag>}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/stars">
              <NavLink className="nav-text" to="/stars">
                <Icon type="rocket" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{paddingRight: '10px', fontSize: '16px'}}>
                  Les Étoiles
                </span>
                {this.state.finishedCollapsed && <Tag color="blue">Inovalia</Tag>}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/gescom">
              <NavLink className="nav-text" to="/gescom">
                <Icon type="euro" theme="twoTone" twoToneColor="#faad14" style={{fontSize: '16px'}} />
                <span className="nav-text" style={{paddingRight: '10px', fontSize: '16px'}}>
                  Ges. Com.
                </span>
                {this.state.finishedCollapsed && <Tag color="blue">Inovalia</Tag>}
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{marginLeft: this.state.collapsed ? 80 : 220}}>
          <Header style={{background: '#fff', padding: '16px 0 0 16px', height: 'auto'}}>
            <h1 style={{color: '#000'}}>
              <span style={{paddingRight: '10px'}}>{this.props.title}</span>
              {this.props.tagTitle && (
                <Tag color={this.props.tagColor} style={{verticalAlign: 'middle'}}>
                  {this.props.tagTitle}
                </Tag>
              )}
            </h1>
          </Header>
          {this.props.children}
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(AppLayout)
