import React from 'react'
import styled from 'styled-components'
import { Grid, Box, Avatar, TextField, withTheme } from '@material-ui/core'
import { Devices } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const GatewayItem = ({ theme, id, name, ipv4Address, handleDelete, edit, setEdit, handleEdit, gateway, handleChange, errors }) => {
    return (
        <Wrapper theme={theme}>
                <Operations>
                    <Avatar>
                        <Devices />
                    </Avatar>
                </Operations>
                <StyledBox>
                    <Title>Name</Title>
                    {
                        !edit
                            ? <Content>{name}</Content>
                            : <TextField
                                name='name'
                                value={gateway.name}
                                variant='outlined'
                                size='small'
                                onChange={handleChange}
                                error={errors.name}
                                required
                            />
                    }
                </StyledBox>
                <StyledBox>
                    <Title>Ipv4 Address</Title>

                    {
                        !edit
                            ? <Content>{ipv4Address}</Content>
                            : <TextField
                                name='ipv4Address'
                                value={gateway.ipv4Address}
                                variant='outlined'
                                size='small'
                                onChange={handleChange}
                                error={errors.ipv4Address}
                                required
                            />
                    }
                </StyledBox>
                <Operations>
                    <ButtonsContainer>
                    <Action onClick={() => handleEdit(id)}>{edit ? 'Save' : 'Edit'}</Action>
                    {
                        !edit
                            ? <Action onClick={() => handleDelete(id)}>Remove</Action>
                            : <Action onClick={() => setEdit(false)}>Cancel</Action>
                    }
                    </ButtonsContainer>
                    {
                        !edit &&  <LinkStyled to={`/gateway/${id}`}>See More Details ...</LinkStyled>
                    }
                </Operations>
        </Wrapper>
    )
}

export default withTheme(GatewayItem)

const Wrapper = styled(Grid)`
    height:100%;
    width:100%;
    padding:.2rem 0;
    margin-bottom:1rem;
    border: solid .1rem rgba(0,0,0,.1);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap:.3rem;
    ${props => props.theme.breakpoints.down('md')}{
        grid-template-columns: 1fr;
        padding: .5rem;
    };
`
const StyledBox = styled(Box)`
    display:flex;
    flex-direction:column;
    margin-bottom:5px;
`
const Title = styled.span`
    font-size: .8rem;
    color: rgba(0,0,0,.3);
`
const Content = styled.span`
    font-size: 1rem;
`
const Operations = styled(Box)`
    display: flex;
    align-items:center;
    justify-content: center;
    gap:1rem;
`
const Action = styled.span`
    font-size: .8rem;
    color: rgba(0,0,0,.3);
    cursor: pointer;
    text-decoration: underline;
    margin-right: 10px;
`

const ButtonsContainer = styled(Box)`
    flex: 1;
    text-align: center
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
`
