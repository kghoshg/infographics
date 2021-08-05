
import React, { Component } from 'react';
class Toggle extends  Component {
    constructor(params) {
       super(params) 
       // initial gender state set from props
       this.state = {
         gender: 'down'
       }
       this.setGender = this.setGender.bind(this)
    }
    
    setGender(e) {
    const preview = document.querySelector('div#preview');
    const pv_text = document.querySelector('div#pv-text');        
    const pv_img = document.querySelector('div#pv-img'); 
      this.setState({
        gender: e.target.value
      })
      if(this.state.gender == 'down'){
        preview.removeChild(pv_text);
        preview.appendChild(pv_text);
      }else{
        preview.removeChild(pv_img);
        preview.appendChild(pv_img);
      }
    }
    
    render() {
      const {gender} = this.state
      return  <div id="toggle">
          Toggle:
          <div>
            <input type="radio" checked={gender == 'up'} 
  onChange={this.setGender} value='up' /> Image Up
            <input type="radio" checked={gender == 'down'} 
  onChange={this.setGender} value='down'  /> Image Down
          </div>          
        </div>;
    }
  }

  export default Toggle;