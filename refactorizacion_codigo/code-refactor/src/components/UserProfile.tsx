import { FC } from "react";
import {  UserProfileProps } from "../models/user";

export const UserProfile:FC<UserProfileProps> = (props):JSX.Element => {
    const {
        user : {
            name, 
            email, 
            address : { 
                city, 
                street, 
                zipcode
            }
        }
    } = props

    return (
        <div className="user-profile__wrapper">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{city}</p>
            <p>{street}</p>
            <p>{zipcode}</p>   
        </div>
    )
}