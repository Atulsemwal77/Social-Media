import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";


const CreatePost=()=>{
  const {addPost}= useContext(PostList);

    const userIdElement =  useRef();
    const posttitleElement =  useRef();
    const postbodyElement =  useRef();
    const reactionsElement =  useRef();
    const tagsElement =  useRef();

    const handleSubmit = (event)=>{
      event.preventDefault();
      const userId = userIdElement.current.value;
      const posttitle = posttitleElement.current.value;
      const postbody = postbodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(" ");

      userIdElement.current.value = "";
      posttitleElement.current.value= "";
      postbodyElement.current.value= "";
      reactionsElement.current.value= "";
      tagsElement.current.value= "";

    addPost(userId, posttitle, postbody,reactions,tags);
    };

    return(
        <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User Id here</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User id"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={posttitleElement} className="form-control" id="title" placeholder="How are you feeling today ......"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postbodyElement} rows="4" className="form-control" id="body" placeholder="tell us more about it ......"/>
  </div>  
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of reaction</label>
    <input type="text"   ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacte to this post"/>
  </div>  
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Enter your Hashtags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tag" placeholder="please Enter tags using Space"/>
  </div>  
    
    

  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    );
}
export default CreatePost;