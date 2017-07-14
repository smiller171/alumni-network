import { isEqual } from 'lodash';
import ListItem from '../../common/ListItem';
import React from 'react';
import Ribbon from './common/RibbonHeader';
import { TransitionContainer } from '../../../../styles/style-utils';

import {
  getUserData,
  updateCerts
} from '../../../../actions/user.js';

export default class Certifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }
  render() {
    console.log(this.props);
    getUserData();
    const { toggle, fccCerts, showFCC } = this.props;
    var certs = [];
    for (var cert in fccCerts) {
      if (fccCerts[cert]) {
        certs.push(cert.replace(/_/g, ' ') + ' Certified');
      }
    }
    const certificates = certs.map((item, index) => {
      return (
        <ListItem key={index} icon="orange large certificate icon">
          <h5 style={{ marginTop: 2 }} className="ui header">
            {item}
          </h5>
        </ListItem>
      );
    });
    const refreshButton = (
      <button className="ui labeled icon basic positive button" onClick={updateCerts(username, mongoId)}>
        <i className="refresh icon"></i>
        Refresh
      </button>
      // <div className="ui button">
      //   <ListItem key="0" icon="large refresh icon">
      //     <h5 style={{ marginTop: 2 }} className="ui header">Refresh</h5>
      //   </ListItem>
      // </div>
    )
    return (
      <div>
        <Ribbon
          showSave={false}
          content="freeCodeCamp Certifications"
          onClick={() => toggle('showFCC')} />
        <TransitionContainer
          isExpanded={showFCC}
          style={{ margin: 0 }}
          className="ui list">
          {certificates}
          {refreshButton}
        </TransitionContainer>
      </div>
    );
  }
}
