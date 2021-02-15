import React from 'react';
import PostCard from '../PostCard';

import { Container } from './styles';

function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post}></PostCard>
      ))}
    </Container>
  );
}

export default Feed;
