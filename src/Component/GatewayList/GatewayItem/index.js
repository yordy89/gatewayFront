import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import GatewayItem from './GatewayItem'
import { removeGateway } from 'Store/reducer'
import useSetGateway from 'Hooks/useSetGateway'

const Container = ({ id, name, ipv4Address }) => {
    const {
        gateway,
        handleChange,
        handleEdit,
        edit,
        setEdit,
        errors
    } = useSetGateway(name, ipv4Address)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/gateway/${id}`, {
            method: 'Delete',
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(res => res.json())
            .then(res => dispatch(removeGateway(res)))
            .catch(e => console.log(e))
    }

    return (
        <Wrapper>
            <GatewayItem
                id={id}
                name={name}
                ipv4Address={ipv4Address}
                handleDelete={handleDelete}
                edit={edit}
                setEdit={setEdit}
                gateway={gateway}
                handleChange={handleChange}
                handleEdit={handleEdit}
                errors={errors}
            />
        </Wrapper>
    )
}
export default Container

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
`
