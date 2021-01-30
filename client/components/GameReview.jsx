import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';

function GameReview({ game, reviews, recentReviews, userTags }) {
  let format = moment(game.releaseDate).format('ll');

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
        sum += 1.5;
      }
    });
    setTotalReview(sum);
  };

  const getRecentResults = (array) => {
    let sum = 0;
    recentReviews.forEach((game) => {
      if (game.pos_neg) {
        sum += 1.5;
      }
    });
    setRecentReview(sum);
  };
  let reviewText;
  let percentage = totalReview / reviews.length;
  if (percentage >= 0.95) {
    reviewText = 'Overwhelmingly Positive';
  } else if (percentage >= 0.85) {
    reviewText = 'Very Positive';
  } else if (percentage >= 0.8) {
    reviewText = 'Positive';
  } else if (percentage >= 0.7) {
    reviewText = 'Mostly Positive';
  } else if (percentage >= 0.4) {
    reviewText = 'Mixed';
  } else if (percentage >= 0.2) {
    reviewText = 'Mostly Negative';
  } else if (percentage >= 0.1) {
    reviewText = 'Negative';
  } else if (percentage >= 0.05) {
    reviewText = 'Very Negative';
  } else {
    reviewText = 'Overwhelmingly Negative';
  }

  let recentReviewText;
  let recentPercentage = recentReview / recentReviews.length;
  if (recentPercentage >= 0.95) {
    recentReviewText = 'Overwhelmingly Positive';
  } else if (recentPercentage >= 0.85) {
    recentReviewText = 'Very Positive';
  } else if (recentPercentage >= 0.8) {
    recentReviewText = 'Positive';
  } else if (recentPercentage >= 0.7) {
    recentReviewText = 'Mostly Positive';
  } else if (recentPercentage >= 0.4) {
    recentReviewText = 'Mixed';
  } else if (recentPercentage >= 0.2) {
    recentReviewText = 'Mostly Negative';
  } else if (recentPercentage >= 0.1) {
    recentReviewText = 'Negative';
  } else if (recentPercentage >= 0.05) {
    recentReviewText = 'Very Negative';
  } else {
    recentReviewText = 'Overwhelmingly Negative';
  }

  return (
    <Main>
      <HeaderDiv>
        <HeaderImage src={game.gameHeaderImageUrl} />
      </HeaderDiv>
      <GameSynopsis>
        <GameSpan>{game.gameSynopsis}</GameSpan>
      </GameSynopsis>
      <ReviewTable>
        <ToolTip>
          RECENT REVIEWS:
          <ToolTipText>{`${Math.floor(recentPercentage * 100)}% of the ${
            recentReviews.length
          } user reviews in the last 30 days are positive`}</ToolTipText>
        </ToolTip>
        <ReviewDiv>
          <ReviewText score={recentReviewText}>{recentReviewText}</ReviewText>
          <Gray>{`  (${recentReviews.length})`}</Gray>
        </ReviewDiv>
        <ToolTip>
          ALL REVIEWS:
          <ToolTipText>{`${Math.floor(percentage * 100)}% of the ${
            reviews.length
          } user reviews for this game are positive`}</ToolTipText>
        </ToolTip>
        <ReviewDiv>
          <ReviewText length={reviews.length} score={reviewText}>
            {reviewText}
          </ReviewText>
          <Gray>{`  (${reviews.length})`}</Gray>
        </ReviewDiv>
        <Gray>RELEASE DATE:</Gray>
        <Gray>{format}</Gray>
        <Gray>DEVELOPER: </Gray>
        <BlueText>{game.developer}</BlueText>
        <Gray>PUBLISHER: </Gray>
        <BlueText>{game.publisher}</BlueText>
      </ReviewTable>

      <div>
        Popular user-defined tags for this product:
        <UserTags>
          {userTags.map((tag, idx) => (
            <TagButton key={idx}>{tag.tag}</TagButton>
          ))}
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
  padding-right: 30px;
`;
const GameSpan = styled.span`
  font-size: 13px;
  color: #c6d4df;
  padding-right: 10px;
  line-height: 18px;
`;

const ReviewTable = styled.div`
  font-size: 10px;
  color: #556772;
  display: grid;
  grid-template-columns: 104px 220px;
  padding-top: 10px;
`;

const ReviewText = styled.span`
  color: ${(props) => {
    if (props.score === 'Positive') {
      return '#66C0F4';
    } else if (props.score === 'Mixed') {
      return '#A8926A';
    } else {
      return '#66c0f4';
    }
  }};
  padding-top: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const BlueText = styled.span`
  color: #66c0f4;

  font-size: 12px;
  cursor: pointer;
  padding-top: 10px;
  &:hover {
    color: white;
  }
`;
const Gray = styled.span`
  color: rgb(85, 103, 114);
  padding-top: 10px;
`;

const TagButton = styled.button`
  color: #67c1f5;
  font-size: 11px;
  border: none;
  outline: none;
  border-radius: 2px;
  background: #67c1f533;
  padding: 0px 7px;
  line-height: 19px;
  cursor: pointer;

  &:hover {
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
  width: 600px;
  /* color: rgb(85, 103, 114); */
  padding-top: 10px;
`;

const ToolTipText = styled.span`
  font-family: Arial;
  visibility: hidden;
  width: auto;
  background-color: rgba(186, 186, 186);
  box-shadow: rgb(0, 0, 0) 0px 0px 5px 0px;
  color: rgb(64, 66, 66);
  z-index: 99;
  font-size: 12px;
  bottom: 125%;
  left: 15%;
  border-radius: 3px;
  margin-left: -90px;
  position: absolute;
  white-space: nowrap;
  background-image: linear-gradient(
    rgb(227, 234, 239) 5%,
    rgb(199, 213, 224) 95%
  );
  background-size: auto;
  font-size: 12px;
  padding: 5px 20px 5px 5px;
  cursor: pointer;
  opacity: 0;

  ${ToolTip}:hover & {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  ${ReviewText}:hover & {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
`;

const ReviewDiv = styled.div`
  padding-top: 8px;
`;

export default GameReview;
