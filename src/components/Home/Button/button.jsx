import React from "react";
import "./button.css";

const Button = ({ value, handleSearcKey, clearSearch, formSubmit}) => {
    <div className="search">
    <form onSubmit={formSubmit}>
                    <input type="text" onChange={handleSearcKey } placeholder="Search Blog" value={value}/>
                    {value && <span onClick={clearSearch}>x</span>}

            <button>Search</button>
                    </form>
        </div>
}

export default Button
