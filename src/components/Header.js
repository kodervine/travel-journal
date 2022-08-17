import React from "react"
import world from "./Images/world.svg"

export default function Header(){
    return(
        <div className="header">
            <img src={world} alt="world" />
            <p>mytraveljournal</p>
        </div>
    )
}