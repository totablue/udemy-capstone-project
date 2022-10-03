import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./DirectoryItem.styles.js";

import React from "react";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
