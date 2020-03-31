import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms';

function Home() {
  return (
    <div>
      <Hero hero='defaultHero'>
        <Banner title='luxurius rooms' subtitle='delux rooms starting at R1000'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}

export default Home;
