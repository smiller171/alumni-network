import { hoverTransition } from '../../../../styles/style-utils';
import { Popup } from 'semantic-ui-react';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Table from './Table';
import TableRow from './TableRow';

const URL = "https://freecodecamp.org/";

const InfoIcon = styled.i `
  font-size: 14px !important;
  margin-left: 4px !important;
  color: grey;
  ${ hoverTransition() }
`;

const A = styled.a`
  ${ hoverTransition() }
`;

const FccTables = ({
  width,
  fccCerts,
  username,
  longestStreak,
  currentStreak,
  browniePoints,
  firstChallenge,
  totalChallenges,
}) => {
  return (
    <div className="row">
      <Table columnWidth={width}>
        <TableRow
          icon="desktop"
          header={ fccCerts.Front_End
            ? <A href={`${URL + username}/front-end-certification`} target="_blank">Frontend Certified</A>
            : "Frontend Certified" }
          content={ fccCerts.Front_End
            ? <i className="large green check mark icon"/>
            : <i className="large red remove icon"/> } />
        <TableRow
          icon="bar chart"
          header={ fccCerts.Data_Visualization
            ? <A href={`${URL + username}/data-visualization-certification`} target="_blank">Data Visualization Certified</A>
            : "Data Visualization Certified" }
          content={ fccCerts.Data_Visualization
            ? <i className="large green check mark icon"/>
            : <i className="large red remove icon"/> } />
        <TableRow
          icon="database"
          header={ fccCerts.Back_End
            ? <A href={`${URL + username}/back-end-certification`} target="_blank">Backend Certified</A>
            : "Backend Certified" }
          content={ fccCerts.Back_End
            ? <i className="large green check mark icon"/>
            : <i className="large red remove icon"/> } />
        <TableRow
          icon="tasks"
          header="Total Challenges Completed"
          content={
            <div>
              {totalChallenges}
              <Popup
                inverted
                wide
                position="top center"
                trigger={<InfoIcon
                  className="info circle icon" />}>
                  This value includes the total number of all projects, algorithms, and challenges combined.
              </Popup>
            </div> } />
      </Table>
      <Table columnWidth={width}>
        <TableRow
          icon="history"
          header="First Challenge Completed"
          content={firstChallenge} />
        <TableRow
          icon="grid layout"
          header="Longest Streak Ever"
          content={longestStreak} />
        <TableRow
          icon="block layout"
          header="Current Streak"
          content={currentStreak} />
        <TableRow
          icon="thumbs up"
          header="Total Brownie Points"
          content={browniePoints} />
      </Table>
    </div>
  );
}

FccTables.propTypes = {
  width: propTypes.string.isRequired,
  fccCerts: propTypes.object.isRequired,
  longestStreak: propTypes.string.isRequired,
  currentStreak: propTypes.string.isRequired,
  browniePoints: propTypes.string.isRequired,
  firstChallenge: propTypes.string.isRequired,
  totalChallenges: propTypes.number.isRequired,
}

export default FccTables;
