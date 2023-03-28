import React from 'react';
import styled from 'styled-components';
import { BsCameraVideoFill, BsPersonVideo, BsEmojiSmile } from 'react-icons/bs';
import Profile from './Profile';

const FostAdd = () => {
  return (
    <AddBox>
      <ClickBox>
        <Profile />
        <ClickBoxText>김승재님, 무슨 생각을 하고 계신가요?</ClickBoxText>
      </ClickBox>
      <ClickBoxObjects>
        <ClickBoxObject
          onClick={() => {
            alert('라이브 방송');
          }}
        >
          <BsCameraVideoFill
            style={{
              fontSize: '25px',
              alignItems: 'center',
              marginRight: '5px',
              color: '#F02849',
            }}
          />
          라이브 방송
        </ClickBoxObject>
        <ClickBoxObject
          onClick={() => {
            alert('사진/동영상');
          }}
        >
          <BsPersonVideo
            style={{
              fontSize: '25px',
              alignItems: 'center',
              marginRight: '5px',
              color: '#45BD62',
            }}
          />
          사진/동영상
        </ClickBoxObject>
        <ClickBoxObject
          onClick={() => {
            alert('기분/활동');
          }}
        >
          <BsEmojiSmile
            style={{
              fontSize: '25px',
              alignItems: 'center',
              marginRight: '5px',
              color: '#F7B928',
            }}
          />
          기분/활동
        </ClickBoxObject>
      </ClickBoxObjects>
    </AddBox>
  );
};

export default FostAdd;

const AddBox = styled.div`
  max-width: 100%;
  width: 700px;
  height: 100px;
  margin: auto;
  margin-top: 15px;
  padding: 15px;
  border-radius: 8px;
  background-color: #242526;
  display: flex;
  flex-direction: column;
`;

const ClickBox = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
`;

const ClickBoxText = styled.div`
  width: 600px;
  height: 30px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #3a3b3c;
  color: #c0c0c0;
`;

const ClickBoxObjects = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #858585;
  color: #c0c0c0;
`;

const ClickBoxObject = styled.div`
  display: flex;
  margin: auto;
  cursor: pointer;
`;
