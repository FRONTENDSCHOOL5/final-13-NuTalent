const { styled } = require('styled-components');

export const CarouselContainer = styled.div`
  height: 100%;
  position: relative;
  margin-bottom: 1.2rem;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: contain;
  background-color: rgb(245, 245, 245);
  border-radius: 1rem;
`;

export const SlideButton = styled.button`
  position: absolute;
  top: 0;
  height: 100%;
  width: 20%;
  background-color: transparent;
  font-size: 8rem;
  color: transparent;

  &:hover {
    color: var(--main-purple);
    transition: 0.2s color;
  }

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

export const CarouselIndicator = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
`;

export const CarouselIndicatorItem = styled.span`
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid var(--sub-grey);
  border-radius: 50%;
  background-color: ${({ $currentImage }) =>
    $currentImage ? 'var(--main-purple)' : 'white'};
`;
