import Axios from 'axios';
import ConfigMain from '../../configs/main';
import { FETCH_POSTS_INITIATE, FETCH_POSTS_COMPLETE, CREATE_POST } from './actionTypes';

export function postsFetchInitiate() {
  return {
    type: FETCH_POSTS_INITIATE,
  };
}

export function postsFetchComplete(data) {
  return {
    type: FETCH_POSTS_COMPLETE,
    data: data,
  };
}

export function fetchPosts() {
  return function action(dispatch) {
    //async action entry point
    dispatch(postsFetchInitiate());

    const url = ConfigMain.getPostsApiUrl();
    return Axios.get(url)
      .then(function(response) {
        dispatch(postsFetchComplete(response.data));
      })
      .catch(function(error) {
        dispatch(postsFetchComplete(error));
      });
  };
}

export function createPostComplete(data) {
  return {
    type: CREATE_POST,
    data: data,
  };
}

export function createPost(values, callback) {
  return function action(dispatch) {
    const url = ConfigMain.getPostsApiUrl();
    return Axios.post(url, values)
      .then( response => {
        callback();
        // dispatch(createPostComplete(response.data));
      })
      .catch( error => {
        dispatch(createPostComplete(error));
      });
  };
}
