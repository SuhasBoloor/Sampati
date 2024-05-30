import React from 'react'
import InfoCards from './InfoCards'

function InfoContainer(props) {
  return (
    <div className='InfoContainer'>
      <h3>Best Deals</h3>
      <InfoCards data={props.data}/>
    </div>
  )
}

export default InfoContainer
