import React from "react";
import virat from "../assets/viratIMG.jpg";

function Card(props){
    
    
    return (
        <div className="relative overflow-hidden rounded-lg mb-6 mt-3">
        <img
            src={virat}
            alt="Featured content"
            width={400}
            height={300}
            className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    )
}

export default Card;