import React from "react";
import moment from "moment";

export default function GameReview({ game }) {
  let format = moment(game.data.releaseDate).format("ll");
  console.log(format);
  return (
    <div className="game-review">
      <div className="header-image">
        <img src={game.data.gameHeaderImageUrl} />
      </div>
      <div className="gameSynopsis">
        <span>{game.data.gameSynopsis}</span>
      </div>
      <div className="review-table">
        <div className="recent-reviews">RECENT REVIEWS: </div>
        <span className="blue">Overwhelmingly Positive</span>
        <div className="all-reviews">ALL REVIEWS:</div>
        <span className="blue">Overwhelmingly Positive</span>
        <div className="release-date">RELEASE DATE:</div>
        <span className="date">{format}</span>
        <div className="developer">DEVELOPER: </div>
        <span className="blue">{game.data.developer}</span>
        <div className="publisher">PUBLISHER: </div>
        <span className="blue">{game.data.publisher}</span>
      </div>

      <div className="user">
        Popular user-defined tags for this product:
        <div className="user-tags">
          <button className="tagButton">Puzzle</button>
          <button className="tagButton">First-Person</button>
          <button className="tagButton">Indie</button>
          <button className="tagButton">Surreal</button>
          <button className="tagButton">Exploration</button>
          <button className="tagButton">+</button>
        </div>
      </div>
    </div>
  );
}
