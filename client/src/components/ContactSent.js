import React from 'react';
import { Grid, Col  } from 'react-bootstrap';

const ContactSent = () => (
  <div className='textCenter'>
    <div> Thank You !</div>
      <Grid>
        <Col xs={1} md={2}/>
        <Col xs={10} md={8}>
          <div>
            Thank you for contacting us! We have received your message,
          </div>
          <div>
            and we will respond within 2 business days
          </div>
        </Col>
        <Col xs={1} md={2}/>
      </Grid>

  </div>
)

export default ContactSent;
