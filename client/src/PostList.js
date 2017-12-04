import React from 'react'
import { posix } from 'path';

const postListStyle = {
  container: {
    width: '75%',
    padding: '10px',
    margin: '20px',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  box:{
    borderRadius: '7px',
    width: '70%',
    padding: '5px',
    margin: '3px',
    backgroundColor: 'white',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '50%',
    padding: '15px'
  },
  title: {
   fontSize: '20px',
   textAlign: 'center',
   fontFamily: 'Open Sans Condensed',
   fontWeight: 'bold'
   
  },
  caption: {
    fontFamily: 'Open Sans Condensed',
    fontSize: '16px',
    textAlign: 'center'


  }
}

const PostList = ({posts}) => {
  return (
    <div style={postListStyle.container}>
      {
        posts.map((item, index, img, caption) => {
          return (
            <div style={postListStyle.box}>
          <p style={postListStyle.title} key={index}>{item.title}</p>
          <img style={postListStyle.img} src={item.img} />
          <p style={postListStyle.caption} key={caption}>{item.caption}</p>
          </div>
          )
        })
      }
      </div>
  )  
}

export default PostList