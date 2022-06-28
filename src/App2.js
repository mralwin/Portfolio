import styled from "styled-components";
//import FlipCard from './flipcard';
import StyDiv from './styDiv';
import React, { useState } from 'react'


const App2 = () => {

  const arr = [1,1,1,1,1,1,1,1,1]
  const link = 'https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_flex-wrap_wrap'
  const [selectedCard, setSelectedCard] = useState(null)

  function handleClick(i) {
    console.log('clicked')
    setSelectedCard(i)
  }
  
  return (
    <Container>
      <NavBar>NavBar</NavBar>
      <Main>Main</Main>
      <SideBar>SideBarSideBarSideBar</SideBar>
      <FlexContainer>
        {arr.map((e, i) => {
          return(
            <div onClick={() => handleClick(i)} style={{margin: "70px"}}>
              <StyDiv key = {i} id = {i} selectedCard = {selectedCard}/>
            </div>
          )})}
      </FlexContainer>
      <Footer>Footer</Footer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav"
    "sidebar main main"
    "sidebar FlexContainer FlexContainer"
    "sidebar footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;
const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: green;
  justify-content: center;
`

const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`

export default App2;