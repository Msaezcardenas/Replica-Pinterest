import React, { Component } from 'react';
import './nav.css';




    class NavComponent extends Component {
      render () {
        return (

          <div className="navbar">
          <navbar>
              <url>
              
                <img src = "https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" className="image" />
                <i class="fas fa-search"></i>
                <input type="text" className="Search" id="addInput" placeholder="Buscar" />
                <a className="inputHome">Inicio </a>
                <a className="following">Siguiendo</a>
                <i class="fas fa-user-friends"></i>  
                <a className="profile" > Molu </a>
                <i class="fas fa-comment-dots"></i>
                <i class="fas fa-bell"></i>
                <i class="fas fa-ellipsis-h"></i>

              </url>
          </navbar>
          </div>



        )
      }
    }

    export default NavComponent;