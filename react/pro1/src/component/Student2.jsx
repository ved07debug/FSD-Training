import React from 'react'

const Student2 = (props) => {
  return (
    <div
      style={{
        border: "2px solid red",
        width: "300px",
        height: "500px"
      }}
    >
      <h1>{props.name}</h1>

      <img
        src="https://i.pinimg.com/originals/67/31/6e/67316e41a000073381cb8530a0722a65.jpg"
        alt={props.name}
        height="200"
        width="200"
      />

      <h3>Roll no: {props.rollNo}</h3>
      <h3>Branch: {props.branch}</h3>
    </div>
  )
}

export default Student2