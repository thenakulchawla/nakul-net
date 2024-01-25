import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as routes from './const/routes';
import HeaderNav from './Navigation';
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

        <div className="fixed-top">
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.RESUME} element={<Resume />} />
            <Route path={routes.PROJECT} element={<Project />} />
          </Routes>

        </div>

      </BrowserRouter>


    );
  }


}

export const App = AppComponent;
