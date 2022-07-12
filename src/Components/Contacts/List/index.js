import React from 'react'

function List({ contacts }) {
    return (
        <div>
            <ul>
                {
                    contacts.map((contact, index)=> (
                        <li key={index}> {contact.full_name} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;