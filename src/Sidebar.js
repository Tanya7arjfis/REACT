import React, { Component } from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      
       <aside className='sidebar'>
          <h1 className='sidebar__title'>Past clients</h1>
          <p className='sidebar__text second-color'>Trusted by your favourite companies</p>
          <ul className='sidebar_list'>
            <li className='sidebar_item'><a href='#'>HillPlayes</a></li>
            <li className='sidebar_item'><a href='#'>Riksgrasen</a></li>
            <li className='sidebar_item'><a href='#'>StudioCai</a></li>
            <li className='sidebar_item'><a href='#'>ChillIndustries</a></li>
            <li className='sidebar_item'><a href='#'>Stockholm</a></li>
          </ul>
        </aside>
     
    )
  }
}
