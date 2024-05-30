// import React from 'react'
// import 'react-slideshow-image/dist/styles.css'
// import { Fade, Zoom, Slide } from 'react-slideshow-image'

// function Carousel() {
//     return (
//         <div class="carousel">
//             <div id="carouselExample" class="carousel Fade">
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img src="../Images/carousel/image1.png" class="d-block w-100" alt="Image 1"/>
                        
//                     </div>
//                     <div class="carousel-item">
//                         <img src="../Images/carousel/image2.png" class="d-block w-100" alt="Image 2"/>
//                     </div>
//                     <div class="carousel-item">
//                         <img src="../Images/carousel/image3.png" class="d-block w-100" alt="Image 3"/>
//                     </div>
//                     <div class="carousel-item">
//                         <img src="../Images/carousel/image4.png" class="d-block w-100" alt="Image 4"/>
//                     </div>
//                     <div class="carousel-item">
//                         <img src="../Images/carousel/image5.png" class="d-block w-100" alt="Image 5"/>
//                     </div>
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Carousel

// Carousel.jsx


// Carousel.jsx
import React, { useState } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '../Images/carousel/image1.png',
    '../Images/carousel/image2.png',
    '../Images/carousel/image3.png',
    '../Images/carousel/image4.png',
    '../Images/carousel/image5.png'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='carouselContainer'>

    <div className="Carousel">
      <button onClick={prevSlide} className="hiddenButton"><i class="fa-solid fa-chevron-left"></i></button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide} className="hiddenButton"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    </div>
  );
}

export default Carousel;
