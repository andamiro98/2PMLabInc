import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { AiOutlineLike } from 'react-icons/ai';
import { BsChatSquare } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
const Post = () => {
  return (
    <PostBox>
      <Top>
        <Profile />
        <Info>
          <Writer>김승재</Writer>
          <Date>1일</Date>
        </Info>
      </Top>

      <Text
        src="https://static.wanted.co.kr/images/company/30425/obu2xplfutyiedps__1080_790.jpg"
        style={{
          objectFit: 'cover',
        }}
      ></Text>
      <Bottom>
        <LikeBox>
          <Likeimg src="https://www.facebook.com/reaction/image/1635855486666999/?size=20&scale=1" />
          <LikeNum>3</LikeNum>
        </LikeBox>

        <CommentNum>댓글 1개</CommentNum>
      </Bottom>
      <ObjBox>
        <Obj onMouseOver={{}}>
          <AiOutlineLike
            style={{
              fontSize: '20px',
              alignItems: 'center',
              marginRight: '5px',
            }}
          />
          좋아요
        </Obj>
        <Obj>
          <BsChatSquare
            style={{
              fontSize: '18px',
              alignItems: 'center',
              marginRight: '5px',
              marginTop: '2px',
            }}
          />
          댓글 달기
        </Obj>
        <Obj>
          <RiShareForwardLine
            style={{
              fontSize: '22px',
              alignItems: 'center',
              marginRight: '5px',
            }}
          />
          공유하기
        </Obj>
      </ObjBox>
    </PostBox>
  );
};
export default Post;

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px;
`;

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

const Text = styled.img`
  display: flex;
  margin-top: 10px;
  width: 100%;
  height: 650px;
  background-color: honeydew;
`;

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

const ObjBox = styled.div`
  display: flex;
  border-top: 1px solid #464646;
  width: 95%;
  height: 45px;
  justify-content: space-between;
  margin: auto;
`;

const Obj = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: #c0c0c0;
  width: 90%;
  height: 40px;

  align-items: center;
  text-align: center;
  border-radius: 5px;
  &:hover {
    background-color: #353535;
  }
`;
