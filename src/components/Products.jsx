import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  padding: 25px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((popularProduct) => (
        <ProductItem popularProduct={popularProduct} key={popularProduct.id} />
      ))}
    </Container>
  );
};

export default Products;
