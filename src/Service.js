import React, { Component } from 'react';
import './Service.css';

export default class Service extends Component {
  render() {
    return (
      <div className='service'>
        <div className='service__item'>
          <p className='service__title'>Sunset at Mount Fuji</p>
          <p className='second-color'>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
        </div>
      </div>
    )
  }
}
