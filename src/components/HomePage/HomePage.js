import React from 'react';
import styled from 'styled-components';
import data from './data/api';
import Carousel from '../Carousel';
import BigHeader from './BigHeader';
import Menu from '../Menu/Menu';

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const HomePage = () => (
  <Container className="container">
    <Menu />
    <BigHeader
      headerImgDesktop={data.headerImgDesktop}
      headerImgMobile={data.headerImgMobile}
      title={data.title}
      content={data.content}
    />
    <Carousel items={data.posts} />;
  </Container>
);

export default HomePage;
