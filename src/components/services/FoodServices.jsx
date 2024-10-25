import  Container  from "../container/Container";
import React, { useEffect } from "react";
import { useState } from "react";



function FoodServices() {
    const [cart, setCart] = useState([]);
    //const items = {};
    const userId = 123;

    const foodItem = [{id:1, foodname: "pizza"}, {id:2, foodname: "biryani"}];

    function handleItems({quantity=1,...item}){
         const existing = cart.find((foodItem)=>foodItem.id === item.id);
         if(existing){
            setCart(cart.map((cartItems)=>cartItems.id === item.id ? {...cartItems, quantity : cartItems.quantity+1}:cartItems))
         }
         else{
            setCart([...cart, {...item,quantity}]);
         }

         
    }

    useEffect(()=>console.log(cart), [cart]);
    return (
       <Container> 
        <div className="flex w-full flex-wrap flex-col">
            <h1 className="text-center my-4">Food Services</h1>
            {foodItem.map((item)=>(
                <div key = {item.id} className="flex flex-col m-4 p-2 border rounded-md">
                <h1 className="m-4">{item.foodname}</h1>
                <img src="" alt="food img" className="m-4" />
                <button onClick={()=>handleItems(item)} className="m-4 w-52 bg-cyan-500">
                    Add to Cart !
                </button>
            </div>
            ))}
            
        </div>
        </Container> 

    )
}

export default FoodServices;