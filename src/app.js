import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import { Menu as MenuIcon } from 'components/Icons';
import Home from './pages/Home';
import HelpersPage from './pages/HelpersPage';
import StatePage from './pages/StatePage';
import ThemePage from './pages/ThemePage';
import TopbarPage from './pages/TopbarPage';
import TypePage from './pages/TypePage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return <Fragment>
    <Header>
      <div className="tc-Topbar-inner">
        <div className="tc-Topbar-section tc-Topbar-section--start">
          <button className="tc-Topbar-icon" type="button">
            <MenuIcon />
          </button>
          <span className="tc-Topbar-title">Trend Components</span>
        </div>
      </div>
    </Header>

    <main style={{ paddingTop: '64px' }}>
      <Route exact path="/" component={Home} />
      <Route path="/button" component={ButtonPage} />
      <Route path="/helpers" component={HelpersPage} />
      <Route path="/state" component={StatePage} />
      <Route path="/topbar" component={TopbarPage} />
      <Route path="/theme" component={ThemePage} />
      <Route path="/type" component={TypePage} />
    </main>
  </Fragment>;
}

export default App;
