import { useState } from "react";
import React from "react";
import "./form.css"

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className="create">
      <h2>New Blog loading!!!!😆 </h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
