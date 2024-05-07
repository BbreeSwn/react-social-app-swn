/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
import * as postAPI from "../apis/PostApi";

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  // const posts = [];

  useEffect(() => {
    getAllPost();
  },[]);

  const getAllPost = async () => {
    try {
      const response = await postAPI.getAllPost();
      console.log(response.data)
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <PostContext.Provider value={{ posts: posts }}>
      {children}
    </PostContext.Provider>
  );
}
