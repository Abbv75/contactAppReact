import React, { useState } from 'react';
import SearchZone from './SearchZone';
import ContactList from './ContactList';
import GetContacts from '../data/Contact';

export default function ContactZone() {
    const [inputValue, setInputValue] = useState(null);
    const [contactList, setContactList] = useState(GetContacts());
    const [AZ, setAZ] = useState(true);

    const changeInputVal = (e) => {
        setInputValue(e.target.value)
        changeContactList()
    }

    const changeContactList = () => {
        let contactTmp = Array();
        if (inputValue == "" || inputValue == " " || inputValue == null) {
            contactTmp = GetContacts();
        }
        else {
            for (const Contact of GetContacts()) {
                if (Contact.nom.toLowerCase().includes(inputValue.toLowerCase()) || Contact.tel.includes(inputValue)) {
                    contactTmp.push(Contact);
                    console.log(Contact);
                }
            }
        }

        console.log(contactTmp);

        setContactList((contactTmp.length < 1 || contactTmp == null) ? GetContacts() : contactTmp);
    }

    const changeAZ = ()=>{
        setAZ(!AZ);
        setContactList(
            (AZ) ? contactList.sort() : contactList.reverse()
        )
    }

    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                maxWidth: "500px",
                background: "rgb(219, 219, 219)",
                padding: "30px",
                borderRadius: "20px"
            }
        }>
            <SearchZone
                value={inputValue}
                onInput={changeInputVal}
                onClick = {changeAZ}
                AZ={AZ}
            />
            <ContactList contactList={contactList} />
        </div>
    )
}
