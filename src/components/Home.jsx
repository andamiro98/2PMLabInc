import React from 'react';
import Header from './Header';
import Layout from './Layout';
import FostAdd from './FostAdd';

import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <Header />
      <FostAdd />
      <PostBox>이건 메인</PostBox>
    </Layout>
  );
};

export default Home;

const PostBox = styled.div`
  max-width: 100%;
  width: 800px;
  height: 500px;
  display: flex;
  margin: auto;
  margin-top: 15px;
  padding: 15px;
  background-color: seashell;
  border-radius: 8px;
`;
