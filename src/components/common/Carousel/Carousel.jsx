import React, { useState } from 'react';

import * as S from './Carousel.styled';

export default function Carousel({ images, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = images.split(',');

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  return (
    <S.CarouselContainer>
      <S.Image
        src={imageArray[currentIndex]}
        alt={'게시글 이미지'}
        {...props}
      />
      {imageArray.length > 1 && (
        <>
          <S.SlideButton
            onClick={(e) => {
              e.target === e.currentTarget && prevSlide();
            }}
          >
            &#8249;
          </S.SlideButton>
          <S.SlideButton
            onClick={(e) => {
              if (e.target === e.currentTarget) nextSlide();
            }}
          >
            &#8250;
          </S.SlideButton>
          <S.CarouselIndicator>
            {imageArray.map((_, index) => (
              <S.CarouselIndicatorItem
                key={index}
                $currentImage={currentIndex === index}
              />
            ))}
          </S.CarouselIndicator>
        </>
      )}
    </S.CarouselContainer>
  );
}
