import React, { Component } from 'react';
import './nav.css';




    class NavComponent extends Component {
      render () {
        return (
       
            <div>
              <div className="container">
                <input type="text" className="input" id="addInput" placeholder="" />
                <i class="fas fa-user-friends"></i>  
                <i class="fas fa-comment-dots"></i>
                <i class="fas fa-bell"></i>
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>



        )
      }
    }

    export default NavComponent;