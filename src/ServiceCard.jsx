import React from 'react';

const ServiceCard = (props) => {
    return (
        <>
            <div className='service_card'>
                <img src={props.imgsrc} alt="" />
                <div className='card-content'>
                    <h2 className="card-content-header">
                        {props.title}
                    </h2>
                    <p className='card-content-desc'>
                        Some quick example text to build on the card title and make up the bulk of the card's content
                    </p>
                </div>
                <div className="card-btn">
                    <a href=""> Go to somewhere</a>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;