import React from 'react';
import styled from 'styled-components';
import PostObj from './PostObj';

import PostTop from './PostTop';
import PostText from './PostText';
import PostBottom from './PostBottom';

const Post = () => {
  return (
    <PostBox>
      <PostTop />
      <PostText />
      <PostBottom />
      <PostObj />
    </PostBox>
  );
};
export default Post;

const PostBox = styled.div`
  max-width: 100%;
  width: 730px;
  height: 830px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15px;
  background-color: #242526;
  border-radius: 8px;
`;
