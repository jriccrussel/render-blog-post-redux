import jsonPlaceholder from '../apis/jsonPlaceholder'

// action creators
// when using redux sa imo action creator 
// ang middleware e check niya if imo action is a function and if it is mag pasa cya ug dispatch sa imo func 
// dispatch - we can change any data, getState - we can read or access data or updated na data
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
  
    dispatch({ type: 'FETCH_POSTS', payload: response })
}