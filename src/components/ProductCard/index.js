import { React } from "react";
import "../../styles/ProductCard.css";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ src, title, rating, price, id,discount}) => {
  const navigate = useNavigate();
  const cardDetailHandler = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card_container" key={id}>
      <img
        src={src}
        className="card_image"
        onClick={cardDetailHandler}
        alt={title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "http://test.indiaindex.com/images/1/thumbnail.jpg";
        }}
      />
      <div className="card_detail">
        <div className="card_title" onClick={cardDetailHandler}>
          {title}
        </div>
        <div className="card_rating">
          <StarRatings
            rating={rating}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="2px"
          />
        </div>
        <div className="card_price" onClick={cardDetailHandler}>
          <span className="price_symbol">₹</span>
          {price}
        </div>
        <div className="card_discount">
          ({discount}% off)
        </div>
      </div>
    </div>
  );
};
