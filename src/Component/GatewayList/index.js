import React from 'react'
import GatewayList from './GatewaytList'
import { useSelector } from 'react-redux'

const Container = () => {
    const gatewayList = useSelector(state => state.gateways.gateways)
    return (
        <GatewayList
            gatewayList={gatewayList}
        />
    )
}

export default Container
