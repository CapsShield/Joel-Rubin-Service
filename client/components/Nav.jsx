import React from 'react';
import styled, { keyframes } from 'styled-components';

function Nav() {
  return (
    <div>
      <Main>
        <CartButton>CART(1)</CartButton>
      </Main>
      <SearchContent>
        <DropDown>
          <NavButton>
            Your Store
            <I className='fas fa-caret-down'></I>
          </NavButton>
          <DropDownContent>
            <DropSpan home>Home</DropSpan>
            <EmptyDiv></EmptyDiv>
            <DropSpan>Community Recommendations</DropSpan>
            <DropSpan>Recently Viewed</DropSpan>
            <DropSpan>Vapor Curators</DropSpan>
          </DropDownContent>
        </DropDown>
        <DropDown>
          <NavButton>
            Browse
            <I className='fas fa-caret-down'></I>
          </NavButton>
          <BrowseDropContent>
            <ColumnOne>
              <DropSpan>Free to Play</DropSpan>
              <DropSpan>Early Access</DropSpan>
              <DropSpan>Demos</DropSpan>
              <DropSpan>Controller Friendly</DropSpan>
              <DropSpan>For PC Cafes</DropSpan>
              <DropSpan>Remote Play</DropSpan>
              <EmptyDiv></EmptyDiv>
              <BlueText col1>Virtual Reality</BlueText>
              <DropSpan>VR Games & Experiences</DropSpan>
              <DropSpan>VR Hardware</DropSpan>
              <EmptyDiv></EmptyDiv>
              <BlueText col1>Platforms</BlueText>
              <DropSpan>Mac OS X</DropSpan>
              <DropSpan>VaporOS + Linux</DropSpan>
              <EmptyDiv></EmptyDiv>
              <BlueText col1>Additional Content</BlueText>
              <DropSpan>Soundtracks</DropSpan>
            </ColumnOne>
            <ColumnTwo>
              <BlueText>Game Genres</BlueText>
              <DropSpan>Action</DropSpan>
              <DropSpan>Adventure</DropSpan>
              <DropSpan>Casual</DropSpan>
              <DropSpan>Indie</DropSpan>
              <DropSpan>Massively Multiplayer</DropSpan>
              <DropSpan>Racing</DropSpan>
              <DropSpan>RPG</DropSpan>
              <DropSpan>Simulation</DropSpan>
              <DropSpan>Sports</DropSpan>
              <DropSpan>Strategy</DropSpan>
              <EmptyDiv></EmptyDiv>
              <DropSpan pop>More Popular Tags...</DropSpan>
            </ColumnTwo>
            <ColumnThree>
              <BlueText>Software</BlueText>
              <DropSpan>Animation & Modeling</DropSpan>
              <DropSpan>Audio Production</DropSpan>
              <DropSpan>Design & Illustration</DropSpan>
              <DropSpan>Education</DropSpan>
              <DropSpan>Photo Editing</DropSpan>
              <DropSpan>Utilities</DropSpan>
              <DropSpan>Video Production</DropSpan>
              <DropSpan>Web Publishing</DropSpan>
            </ColumnThree>
          </BrowseDropContent>
        </DropDown>
        <NavButton>Points Shop</NavButton>
        <NavButton>News</NavButton>
        <NavButton>Vapor Labs</NavButton>
        <div></div>
        <SearchDiv>
          <SearchInput placeholder='search the store'></SearchInput>
        </SearchDiv>
      </SearchContent>
    </div>
  );
}

const Main = styled.div`
  margin: auto;
  width: 940px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

const CartButton = styled.button`
  color: #42520c;
  text-align: center;
  width: 96px;
  height: 20px;
  background-color: #5c7310;
  cursor: pointer;
  font-size: 11px;
  outline: none;
  border: none;
  border-radius: 2px;
  visibility: hidden;
  &:hover {
    background-color: #8cb105;
    color: black;
  }
`;

const SearchContent = styled.div`
  width: 940px;
  height: 35px;
  background-color: rgba(62, 126, 167, 0.8);
  margin: auto;
  border: 1px #30333b solid;
  display: grid;
  grid-template-columns: 114px 100px 104px 66px 103px 218px 239px;

  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
`;

const NavButton = styled.button`
  font-size: 15px;
  background-color: rgba(62, 126, 167, 0.8);
  color: #c4cace;
  outline: none;
  border: none;
  padding-top: 3px;
  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25);
  height: 33px;
  cursor: pointer;
  border-right: 2.5px solid rgba(0, 0, 0, 0.25);
  width: 100%;
  &:hover {
    background-color: #c6d4df;
    text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.208);
    color: black;
  }

  ${DropDown}:hover & {
    background-color: #c6d4df;
  }
`;

const I = styled.i`
  margin-left: 10px;
  &:hover > ${NavButton} {
    color: white;
  }
`;

const NavImg = styled.img`
  padding-top: 5px;
  cursor: text;
`;

const SearchDiv = styled.div`
margin-top: 2px;
  appearance: text-field;
  background-color: #316282;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2)
  cursor: text;
  width: 216px;
  height: 30px;
  position: relative;
  background-image: url("https://steamstore-a.akamaihd.net/public/images/v6/store_header_search.png?v=1");
  &:hover {
    border: 1px solid #66c0f4;
  }

`;

const SearchInput = styled.input`
  color: black;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1);
  margin-left: 5px;
  font-weight: 300;
  font-style: italic;
  border: none;
  background-color: transparent;
  width: 180px;
  outline: none;
  line-height: 26px;

  &::placeholder {
    color: black;
  }
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover > ${NavButton} {
    background-color: #c6d4df;
    text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.208);
    color: black;
  }
`;

const DropDownContent = styled.div`
  text-align: left;
  display: none;
  position: absolute;
  background-color: #c6d4df;
  z-index: 99;
  cursor: pointer;
  transition: 1s;
  color: black;
  font-size: 12px;
  line-height: 10px;
  text-shadow: rgba(255, 255, 255, 0.25) 1px 1px 0px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
  width: 215px;
  opacity: 0;
  ${DropDown}:hover & {
    display: ${(props) => (props.browse ? 'grid' : 'flex')};
    flex-direction: column;
    border: none;
    opacity: 1;
    transition: all 0.8s ease-in-out;
  }
`;

const BrowseDropContent = styled.div`
  text-align: left;
  display: none;
  position: absolute;
  background-color: #c6d4df;
  z-index: 99;
  cursor: pointer;
  transition: 1s;
  color: black;
  font-size: 12px;
  line-height: 10px;
  text-shadow: rgba(255, 255, 255, 0.25) 1px 1px 0px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
  width: auto;
  opacity: 0;
  ${DropDown}:hover & {
    display: grid;
    grid-template-columns: 180px 180px 180px;
    border: none;
    opacity: 1;
  }
  ${NavButton}:hover & {
    display: grid;
    opacity: 1;
  }
`;

const DropSpan = styled.span`
  margin: 2px 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  &:hover {
    background-color: rgb(27, 40, 56);
    color: #c6d4df;
    text-shadow: none;
  }
`;

const BlueText = styled.span`
  color: rgb(62, 126, 167);
  padding-left: 5px;
  font-size: 11px;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px 10px;
`;

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  margin: 10px 0px;
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  margin: 10px 0px;
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const EmptyDiv = styled.div`
  border-top: 1px white solid;
  margin: 0px 5px;
  padding-bottom: 5px;
`;

const fade = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;
export default Nav;
