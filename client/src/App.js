import React, {Component} from 'react'
import Header from './Header'
import PostList from './PostList'
import Form from './Form'
import './style.css'
import $ from 'jquery'


class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined
  }

  componentDidMount() {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
     // console.log(response)
      this.setState({ posts: response.posts })
    })
  }

  submitPostToServer = () => {
    const newPost = {
      title: this.state.title,
      img: this.state.img,
      caption: this.state.caption
    }

    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done((response) => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  updateTitle = (e) => this.setState({title: e.target.value})
  updateImg = (e) => this.setState({img: e.target.value})
  updateCaption = (e) => this.setState({caption: e.target.value})


  render() {
    return (
      <div className='body'>
        <Header />
   <form className='form'>
   <label className='title'> Write Your Post! </label>
   <input className='titleInput'type ='text' onChange={this.updateTitle} />
  
   <label className='img'> Insert Image Here! </label>
   <input className='imgInput' type ='text' onChange={this.updateImg} />

   <label className='caption'> Write a caption! </label>
   <input className='captionInput' type ='text' onChange={this.updateCaption} />
   <button className='button' onClick={this.submitPostToServer} > Submit </button>

  </form>
        {
          this.state.posts
          ?  <PostList posts={this.state.posts} />
          : 'No Posts'
        }
       
        </div>
    )
  }
}




export default App