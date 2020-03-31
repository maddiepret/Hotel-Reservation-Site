import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle Services',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi.'
      },
      {
        icon: <FaBeer />,
        title: 'Greatest Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi.'
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='serives'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
