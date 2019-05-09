import React, { Component } from 'react';
import './Nav.css';
import './ImgPint';



class NavComponent extends Component {
    render() {
        return (
            <div className="navbar">

                <navbar>
                    <url>
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" className="image" alt="" />
                        <i class="fas fa-search"></i>
                        <input className="Search" placeholder="Buscar"></input>
                        <a className="Home">Inicio</a>
                        <a className="Follow">Siguiendo</a>
                        <i class="fas fa-user-astronaut"></i>
                        <a className="Name">MoLu</a>
                        <i className="fas fa-comment-dots"></i>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-ellipsis-h"></i>
                    </url>
                </navbar>
            </div>
        )

    }
}

export default NavComponent;