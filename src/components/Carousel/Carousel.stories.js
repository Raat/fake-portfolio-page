import React from 'react';
import { storiesOf } from '@storybook/react';
import { CarouselContainer, CarouselItem } from './';

storiesOf('Carousel', module)
  .add('CarouselWithItem', () => (
    <div style={{ width: '600px', margin: 'auto' }}>
      <CarouselContainer>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </CarouselContainer>
    </div>
  ))
  .add('Carousel item', () => <CarouselItem />);
