import React from 'react'
import Carousel from './Carousel'
import InfoContainer from './InfoContainer'

function Buy(props) {
  return (
    <div className='Buy aligner'>
      <p>Buy</p>
      <Carousel/>
      <InfoContainer data={props.data}/>
      <InfoContainer data={props.data}/>
      <InfoContainer data={props.data}/>
      <InfoContainer data={props.data}/>

    </div>
  )
}

export default Buy
