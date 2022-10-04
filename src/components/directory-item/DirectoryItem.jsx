import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./DirectoryItem.styles.js";

import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const handleOnNavigate = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={handleOnNavigate}>
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
