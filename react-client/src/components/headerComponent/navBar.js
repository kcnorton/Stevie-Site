import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        
        <div className="logo">
          STEVIE
        </div>

        <nav>
          <ul id="headerButtons">
            <li className="navButton"><Link to="/HomePage">Home</Link></li>
            <li className="navButton"><Link to="/AboutPage">About</Link></li>
            <li className="navButton"><Link to="/TimelinePage">Timeline</Link></li>
            <li className="navButton"><Link to="/ContactPage">Contact</Link></li>
          </ul>
        </nav>
      
      </header>
    );
  }
}

export default NavBar;