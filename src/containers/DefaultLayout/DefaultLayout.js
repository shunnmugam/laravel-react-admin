import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
//import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

//service
import HttpClient from '../../services/Http';

class DefaultLayout extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      nav : {
        items : []
      }
    }

  }
  componentDidMount() {
    const _http = new HttpClient()
    _http.post('get-menus',{user_id:1}).then((response) => {
      {

      }
      this.setState({
        nav : {
          items : response.data.data
        }
      });
       console.log(response.data.data);
    })

  }

  render() {
    if(this.state.nav.items.length>0) {
      console.log(this.state.nav);
      return(
        <div className="app">
          <AppHeader fixed>
            <DefaultHeader />
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <AppSidebarNav navConfig={this.state.nav} {...this.props} />
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <main className="main">
              <Container fluid />
            </main>
            <AppAside fixed hidden>
              <DefaultAside />
            </AppAside>
          </div>
          <AppFooter>
            <DefaultFooter />
          </AppFooter>
        </div>
      );
    }else {
      return 'loading';
    }
  }
}

export default DefaultLayout;
