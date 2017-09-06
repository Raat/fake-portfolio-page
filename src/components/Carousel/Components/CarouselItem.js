import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  width:294px;
`;

const Image = Styled.img`
  width:100%;
  height:422px;
`;

const CarouselItem = () => (
  <Container>
    <Image src={'./static/images/eef.jpg'} />
    <h5>Eefje de Visser</h5>
    <p>Zonder tegenwind kun je niet gaan vliegen</p>
  </Container>
);

export default CarouselItem;
