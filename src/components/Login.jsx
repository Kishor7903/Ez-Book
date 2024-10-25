import React from "react"
import { authService } from "../appwrite/auth"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import  Input  from "./Input";
import { useForm } from 'react-hook-form'

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register, handleSubmit] = useForm();
    
    
    const login = async (data)=>{
        const session  = await authService.login(data);
        if(session){
            const currentUser = authService.getCurrentUser();
            useDispatch(login(currentUser));
            useNavigate("/");
        }
    }

    return(
<div>
<form onSubmit={handleSubmit(login)}>


    <Input type = "text"
    className = ""
    placeholder = "Enter your email"
    label = "email" {...register("email", {
            required: true,
            validate: {
                //This is a regex patter genereated using gpt or regex website for valid email format.
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
    }})} />

    <Input
                   label = "Password: "
                   type = "password"
                   placeholder = "Enter your Password"
                   {...register("password", {
                    required: true
                   })}
                    />
                </form>
</div>
)

}

export default Login;