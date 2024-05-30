import React from 'react'
import Carousel from './Carousel'
import InfoContainer from './InfoContainer'

function Rent(props) {
  return (
    <div className='Rent aligner'>
      <p>Rent</p>
      <Carousel/>
      <InfoContainer data={props.data}/>
      <InfoContainer data={props.data}/>
      <InfoContainer data={props.data}/>
      <InfoContainer data={props.data}/>

    </div>
  )
}

export default Rent
