import React from 'react';
import './Modal.css';

const Modal = (props) =>{
    return(
    <div className="modalContainer" onClick={(e)=>{
        if(e.target.getAttribute("class") === "flex"){
            props.pushClick()
        }
        }}>
        <a href="inicio" className="inicio"><i className='fas fa-chevron-left' style={{ fontSize: '20px'}}></i>Inicio</a>
        <div className="flex">
            <div className="modal">
                <div className="headerModal">
                    <a href="#" className="btn-guardar"><i className='fas fa-thumbtack' style={{ fontSize: '15px'}}></i>Guardar</a>
                    <a href="#" className="btn-enviar"><i className='fas fa-upload' style={{ fontSize: '15px'}}></i>Enviar</a>
                </div>
                <div className="bodyModal">
                    <img className="imgModal" src={props.imgUrl} alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;