import React from 'react';
import styled from 'styled-components';
import data from './data/api';
import Carousel from '../Carousel';
import BigHeader from './BigHeader';

const Container = styled.div`max-width: 1400px;`;

const HomePage = () => (
  <Container className="container">
    <BigHeader headerImg={data.headerImg} title={data.title} content={data.content} />
    <Carousel items={data.posts} />;
  </Container>
);

export default HomePage;
