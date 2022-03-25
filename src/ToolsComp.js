import React, { Component } from 'react';
import './ToolsComp.css';

export default class ToolsComp extends Component {
  render() {
    return (
      <div className='tools'>
        <div className='tools_left'>
          <div className="tools_block">
          <p className="tools_item">The Gear cage</p>
          <p className="tools_title">The tools that we use.</p>
          <p className="tools_text">
            The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.
          </p>
          <button className='btn'>Check it out</button>
          </div>
        </div>
        <div className='tools_right'></div>
      </div>
    )
  }
}
