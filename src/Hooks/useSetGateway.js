import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addGateway, editGateway } from 'Store/reducer'

const useSetGateway = (name = '', ipv4Address = '') => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [errors, setErrors] = useState({})
    const [gateway, setGateway] = useState({
        name: name,
        ipv4Address: ipv4Address,
    })

    const handleChange = (e) => {
        setGateway({
            ...gateway,
            [e.target.name]: e.target.value
        })

    }

    const validations = () => {
        let errors = {}
        errors.name = gateway.name ? false : true
        errors.ipv4Address = gateway.ipv4Address ? false : true
        setErrors({
            ...errors
        })
    }

    useEffect(() => {
        validations()
    }, [gateway])

    const isError = () => {
        return errors.name || errors.ipv4Address
    }

    const handleAdd = () => {
        !isError() &&
            fetch(`${process.env.REACT_APP_API_URL}/gateway`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(gateway)
            }).then(res => res.json())
                .then(res => {
                    dispatch(addGateway(res))
                    setGateway({
                        name: '',
                        ipv4Address: '',
                    })
                }).catch(e => console.log(e))

    }

    const handleEdit = (id) => {
        if (!edit) {
            setEdit(true)
        } else {
            !isError() &&
                fetch(`${process.env.REACT_APP_API_URL}/gateway/${id}`, {
                    method: 'Put',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(gateway)
                }).then(res => res.json())
                    .then(res => {
                        dispatch(editGateway(res))
                        setEdit(false)
                    })
                    .catch(e => console.log(e))
        }
    }

    return { gateway, handleChange, handleAdd, edit, setEdit, handleEdit, errors }
}

export default useSetGateway
