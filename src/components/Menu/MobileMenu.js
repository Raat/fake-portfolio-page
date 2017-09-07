import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import MobileMenuOverlay from './MobileMenuOverlay';

const Img = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
  display: block;
  z-index: 10;
  cursor: pointer;
  @media (min-width: 575px) {
    display: none;
  }
`;

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { showMenu: false };
  }
  onClick() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
  render() {
    return (
      <div onClick={this.onClick}>
        <Img src="/static/images/mobile-menu-icon.png" />
        {this.state.showMenu ? <MobileMenuOverlay showMenu={this.state.showMenu} /> : null}
      </div>
    );
  }
}

export default MobileMenu;
