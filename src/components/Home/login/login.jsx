import React from "react";
import "./login.css";

const Login = () => {
    return (
        <header className="login">
        <ul>
            <li><a href="#">NEW BLOG</a></li>
            <li><a href="#">VIEW</a></li>
            <li><a href="#">UPDATE</a></li>
            <li><a href="#">DELETE</a></li>
            <a href=""><i class="fa fa-h-square"></i> Patient with hba1c Details <span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="addhba1c.php">Add hba1c level</a>
                                </li>
                                <li>
                                    <a href="viewhba1c.php">View hba1c level</a>
                                </li>
                                <li>
                                    <a href="edithba1c.php">Edit hba1c level</a>
                                </li>
                                <li>
                                    <a href="deletehba1c.php">Remove hba1c level</a>
                                </li>
                            </ul>
        </ul>
        </header>
    );
}


export default Login
