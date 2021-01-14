import React from 'react'
import styled from 'styled-components'
import { Card, CardContent, Grid, Box, TextField, withTheme, Typography } from '@material-ui/core'
import GatewayList from 'Component/GatewayList'

const Gateway = ({ gateway, handleChange, handleAdd, errors, theme }) => {
    return (
        <Wrapper theme={theme}>
            <StyledCard elevation={5}>
                <StyledCardContent>
                    <WrapperAdd theme={theme}>
                    <Typography variant='h5' align='center' color='textSecondary'>Add Gateway</Typography>
                        <StyledBox>
                            <Title>Name</Title>
                            <Content
                                name='name'
                                variant='outlined'
                                size='small'
                                focused
                                value={gateway.name}
                                onChange={handleChange}
                                required
                                inputProps={{
									maxLength: 15
								}}
                                error={errors.name}
                            />
                        </StyledBox>
                        <StyledBox>
                            <Title>Ipv4Address</Title>
                            <Content
                                name='ipv4Address'
                                variant='outlined'
                                size='small'
                                value={gateway.ipv4Address}
                                onChange={handleChange}
                                error={errors.ipv4Address}
                                required
                            />
                        </StyledBox>
                        <Operations>
                            <Action onClick={handleAdd}>Add</Action>
                        </Operations>
                    </WrapperAdd>
                    <GatewayList />
                </StyledCardContent>
            </StyledCard>
        </Wrapper>
    )
}

export default withTheme(Gateway)

const Wrapper = styled.div`
    width:60%;
    height:90%;
    background-color: rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    padding-bottom: 1rem;
    ${props=> props.theme.breakpoints.down('md')}{
        width:100%;
    };
`
const StyledCard = styled(Card)`
    width:95%;
    height:90%;
`

const StyledCardContent = styled(CardContent)`
    height:90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow-y: scroll;
`

const WrapperAdd = styled(Grid)`
    width:95%;
    padding:.2rem;
    margin-bottom:.2rem;
    border: solid .1rem rgba(0,0,0,.1);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap:.3rem;
    ${props=> props.theme.breakpoints.down('md')}{
        grid-template-columns: 1fr;
    };
`
const StyledBox = styled(Box)`
    display:flex;
    flex-direction:column;
`
const Title = styled.span`
    font-size: .8rem;
    color: rgba(0,0,0,.3);
`
const Content = styled(TextField)`
    font-size: 1rem;
`
const Operations = styled(Box)`
    display: flex;
    align-items:center;
    justify-content: center;
`
const Action = styled.span`
    font-size: .8rem;
    color: rgba(0,0,0,.3);
    cursor: pointer;
    text-decoration: underline;
`
