import React from "react";
import moment from "moment";
import styled from "styled-components";

function GameReview({ game }) {
  let format = moment(game.data.releaseDate).format("ll");

  return (
    <Main>
      <HeaderDiv>
        <HeaderImage src={game.data.gameHeaderImageUrl} />
      </HeaderDiv>
      <GameSynopsis>
        <GameSpan>{game.data.gameSynopsis}</GameSpan>
      </GameSynopsis>
      <ReviewTable>
        <div>RECENT REVIEWS: </div>
        <Blue>Overwhelmingly Positive</Blue>
        <div>ALL REVIEWS:</div>
        <Blue>Overwhelmingly Positive</Blue>
        <div>RELEASE DATE:</div>
        <Gray>{format}</Gray>
        <div>DEVELOPER: </div>
        <Blue>{game.data.developer}</Blue>
        <div>PUBLISHER: </div>
        <Blue>{game.data.publisher}</Blue>
      </ReviewTable>

      <div>
        Popular user-defined tags for this product:
        <UserTags>
          <TagButton>Puzzle</TagButton>
          <TagButton>First-Person</TagButton>
          <TagButton>Indie</TagButton>
          <TagButton>Surreal</TagButton>
          <TagButton>Exploration</TagButton>
          <TagButton>+</TagButton>
        </UserTags>
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 324px;
  grid-template-rows: 151px 108px 142px 18px 18px 18px;
  font-size: 12px;
  color: #566772;
`;
const HeaderDiv = styled.div``;
const HeaderImage = styled.img`
  size: cover;
  width: 323px;
  height: 151px;
`;

const GameSynopsis = styled.div`
  padding-top: 10px;
`;
const GameSpan = styled.span`
  font-size: 13px;
  color: #c6d4df;
`;

const ReviewTable = styled.div`
  font-size: 10px;
  color: #556772;
  display: grid;
  grid-template-columns: 104px 220px;
`;

const Blue = styled.span`
  color: #66c0f4;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Gray = styled.span`
  color: #8f98a0;
`;

const TagButton = styled.button`
  color: #67c1f5;
  font-size: 11px;
  border: none;
  outline: none;
  border-radius: 2px;
  background: #67c1f533;
  padding: 0px 7px;

  &: hover {
    color: white;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const UserTags = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default GameReview;
