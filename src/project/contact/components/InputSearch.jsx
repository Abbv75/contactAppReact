import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from './Button';

export default function InputSearch({ onInput, value, placeholder }) {

  return (
    <div style={
      {
        display: "flex",
        padding: "5px",
        background: "grey",
        color: "white",
        borderRadius: "5px",
        alignItems: "center"
      }
    }>
      <input
        type="search"
        value={value}
        onInput={onInput}
        placeholder={placeholder}
        style={
          {
            border: "none",
            borderBottom: "1px solid",
            color: "white", fontSize: "16px",
            background: "none",
            outline: "none",
            padding: "5px 0"
          }
        } />
      <Button
        icone={<FontAwesomeIcon icon={faSearch}/>}
      />
    </div>
  )
}
