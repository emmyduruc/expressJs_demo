import React from "react";
import styled from "styled-components";
import LeftSide from "../components/leftbar/LeftSide";
import Nav from "../components/navbar/Nav";
import PostFeed from "../components/post/PostFeed";
import RightSide from "../components/rightBar/RightSide";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;
function home() {
  return (
    <>
      <Nav />
      <Container>
        <LeftSide />
        <PostFeed />
        <RightSide />
      </Container>
    </>
  );
}

export default home;
