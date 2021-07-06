import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export  const  Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper cyan darken-1" style={{padding: '1 2 rem'}}>
                <a href="/" className="flow-text"> Мой проект по сраным ссылкам </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> <NavLink to="/create"> Создать </NavLink></li>
                    <li> <NavLink to="/links"> Сылочки </NavLink></li>
                    <li> <a href="/" onClick={logoutHandler}> Выйти  </a></li>

                </ul>
            </div>
        </nav>
    )
}