import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import React, { useEffect } from "react";
import Header from "./components/Header";
import {  Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch()
 const isLoggedIn = useSelector(state => state.isLoggedIn)
 console.log(isLoggedIn);
 useEffect(() => {
  if (localStorage.getItem("userId")){
    dispatch(authActions.login())
  }
 }, [dispatch])
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
 
    <Routes>
            { !isLoggedIn ? <Route exact path="/auth" element={<Auth />}></Route> :
              <>
              <Route exact path="/blogs" element={<Blogs />}></Route>
              <Route exact path="/myBlogs" element={<UserBlogs />}></Route>
              <Route exact path="/myBlogs/:id" element={<BlogDetail />}></Route>
              <Route exact path="/blogs/add" element={<AddBlog />}></Route>  </> }
     </Routes>
   
    </main>
    </>
  );
}

export default App;
