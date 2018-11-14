import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import AppLayout from './Components/AppLayout'
import Dashboard from './Pages/Dashboard'
import ProjectPageLayout from './Components/ProjectPageLayout'
import {METOD_URLS, BACKOFFICE_URLS, CONGIGURATOR_URLS, PRODUCTION_URLS, STARS_URLS, GESCOM_URLS} from './Tools/urls'
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
        <Route
          path="/metod"
          render={props => (
            <AppLayout title="Projet Metod" tagTitle="Magelan" tagColor="green">
              <ProjectPageLayout projectKey="MET" urls={METOD_URLS} hasDev={true} />
            </AppLayout>
          )}
        />
        <Route
          path="/backoffice"
          render={props => (
            <AppLayout title="Projet Backoff" tagTitle="Magelan" tagColor="green">
              <ProjectPageLayout projectKey="MET" urls={BACKOFFICE_URLS} hasDev={true} />
            </AppLayout>
          )}
        />
        <Route
          path="/configurator"
          render={props => (
            <AppLayout title="Projet Configurateur" tagTitle="Magelan" tagColor="green">
              <ProjectPageLayout projectKey="CFG" urls={CONGIGURATOR_URLS} hasDev={true} />
            </AppLayout>
          )}
        />
        <Route
          path="/production"
          render={props => (
            <AppLayout title="Projet Production" tagTitle="Inovalia" tagColor="blue">
              <ProjectPageLayout projectKey="PROD" urls={PRODUCTION_URLS} hasDev={false} />
            </AppLayout>
          )}
        />
        <Route
          path="/stars"
          render={props => (
            <AppLayout title="Projet Les Étoiles" tagTitle="Inovalia" tagColor="blue">
              <ProjectPageLayout projectKey="STARS" urls={STARS_URLS} hasDev={false} />
            </AppLayout>
          )}
        />
        <Route
          path="/gescom"
          render={props => (
            <AppLayout title="Projet Gestion Commerciale" tagTitle="Inovalia" tagColor="blue">
              <ProjectPageLayout projectKey="GESCOM" urls={GESCOM_URLS} hasDev={false} />
            </AppLayout>
          )}
        />
      </Switch>
    )
  }
}

export default withRouter(App)
