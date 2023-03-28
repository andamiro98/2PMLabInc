import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Frame>{children}</Frame>;
};

export default Layout;

const Frame = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 15px;
  margin: auto;
  align-items: center;
  background-color: #18191a;
`;
