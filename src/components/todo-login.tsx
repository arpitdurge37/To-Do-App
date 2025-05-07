import { useState } from "react";
import { useCookies } from "react-cookie"
import { UserContract } from "../contracts/UserContract";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export function ToDoLogin(){


    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();

    const formik = useFormik({
         initialValues: {
            UserId: '',
            Password: ''
         }, 
         onSubmit : (values) => {
                axios.get(`http://127.0.0.1:2020/get-user`)
                .then(response=> {
                     var user = response.data.find((item:UserContract)=> item.UserId===values.UserId);
                     if(user) {
                         if(user.Password===values.Password) {
                             setCookie('userid', values.UserId);
                             navigate(`/dash/${user.UserId}`);
                         } else {
                             alert('Invalid Password');
                         }
                     } else {
                        alert('Invalid User Id');
                     }
                })
         }
    })


    return(
        <div className="bg-light p-4 w-25">
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                </dl>
                <button type="submit" className="btn btn-warning">Login</button>
            </form>
            <p>
                <Link to='/register'>New User Register</Link>
            </p>
        </div>
    )
}