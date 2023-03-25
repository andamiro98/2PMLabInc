import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderBox>
      <Logo>
        <Logoimg src="img/logo.jpg" />
      </Logo>

      <Title>2pmlab FrontEnd 과제</Title>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  max-width: 100%;
  height: 120px;
  display: flex;
  background-color: #22372b;
  padding: 10px;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  margin-right: 5px;
`;

const Title = styled.a`
  display: flex;
  width: 100%;
  max-width: 200px;
  height: 25px;
  margin-top: 80px;
  align-items: center;
  color: white;
`;

const Logoimg = styled.img`
  width: 100px;
  height: 100px;
`;

const Profile = styled.div`
  margin: auto;
  margin-right: 5px;
`;
const Profileimg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
