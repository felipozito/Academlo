import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDescription from "./ProductDetail/ProductDescription";
import { getAllProducts } from "../Store/Slices/product.slice";
import CardProducts from "./CardProducts";
import Gallery from "./ProductDetail/Gallery";
import "../Styles/productsDetails.css";

const ProductDetail = () => {
      const { id } = useParams();
      const dispatch = useDispatch();
      const [productInfo, setProductInfo] = useState();
      const [productsFiltered, setProductsFiltered] = useState();
      const products = useSelector((state) => state.products);

      useEffect(() => {
            window.scrollTo({
                  top: 0,
                  behavior: "smooth",
            });
            const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
            dispatch(getAllProducts());
            axios.get(URL)
                  .then((res) => {
                        setProductInfo(res.data.data.product);
                        // const filter =
                        setProductsFiltered(
                              products?.filter((item) => {
                                    return item.category?.name == productInfo?.category;
                              })
                        );
                  })
                  .catch((e) => console.log(e));
      }, [id]);

      return (
            <div className="product_detail">
                  <div className="products_detail_content">
                        <Gallery images={productInfo?.productImgs} />
                        <ProductDescription product={productInfo} />
                  </div>
                  <div className="home_container_Products">
                        {productsFiltered?.map((item) => {
                              return <CardProducts key={item.id} product={item} />;
                        })}
                  </div>
            </div>
      );
};

export default ProductDetail;
