import React from 'react';
import Header from './Header';
import Layout from './Layout';
import FostAdd from './FostAdd';
import Post from './PostComponent/Post';

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
