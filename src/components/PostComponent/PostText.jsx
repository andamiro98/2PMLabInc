import React from 'react';
import styled from 'styled-components';

const PostText = () => {
  return (
    <Text
      src="https://static.wanted.co.kr/images/company/30425/obu2xplfutyiedps__1080_790.jpg"
      style={{
        objectFit: 'cover',
      }}
    ></Text>
  );
};
export default PostText;

const Text = styled.img`
  display: flex;
  margin-top: 10px;
  width: 100%;
  height: 650px;
  background-color: honeydew;
`;
