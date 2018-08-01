import _ from 'lodash';
import { FETCH_POSTS_INITIATE, FETCH_POSTS_COMPLETE, FETCH_POST_INITIATE, FETCH_POST_COMPLETE, DELETE_POST } from '../actions/actionTypes';

const postsInitialState = { posts: [], isFetching: false };

export default function(state = postsInitialState, action) {
  switch (action.type) {
    case FETCH_POSTS_INITIATE:
      return { ...state, isFetching: true };
    case FETCH_POSTS_COMPLETE:
      return { ...state, posts: _.mapKeys(action.data, 'id'), isFetching: false };
    case FETCH_POST_INITIATE:
      return { ...state, isFetching: true };
    case FETCH_POST_COMPLETE:
      return { ...state, [action.data.id]: action.data, isFetching: false };
    case DELETE_POST:
      return { ...state, posts: _.omit(state.posts, action.data.id), isFetching: false };
    default:
      return state;
  }
}
