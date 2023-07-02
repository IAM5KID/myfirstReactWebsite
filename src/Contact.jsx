import React, { useState } from "react"


const Contact = () => {

    const [Data, setData] = useState({
        fname : "",
        phone : "",
        email : "",
        msg : "",

    });

    const InputValue = (event) => {
        const {name, value} = event.target;
        setData((prevData) => {
            return {
                ...prevData,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${Data.fname}`);
        setData(() => {
            return {
                fname : "",
                phone : "",
                email : "",
                msg : "",
        
            };
        })

    }
    return (
        <>
            <div className="contact-main">
                <div className="contact-header">
                    <h1>Contact us</h1>
                </div>
                <div className="contact-form">
                    <form onSubmit={formSubmit}>
                        <div className="common_field fullname">
                            <label htmlFor="fullname">FullName</label>
                            <input type="text" id="fullname" name = "fname" value = {Data.fname} onChange={InputValue} placeholder="Enter your name"  required/>
                        </div>
                        <div className="common_field phone">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" inputMode="numberic" id="phone" name = "phone" value = {Data.phone} onChange={InputValue} placeholder="Enter your Phone number" required/>
                        </div>
                        <div className="common_field email">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name = "email" value = {Data.email} onChange={InputValue} placeholder="Enter your email" required/>
                        </div>
                        <div className="common_field message">
                            <label htmlFor="message">Message</label>
                            <textarea name="msg" id="message" cols="30" rows="3" value = {Data.msg} onChange={InputValue} placeholder="Enter you message..." required></textarea>
                        </div>
                        <div className="btn-div">
                            <button>
                                Submit Form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact