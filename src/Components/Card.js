import React from "react"

export default function Card({id, name, email}){
    return(
        <div className="card bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src= {`https://robohash.org/${id}?150x150`} alt="robot"/>
            <div className="card-items">
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}