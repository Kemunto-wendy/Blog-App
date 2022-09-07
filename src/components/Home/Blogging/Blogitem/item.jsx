import React from "react";
import "./item.css";
import Chip from "../../../Common/Chip/chip";
import { Link } from "react-router-dom";
const Blogitem = ({
    blog: {
        id,
        description,
        title,
        category,
        authorName,
        authorAvatar,
         createdOn,
        cover}, }) => {
    return(
        <div className="blogItem">
            <img src={cover} alt ="Cover" />
            <Chip label={category} />
            <h3>{title}</h3>
            <p className='blogItem-desc'>{description}</p>
            <footer>
              <div className='blogItem-author'>
                <img src={authorAvatar} alt='avatar' />
                <div>
                  <h6>{authorName}</h6>
                  <p>{createdOn}</p>
                </div>
              </div>
              <Link className='blogItem-link' to={`/blog/${id}`}>
                ➝
              </Link>
            </footer>
          </div>
        );
      };

      export default Blogitem;
