
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/createpost";
import PostList from "./components/postList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar> </Sidebar>
          <div className="content">
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
