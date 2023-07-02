import React from "react"
import { NavLink } from "react-router-dom";

const CommonTamplet = (props) => {
    return (
        <>
            <div className="main">
                <div className="left-content">
                    <div className="left-content-wrapper">
                        <h1>
                            {props.name}
                            <strong className="brand-name"> NagaTechnical </strong>
                        </h1>
                        <h2>
                            We are the team of talented developer making websites
                        </h2>
                        <div className="btn-div">
                            <NavLink to ={props.visit} className="btn-get-started">
                                {props.btn_name}
                            </NavLink>
                        </div>
                    </div>

                </div>
                <div className="right-content">
                    <img src={props.imgsrc} className="right-img float-animation" alt="Home" />
                </div>
            </div>
        </>
    );
}

export default CommonTamplet;