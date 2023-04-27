import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/GetGifs";
import { GifItem } from "./GifItem";
import { useFetchGIfs } from "../hooks/useFetchGIfs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGIfs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
