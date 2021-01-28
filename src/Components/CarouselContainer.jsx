/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

const CarouselContainer = props => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: 100%;
      display: flex;
    `}
  >
    {props.children}
  </div>
);

// const CarouselContainer = props => {
//     return (
//         <div className="carousel-container"
//         style={{
//             transform: `translateX(-${props.translate} px)`,
//             transition: `transform ease-out ${props.transition}`,
//             width: '100%',
//             height: '100%',
//             display: 'flex'
//         }}>
//             {props.children}
//         </div>
//     )
// }

export default CarouselContainer;

