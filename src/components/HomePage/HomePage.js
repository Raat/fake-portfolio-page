import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import data from './data/api';
import Carousel from '../Carousel';
import BigHeader from './BigHeader';
import Menu from '../Menu/Menu';

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const Header = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin-top: 50px;
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
    <Row>
      <Col md={11} mdOffset={1}>
        <Header>{data.postType}</Header>
      </Col>
    </Row>
    <Carousel items={data.posts} />;
  </Container>
);

export default HomePage;
