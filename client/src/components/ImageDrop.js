import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux'

class ImageDrop extends React.Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }

  prodImageDrop = (accepted, rejected) => {
    this.setState({ accepted, rejected });
      request.post(`/api/cloudinarys/newproduct`)
             .attach('file', accepted[0])
             .set('Accept', 'application/json')
             .end( (err, response) => {
               let url = JSON.parse(response.text);
               this.props.setImageUrlState(url, this.props.imgNum);
             })

  };

  render() {
    return (
      <section>
        <div>
          <Dropzone
            accept="image/jpg, image/jpeg, image/png"
            onDrop={this.prodImageDrop}
          >
            <p>Upload an product picture: *.jpg, *.jpeg and *.png</p>
          </Dropzone>
        </div>
      </section>
    );
  }
}


export default connect()(ImageDrop);
