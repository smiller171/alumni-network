import React from 'react';
import Ribbon from './common/RibbonHeader';
import MessageBox from '../../common/MessageBox';
import SliderToggle from '../../common/SliderToggle';

const Mentorship = ({
  error,
  toggle,
  isMentor,
  showPopUp,
  subSaveClick,
  showMentorship,
  mentorshipSkills,
  toggleMentorship,
  handleInputChange,
}) => {
  return (
    <div>
      <Ribbon
        id="mentorshipPopUp"
        showPopUp={showPopUp}
        showSave={showMentorship}
        content="Mentorship Program"
        subSaveClick={subSaveClick}
        wrapperClass="mentorshipWrapper"
        onClick={()=>{toggle('showMentorship')}} />
      <form className={`mentorshipPane ui form ${showMentorship ? 'show' : 'hide'}`}>
        <MessageBox
          type="info"
          header="Would you like to be a mentor?"
          message="The green goal of this community is to bring together programmers of varying degrees of skill, and connect them with one another to form meaningful mentor/mentee relationships. If you are interested in becoming a mentor, please toggle the switch and provide a short description in the textbox below of the programming skills that you feel comfortable mentoring someome in. Your entite profile is searchable, but prospective mentees can search our database for mentors that share the same skills and intertests (which everyone can define in the next section), who live in their area, or who have cited skills they need tutelage in within their menotrship bio. For now, the burden is on the mentee (we are looking into a smarter, automated matching system) &mdash; when a mentee has found a good match, they can reach out to you through our private chat feature, so be sure to check back periodically for notifications! This setting can be turned off at any time here in your user preferences dashboard." />
        <SliderToggle
          defaultOn={isMentor ? true : false}
          saveStateToParent={toggleMentorship}
          label="Sign me up! I want to be a mentor!" />
        <div className={`ui six wide field mentorshipSkillsPane ${isMentor ? 'show' : 'hide'}`}>
          <label>Mentorship Skills</label>
          <textarea
            rows="3"
            name="mentorshipSkills"
            value={mentorshipSkills}
            onChange={handleInputChange}
            placeholder="Please provide a short description of the skills you feel comfortable providing mentorship for." />
          { error &&
            <div style={{ marginTop: 10 }} className="ui red basic label">
              {error}
            </div> }
        </div>
      </form>
    </div>
  );
}

Mentorship.propTypes = {
  error: React.PropTypes.string,
  toggle: React.PropTypes.func.isRequired,
  isMentor: React.PropTypes.bool.isRequired,
  showPopUp: React.PropTypes.bool.isRequired,
  subSaveClick: React.PropTypes.func.isRequired,
  showMentorship: React.PropTypes.bool.isRequired,
  toggleMentorship: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  mentorshipSkills: React.PropTypes.string.isRequired,
}

Mentorship.defaultProps = {
  error: ''
}

export default Mentorship;