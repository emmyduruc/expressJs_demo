import React from "react";
import styled from "styled-components";
import Post from "./Post";
import SharePost from "./SharePost";

const Container = styled.div`
  flex: 6;
  cursor: pointer;
  height: 100vh;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

function PostFeed() {
  return (
    <Container>
      <SharePost />
      <Post />
    </Container>
  );
}

export default PostFeed;
