import React from "react";
import StarRating from "react-star-ratings";

export const showAverage = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];
    let length = ratingsArray.length;

    ratingsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((prev, next) => prev + next, 0);
    // console.log("totalReduced", totalReduced);

    let highest = length * 5;
    // console.log("HIGHEST", highest);

    let result = (totalReduced * 5) / highest;
    // console.log("result", result);

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          <StarRating
            rating={result}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="red"
            editing={false}
          />
          ({p.ratings.length})
        </span>
      </div>
    );
  }
};
