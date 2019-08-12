import React, { Component } from 'react';
import Stairs from '../../images/stairs.jpg';
import Sherwood from '../../images/sherwoodgardens.jpg';

class AboutPage extends Component {
  constructor() {
      super();
      this.state = {
         ageTitle: "Age",
         breedTitle: "Breed",
         astrologicalTitle: "Astrological Signs",
         bandTitle: "Favorite Band",
         songTitle: "Favorite Song",
         colorTitle: "Favorite Color"
      };
   }

  render() {
    return (
      <div className="container-fluid">
        <div className="container about">
        
            <h1>About Stevie</h1>

            <p>Stevie was born in Florida on a hot summer morning. She was the runt from a litter of ten puppies. Stevie enjoys moderate hikes, lots of swimming, and fetch, but her favorite thing to do is lay on the couch and cuddle. <strong>Mouse over</strong> each fun fact about Stevie to reveal her answer.</p>

            <div className="grid-container">
                <div className="row">
                    <div className="col-4">
                        <p onMouseEnter= {() => this.setState({ageTitle:'7 years old'})} onMouseLeave= {() => this.setState({ageTitle:'Age'})}>{this.state.ageTitle}</p>
                    </div>
                    <div className="col-4">
                        <p onMouseEnter= {() => this.setState({breedTitle:'Golden Retriever'})} onMouseLeave= {() => this.setState({breedTitle:'Breed'})}>{this.state.breedTitle}</p>
                    </div>
                    <div className="col-4">
                        <p onMouseEnter= {() => this.setState({astrologicalTitle:'Sun in Leo, Moon in Virgo'})} onMouseLeave= {() => this.setState({astrologicalTitle:'Astrological Signs'})}>{this.state.astrologicalTitle}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p onMouseEnter= {() => this.setState({bandTitle:'Fleetwood Mac'})} onMouseLeave= {() => this.setState({bandTitle:'Favorite Band'})}>{this.state.bandTitle}</p>
                    </div>
                    <div className="col-4">
                        <p onMouseEnter= {() => this.setState({songTitle:'Dreams'})} onMouseLeave= {() => this.setState({songTitle:'Favorite Song'})}>{this.state.songTitle}</p>
                    </div>
                    <div className="col-4">
                        <p onMouseEnter= {() => this.setState({colorTitle:'Gold'})} onMouseLeave= {() => this.setState({colorTitle:'Favorite Color'})}>{this.state.colorTitle}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;