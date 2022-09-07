import React from "react";
import Blogging from "../../components/Home/Blogging/blogging";
import Button from "../../components/Home/Button/button";
import Header from "../../components/Home/Header/header";
import { blogging } from "../../config/data";
const Home = ( ) => {
    return (
        <div>


            <Header />
           <Button />
           <Blogging  blogs={blogging} />
        </div>
    );
};

export default Home;
