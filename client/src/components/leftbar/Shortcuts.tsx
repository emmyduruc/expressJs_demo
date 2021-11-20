import React from "react";
import styled from "styled-components";
import shortcutimg from "../assests/img/shortcut.jpg";
import shortcut2 from "../assests/img/shortcut2.jpg";
import shortcut3 from "../assests/img/shortcut3.jpg";

const Container = styled.div`
  flex: 3;
  height: 100vh;
  width: 100%;
  cursor: pointer;
`;
const ShortcutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ShortcutImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;
const ShortcutGroups = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
function Shortcuts() {
  return (
    <Container>
      <ShortcutContainer>
        <h3>Your Shortcuts</h3>
        <span>Edit</span>
      </ShortcutContainer>
      <ShortcutGroups>
        <ShortcutImage src={shortcutimg} />
        <h4>FC Barcelona news</h4>
      </ShortcutGroups>
      <ShortcutGroups>
        <ShortcutImage src={shortcut2} />
        <h4>FC Barcelona news</h4>
      </ShortcutGroups>
      <ShortcutGroups>
        <ShortcutImage src={shortcut3} />
        <h4>Great people news</h4>
      </ShortcutGroups>
      <ShortcutGroups>
        <ShortcutImage src={shortcutimg} />
        <h4>FC Barcelona news</h4>
      </ShortcutGroups>
    </Container>
  );
}

export default Shortcuts;
