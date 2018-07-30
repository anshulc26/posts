import _ from 'lodash';
import { FETCH_POSTS_INITIATE, FETCH_POSTS_COMPLETE } from '../actions/actionTypes';

const postsInitialState = { posts: [], isFetching: false };

export default function(state = postsInitialState, action) {
  switch (action.type) {
    case FETCH_POSTS_INITIATE:
      return { ...state, isFetching: true };
    case FETCH_POSTS_COMPLETE:
      return { ...state, posts: _.keys(action.data, 'id'), isFetching: false };
    default:
      return state;
  }
}
