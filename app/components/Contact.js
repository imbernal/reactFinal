import React from 'react';



class Contact extends React.Component {
  render() {
    return (

        <form className='home-container-contact' >
          <h1 className='title'>Contact Us</h1>
            <div className="form">
              <input placeholder='Name' type='text' />
              <input placeholder='Email' type='text' />
              <textarea rows="6" cols="50" ></textarea>
              <button className='button' type='submit'>Send</button>
              </div>
        </form>
    );
  }
}














export default Contact;
