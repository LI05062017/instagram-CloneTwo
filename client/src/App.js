import React, {Component} from 'react'
import PostList from './PostList'
import $ from 'jquery'


class App extends Component {
 state = {
   posts: undefined,
   title: undefined,
   img: undefined,
   caption: undefined,
   userName: undefined,
 }

 componentDidMount() {
   this.loadPostsFromServer()
 } 

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      this.setState({ posts: response.posts})
    })
  }

  submitNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      title: this.state.title,
      img: this.state.img,
      caption: this.state.caption,
      userName: this.state.userName
    }

    $.ajax({
      url: '/api/posts',
      method: 'POST', 
      data: newPost
    }).done((response) => {
      console.log(response)
      
    })
  }

  deletePost = (post) => {
    $.ajax({
      url: `/api/posts/${post._id}`,
      method: 'DELETE'
    }).done(response=> {
      console.log(response)
      this.loadPostsFromServer()
    }
   )
  }

  onTitleChange= (e) => this.setState({ title: e.target.value})
  onCaptionChange = (e) => this.setState({ caption: e.target.value})
  onImageChange = (e) => this.setState({ img: e.target.value})
  onUserNameChage = (e) => this.setState({ userName: e.target.value})

  render() {
    return (
      <div>
        <h1>Instagram Page</h1>
        <form>
            <label> Title </label>
            <input  typ='text' onChange={this.onTitleChange}/> 

            <label>Image URL </label>
            <input  typ='text' onChange={this.onImageChange}/>

            <label> Caption </label>
            <input  typ='text' onChange={this.onCaptionChange}/>

            <label> UserName </label>
            <input  typ='text' onChange={this.onUsernameChange}/>
            <button onClick={this.submitNewPost} >Submit</button>
          </form>
        { 
          this.state.posts
          ? <PostList 
          posts={this.state.posts}
          deletePost={this.deletePost} />
          : 'No Posts!'
        }
       

        </div>
    )
  }
}




export default App