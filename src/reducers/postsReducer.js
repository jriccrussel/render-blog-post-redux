export default (state = [], action) => {
    // if statement
    // if (action.type === 'FETCH_POSTS'){
    //     return action.payload
    // }
    // return state

    // switch statement
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}