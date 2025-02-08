import { useContext} from "react";
import Post from "./post";
import { PostList  as PostListData} from "../store/post-list-store";
import Welcome from "./welcome";

const PostList=()=>{
  const {postList} = useContext(PostListData);
  
   
  return (
    <>
      {postList.length ===0 &&(<Welcome ></Welcome>)}
      {postList.map((post)=> (
      <Post key={post.id} post={post}/>
      ))}
    </>
  );
};
export default PostList;