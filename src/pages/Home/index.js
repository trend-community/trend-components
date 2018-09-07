import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return <nav>
    <Link className="tc-display-block" to="/button">Button</Link>
    <Link className="tc-display-block" to="/helpers">Helpers</Link>
    <Link className="tc-display-block" to="/state">State</Link>
    <Link className="tc-display-block" to="/theme">Theme</Link>
    <Link className="tc-display-block" to="/topbar">Topbar</Link>
    <Link className="tc-display-block" to="/type">Type</Link>
  </nav>;
}

Home.displayName = 'Home';

export default Home;
