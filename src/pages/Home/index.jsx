import React, { useState, useEffect} from "react";
import Empty from "../../components/Common/Empty/empty";
import Blogging from "../../components/Home/Blogging/blogging";
import Button from "../../components/Home/Button/button";
import Header from "../../components/Home/Header/header";
import { blogging } from "../../config/data";
import Create from "../../components/Home/Form/form";

const Home = ( ) => {
  const blogUrl = "http://localhost:9292/blogs";
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
      fetch(blogUrl)
        .then((res) => res.json())
        .then((blog) => setBlogs(blog));

    }, []);

    function handleAddBlog(newBlog){
      setBlogs([...blogs, newBlog]);
    }
    const [searchKey, setSearchKey] = useState(' ');


    const handleSearchSubmit = (event) =>{
        event.preventDefault( );
        handleSearchResult( )
    }

    const handleSearchResult=()=>{
        const allBlogs=blogging;
        const filteredBlogs=allBlogs.filter((blog=>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
            ))
            setBlogs(filteredBlogs);
    };

      // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogging);
    setSearchKey('');
  };
    return (
        <div>
            <Header />
           <Button
           value={searchKey}
           clearSearch={handleClearSearch}
           formSubmit={handleSearchSubmit}
           handleSearcKey={(e) => setSearchKey(e.target.value)}
           />
           {!blogs.length ? <Empty /> : <Blogging onAddBlog = {handleAddBlog} blogs={blogs} />}
          <Create />
        </div>
    );
};

export default Home;
