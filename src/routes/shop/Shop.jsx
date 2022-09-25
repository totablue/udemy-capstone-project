import React, { useContext } from "react";

import { ProductsContext } from "../../contexts/products-context";
import ProductCard from "../../components/product-card/ProductCard";

import "./Shop.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={products.id} product={product}></ProductCard>
            ))}
        </div>
    );
};

export default Shop;
