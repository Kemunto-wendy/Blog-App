import { useState } from "react";
import React from "react";
import "./form.css"

const Create = ({onAddBlog}) => {
  const blogUrl = "http://localhost:9292/blogs";

  const [formData, setFormData ] = useState({
    title: "",
    content:"",
    author:"",
    cover:"",
    authorAvatar:"",


  });

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value,})
  }

  function handleSubmit(event){
    event.preventDefault();

    const addBlogForm = {
       title: formData.title,
   content: formData.content,
    author: formData.author,
     cover:formData.cover,
     authorAvatar:formData.authorAvatar

  }

    fetch(blogUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addBlogForm)

    })
    .then(response => response.json())
    .then(newBlog => {
      onAddBlog(newBlog)
      setFormData({...formData,  title: "", content: "", author:"", authorAvatar:""})
    })
  }

  return (
    <div className="create">
      <h2>New Blog loading!!!! </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
        name="title"
          type="text"
          required
          value={formData.title}
          onChange={handleChange}
        />
        <label>Blog content:</label>
        <input
        name="content"
        type ="text"
          required
          value={formData.content}
          onChange={handleChange}
        />
        <label>Blog author:</label>
        <select
          value={formData.author}
          onChange={handleChange}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <button>Add Blog</button>

      </form>
    </div>
  );
}

export default Create;
