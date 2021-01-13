import React, { useEffect } from 'react'
import Contact from './Contact'
import { useDispatch } from 'react-redux'
import {  setContacts } from 'Store/reducer'
import useSetContact from 'Hooks/useSetContact'

const Container = () => {
    const dispatch = useDispatch()
    const { contact, handleChange, handleAdd, errors } = useSetContact()
  
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(res => dispatch(setContacts(res)))
            .catch(e => console.log(e))
    }, [])
    
    return (
        <Contact
            handleChange={handleChange}
            handleAdd={handleAdd}
            contact={contact}
            errors={errors}
        />
    )
}

export default Container
