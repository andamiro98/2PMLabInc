import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  _postcomment,
  _getcomment,
  _deletecomment,
} from '../redux/modules/CommentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
const Comment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getcomment());
  }, []);

  const data = useSelector((state) => state.comment.comment);

  const [comment, setComment] = useState('');
  const [recomment, setRecomment] = useState(false);
  const [idsave, setIdsave] = useState(0);

  console.log(idsave);

  const CommetWrite = () => {
    dispatch(
      _postcomment({
        text: comment,
      })
    );
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      CommetWrite();
      setComment('');
      dispatch(_getcomment());
    }
  };

  if (data === undefined || data.text === '') return;

  return (
    <>
      <CommentBox>
        {data &&
          data.map((com) => {
            return (
              <div>
                <Comments>{com.text}</Comments>
                <Del
                  onClick={() => {
                    dispatch(_deletecomment(com.id));
                  }}
                >
                  <AiOutlineDelete
                    style={{
                      color: 'red',
                      fontSize: '15px',
                    }}
                  />
                </Del>
                <SubBox>
                  <SubObj
                    onClick={() => {
                      setIdsave(com.id);
                      setRecomment(true);
                    }}
                  >
                    답글 달기
                  </SubObj>
                </SubBox>
              </div>
            );
          })}
      </CommentBox>

      <WriteBox>
        <WriteComment
          placeholder=" 댓글을 입력하세요"
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
      </WriteBox>
    </>
  );
};

export default Comment;

const CommentBox = styled.div`
  width: 98%;
  height: 100%;
  padding: 10px;
`;

const Comments = styled.div`
  display: inline-block;
  width: initial;
  max-width: 750px;
  border-radius: 10px;
  height: initial;
  max-height: initial;
  padding: 8px;
  margin-top: 5px;
  background-color: #353535;
  color: #c0c0c0;
`;

const SubBox = styled.div`
  display: flex;
`;

const SubObj = styled.div`
  display: flex;
  margin-left: 7px;
  color: #c0c0c0;
  font-size: 12px;
  cursor: pointer;
`;

const WriteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WriteComment = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  padding: 5px 10px 5px 10px;

  border-radius: 18px;
  border: none;
  :focus {
    outline: none;
  }
  background-color: #353535;
  color: #c0c0c0;
`;

const Del = styled.div`
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
`;
