import React from "react";
import "./item.css";
import Chip from "../../../Common/Chip/chip";
import { Link } from "react-router-dom";


const Blogitem = ({
    blog: {
        id,
        content,
        title,
        category,
        author,
        authorAvatar,
         createdOn,
        cover}, }) => {
    return(
        <div className="blogItem">
            <img src="assets/images/one.png" alt ="Cover" />
            <Chip label={category} />
            <h3>{title}</h3>
            <p className='blogItem-desc'>{content}</p>
            <footer>
              <div className='blogItem-author'>
                <img src={authorAvatar} alt='avatar' />
                <div>
                  <h6>{author}</h6>
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
