import React from 'react'

const Form = () => {
 return(
<div>
   <form className='form'>
   <label> Make a new Post! </label>
   <input type ='text' onChange={this.updateTitle} />
  
   <label> Insert Image Here! </label>
   <input type ='text' onChange={this.updateImg} />

   <label> Make a caption! </label>
   <input type ='text' onChange={this.updateCaption} />
   <button onClick={this.submitPostToServer} > Submit </button>

  </form>
</div>
 )
}

  export default Form