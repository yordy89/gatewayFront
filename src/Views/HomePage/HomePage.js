import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Gateway from 'Component/Gateway'
import { getGateway } from 'Store/reducer'

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGateway())
    }, [])
    return (
        <Wrapper>
            <Gateway />
        </Wrapper>
    )
}

export default HomePage

const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
