import React from 'react';
import ServiceCard from "./ServiceCard";
import Sdata from "./ServiceData";
const Service = () => {
    return (
        <>
            <div className='service-main'>
                <div className="service-header">
                    <h1>Our Services</h1>
                </div>
                <div className='service_div'>
                    {
                        Sdata.map((val,idx)=>{
                            return <ServiceCard 
                            key ={idx}
                            imgsrc = {val.imgsrc}
                            title = {val.title}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Service;