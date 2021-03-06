import React, { Component } from 'react'
import {connect } from 'react-redux'
import {fetchPosts } from '../actions/postActions'
  
class displypost extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h5>{post.title}</h5>
                <div>{post.body}</div>
                <br/>
            </div>
            
        ))
        return (
            <div>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts : state.posts.items
});

export default connect(mapStateToProps , {fetchPosts})(displypost)