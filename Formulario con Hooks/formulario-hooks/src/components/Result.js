//Copiado
import React from "react";
const Result = props => {
    const{ firstName, lastName, email, password, confirmPassword} =props.data;
    return(
        <div>
            <p>Your from data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm Password: {confirmPassword}</p>
        </div>
    );
};
export default Result;