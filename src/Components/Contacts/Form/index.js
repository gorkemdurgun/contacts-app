import React, { useState, useEffect } from 'react';

const initialFormValues = ({ full_name: '', phone_number: '' });

function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.full_name === '' || form.phone_number === '') {
            return false;
        }

        addContact([...contacts, form]);

    };

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])
    

    return (
        <form onSubmit={onSubmit}>

            <div>
                <input
                    type="text"
                    name='full_name'
                    value={form.full_name}
                    placeholder='Full Name'
                    onChange={onChangeInput} />
            </div>

            <div>
                <input
                    type="text"
                    name='phone_number'
                    value={form.phone_number}
                    placeholder='Phone Number'
                    onChange={onChangeInput} />
            </div>

            <div>
                <button>
                    Add
                </button>
            </div>

        </form>
    )
}

export default Form;