import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from './picture.module.css';



function Picture() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const API_KEY = 'kGvMTpYDoETkH53utJSWIpT6Gyewt7lXiRaWhCDF'; 
    const today = new Date();
    const weekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5).toISOString().split('T')[0];
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${weekAgo}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.pictureContainer}>
        <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={image.title} className={styles.slideImage}/>
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
}

export default Picture;
