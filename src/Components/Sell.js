import React from 'react'
import Carousel from './Carousel'
import InfoContainer from './InfoContainer'

function Sell(props) {
  return (
    <div className='Sell aligner'>
      <p>Sell</p>
        <Carousel/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>

    </div>
  )
}

export default Sell
