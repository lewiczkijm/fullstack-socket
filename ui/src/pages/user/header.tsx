import {Link} from "react-router-dom";
import React from "react";

export type HeaderType = {
    name:string
}
export function Header({name}:HeaderType){

    return <header className="navbar is-primary">
        <div className="navbar-menu">
            <div className="navbar-start">
                <Link to={"/"} className="navbar-item">Home</Link>
            </div>
            <div className="navbar-end is-flex is-align-items-center" style={{marginRight:32}}>
                {name}
            </div>
        </div>
    </header>
}