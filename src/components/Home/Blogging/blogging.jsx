import React from "react";
import Blogitem from "./Blogitem/item";
import "./blogging.css";

const Blogging = ({ blogs }) => (
        <div className='blogList-wrap'>
              {blogs.map(( blog ) => (
                  <Blogitem blog={blog}
                  key={blog.id}
                  />
        ))}
      </div>
    );


export default Blogging;
