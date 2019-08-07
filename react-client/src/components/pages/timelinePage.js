import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Stairs from '../../images/stairs.jpg';
import CentralPark from '../../images/centralpark.jpg';
import Walter from '../../images/stevienwalter.jpg';
import Puppy from '../../images/puppystevie.jpg';
import Snowstorm from '../../images/baltimoresnow.jpg';

class TimelinePage extends Component {
  function () {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }  
};

// listen for events
componentDidMount() {
    window.addEventListener("load", callbackFunc())
    window.addEventListener("resize", callbackFunc())
    window.addEventListener("scroll", callbackFunc())
}
  render() {
    return (
      <div className="container-fluid">
      	<div className="container timeline">
        
        	<h1>Stevie's Timeline </h1>

          <ul>
            <li>
              <Fade right>
                <div className="timelineImage">
                  <img src={Puppy} alt="puppy stevie"/>
                  <time>2012</time> Stevie was born on August 19th and spent the first couple of months in Sarasota, FL with her nine siblings.
                </div>
              </Fade>
            </li>
            <li>
              <Fade left>
                <div className="timelineImage">
                  <img src={Walter} alt="stevie and walter"/>
                  <time>2012</time> Stevie moved to Gainesville, FL and met her best friend Walter.
                </div>
              </Fade>
            </li>
            <li>
              <Fade right>
                <div className="timelineImage">
                  <img src={Stairs} alt="stevie sitting on stairs"/>
                  <time>2014</time> Stevie moved to Chattanooga, TN where she enjoyed hiking and climbing in nearby forests and parks.
                </div>
              </Fade>
            </li>
            <li>
              <Fade left>
                <div className="timelineImage">
                  <img src={Snowstorm} alt="stevie running in a snowstorm"/>
                  <time>2015</time> Stevie moved to Baltimore, MD and played in her first snowstorm.
                </div>
              </Fade>
            </li>
            <li>
              <Fade right>
                <div className="timelineImage">
                  <img src={CentralPark} alt="stevie glowing in central park"/>
                  <time>2017</time> Stevie moved to Brooklyn, NY and learned that she loves city life and all the people who pet her.
                </div>
              </Fade>
            </li>
          </ul>
      	</div>
      </div>
    )
  }
}

export default TimelinePage;