import DirectoryItem from "../directory-item/DirectoryItem";
import React from "react";

import { DirectoryContainer } from "./Directory.styles.js";

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem category={category} key={category.id} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
