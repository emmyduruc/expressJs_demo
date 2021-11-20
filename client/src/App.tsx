import './App.css';
import styled from 'styled-components'
import Nav from './components/navbar/Nav'
import LeftSide from './components/leftbar/LeftSide';
import PostFeed from './components/post/PostFeed';
import RightSide from './components/rightBar/RightSide';
import UserProfile from './components/profile/UserProfile';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

function App() {
  return (
    <>
    <UserProfile/>
    </>
  );
}

export default App;
