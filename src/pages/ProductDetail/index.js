import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cleanApiResponse } from "../../utils/cleanApiResponse";
import "../../styles/ProductDetail.css";
import StarRatings from "react-star-ratings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  useEffect(() => {
    if (id) {
      axios
        .get(`/products/${id}.json`)
        .then((res) => {
          const cleanedResponse = cleanApiResponse(res.data);
          // Parse the cleaned JSON data
          const jsonData = JSON.parse(cleanedResponse);
          // Now you can work with the parsed JSON data
          setDetail(jsonData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <div className="product_detail_container">
        <div className="slider_container">
          <Slider {...settings}>
            {detail?.images?.map((ele) => {
              return <img src={ele} />;
            })}
          </Slider>
        </div>
        <div className="product_detail">
          <div className="product_title">{detail?.title}</div>
          <div className="product_rating">
            {detail?.rating}
            <StarRatings
              rating={detail?.rating}
              starRatedColor="orange"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>

          <div className="product_price">
            <span className="product_saving">
              -{detail?.discountPercentage}%{" "}
            </span>
            <span className="product_price_symbol">₹</span>
            {detail?.price}
          </div>

          <div className="product_description">{detail?.description}</div>
        </div>
      </div>
    </>
  );
};
