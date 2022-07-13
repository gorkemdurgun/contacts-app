import React, { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');

    const filteredContacts = contacts.filter((item) => {
        return Object.keys(item).some((key) => {                    // objenin keylerini al (full_name ve phone_number)
            return item[key]
                .toString()                                         // string'e çevir  
                .toLowerCase()                                      // küçük harf yap
                .includes(filterText.toLocaleLowerCase());          // contacts listesinden eşleşenleri al
        })
    });

    //console.log(filteredContacts);

    return (
        <div>

            <h5>Total contact: {filteredContacts.length}</h5>
            <input
                type="text"
                placeholder='Search'
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)} />

            <ul className='List'>
                {
                    filteredContacts.map((item, index) => (
                        <li key={index}>
                            <span> {item.full_name} </span>
                            <span> {item.phone_number} </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;