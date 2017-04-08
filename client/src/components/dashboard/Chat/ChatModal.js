/* eslint-disable */
import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

export default ({ size, close, open }) => {
  const green = '#007E00';
  const fireStyle = {
    width: "45px",
    height: "45px",
    marginBottom: "-5px"
  }
  return(
    <div>
      <Modal size={size} open={open} onClose={close}>

        <Modal.Header style={{ background: green, color: 'white' }}>
          <h1>
            <span>Mess Hall Chat &nbsp;</span>
          </h1>
        </Modal.Header>

        <Modal.Content>

        <p style={{ fontSize: '16px' }}>

          <span style={{ fontSize: '20px' }}>Discuss any coding topics you would like and feel free to explore
          mentorship opportunities in new technologies you are learning. To begin a new private chat with
          another member, simply click their name.</span>

          <br/><br/>

          <span>All the normal&nbsp;
          <a target="_blank" href="https://www.freecodecamp.com/code-of-conduct">Code of Conduct</a>
          &nbsp;guidelines for the Free Code Camp Forum and Gitter channels apply here as well.</span>

          <br/><br/>

          <i className="student icon mentorIcon"></i> These people are mentors<br/>
          <i className="star icon green onlineIcon"></i> These people are currently online

          <br/><br/>

          <b>Be nice and happy coding!</b>

          <br/>

        </p>

        <p style={{ fontSize: '14px' }}><b>Note:</b> While we enjoyed building this chat, we encourage you to continue
        more in-depth discussions on other platforms that have more robust features.</p>


        </Modal.Content>

        <Modal.Actions style={{ background: 'rgb(248,248,248)' }}>
          <Button
            positive
            content='Ok'
            onClick={close}
            icon='checkmark'
            labelPosition='right'
            style={{ background: green }} />
        </Modal.Actions>

      </Modal>
    </div>
  );
};
