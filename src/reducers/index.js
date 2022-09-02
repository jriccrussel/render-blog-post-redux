import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

// reducer or reducing function
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
})