import React from "react"

export default function Scroll(props){
    return (
        <div style={{overflowY: "scroll", height:"700px", padding: "2px"}}>
            {props.children}
        </div>
    )
}