import React from 'react';
import styled from 'styled-components';

const PostBottom = () => {
  return (
    <Bottom>
      <LikeBox>
        <Likeimg src="https://www.facebook.com/reaction/image/1635855486666999/?size=20&scale=1" />
        <LikeNum>3</LikeNum>
      </LikeBox>

      <CommentNum>댓글 1개</CommentNum>
    </Bottom>
  );
};
export default PostBottom;

const Bottom = styled.div`
  display: flex;
  padding: 10px 14px 14px 10px;
  align-items: center;
  width: 95%;
  justify-content: space-between;

  margin: auto;
`;

const LikeBox = styled.div`
  display: flex;
`;

const Likeimg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const LikeNum = styled.div`
  color: #858585;
  font-size: 15px;
`;

const CommentNum = styled.div`
  margin-left: 100px;
  color: #858585;
`;
