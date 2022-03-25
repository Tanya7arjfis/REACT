import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='header__block'>
            <p className='company-name'>aperture</p>
            <div >
              <ul className='header__nav'>
                <li className='nav_list'><a>Business areas</a></li>
                <li className='nav_list'><a>Featured images</a></li>
                <li className='nav_list'><a>Gear cage</a></li>
                <li className='nav_list'><a>Contact</a></li>
                <li className='nav_list'><a>Get template</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
