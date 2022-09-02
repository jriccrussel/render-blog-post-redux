import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

// connect so para naa tay access sa mga state like fetchPosts
// connect(null, { fetchPosts: fetchPosts }) is equivalent to connect(mapToStateProps, mapDispatchToProps)
// mapToStateProps - read or access sa state, mapDispatchToProps - we use to access our dispatch function or pag access sa dispatch action 
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList)