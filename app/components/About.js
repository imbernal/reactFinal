import React from 'react'
import { Link } from 'react-router-dom';


class About extends React.Component {
  render() {
    return (
      <div className='home-container-about'>

        <div className="aboutContent">
          <img src="http://www.starthubcenters.com/wp-content/uploads/2017/02/starthub_logo_white-1.png"/>
          <p>We are redefining “soft launch” by growing consumer-centric companies in our unique business growth ecosystem. We work with experienced entrepreneurs and experts to engineer the growth of our member companies, and deliver measurable results within days of joining.</p>
          <p>Starthub’s audience includes thousands of companies looking for services like yours to help them grow in their respective industries and markets. Even though not all of them have headquarters in the Starthub office, they often ask us for referrals for top-notch services. As a Starthub Member, you will have preferred placement on our referrals list.
          </p>
        </div>
        <Link className='button' to='/contact'>
          Contact Us
        </Link>
      </div>
    );
  }
}

export default About;
