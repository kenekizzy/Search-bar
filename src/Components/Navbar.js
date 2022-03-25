import React from "react"

export default function Navbar(props){
    return (
        <div className="tc pa2">
            <h1 className="tc">ROBO FRIENDS</h1>
            <input className="tc pa3 ba b--black br3 bg-lightest-green" type="search" placeholder="Search Robots" onChange={props.secrchChange}/>
        </div>
    )
}