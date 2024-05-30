import React from 'react'
import Carousel from './Carousel'
import InfoContainer from './InfoContainer'

function Home(props) {
  return (
    <div className='Home aligner'>
      <p>Home</p>
        <Carousel/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>
        <InfoContainer data={props.data}/>

    </div>
  )
}

export default Home
