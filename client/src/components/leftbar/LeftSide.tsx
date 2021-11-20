import React from "react";
import styled from "styled-components";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import profilePic from "../assests/img/friend4.jpg";
import CakeIcon from "@material-ui/icons/Cake";
import Shortcuts from "./Shortcuts";

const Wrapper = styled.div`
  padding: 15px;
  width: 100%;
`;
const Hr = styled.hr`
  margin: 1rem 0rem;
`;
const Container = styled.div`
padding: 15px;
  flex: 3;
  height: 100vh;
  width: 100%;
  overflow-x: scroll;
  cursor: pointer;
  ::-webkit-scrollbar-track {
     }
     ::-webkit-scrollbar {
       width: 5px;
     }
     ::-webkit-scrollbar-thumb {
       background-color: #b0b0b0;
     }
`;
const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
 
  height: 190px;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
`;
const FriendRequest = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const FriendRequestIcon = styled.div`
  display: flex;

  align-items: center;
`;
const FriendImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
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
const MutualContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.69);
`;
const MutualWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ImageWidth = styled.div`
  width: 20%;
`;
const BirthDayContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.5rem;
`;
function LeftSide() {
  return (
    //     <Wrapper>
    <Container>
      <BirthDayContainer>
        <span>
          {" "}
          <CakeIcon style={{fontSize:"40px"}} htmlColor="red" />
        </span>
        <span>Daniel Duru and 3 other friends have birthday today.</span>
      </BirthDayContainer>
      <RequestContainer>
        <FriendRequest>
          <FriendRequestIcon>
            <PeopleAltIcon />
            <span>Friend Request</span>
          </FriendRequestIcon>
          <MoreHorizIcon />
        </FriendRequest>
        <MutualContainer>
          <ImageWidth>
            <FriendImage src={profilePic} />
          </ImageWidth>
          <MutualWrapper>
            <NameWrapper>
              <span>Ogbonna Chinedu</span>
              <span>2h</span>
            </NameWrapper>
            <h4 style={{ marginLeft: "2rem", padding: "0.5rem" }}>
              7 mutual friends
            </h4>

            <ButtonsWrapper>
              <Button>Confirm</Button>
              <Button>Remove</Button>
            </ButtonsWrapper>
          </MutualWrapper>
        </MutualContainer>
      </RequestContainer>
      <Hr/>
      <Shortcuts/>
    </Container>
    //       ;
    //     </Wrapper>
  );
}

export default LeftSide;
