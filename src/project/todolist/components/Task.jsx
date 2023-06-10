import React from 'react'

export default function Task({date, task}) {
  return (
    <div style={{background: "grey", padding : "10px", textAlign: "left", boxShadow:"0px 5px 10px black"}}>
        <h3>{task} </h3>
        <p>{date} </p>
    </div>
  )
}
