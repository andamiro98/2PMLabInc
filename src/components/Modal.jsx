import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { modalState } from '../redux/modules/ModalSlice';
import { AiFillCloseCircle } from 'react-icons/ai';
import PostTop from './PostComponent/PostTop';
import PostText from './PostComponent/PostText';
import Comment from './Comment';

const Modal = () => {
  const dispatch = useDispatch();

  const modalstate = useSelector((state) => state.modal.state);

  return (
    <ReactModal
      isOpen={modalstate}
      onRequestClose={() => {
        dispatch(modalState(!modalstate));
      }}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        content: {
          margin: 'auto',
          width: '750px',
          height: '800px',
          backgroundColor: '#242526',
          border: 'none',
          borderRadius: '15px',
        },
      }}
    >
      <ModalBox>
        <Topinfo>
          <TopTitle>김승재님의 게시글</TopTitle>
          <div>
            <AiFillCloseCircle
              onClick={() => {
                dispatch(modalState(!modalstate));
              }}
              style={{
                color: '#505050',
                fontSize: '40px',
                cursor: 'pointer',
              }}
            />
          </div>
        </Topinfo>
        <PostTop />
        <PostText />
        <Comment />
      </ModalBox>
    </ReactModal>
  );
};

export default Modal;

const ModalBox = styled.div``;

const Topinfo = styled.div`
  display: flex;
  justify-content: center;
`;

const TopTitle = styled.div`
  display: flex;
  font-size: 16px;
  color: #d8d8d8;
  font-weight: bold;
  align-items: center;
  margin: auto;
`;
