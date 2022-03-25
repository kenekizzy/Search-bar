import React from "react"
import Card from "./Card"


export default function Body({robot}){
    const cardArray = robot.map((user, i) => {
        return <Card key = {robot[i].id} id = {robot[i].id} name = {robot[i].name} email = {robot[i].email}/>
    })
    return(
        <main>
            {cardArray}
        </main>
    )
}