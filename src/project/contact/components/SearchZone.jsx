import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from './Button'
import InputSearch from './InputSearch'


export default function SearchZone({value, onInput, onClick, AZ}) {
    return (
        <div style={
            {
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "flex-end",
                borderBottom: "1px solid black",
                padding: "10px 0 "
            }

        }>
            <Button
                icone={
                    <FontAwesomeIcon 
                        icon={
                            faArrowUpAZ
                        }
                    />
                }
                onClick={onClick}
            />
            <InputSearch
                value={value}
                onInput={onInput}
                placeholder="Recherche ..."
            />
        </div>
    )
}
