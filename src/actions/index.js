import _ from 'lodash' // javascript util
import jsonPlaceholder from '../apis/jsonPlaceholder'

// action creators
// returns a function with access to dispatch function
// fetchPosts = () => async (dispatch, getState) - dispatch - we can change any state, getState - we can read or access state or updated na state
// dispatch, getState they're both functions but as a argument ni fetchPosts and e call ang dispatch or getState manually like ex ani g call or dispatch sa sulod dispatch({ type: 'FETCH_POSTS', payload: response })
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// fetch user by id
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
  
    dispatch({ type: 'FETCH_USER', payload: response.data })
}

// _fetchUser(id, dispatch) calling _fetchUser
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
// .memoize prevents the api for over fetching
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
  
//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log('About to fetch posts')
    await dispatch(fetchPosts())
    // console.log('fetched posts!')

    // if mutiple items ato e async await but one ra ka property ato kwaon like id much better ayaw nlng sa
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)))
}