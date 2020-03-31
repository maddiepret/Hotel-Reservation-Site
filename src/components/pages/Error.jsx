import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <Hero hero='defaultHero'>
      <Banner title='404' subtitle='Page not found'>
        <Link to='/' className='btn-primary'>
          go back
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
