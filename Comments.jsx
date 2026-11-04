import userimage from "./image.png";
function Comments(props){
const comment=props.comment;
const setComment=props.setComment;
return(
    <div>
    {comment}
    <img src={userimage} width="30" />
    </div>
);

}
export default Comments
