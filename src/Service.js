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
          {/* <h1 className='service__title'>What we do.</h1>
          <p className='service__text'>The areas that we're specialized in.</p>
          <ul>
            <li>
              <img scr='img/image2.png'></img>
              <p>Product Photography</p>
              <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
            </li>
          </ul> */}
      </div>
    )
  }
}
