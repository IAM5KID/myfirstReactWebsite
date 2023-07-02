import React from "react";
import CommonTamplet from "./CommonTamplet";
import web from "../src/Images/rocket-maker.png";

const Home = () => {
    return (
        <CommonTamplet 
            name = "Grow your business with"
            imgsrc = {web}
            visit = "/about"
            btn_name = "Get Started"
        />
    )
}

export default Home;