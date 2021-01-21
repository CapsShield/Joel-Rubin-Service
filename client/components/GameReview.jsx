import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";

function GameReview({ game, reviews, recentReviews }) {
  let format = moment(game.data.releaseDate).format("ll");

  let [totalReview, setTotalReview] = useState(0);
  let [recentReview, setRecentReview] = useState(0);

  useEffect(() => {
    getAllResults(reviews);
    getRecentResults(recentReviews);
  }, [reviews]);

  const getAllResults = (array) => {
    let sum = 0;
    array.forEach((game) => {
      if (game.pos_neg) {
        sum += 2;
      }
    });
    console.log("sum:", sum);
    setTotalReview(sum);
  };

  const getRecentResults = (array) => {
    let sum = 0;
    let recentSlice = array.slice(0, 30);
    recentSlice.forEach((game) => {
      if (game.pos_neg) {
        sum += 2;
      }
    });
    setRecentReview(sum);
  };
  let reviewText;
  let percentage = totalReview / reviews.length;
  if (percentage >= 0.95) {
    reviewText = "Overwhelmingly Positive";
  } else if (percentage >= 0.85) {
    reviewText = "Very Positive";
  } else if (percentage >= 0.8) {
    reviewText = "Positive";
  } else if (percentage >= 0.7) {
    reviewText = "Mostly Positive";
  } else if (percentage >= 0.4) {
    reviewText = "Mixed";
  } else if (percentage >= 0.2) {
    reviewText = "Mostly Negative";
  } else if (percentage >= 0.1) {
    reviewText = "Overwhelmingly Negative";
  } else if (percentage >= 0.05) {
    reviewText = "Very Negative";
  } else {
    reviewText = "Negative";
  }

  let recentReviewText;
  let recentPercentage = recentReview / recentReviews.length;
  if (recentPercentage >= 0.95) {
    recentReviewText = "Overwhelmingly Positive";
  } else if (recentPercentage >= 0.85) {
    recentReviewText = "Very Positive";
  } else if (recentPercentage >= 0.8) {
    recentReviewText = "Positive";
  } else if (recentPercentage >= 0.7) {
    recentReviewText = "Mostly Positive";
  } else if (recentPercentage >= 0.4) {
    recentReviewText = "Mixed";
  } else if (recentPercentage >= 0.2) {
    recentReviewText = "Mostly Negative";
  } else if (recentPercentage >= 0.1) {
    recentReviewText = "Overwhelmingly Negative";
  } else if (recentPercentage >= 0.05) {
    recentReviewText = "Very Negative";
  } else {
    recentReviewText = "Negative";
  }

  return (
    <Main>
      <HeaderDiv>
        <HeaderImage src={game.data.gameHeaderImageUrl} />
      </HeaderDiv>
      <GameSynopsis>
        <GameSpan>{game.data.gameSynopsis}</GameSpan>
      </GameSynopsis>
      <ReviewTable>
        <ToolTip>
          RECENT REVIEWS:
          <ToolTipText>{`${Math.floor(recentPercentage * 100)}% of the ${
            recentReviews.length
          } user reviews in the last 30 days are positive`}</ToolTipText>
        </ToolTip>

        <ReviewText
          score={recentReviewText}
        >{`${recentReviewText} (${recentReviews.length})`}</ReviewText>
        <ToolTip>
          ALL REVIEWS:
          <ToolTipText>{`${Math.floor(percentage * 100)}% of the ${
            reviews.length
          } user reviews for this game are positive`}</ToolTipText>
        </ToolTip>

        <ReviewText
          score={reviewText}
        >{`${reviewText} (${reviews.length})`}</ReviewText>
        <div>RELEASE DATE:</div>
        <Gray>{format}</Gray>
        <div>DEVELOPER: </div>
        <BlueText>{game.data.developer}</BlueText>
        <div>PUBLISHER: </div>
        <BlueText>{game.data.publisher}</BlueText>
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

const ReviewText = styled.span`
  color: ${(props) => {
    if (props.score === "Positive") {
      return "#66C0F4";
    } else if (props.score === "Mixed") {
      return "#A8926A";
    } else {
      return "#66c0f4";
    }
  }};

  font-size: 12px;
  cursor: pointer;
`;

const BlueText = styled.span`
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

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  width: 400px;
`;

const ToolTipText = styled.span`
  font-family: Arial;
  visibility: hidden;
  width: auto;
  background-color: rgba(0, 0, 0, 0);
  box-shadow rgb(0, 0, 0) 0px 0px 5px 0px;
  color: black;
  z-index: 99;
  bottom: -50%;
  left: 50%;
  border-radius: 3px;
  margin-left: -60px;

  background-image linear-gradient(rgb(227, 234, 239) 5%, rgb(199, 213, 224) 95%);
  background-size: auto;
  font-size: 12px;
  padding: 5px;

  ${ToolTip}:hover & {
    visibility: visible;
  }
  ${ReviewText}:hover & {
    visibility: visible;
  }
`;

export default GameReview;
