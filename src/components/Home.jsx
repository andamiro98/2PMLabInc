import React from 'react';
import Header from './Header';
import Layout from './Layout';
import FostAdd from './FostAdd';
import Post from './Post';

import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <Header />
      <FostAdd />
      <Post />
    </Layout>
  );
};

export default Home;
