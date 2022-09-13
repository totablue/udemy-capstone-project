import CategoryItem from "../category-item/CategoryItem";
import "./Directory.styles.scss";
import React from "react";

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    );
};

export default Directory;
