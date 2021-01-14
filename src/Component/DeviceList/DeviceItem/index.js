import React from 'react'
import styled from 'styled-components'
import { Box, Grid, withTheme } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const DeviceItem = ({ device, theme, handleDelete }) => {
  return (
    <Wrapper theme={theme}>
      <ButtonContainer onClick={() => handleDelete(device._id)}><Delete/></ButtonContainer>     
      <StyledBox>
        <Title>Vendor</Title>
        <Content>{device.vendor}</Content>
      </StyledBox>
      <StyledBox>
        <Title>Status</Title>
        <Content>{device.status ? 'Online' : 'Offline'}</Content>
      </StyledBox>
    </Wrapper>
  )
}

export default withTheme(DeviceItem)

const Wrapper = styled(Grid)`
    background-color: rgba(0,0,0,.2);
    padding: 1rem;
    margin-bottom:1rem;
    border: solid .1rem rgba(0,0,0,.1);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap:.3rem;
    margin-right: 1rem;
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
    color: black;
`
const Content = styled.span`
    font-size: 1rem;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: red;
`


