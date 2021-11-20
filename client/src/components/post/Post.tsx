import React from "react";
import styled from "styled-components";
import profilePic from "../assests/img/profilepic.jpg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloseIcon from "@material-ui/icons/Close";
import car from "../assests/img/car.jpg";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PublicIcon from "@material-ui/icons/Public";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
const Wrapper = styled.div`
  padding: 15px;
`;
const Container = styled.div`
  cursor: pointer;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;
const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Span = styled.span`
  margin-left: 1rem;
  align-items: center;
  display: flex;
`;
const CenterContainer = styled.div`
  align-items: center;
  border-radius: 2rem;
`;
const Image = styled.img`
  width: 100%;
`;
const LikesBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Hr = styled.hr`
  margin-top: 1rem;
 color: grey;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const BottomCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Post() {
  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <ProfileContent>
            <ProfileImage src={profilePic} alt="post feed pic" />
            <p>Hilary Ogalagu</p>
            <Span>
              10hrs ago <PublicIcon />
            </Span>
          </ProfileContent>
          <ProfileContent>
            <MoreHorizIcon />
            <CloseIcon />
          </ProfileContent>
        </TopContainer>
        <CenterContainer>
          <p>
            lorem ipsum dolor sitorem ipor sitorem ipsum dolor sit amet,losum
            dolor sit amet,lorem ipsum dolor sit amet,orem ipsum dolor sit
            amet,lorem ipsum dolor sit lorem iporem ipsum dolor sit amet,lorem
            ipsum dolor sit sum doorem ipsum dolor sit amet,lorem ipsum dolor
            sit lor sit amet, consectetur adip consectetur adip
          </p>
          <Image src={car} alt="" />
         
        </CenterContainer>
        <LikesBottom>
          <div>
            <ThumbUpAltIcon htmlColor="blue" />
            <FavoriteBorderIcon htmlColor="red" />
            <InsertEmoticonIcon htmlColor="gold" />
            <span>123</span>
          </div>
          <h4>10 comments</h4>
        </LikesBottom>
        <Hr style={{marginBottom:"0.5rem"}}/>
        <BottomContainer>
          <BottomCommentWrapper>
            <ThumbUpAltIcon htmlColor="grey" />
            <span>Like</span>
          </BottomCommentWrapper>
          <BottomCommentWrapper >
            <ChatBubbleOutlineIcon htmlColor="grey" />
            <span>Comment</span>
          </BottomCommentWrapper>
          <BottomCommentWrapper>
            <ShareIcon htmlColor="grey" />
            <span>Share</span>
          </BottomCommentWrapper>
        </BottomContainer>
        <Hr />
      </Container>
      <Container>
        <TopContainer>
          <ProfileContent>
            <ProfileImage src={profilePic} alt="post feed pic" />
            <p>Hilary Ogalagu</p>
            <Span>
              10hrs ago <PublicIcon />
            </Span>
          </ProfileContent>
          <ProfileContent>
            <MoreHorizIcon />
            <CloseIcon />
          </ProfileContent>
        </TopContainer>
        <CenterContainer>
          <p>
            lorem ipsum dolor sitorem ipor sitorem ipsum dolor sit amet,losum
            dolor sit amet,lorem ipsum dolor sit amet,orem ipsum dolor sit
            amet,lorem ipsum dolor sit lorem iporem ipsum dolor sit amet,lorem
            ipsum dolor sit sum doorem ipsum dolor sit amet,lorem ipsum dolor
            sit lor sit amet, consectetur adip consectetur adip
          </p>
          <Image src={car} alt="" />
         
        </CenterContainer>
        <LikesBottom>
          <div>
            <ThumbUpAltIcon htmlColor="blue" />
            <FavoriteBorderIcon htmlColor="red" />
            <InsertEmoticonIcon htmlColor="gold" />
            <span>123</span>
          </div>
          <h4>10 comments</h4>
        </LikesBottom>
        <Hr style={{marginBottom:"0.5rem"}}/>
        <BottomContainer>
          <BottomCommentWrapper>
            <ThumbUpAltIcon htmlColor="grey" />
            <span>Like</span>
          </BottomCommentWrapper>
          <BottomCommentWrapper >
            <ChatBubbleOutlineIcon htmlColor="grey" />
            <span>Comment</span>
          </BottomCommentWrapper>
          <BottomCommentWrapper>
            <ShareIcon htmlColor="grey" />
            <span>Share</span>
          </BottomCommentWrapper>
        </BottomContainer>
        <Hr />
      </Container>
      <Container>
        <TopContainer>
          <ProfileContent>
            <ProfileImage src={profilePic} alt="post feed pic" />
            <p>Hilary Ogalagu</p>
            <Span>
              10hrs ago <PublicIcon />
            </Span>
          </ProfileContent>
          <ProfileContent>
            <MoreHorizIcon />
            <CloseIcon />
          </ProfileContent>
        </TopContainer>
        <CenterContainer>
          <p>
            lorem ipsum dolor sitorem ipor sitorem ipsum dolor sit amet,losum
            dolor sit amet,lorem ipsum dolor sit amet,orem ipsum dolor sit
            amet,lorem ipsum dolor sit lorem iporem ipsum dolor sit amet,lorem
            ipsum dolor sit sum doorem ipsum dolor sit amet,lorem ipsum dolor
            sit lor sit amet, consectetur adip consectetur adip
          </p>
          <Image src={car} alt="" />
         
        </CenterContainer>
        <LikesBottom>
          <div>
            <ThumbUpAltIcon htmlColor="blue" />
            <FavoriteBorderIcon htmlColor="red" />
            <InsertEmoticonIcon htmlColor="gold" />
            <span>123</span>
          </div>
          <h4>10 comments</h4>
        </LikesBottom>
        <Hr style={{marginBottom:"0.5rem"}}/>
        <BottomContainer>
          <BottomCommentWrapper>
            <ThumbUpAltIcon htmlColor="grey" />
            <span>Like</span>
          </BottomCommentWrapper>
          <BottomCommentWrapper >
            <ChatBubbleOutlineIcon htmlColor="grey" />
            <span>Comment</span>
          </BottomCommentWrapper>
          <BottomCommentWrapper>
            <ShareIcon htmlColor="grey" />
            <span>Share</span>
          </BottomCommentWrapper>
        </BottomContainer>
        <Hr />
      </Container>
    </Wrapper>
  );
}

export default Post;
