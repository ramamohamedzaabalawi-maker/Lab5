import {useState  } from "react";

function CommentInput(props) {
    const comments=props.Comments;
    const setComment = props.setComments;

    const[input,setInput]=useState("");
    function saveInputText(event) {
        setInput(event.target.value);
        
    }
    function addComment(){
        setcomments([...comments,{comment:input,name:"you"}])
        console.log(Comments);
    }

return(
<>
<input placeholder="Write a Comment... " size="30" value ={input} onChange={saveInputText}/>
<button onClick={addComment}>Post</button>

</>);
    
}
export default CommentInput
