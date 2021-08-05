
import React, { Component } from 'react';
class Toggle extends  Component {
    constructor(params) {
       super(params) 
       // initial position state set from props
       this.state = {
        position: 'down'
       }
       this.setPosition  = this.setPosition .bind(this)
    }
    
    setPosition (e) {
    const preview = document.querySelector('div#preview');
    const pv_text = document.querySelector('div#pv-text');        
    const pv_img = document.querySelector('div#pv-img'); 
      this.setState({
        position: e.target.value
      })
      if(this.state.position == 'down'){
        preview.removeChild(pv_text);
        preview.appendChild(pv_text);
      }else{
        preview.removeChild(pv_img);
        preview.appendChild(pv_img);
      }
    }
    
    render() {
      const {position} = this.state
      return  <div id="toggle">
          Toggle:
          <div>
            <input type="radio" checked={position == 'up'} 
  onChange={this.setPosition } value='up' /> Image Up
            <input type="radio" checked={position == 'down'} 
  onChange={this.setPosition } value='down'  /> Image Down
          </div>          
        </div>;
    }
  }

  export default Toggle;