import axios from 'axios';

export const SAVE_USER = 'SAVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const deleteUser = () => axios.post('/api/delete-user');

// we post to avoid browser caching
export const getUserData = () => {
  return axios.post('/api/user')
    .then(res =>  {
      return res.data;
    })
    .catch(err => null);
}

export const isGitterUser = (username) => {
  return axios.post('/api/verify-gitter-user', { username });
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    user: user
  }
}

export const updateUser = (user) => {
  return axios.post('/api/update-user', { user });
}

export const updateUserPartial = (id, section, sectionData) => {
  return axios.post('/api/update-user-partial', { id, section, sectionData });
}

export const verifyUser = (username, mongoId) => {
  return axios.post('/api/verify-credentials', { mongoId, username });
}

export const updateCerts = (username, mongoId) => {
  return axios.post('/api/check-certs', { mongoId, username });
}
