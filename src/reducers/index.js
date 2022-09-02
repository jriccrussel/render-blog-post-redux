import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

// reducer or reducing function
export default combineReducers({
  posts: postsReducer
})