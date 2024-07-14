import React from "react"
import Title from "./Title"
import Text from "./Text"

export default function Slide(props) {
    
    return (
        <>
            <Title title={props.title}/>
            <Text text={props.text}/>
        </>
    )
}