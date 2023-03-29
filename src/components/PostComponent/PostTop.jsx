import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile';

const PostTop = () => {
  return (
    <Top>
      <Profile />
      <Info>
        <Writer>김승재</Writer>
        <Date>1일</Date>
      </Info>
    </Top>
  );
};
export default PostTop;

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px;
`;

const Info = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

const Writer = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  width: initial;
  max-width: 200px;
  height: 20px;
  margin-top: 5px;
  color: white;
`;

const Date = styled.div`
  height: 12px;
  font-size: 12px;
  width: initial;
  max-width: 150px;
  color: #c0c0c0;
`;
