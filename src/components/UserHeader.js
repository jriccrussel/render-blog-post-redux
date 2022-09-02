import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }    

    render() {
        // const user = this.props.users.find(user => user.id === this.props.userId)
        // { user } = this.props - naa na tai access sa state ang userId
        const { user } = this.props

        if(!user) {
            return null
        }

        return (
            <div className='header'>{user.name}</div>
        )
    }
}

// state - read sa state/data
// owmProps - props ato e send to UserHeader component
// users: state.users.find(user => user.id === ownProps.userId) - add ug logic sa mapStateToProps
const mapStateToProps = (state, ownProps) => {
    // return { users: state.users }
    return { users: state.users.find(user => user.id === ownProps.userId) }
  }

export default connect(mapStateToProps, { fetchUser })(UserHeader)