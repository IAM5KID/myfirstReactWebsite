import React from "react";
import CommonTamplet from "./CommonTamplet";
import web from "../src/Images/rocket-maker.png";

const About = () => {
    return (
        <CommonTamplet 
            name = "Welcome to About page"
            imgsrc = {web}
            visit = "/contact"
            btn_name = "Contact Now"
        />
    )
}

export default About;