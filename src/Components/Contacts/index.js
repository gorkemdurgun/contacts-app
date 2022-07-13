import React, { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import '../../App.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            full_name: 'Görkem',
            phone_number: 1234,
        },
        {
            full_name: 'Bryan',
            phone_number: 9845,
        },
        {
            full_name: 'Valron',
            phone_number: 3496,
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div className='Container'>
            <h2> Add Contact </h2>
            <Form addContact={setContacts} contacts={contacts} />
            <hr />
            <h2> Contacts </h2>
            <List contacts={contacts} />
        </div>
    )
}

export default Contacts;