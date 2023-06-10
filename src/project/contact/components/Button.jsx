import React from 'react'
import CheckProps from '../utilities/CheckProps'

export default function Button({ icone, text, onClick }) {
  return (
    <div onClick={onClick}>
      {
        CheckProps(icone) ?
          icone :
          null
      }
      {
        CheckProps(text) ?
          text :
          null
      }
    </div>
  )
}
