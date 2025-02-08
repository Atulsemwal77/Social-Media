import { createContext, useReducer } from "react";



export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});




const PostListReducer=(currPostList, action)=>{
    let newPostList = currPostList;
    if (action.type==="DELETE POST"){
       newPostList = currPostList.filter((post)=>post.id !==action.payload.postId);
    }
    else if (action.type==='ADD_POST'){
        newPostList=[action.payload, ...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({children})=>{
   const[postList, dispachPostList]=useReducer(PostListReducer, []);

   const addPost = (userId, posttitle, postbody,reactions,tags)=>{
     dispachPostList({
        type:'ADD_POST',
        payload : {
            id: Date.now(),
            title: posttitle,
            body:postbody,
            reactions:reactions,
            userId: userId,
            tags:tags,
        
        },
     });
   };
   
   
   const deletePost = (postId)=>{
    dispachPostList({
        type:"DELETE POST",
        payload:{
            postId
        },
    }) ;    

     
   };


   return (
   <PostList.Provider 
   value={{postList,addPost ,deletePost}}>
    {children}
    </PostList.Provider>
)};


export default PostListProvider;
