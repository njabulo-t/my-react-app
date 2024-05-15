import React from 'react';
import { Row, Col} from 'react-bootstrap';

import Bio from './assets/Akissi-Beukman-3.jpg';
import Image from 'react-bootstrap/Image';
import './App.css';
import Articles from './Articles';

export default function Biography() {
    return (
<div>
        <div className='Titles'>
        <h1>Biography</h1>
      </div>

      <div className='Bio-Content' style={{paddingTop:'100px'}}>
  <Row className="justify-content-center" >
    <Col lg={12}  md={6}  sm={4} >
    <div className="bio-container d-flex flex-row flex-wrap align-items-center justify-content-center">
        <Image className='bioImg' src={Bio} rounded />
        <div className="bio-text" style={{maxWidth:'400px', marginLeft: '30px'}}>
          <h2 style={{paddingTop:'20px', color: ' rgba(165, 42, 42, 0.711)', fontWeight:'bold', fontSize:'3rem'}}>Akissi Buekman</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
            <br></br>
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Get in touch <br></br>
            <a style={{color:'rgba(165, 42, 42, 0.711',}} href="mailto:email@address.com">email@address.com</a>
          </p>
      </div>
      </div>
    </Col>
  </Row>
</div>
<Articles />
</div>
    );   
}