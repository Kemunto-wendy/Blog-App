import React from "react";
import Blogitem from "./Blogitem/item";
import "./blogging.css";

const Blogging = ({ blogs }) => {
    return (
      <div className='blogList-wrap'>
        {blogs.map((blog) => (
          <Blogitem blog={blog} />
        ))}
      </div>
    );
  };

export default Blogging;
