import { isEmpty } from 'lodash';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, Dropdown, Input } from 'semantic-ui-react';

const ErrorLabel = ({ isMobile, error }) => (
  <div
    className={`ui ${!isMobile ? 'left pointing' : ''} red basic label`}
    style={{ marginTop: 10 }}>
    {error}
  </div>
);

const StyledButton = styled(Button)`
  margin: 10px 0 !important;
`;

const StyledInput = styled(Input)`
  width: 500px;
  @media screen and (max-width: 580px) {
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const RepoInput = ({
  addItem,
  error,
  handleChange,
  handleDropdownChange,
  icon,
  item,
  isMobile,
  repoHosts,
}) => {
  return (
    <div>
      <StyledInput
        action={ !isMobile
          ? <Button
              className="basic green"
              content="Save"
              icon={icon}
              onClick={addItem} />
          : null }
        fluid={isMobile && true}
        label={
          <Dropdown
            className="basic green"
            defaultValue="https://github.com/"
            onChange={handleDropdownChange}
            options={repoHosts} /> }
        labelPosition="left"
        onChange={handleChange}
        placeholder="Namespace / Repo"
        value={item} />
      { isMobile
    ? <StyledButton
        className="basic green"
        content="Save"
        icon={icon}
        onClick={addItem} />
    : null }
      { !isEmpty(error) && !error.repo && !error.namespace &&
      <ErrorLabel error={error.header} isMobile={isMobile} /> }
    </div>
  );
};

RepoInput.propTypes = {
  addItem: propTypes.func.isRequired,
  error: propTypes.object.isRequired,
  handleChange: propTypes.func.isRequired,
  handleDropdownChange: propTypes.func.isRequired,
  icon: propTypes.string.isRequired,
  isMobile: propTypes.bool.isRequired,
  item: propTypes.string.isRequired,
  repoHosts: propTypes.array.isRequired,
}

export default RepoInput
