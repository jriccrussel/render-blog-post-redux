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

// connect so para naa tay access sa mga state like fetchPosts
// connect(null, { fetchPosts: fetchPosts }) is equivalent to connect(mapToStateProps, mapDispatchToProps)
// mapToStateProps - read or access sa state, mapDispatchToProps - we use to access our dispatch function or pag access sa dispatch action 
export default connect(null, { fetchPosts })(PostList)