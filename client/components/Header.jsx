import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <PageHeader>
      <RowOne>
        <div></div>
        <div>
          <RowOneButton install>
            <Img src="https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1" />
            Install Vapor
          </RowOneButton>
          <RowOneButton login>login</RowOneButton>
          <RowOneButton language>
            language
            <I className="fas fa-caret-down"></I>
          </RowOneButton>
        </div>
      </RowOne>
      <RowTwo>
        <div></div>
        <Logo>
          <LogoImg src="https://i.imgur.com/zY1nThy.png" />
        </Logo>
        <DropDown>
          <HeaderButtonDropDown>STORE</HeaderButtonDropDown>
          <DropDownContent>
            <DropH5>HOME</DropH5>
            <DropH5>DISCOVERY QUEUE</DropH5>
            <DropH5>WISHLIST</DropH5>
            <DropH5>POINTS SHOP</DropH5>
            <DropH5>NEWS</DropH5>
            <DropH5>STATS</DropH5>
          </DropDownContent>
        </DropDown>
        <DropDown>
          <HeaderButtonDropDown>COMMUNITY</HeaderButtonDropDown>
          <DropDownContent>
            <DropH5>HOME</DropH5>
            <DropH5>DISCUSSIONS</DropH5>
            <DropH5>WORKSHOP</DropH5>
            <DropH5>MARKET</DropH5>
            <DropH5>BROADCASTS</DropH5>
          </DropDownContent>
        </DropDown>
        <DropDown>
          <HeaderButton>ABOUT</HeaderButton>
        </DropDown>
        <DropDown>
          <HeaderButton>SUPPORT</HeaderButton>
        </DropDown>
      </RowTwo>
    </PageHeader>
  );
}

const PageHeader = styled.div`
  font-family: Arial, sans-serif;
  font-weight: 300;
  color: #dbe2e6;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 19;
  height: 104px;
  width: 940px;
  display: grid;
  grid-template-rows: 30px 74px;
  margin: auto;
`;

const RowOneButton = styled.button`
  background: ${(props) => (props.install ? "#5C7310" : "#171a21")};
  border: none;
  border-right: ${(props) => (props.login ? "1px solid white" : "none")};
  color: #dbe2e6;
  margin-top: 5px;
  font-size: 11px;
  padding: ${(props) => (props.install ? "#5px" : "none")};
  cursor: pointer;

  &:hover {
    color: #f2f8fc;
  }
`;

const RowOne = styled.div`
  display: grid;
  height: 30px;
  grid-template-columns: auto 240px;
`;

const RowTwo = styled.div`
  display: grid;
  grid-template-columns: 2px 176px 56px 100px 62px 76px auto;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const LogoImg = styled.img`
  width: 176px;
  height: 44px;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  padding-top: 10px;
`;

const HeaderButtonDropDown = styled.button`
  background-color: #171a21;
  outline: none;
  cursor: pointer;
  color: #c4cace;
  border: none;
  &:hover {
    color: #f2f8fc;
  }
`;

const HeaderButton = styled.button`
  background-color: #171a21;
  outline: none;
  cursor: pointer;
  color: #c4cace;
  border: none;
  &: hover {
    color: #f2f8fc;
  }
`;

const DropDownContent = styled.div`
  padding-left: 10px;
  text-align: left;
  display: none;
  position: absolute;
  background-color: #171a21;
  min-width: 160px;
  z-index: 22;
  cursor: pointer;
  transition: 1s;
  color: #c4cace;

  ${DropDown}:hover & {
    display: block;
    border: none;
  }
`;

const I = styled.i`
  margin-left: 8px;
`;

const Img = styled.img`
  margin-right: 5px;
`;

const DropH5 = styled.h5`
  font-weight: normal;
  font-size: 11px;
  &:hover {
    color: white;
  }
`;

export default Header;
// <img src="https://steamstore-a.akamaihd.net/public/shared/images/header/logo_steam.svg?t=962016" />
