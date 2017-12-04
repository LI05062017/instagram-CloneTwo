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
  padding: '-10%',
  width: '17%',
  }
}

const Title = () => {
  return (
    <div style={titleStyle.container}> 
     <div style={titleStyle.box}>
      <h1> Instagram Clone </h1>
      <img style={titleStyle.img} src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png'/>
      </div>
    </div>
  )
}

export default Title