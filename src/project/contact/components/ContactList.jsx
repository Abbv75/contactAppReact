import React from 'react'
import Contact from './Contact'
import CheckProps from '../utilities/CheckProps'

export default function ContactList({ contactList }) {
  return (
    <div style={{display:'flex', gap:"10px", flexWrap:"wrap"}}>
    {
      (CheckProps(contactList)) ? contactList.map((contact) => {
        return (
          <Contact 
            nom={contact.nom} 
            prenom={contact.prenom} 
            tel={contact.tel} 
            email={contact.email} 
          />
        )
      }) : "Vous n'avez pas de contact"
    }
    </div>
  )
}
