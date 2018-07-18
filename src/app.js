import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import HelpersPage from './pages/HelpersPage';
import ThemePage from './pages/ThemePage';
import TypePage from './pages/TypePage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return <Fragment>
    <header className="tc-phl tc-pvl">
      <h1 className="tc-mvn">Trend Components</h1>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route path="/button" component={ButtonPage} />
      <Route path="/helpers" component={HelpersPage} />
      <Route path="/theme" component={ThemePage} />
      <Route path="/type" component={TypePage} />
    </main>
  </Fragment>;
}

export default App;
