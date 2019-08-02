import React, { Component } from 'react';
import Timeline from '../../timeline.js';


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

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

};
  render() {
    return (
      <div className="container-fluid" onScroll={this.function()}>
      	<div className="container timeline">
        
        	<h1>Stevie's Timeline </h1>
        
        	<p>Stevie is always up for an adventure. She has lived in four states and visited eight.</p>

        	<p>Stevie is born in Florida. spends early years in Gainesville at the University of Florida. She takes trips to Georgia to visit family.</p>
        	<p>Stevie graduates college and moves to Tennessee. She loves to go hiking and climbing.</p>
        	<p>Stevie moves to Maryland where she continues to find new hikes in Maryland and Virginia. She takes a trip to Boston to visit old friends. She plays in her first snowstorm in Baltimore.</p>
        	<p>Stevie visits North Carolina with her sister and her aunt.</p>
        	<p>Stevie moves to New York City and continues to enjoy hikes around New York.</p>
        //stevies birthdays
        //stevies surgery
        //stevie established her first boulder
        //stevie hangs around climbing gyms in new york
        //stevie loves swimming
        //stevie protects me from a bears

          <ul>
            <li>
              <div>
                <time>2012</time> Stevie was born.
              </div>
            </li>
            <li>
              <div>
                <time>1937</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
              </div>
            </li>
            <li>
              <div>
                <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
              </div>
            </li>
            <li>
              <div>
                <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
              </div>
            </li>
            <li>
              <div>
                <time>1977</time> Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
              </div>
            </li>
            <li>
              <div>
                <time>1985</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
              </div>
            </li>
          </ul>
      	</div>
      </div>
    )
  }
}

export default TimelinePage;