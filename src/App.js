import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import AppLayout from './Components/AppLayout'
import Dashboard from './Pages/Dashboard'
import ProjectPageLayout from './Components/ProjectPageLayout'
import Preferences from './Pages/Preferences'
import {
  METOD_PARAMS,
  BACKOFFICE_PARAMS,
  CONGIGURATOR_PARAMS,
  PRODUCTION_PARAMS,
  STARS_PARAMS,
  GESCOM_PARAMS
} from './Tools/params'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <AppLayout title="Dashboard">
              <Dashboard />
            </AppLayout>
          )}
        />
        <Route path="/preferences" render={props => <Preferences />} />
        <Route
          path="/metod"
          render={props => (
            <AppLayout title="Projet Metod" tagTitle="Magelan" tagColor="green">
              <ProjectPageLayout projectKey="MET" params={METOD_PARAMS} hasDev={true} />
            </AppLayout>
          )}
        />
        <Route
          path="/backoffice"
          render={props => (
            <AppLayout title="Projet Backoff" tagTitle="Magelan" tagColor="green">
              <ProjectPageLayout projectKey="MET" params={BACKOFFICE_PARAMS} hasDev={true} />
            </AppLayout>
          )}
        />
        <Route
          path="/configurator"
          render={props => (
            <AppLayout title="Projet Configurateur" tagTitle="Magelan" tagColor="green">
              <ProjectPageLayout projectKey="CFG" params={CONGIGURATOR_PARAMS} hasDev={true} />
            </AppLayout>
          )}
        />
        <Route
          path="/production"
          render={props => (
            <AppLayout title="Projet Production" tagTitle="Inovalia" tagColor="blue">
              <ProjectPageLayout projectKey="PROD" params={PRODUCTION_PARAMS} hasDev={false} />
            </AppLayout>
          )}
        />
        <Route
          path="/stars"
          render={props => (
            <AppLayout title="Projet Les Étoiles" tagTitle="Inovalia" tagColor="blue">
              <ProjectPageLayout projectKey="STARS" params={STARS_PARAMS} hasDev={false} />
            </AppLayout>
          )}
        />
        <Route
          path="/gescom"
          render={props => (
            <AppLayout title="Projet Gestion Commerciale" tagTitle="Inovalia" tagColor="blue">
              <ProjectPageLayout projectKey="GESCOM" params={GESCOM_PARAMS} hasDev={false} />
            </AppLayout>
          )}
        />
      </Switch>
    )
  }
}

export default withRouter(App)
