import React from "react"
import {NavLink} from "react-router-dom"
import "./Nav.scss"

export default function Nav(){
    return(
        <nav>
            <h1>LOgo</h1>
            <ul>
                <li>
                    <NavLink style={({isActive})=> isActive? {color: "red"} : null} to = "/home">Home</NavLink>

                </li>
                <li>
                <NavLink style={({isActive})=> isActive? {color: "red"} : null } to = "/cart">Cart</NavLink>
                </li>
                <li>
                <NavLink style={({isActive})=> isActive? {color: "red"} : null} to = "/favourite">Fav</NavLink>
                </li>
                <li>
                <NavLink style={({isActive})=> isActive? {color: "red"} : null} to = "/">Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}