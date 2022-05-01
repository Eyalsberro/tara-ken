import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ContactUs() {
  return (
    <div className='contactus'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEF8FE" fillOpacity="1" d="M0,256L30,250.7C60,245,120,235,180,208C240,181,300,139,360,138.7C420,139,480,181,540,186.7C600,192,660,160,720,138.7C780,117,840,107,900,90.7C960,75,1020,53,1080,85.3C1140,117,1200,203,1260,245.3C1320,288,1380,288,1410,288L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      <Container className='container-contactus' fluid>
        <Row>
          <Col>
            <h1>Call Now</h1>
          </Col>

          <Col>
            <div className='form-contactus'>

              <h1>Contact Us</h1>
              <input type="text" placeholder='name' />
              <br />
              <input type="text" placeholder='name' />
              <br />
              <input type="text" placeholder='name' />
              <br />
              <button>Send</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
