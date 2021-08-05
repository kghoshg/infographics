//import logo from './logo.svg';
import "../css/ReanderImage.css";

import React, { Component } from 'react';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: ''
    };
  }

  getName(e) {
    const element = document.querySelector('div#pv-img');
    var img = document.createElement("img");
    img.setAttribute("src", '/imgs/' + e.target.files[0].name);
    element.appendChild(img); 
    document.querySelector('div#toggle').style.display = "block";;   
  }

  render() {
    return (
      <div>      	
          <span>Image</span>
        	<input id="image_file" type="file" onChange={(e) => this.getName(e)}/>           
      </div>
    );
  }
}

export default Images;