import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BsChatSquare } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { modalState } from '../../redux/modules/ModalSlice';

const PostObj = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [like, setLike] = useState(false);

  const modalstate = useSelector((state) => state.modal.state);

  useEffect(() => {
    setModal(modalstate);
  }, [modalstate]);

  useEffect(() => {
    dispatch(modalState(modal));
  }, [modal]);

  return (
    <ObjBox>
      {like === true ? (
        <Obj
          onClick={() => {
            setLike(!like);
          }}
        >
          <AiOutlineLike
            style={{
              fontSize: '20px',
              alignItems: 'center',
              marginRight: '5px',
            }}
          />
          좋아요
        </Obj>
      ) : (
        <Obj
          onClick={() => {
            setLike(!like);
          }}
        >
          <AiFillLike
            style={{
              fontSize: '20px',
              alignItems: 'center',
              marginRight: '5px',
            }}
          />
          좋아요
        </Obj>
      )}

      <Obj
        onClick={() => {
          setModal(!modal);
        }}
      >
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

      <Modal />

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
  );
};
export default PostObj;

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
