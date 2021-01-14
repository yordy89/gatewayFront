import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Typography, withTheme, Grid, TextField } from '@material-ui/core'
import DeviceItem from './DeviceItem'

const DeviceList = ({ deviceList = [], gatewayId, theme }) => {
  const [devicesList, setDevicesList] = useState([])
  const [addDevice, setAddDevice] = useState(false)
  const [device, setDevice] = useState({
    vendor: ''
  })

  useEffect(() => {
    setDevicesList(deviceList)
  }, [deviceList])
  const handleAddDevice = () => {
    fetch(`${process.env.REACT_APP_API_URL}/device/${gatewayId}`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(device)
    }).then(res => res.json())
      .then(res => {
        setDevicesList([...devicesList, res])
        setAddDevice(false)
        setDevice({
          vendor: ''
        })
      })
      .catch(e => console.log(e))
  }

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/device/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json'
      },
    }).then(res => res.json())
      .then(res => {
        setDevicesList(devicesList.filter(d => d._id !== id))
      })
      .catch(e => console.log(e))
  }

  const handleChange = (e) => {
    setDevice({
      ...device,
      [e.target.name]: e.target.value
  })
  }

  return (
    <Container>
      <Typography variant='h5' color='white' align='center'>Device List</Typography>
      <Wrapper>
        {
          devicesList.length > 0 ? devicesList.map(device => <DeviceItem key={device._id} device={device} handleDelete={handleDelete} />) : <Typography>No hay device para mostrar</Typography>
        }

      </Wrapper>
      { devicesList.length < 10 && <Action onClick={() => setAddDevice(true)}>Add Device</Action>}
      {
        addDevice && (
          <WrapperAdd theme={theme}>
            <Typography variant='h5' align='center' color='white'>Add Device</Typography>
            <StyledBox>
              <Title>Vendor</Title>
              <Content
                name='vendor'
                variant='outlined'
                size='small'
                focused
                value={device.vendor}
                onChange={handleChange}
                required
                inputProps={{
                  maxLength: 15
                }}
              />
            </StyledBox>
            <Operations>
              <Action onClick={handleAddDevice}>Add</Action>
            </Operations>
          </WrapperAdd>
        )
      }
    </Container>
  )
}

export default withTheme(DeviceList)


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`

const Action = styled.span`
    font-size: .8rem;
    color: rgba(0,0,0,.3);
    cursor: pointer;
    text-decoration: underline;
    margin-right: 10px;
    color: white;
    margin-left: auto;
    margin-bottom: 0.5rem;
`

const WrapperAdd = styled(Grid)`
  background-color: rgba(0,0,0,.2);
    width:95%;
    padding:.2rem;
    margin-bottom:.2rem;
    border: solid .1rem rgba(0,0,0,.1);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap:.3rem;
    ${props => props.theme.breakpoints.down('md')}{
        grid-template-columns: 1fr;
    };
`
const StyledBox = styled(Box)`
    display:flex;
    flex-direction:column;
`
const Title = styled.span`
    color: white;
    font-size: .8rem;
    margin-bottom: 0.1rem;
`
const Content = styled(TextField)`
    font-size: 1rem;
`
const Operations = styled(Box)`
    display: flex;
    align-items:center;
    justify-content: center;
`
