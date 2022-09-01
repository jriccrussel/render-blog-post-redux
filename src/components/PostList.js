import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return <div>Post List</div>
  }
}

// connect so para naa tay access sa mga data like fetchPosts
export default connect(
  null,
  { fetchPosts }
)(PostList)