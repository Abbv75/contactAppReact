import React from 'react'
import CheckProps from '../utilities/CheckProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export default function Contact({ nom, prenom, email, tel }) {
  const iconeStyle = {
    color: "white",
    background: "orange",
    display: "flex",
    width: "25px",
    height: "25px",
    justifyContent: "center",
    alignItems:"center",
    borderRadius:"50%"
  }
  return (
    <div style={
      {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "200px",
        padding: "10px",
        borderRadius: "15px",
        boxShadow:"0px 10px 10px grey",
        background:"linear-gradient(45deg, rgb(181, 181, 255), rgb(255, 133, 255))"
      }
    }>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          background: "black",
          width: "50px",
          height: "50px",
          color: "white",
          fontSize:"20px"
        }
      }>
        <FontAwesomeIcon icon={faUserAlt} />
      </div>

      <div align="left">
        <div>
          {
            CheckProps(nom) ? <><b>{"Nom: "}</b><span>{nom}</span></> : null
          }
        </div>
        <div>
          {
            CheckProps(prenom) ? <><b>{"Prenom: "}</b><span>{prenom}</span></> : null
          }
        </div>

        <div style={{display:'flex', gap:"10px"}}>
          <>
            {
              CheckProps(email) ?
                <a style={iconeStyle} title={email} href={`mailto:${email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                : null
            }
          </>
          
          <>
            {
              CheckProps(tel) ?
                <a style={iconeStyle} title={tel} href={`tel:${tel}`}>
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                : null
            }
          </>
        </div>
      </div>

    </div>
  )
}
