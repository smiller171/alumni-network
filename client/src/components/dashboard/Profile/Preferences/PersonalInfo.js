import { connectScreenSize } from 'react-screen-size';
import { Container } from './common/RepoContainer';
import { countries } from '../../../../assets/dropdowns/countries';
import { Dropdown } from 'semantic-ui-react';
import FormField from './common/FormField';
import { isEqual } from 'lodash';
import ListItem from '../../common/ListItem';
import { mapScreenSizeToProps } from '../../../Navbar';
import React from 'react';
import Ribbon from './common/RibbonHeader';
import { TransitionContainer } from '../../../../styles/style-utils';

const INPUT_OPTIONS = 'small left icon';
const INFO_MESSAGE = `The FCCAN team may or may not send you emails in the
                      future (nothing for now). If so, we will give you
                      the option to opt-in to any email-related
                      features or regular newsletters.`;

class PersonalInfo extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }
  render() {
    const {
      bio,
      email,
      errors,
      toggle,
      country,
      location,
      showPopUp,
      isPrivate,
      displayName,
      showProfile,
      saveSection,
      handleInputChange,
      handleCountryChange,
      toggleEmailVisibilty,
      screen: { isMobile, isTablet },
    } = this.props;
    return (
      <div>
        <Ribbon
          id="personalPopUp"
          content="Personal Info"
          showPopUp={showPopUp}
          showSave={showProfile}
          saveSection={saveSection}
          onClick={() => toggle('showProfile')} />
        <TransitionContainer isExpanded={showProfile} className="ui form">
          <Container className="ui list">
            <ListItem>
              <FormField
                errors={errors}
                icon='user icon'
                name="displayName"
                value={displayName}
                tooltip="Display Name"
                inputOptions={INPUT_OPTIONS}
                onChange={handleInputChange}
                placeholder="Enter Display Name" />
            </ListItem>
            <ListItem>
              <FormField
                type="email"
                name="email"
                tooltip="Email"
                errors={errors}
                icon="mail icon"
                value={email}
                placeholder="Enter Email"
                isPrivate={isPrivate}
                infoMessage={INFO_MESSAGE}
                inputOptions={INPUT_OPTIONS}
                onChange={handleInputChange}
                isEmail={!errors.email && true}
                toggleEmailVisibilty={toggleEmailVisibilty} />
            </ListItem>
            <ListItem>
              <FormField
                errors={errors}
                value={location}
                name="location"
                tooltip="Location"
                icon="marker icon"
                placeholder="Enter Location"
                inputOptions={INPUT_OPTIONS}
                onChange={handleInputChange} />
            </ListItem>
            <ListItem>
              <div className="six wide field">
                <Dropdown
                  search
                  selection
                  value={country}
                  options={countries}
                  placeholder='Select Country'
                  onChange={handleCountryChange} />
              { errors.country &&
                <div style={{ marginTop: 5 }}
                  className={'ui red basic label'}>
                  {errors.country}
                </div> }
              </div>
            </ListItem>
            <ListItem>
              <div className={`${isMobile ? 'fluid' : isTablet ? 'eight wide' : 'six wide' } field`}>
                <textarea
                  rows="3"
                  name='bio'
                  value={bio}
                  onChange={handleInputChange}
                  placeholder="Enter a short bio here" />
              </div>
              { errors.bio &&
                <div className="ui red basic label">
                  {errors.bio}
                </div> }
            </ListItem>
          </Container>
        </TransitionContainer>
      </div>
    );
  }
}

export default connectScreenSize(mapScreenSizeToProps)(PersonalInfo);
