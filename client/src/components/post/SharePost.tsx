import React from "react";
import styled from "styled-components";
import profilePic from "../assests/img/profilepic.jpg";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LabelIcon from "@material-ui/icons/Label";

const Wrapper = styled.div`
  padding: 15px;
`;
const Container = styled.div`
  cursor: pointer;
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 150px;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2rem;
`;
const BottomContainer = styled.div`
  display: flex;
  margin: 1.2rem;
  align-items: center;
  justify-content: space-between;
`;
const FeedProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;
const Hr = styled.hr`
  margin: 1rem ;
  outline: none;
`;
const Span = styled.span``;
const Input = styled.input`
  border: none;
  width: 80%;
  height: 50px;
  outline: none;
  font-size: 18px;
  overflow: hidden;
  border-radius: 1rem;
  ::focus {
    outline: none;
  }
`;
const Share = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  width: 7rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #a6ebc9;
  margin-left: 2rem;
`;

function SharePost() {
  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <FeedProfileImage src={profilePic} alt="post feed pic" />
          <Input placeholder="share your mind..." />
        </TopContainer>
        <Hr />
        <BottomContainer>
          <Share>
            <AddAPhotoIcon htmlColor="red"/>
            <Span>Photo or Video</Span>
          </Share>
          <Share>
            <VideocamIcon htmlColor="green" />
            <Span>Live</Span>
          </Share>
          <Share>
            <VideoCallIcon htmlColor="purple"/>
            <Span>Room</Span>
          </Share>
          <Share>
            <TagFacesIcon htmlColor="gold" />
            <Span>Feeling</Span>
          </Share>
          <Share>
            <LocationOnIcon htmlColor="blue" />
            <Span>Location</Span>
          </Share>
          <Share>
            <LabelIcon htmlColor="black" />
            <Span>Tag</Span>
          </Share>
          <Button>Share</Button>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
}

export default SharePost;
