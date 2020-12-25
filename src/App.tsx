import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from './const/routes';
import { Home } from './Home';
import { SideBar } from './Sidebar';

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

  }

  public render() {

    return (

      <BrowserRouter>

        <div className="nakul-row">
          {/* <HeaderNav /> */}
          <div>

            <SideBar />

          </div>
          <div>
            <Switch>
              {/* <Route exact={true} path={routes.PROJECT} component={ProjectList} /> */}
              <Route exact={true} path={routes.HOME} component={Home} />
              {/* <Route exact={true} path="/project/:projectName" component={Project} /> */}
            </Switch>

          </div>
        </div>
      </BrowserRouter>

    );
  }


}

export const App = AppComponent;
