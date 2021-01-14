import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowBack } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import DeviceList from '../../Component/DeviceList'

const Gateway = (props) => {
  const { match: { params } } = props
  const [gateway, setGateway] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gateway/${params.id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      },
    }).then(res => res.json())
      .then(setGateway)
      .catch(e => console.log(e))
  }, [params.id])
  return (
    <Container>
      <ContainerDates>
      <BackContainer onClick={() => history.push('/')}>
        <ArrowBack/> <H5>Back</H5>
        </BackContainer>
        <TextContainer>
          <H1>Name:</H1><H2>{gateway.name}</H2>
        </TextContainer>
        <TextContainer>
          <H1>Ipv4 Address:</H1><H2>{gateway.ipv4Address}</H2>
        </TextContainer>
        {<DeviceList deviceList={gateway.deviceList} gatewayId={gateway._id}/>}
      </ContainerDates>
    </Container>
  )
}

export default Gateway

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const ContainerDates = styled.div`
  width: 90%;
  height: 90%;
  background-color: rgba(0,0,0,0.5);
  padding: 16px;
  color: white;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`
const H1 = styled.h1`
  color: white;
  font-weight: bold;
  margin-right: 10px;
`
const H2 = styled.h1`
  color: white;
  font-weight: 400;
  text-transform: capitalize;
`

const H5 = styled.h5`
  font-weight: 300;
  font-size: 16px;
  margin-left: 5px
`

const BackContainer = styled.div`
  display: flex;
  color: black;
  align-items: center;
  cursor: pointer;
`
