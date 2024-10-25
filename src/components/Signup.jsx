import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import Input from "./Input";
import authServices from "../appwrite/auth"
import { login } from "../store/authSlice"
import { useNavigate } from "react-router-dom";




function Signup(){


const { register, handleSubmit } = useForm();
const dispatch = useDispatch();
const navigate = useNavigate();
//const { register, handleSubmit } = useForm()

    const create = async (data)=>{
        const userData =  await authServices.createAccount(data);
        if(userData){
            console.log(userData);
            const currentUser = await authServices.getCurrentUser();
            console.log(currentUser);
            dispatch(login(currentUser));

            navigate("/");

        }
        else{
            console.log("error in create");
            
        }
    }

    return(
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src="" alt="" />
                    <form action="" onSubmit={handleSubmit(create)}>
                       <Input
                       label="name"
                       type = "text"
                       placeholder = "Enter your name"
                       {...register("name",{
                        required:true
                       })}
                       />
                       <Input
                       label="email"
                       type = "text"
                       placeholder = "Enter your email"
                       {...register("email",{
                        required:true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                       })}
                       />
                       <Input
                       label="password"
                       type = "text"
                       placeholder = "Enter your password"
                       {...register("password",{
                        required:true
                       })}
                       />

                       <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default Signup;