import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='title'> COWORKING. GROWTH. ACCELERATION.</h1>
        <p>“Your coworking space should do more for you.”</p>
        <Link className='button' to='/about'>
          ABOUT US
        </Link>
      </div>
    );
  }
}

export default Home;
