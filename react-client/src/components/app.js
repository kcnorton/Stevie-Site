import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

//components
import HomePage from './pages/homePage.js';
import AboutPage from './pages/aboutPage.js';
import TimelinePage from './pages/timelinePage.js';
import ContactPage from './pages/contactPage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          
          <Route name="home" exact path="/HomePage" component={HomePage} />
          <Route name="about" exact path="/AboutPage" component={AboutPage} />
          <Route name="timeline" exact path="/TimelinePage" component={TimelinePage} />
          <Route name="contact" exact path="/ContactPage" component={ContactPage} />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;