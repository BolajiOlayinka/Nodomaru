import React, { useReducer, createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const initialPageState = 1;
const pageReducer = (page, action) => {
  switch (action.type) {
    case "SET_NEW_PAGE":
      return { ...page, page: action.payload };
    default:
      return;
  }
};

const AppProvider = ({ children }) => {
  const [AllPost, setAllPost] = useState([]);
  const [NumberOfPages, setNumberofpages] = useState(1);
  const [NumberOfPosts, setNumberofPosts] = useState(0);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [page, pagedispatch] = useReducer(pageReducer, initialPageState);
  useEffect(() => {
    setLoadingPosts(true);
    axios
      .get("https://ndmr.co.jp/blog/?rest_route=/wp/v2/posts&_embed", {
        params: { page: page.page },
      })
      .then((res) => {
        setLoadingPosts(false);
        // console.log(res);
        setAllPost({ AllPost: res.data });
        setNumberofpages(res.headers["x-wp-totalpages"]);
        setNumberofPosts(res.headers["x-wp-total"]);
      })
      .catch((res) => {
        setLoadingPosts(false);
        console.log(res.err);
      });
  }, [page]);

  const value = {
    
    AllPost,
    NumberOfPages,
    NumberOfPosts,
    loadingPosts,
    page,
    pagedispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
let AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };
