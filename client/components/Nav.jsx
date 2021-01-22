import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <div>
      <Main>
        <CartButton>CART(1)</CartButton>
      </Main>
      <SearchContent>
        <NavButton>
          Your Store
          <i className="fas fa-caret-down"></i>
        </NavButton>
        <NavButton>
          Browse
          <i className="fas fa-caret-down"></i>
        </NavButton>
        <NavButton>Points Shop</NavButton>
        <NavButton>News</NavButton>
        <NavButton>Vapor Labs</NavButton>
        <div></div>
        <SearchDiv>
          <SearchInput placeholder="search the store"></SearchInput>
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
  &: hover {
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
  padding-top: 5px;
  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25);
  height: 35px;
  cursor: pointer;
  border-right: 2.5px solid rgba(0, 0, 0, 0.25);

  &: hover {
    background-color: #d9dadd;
    text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25);
    color: black;
  }
`;

const NavImg = styled.img`
padding-top: 5px;
cursor: text:
`;

const SearchDiv = styled.div`
margin-top: 2px;
  appearance: text-field;
  background-color: #316282;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2)
  cursor: text;
  z-index: 150;
  width: 216px;
  height: 30px;
  position: relative;
  background-image: url("https://steamstore-a.akamaihd.net/public/images/v6/store_header_search.png?v=1");

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

export default Nav;
