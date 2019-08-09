import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="logo">
            STEVIE
          </div>

          <nav>
            <ul id="headerButtons">
              <li className="navButton"><Link to="/ContactPage"><span>Contact</span></Link></li>
              <li className="navButton"><Link to="/DogPage"><span>Friends & Family</span></Link></li>
              <li className="navButton"><Link to="/TimelinePage"><span>Timeline</span></Link></li>
              <li className="navButton"><Link to="/AboutPage"><span>About</span></Link></li>
              <li className="navButton"><Link to="/HomePage"><span>Home</span></Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;