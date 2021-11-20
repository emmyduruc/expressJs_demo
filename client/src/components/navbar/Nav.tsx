import React from "react";
import styled from "styled-components";
import { mobile } from "../assests/responsive";
import profile from "../assests/img/profile.jpg";
import { Search, Timeline } from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-around;
  width: 100%;
  background-color: #A6EBC9;
  top: 0;
  z-index: 999;
  align-items: center;
  position: sticky;
  cursor: pointer;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
`;
const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;
const Input = styled.input`
  color: black;
  width: 39em;
  height: 1.5rem;
  border-radius: 6px;
`;

const Home = styled.span``;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;
const Span = styled.span`
 color: red;

`;
const Image = styled.img`
  width: 70px;
  border-radius: 50%;
`;
function Nav() {
  return (
    <Container>
      <Logo>TextUs</Logo>

      <CenterContainer>
        <Input placeholder="Search for post or friends..." />
        <Search />
      </CenterContainer>
      <div>
        <span>home</span>
        <HomeIcon />
      </div>
      <div>
        <span>timeline</span>
        <Timeline />
      </div>

      <Icons>
        <PersonAddIcon />
        <Span>0</Span>
      </Icons>
      <Icons>
        <QuestionAnswerIcon />
        <Span>0</Span>
      </Icons>
      <Icons>
        <NotificationsActiveIcon />
        <Span>0</Span>
      </Icons>

      <Image src={profile} alt="profile img" />
    </Container>
  );
}

export default Nav;
