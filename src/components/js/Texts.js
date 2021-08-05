import "../css/Texts.css";

import React, { Component } from 'react';

class Texts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: ''
    };
  }

  getName(e) {
      document.querySelector('div#pv-text span').style.display = "inline-block";
      document.querySelector('div#pv-text span').innerHTML = e.target.value;
  }

  render() {
    return (
      <div>
          <span>Enter text</span>
        	<input type="text" onChange={(e) => this.getName(e)}/>        
      </div>
    );
  }
}

export default Texts;