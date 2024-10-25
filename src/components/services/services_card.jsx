import React from "react";

import { useNavigate } from "react-router-dom";
import FoodServices from "./FoodServices"


function ServicesCard({classname, img}){
    const navigate = useNavigate();
    return(
        <div className="flex w-full justify-center">

        
        <div className={`flex w-[80%] items-center justify-between m-4 p-4 border border-gray-500 rounded-md ${classname}`}>
            <div className="flex flex-col m-4">
                <h1 className="p-4">
                    Food Services
                </h1>
                <p className="p-4">Description</p>
                <button className="p-4 text-white bg-cyan-600 border-none" onClick={()=>navigate("/food-services")}>Order Food !</button>
            </div>

            <img src={img} alt="food" className="w-52"/>
        </div>
        </div>
    )
}

export default ServicesCard;