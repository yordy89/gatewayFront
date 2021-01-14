import React from 'react'
import styled from 'styled-components'
import GatewayItem from './GatewayItem'
import { Typography } from '@material-ui/core'

const GatewayList = ({ gatewayList }) =>
    <Wrapper>
        <Typography variant='h5' align='center' color='textSecondary'>Gateway List</Typography>
        {
            gatewayList.map(g => 
                <GatewayItem
                    key={g._id}
                    id={g._id}
                    name={g.name}
                    ipv4Address={g.ipv4Address}
                />
            )
        }
    </Wrapper>

export default GatewayList

const Wrapper = styled.div`
    width:100%;
`