import React from 'react'

const titleStyle = {
  container: {
    textAlign: 'center',
    fontFamily:'Lobster',
    letterSpacing: '2px',
    fontSize: '40px',
    float: 'right'
  },
  img: {
  padding: '2%',
  width: '40%',
  }
}

const Title = () => {
  return (
    <div style={titleStyle.container}> 
     <div style={titleStyle.box}>
      <img style={titleStyle.img} src='http://pluspng.com/img-png/instagram-png-instagram-logo-2-png-8-de-abril-de-2017-927-kb-3500-3393-3500.png'/>
      </div>
    </div>
  )
}

export default Title