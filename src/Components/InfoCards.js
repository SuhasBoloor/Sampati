import Carousel from './Carousel';
import React, { useState } from 'react';

function InfoCards(props) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="InfoCards">
      {props.data.details.map((item, i) => (
        <div key={i} className="Card" onClick={() => handleCardClick(item)}>
          <p>Property details</p>
          <p>Price: <strong>{item.price}</strong></p>
          <p>Location: {item.location}</p>
          <p>Landmark: {item.landmark}</p>
        </div>
      ))}

      {selectedCard && (
        <div className="Modal">
          <div className="ModalContent">
            <span className="CloseButton" onClick={closeModal}>&times;</span>
            <Carousel/>
            <h2>Property details</h2>
            <p>Price: <strong>{selectedCard.price}</strong></p>
            <p>Location: {selectedCard.location}</p>
            <p>Landmark: {selectedCard.landmark}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoCards;
