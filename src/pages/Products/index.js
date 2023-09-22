import axios from "axios";
import { React, useEffect, useState } from "react";
import { cleanApiResponse } from "../../utils/cleanApiResponse";
import { ProductCard } from "../../components/ProductCard";
import "../../styles/Products.css";
export const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const cleanedResponse = cleanApiResponse(res.data);
        // Parse the cleaned JSON data
        const jsonData = JSON.parse(cleanedResponse);
        // Now you can work with the parsed JSON data
        setProductList(jsonData.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="product_grid">
      {productList && productList?.map((res, index) => {
        return (
          <div key={index}>
            <ProductCard
              src={res.thumbnail}
              title={res.title}
              price={res.price}
              rating={res.rating}
              id={res.id}
              discount={res.discountPercentage}
            />
            </div>
        );
      })}
    </div>
  );
};
