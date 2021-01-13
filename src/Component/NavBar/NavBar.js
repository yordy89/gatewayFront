import React from 'react'
import styled from 'styled-components'
import { AppBar } from '@material-ui/core'

const NavBar = () => {
    return (
        <StyledAppBar  color='secondary' position='relative'>
        </StyledAppBar>
    )
}

export default NavBar

const StyledAppBar = styled(AppBar)`
    padding: 1rem;
    display:flex;
    align-items:center;
`
