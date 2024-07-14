import React from "react"

export default function Text(props) {
  return (
    <p data-testid="text">{props.text}</p>
  )
}