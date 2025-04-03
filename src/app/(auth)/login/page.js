"use client"
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import style from './Login.module.css'

const LoginPage = () => {
    const handleClick = () => {
        const clientId = "c3c6f980bf964596bbffeacd20559a13";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https:accounts.spotify.com/authorize";
        const scope = ["user-read-email","user-read-private"];  
        
    };
  return (
    <div className={style.LoginPage}>
        <div className={style.Login}>
            <div className={style.image}>
                <img src="/icons8-spotify-logo-50 (2).png" alt="" />
            </div>
            <div className={style.text}>
                <h1>Login to Spotify</h1>
            </div>
            <div className={style.google}>
                <button onClick={handleClick}>
                    {/* <FcGoogle /> */}
                    <h1>Continue with Google </h1>
                </button>

            </div>
             <div className={style.facebook}>
                <button>
                    <h1>Continue with Facebook </h1>
                </button>

            </div>
             <div className={style.apple}>
                <button>
                    <h1>Continue with Apple </h1>
                </button>

            </div>
             <div className={style.number}>
                <button>
                    <h1>Continue with phone number </h1>
                </button>

            </div>
            <div className={style.line}>
            </div>
            <div className={style.email}>
                <h1>Email or username</h1>
            </div>
            <div className={style.emailbtn}>
                <button></button>
            </div>


        </div>
      
    </div>
  )
}

export default LoginPage
