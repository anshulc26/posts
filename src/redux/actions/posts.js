import Axios from 'axios';
import ConfigMain from '../../configs/main';
import { FETCH_POSTS_INITIATE, FETCH_POSTS_COMPLETE, CREATE_POST, FETCH_POST_INITIATE, FETCH_POST_COMPLETE, DELETE_POST } from './actionTypes';

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

export function postFetchInitiate() {
  return {
    type: FETCH_POST_INITIATE,
  };
}

export function postFetchComplete(data) {
  return {
    type: FETCH_POST_COMPLETE,
    data: data,
  };
}

export function fetchPost(id) {
  return function action(dispatch) {
    //async action entry point
    dispatch(postFetchInitiate());

    const url = `${ConfigMain.getPostsApiRootUrl()}/posts/${id}${ConfigMain.getPostsApiKey()}`;
    return Axios.get(url)
      .then(function(response) {
        dispatch(postFetchComplete(response.data));
      })
      .catch(function(error) {
        dispatch(postFetchComplete(error));
      });
  };
}

export function deletePostComplete(data) {
  return {
    type: DELETE_POST,
    data: data,
  };
}

export function deletePost(id, callback) {
  return function action(dispatch) {
    const url = `${ConfigMain.getPostsApiRootUrl()}/posts/${id}${ConfigMain.getPostsApiKey()}`;
    return Axios.delete(url)
      .then( response => {
        dispatch(deletePostComplete(response.data));
        callback();
      })
      .catch(function(error) {
        dispatch(deletePostComplete(error));
      });
  };
}