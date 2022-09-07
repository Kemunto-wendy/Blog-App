import React from "react";
import Blogitem from "./Blogitem/item";

const Blogging = ({blogs}) => (
        <div className="blogging">
            {blogs.map(blog=><Blogitem blog={blog} key={blog.id} />)}

        </div>
    );


export default Blogging
