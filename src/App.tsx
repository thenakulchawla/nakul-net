import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from './const/routes';
import HeaderNav from './HeaderNav';
import { Home } from './Home';
import { Project } from './Project';
import { Resume } from './Resume';

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

  }

  public render() {

    return (

      <BrowserRouter>
        <div>
          <HeaderNav />
        </div>

        {/* <div className="nakul-row">
          <div>

            <SideBar />

          </div> */}
        <div>
          <Switch>
            <Route exact={true} path={routes.HOME} component={Home} />
            <Route exact={true} path={routes.RESUME} component={Resume} />
            <Route exact={true} path={routes.PROJECT} component={Project} />
          </Switch>

        </div>

      </BrowserRouter>


    );
  }


}

export const App = AppComponent;
