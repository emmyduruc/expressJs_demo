import React from "react";
import styled from "styled-components";
import LeftSide from "../leftbar/LeftSide";
import Nav from "../navbar/Nav";
import PostFeed from "../post/PostFeed";
import EditIcon from "@material-ui/icons/Edit";
import RightSide from "../rightBar/RightSide";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ProfilePic from "../assests/img/profilepic.jpg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const ProfileContainer = styled.div`
  display: flex;
`;
const ProfileRight = styled.div`
  flex: 9;
`;
const ProfileRightTop = styled.div`
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150px;

  border: 3px solid white;
`;
const ProfileImageCover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const ProfileCover = styled.div`
  height: 300px;
  position: relative;
`;
const ProfileInfo = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileInfoName = styled.h4`
  font-size: 30px;
`;
const Hr = styled.hr`
  margin: 1rem 0rem;
`;
const ProfileOpions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
`;
const Button = styled.button`
  border: 1px solid black;
  width: 9rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  font-weight: 700;
  padding: 0.5rem;
  background-color: #a6ebc9;
 border-radius: 0.5rem;
`;
const LastButton = styled.button`
  border: 1px solid black;
  width: 3rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  font-weight: 700;
  padding: 0.5rem;
  background-color: #a6ebc9;
  border-radius: 0.5rem;
`;
const ProfileRightBottom = styled.div`
  display: flex;
`;
function UserProfile() {
  return (
    <>
      <Nav />
      <ProfileContainer>
        <RightSide />

        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileImageCover src={ProfilePic} alt="profile pic" />
              <ProfileImage src={ProfilePic} alt="profile avatar" />
            </ProfileCover>
            <ProfileInfo>
              <ProfileInfoName>Duru Emmanuel</ProfileInfoName>
              <span>i am a software developer</span>
              <span>IG: Devfootcode</span>
              <span>GitHub: https://github.com/emmyduruc</span>
              <span style={{ color: "blue" }}>Edit</span>
            </ProfileInfo>
            <Hr />
          </ProfileRightTop>
          <ProfileOpions>
            <h4>Post</h4>
            <h4>About</h4>
            <h4>Friends</h4>
            <h4>Photos</h4>
            <h4>More</h4>
            <Button>
              <AddCircleOutlineIcon />
              Add to Story
            </Button>
            <Button>
              <EditIcon />
              Edit Profile
            </Button>
            <LastButton>
              <MoreHorizIcon />
            </LastButton>
          </ProfileOpions>
          <ProfileRightBottom>
            <PostFeed />
            <LeftSide />
          </ProfileRightBottom>
        </ProfileRight>
      </ProfileContainer>
    </>
  );
}

export default UserProfile;
