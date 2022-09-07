import React from "react";
import "./item.css";

const Blogitem = ({
    blog: {
        id,
        description,
        title,
        category,
        authorName,
         createdOn,
        cover}, }) => {
    return(
        <div className="blogItem">
            <img src={cover} alt ="Cover" />
        </div>
    )
}

export default Blogitem
