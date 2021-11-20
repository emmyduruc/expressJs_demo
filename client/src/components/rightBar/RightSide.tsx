import React from "react";
import styled from "styled-components";
import friend1 from "../assests/img/friend1.jpg";
import friend2 from "../assests/img/friends2.jpg";
import friend3 from "../assests/img/friends3.jpg";
import friend4 from "../assests/img/friend4.jpg";
import {
  DynamicFeed,
  Today,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmarks,
} from "@material-ui/icons";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const Container = styled.div`
  flex: 3;
  height: 100vh;
  cursor: pointer;
  overflow-y: scroll;
  position: sticky;
  top: 50px;
  ::-webkit-scrollbar-track {
    // background-color: #a6ebc9;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b0b0b0;
  }
`;
const Wrapper = styled.div`
padding: 20px`;
const RightSideList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-left: 2rem;
`;
const ListItems = styled.li`
  display: flex;
  margin-bottom: 1.5rem;
`;
const Span = styled.span`
  margin-left: 1rem;
`;
const Button = styled.button`
  border: none;
  width: 13rem;
  font-weight: 700;
  padding: 0.5rem;
  margin-left: 2rem;
`;
const Hr = styled.hr`
  margin: 1rem 0rem;
`;
const RightFriendList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-left: 2rem;
`;
const FriendsListItems = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const FriendsListItemsImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;
const FriendsListItemsSpan = styled.span``;
function RightSide() {
  return (
    <Container>
      <Wrapper></Wrapper>
      <RightSideList>
        <ListItems>
          <Chat />
          <Span>Chats</Span>
        </ListItems>
        <ListItems>
          <Group />
          <Span>Groups</Span>
        </ListItems>
        <ListItems>
          <DynamicFeed />
          <Span>Your feeds</Span>
        </ListItems>
        <ListItems>
          <Today />
          <Span>Event</Span>
        </ListItems>
        <ListItems>
          <Bookmarks />
          <Span>Bookmarks</Span>
        </ListItems>
        <ListItems>
          <PlayCircleFilled />
          <Span>videos</Span>
        </ListItems>
        <ListItems>
          <ContactSupportIcon />
          <Span>Report problem</Span>
        </ListItems>
      </RightSideList>
      <Button>See More</Button>
      <Hr />
      <RightFriendList>
        <FriendsListItems>
          <FriendsListItemsImage src={friend2} alt="" />
          <FriendsListItemsSpan>Eberechukwu</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend3} alt="" />
          <FriendsListItemsSpan>Eberechukwu</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend1} alt="" />
          <FriendsListItemsSpan>Hilary</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend2} alt="" />
          <FriendsListItemsSpan>Emerie</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend2} alt="" />
          <FriendsListItemsSpan>Eberechukwu</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend4} alt="" />
          <FriendsListItemsSpan>Eberechukwu</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend2} alt="" />
          <FriendsListItemsSpan>Eberechukwu</FriendsListItemsSpan>
        </FriendsListItems>
        <FriendsListItems>
          <FriendsListItemsImage src={friend2} alt="" />
          <FriendsListItemsSpan>Eberechukwu</FriendsListItemsSpan>
        </FriendsListItems>
      </RightFriendList>
    </Container>
  );
}

export default RightSide;
