import { LOGOUT_USER, SAVE_USER } from '../actions/user';

export const defaultUser = {
  social: {},
  career: {},
  githubId: '',
  username: '',
  personal: {},
  fccCerts: {},
  projects: [],
  mentorship: {},
  verifiedUser: false,
  skillsAndInterests: {}
};

export default (state = defaultUser, action) => {
  switch (action.type) {

    case SAVE_USER:
      return action.user;

    case LOGOUT_USER:
      return defaultUser;

    default: return state;
  }
}
