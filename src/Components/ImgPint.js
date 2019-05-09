import React from 'react';
import './ImgPint.css';



const ImgPint = (props) => {
    return (
        <div className="container">
            <div className="item"> 
            <img src={props.url} onClick={() => props.pushClick(props)} /> 
            </div>

        </div>
    )
}

export default ImgPint;



