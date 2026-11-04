import { useState } from 'react'
import CommentInput from './CommentInput.jsx'
import Comments from './Comments.jsx'
import './App.css'


 
  function App() {
     const [comments,setcomments]= useState([
    { name:"sara" ,comment:"Great explanation of components!"},
    {name:"Omar" ,comment:"Props Finally make sense to me"},
    {name:"Ali" ,comment:"Can we do a lab on useState next week?"},
    {name:"You" ,comment:"Thanks for the lab,this was fun!"}
  ]);

  const CommentsComponents=comments.map (CommentInput => { return < Comments name={CommentInput.name} comment={CommentInput.comment}/>
   })
    return (
    <>
  <h1>Comments</h1>
  <CommentInput comment={comments} setComments={setcomments}/>  
  {CommentsComponents}
  </>
  )
}

export default App
