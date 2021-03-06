import { clearFlashMessage } from '../../actions/flashMessages';
import { connect } from 'react-redux';
import { connectScreenSize } from 'react-screen-size';
import FlashMessage from './FlashMessage';
import { mapScreenSizeToProps } from '../Navbar';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


class FlashMessagesList extends React.Component {
  render() {

    const {
      clearFlashMessage,
      location: { pathname },
      screen: { isDesktop }
    } = this.props;

    const Container = !isDesktop &&
      (pathname === '/about' || pathname === '/login' || pathname === '/')
      ? styled.div`
          margin-top: 120px;
          margin-bottom: 20px;
        `
      : styled.div`
          margin-top: 80px;
          margin-bottom: 20px;
        `;

    const messages = this.props.messages.map((message, i) => {
      var key = i + message.text.message.slice(0, 3);
      return (
        <FlashMessage
          clearFlashMessage={clearFlashMessage}
          key={key}
          message={message} />
      );
    });

    return (
      <Container className="ui container">
        {messages}
      </Container>
    );
  }
}

FlashMessagesList.propTypes = {
  clearFlashMessage: propTypes.func.isRequired,
  messages: propTypes.array.isRequired
}

export default connectScreenSize(mapScreenSizeToProps)(
  connect(
    state => ({ messages: state.flashMessages }),
    { clearFlashMessage }
  )(FlashMessagesList)
);
