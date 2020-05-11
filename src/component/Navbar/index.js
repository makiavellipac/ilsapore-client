import React, { useState } from 'react';
import IconHamburger from '../IconHamburguer';
import IconShop from '../IconShop'
import './index.css';

const Navbar =()=>{
    const [classes,setClasses]=useState('');
    const setClass=()=>{
        if(classes==="active"){
            setClasses('')
        }
        else{
            setClasses('active')
        }
    }
    return(
        <div className="header_mid">
            <div className="hamburger opener" onClick={setClass}>
                <span>
                    <IconHamburger primary="#E6E664" secundary="#D6E554"/>
                </span>
            </div>
            <div className={classes+' header_mid_outer'}>
                <div className="header_mid_inner">
                    <div className="logo_wrap">
                        <img src="https://pizza-restaurant.cmsmasters.net/wp-content/uploads/2016/09/logo.png" alt="Pizza Restaurant"/>
                    </div>
                    <div className="mid_nav_wrap">
                        <nav>
                            <div className="menu-primary-navigation-container">
                                <ul id="navigation" className="mid_nav navigation">
                                    <li> 
                                        <span className="nav_item_wrap">
                                            <span className="nav_title">
                                                Inicio
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="nav_item_wrap">
                                            <span className="nav_title">
                                                Menu
                                            </span>
                                            <span className="nav_tag">
                                                Hot!
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                    <span className="nav_item_wrap">
                                            <span className="nav_title">
                                                Sobre Nosotros
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                    <span className="nav_item_wrap">
                                            <span className="nav_title">
                                                Pide Tu Pizza
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="left_nav_wrap">
                        <nav>
                            <div className="menu-secundary-navigation-container">
                                <ul id="navigation" className="left_nav navigation">
                                    <li>
                                        <span className="nav_item_wrap">
                                            <span className="nav_title shop">
                                                <IconShop/>
                                                <span>
                                                    0
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="nav_item_wrap">
                                            <span className="nav_title">
                                                Iniciar Sesión
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="nav_item_wrap">
                                            <span className="nav_title">
                                                Registrarse
                                            </span>
                                        </span>
                                    </li>                                
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;