import React from 'react'
import Gateway from './Gateway'
import useSetGateway from 'Hooks/useSetGateway'

const Container = () => {
    const { gateway, handleChange, handleAdd, errors } = useSetGateway()
    return (
        <Gateway
            handleChange={handleChange}
            handleAdd={handleAdd}
            gateway={gateway}
            errors={errors}
        />
    )
}

export default Container
