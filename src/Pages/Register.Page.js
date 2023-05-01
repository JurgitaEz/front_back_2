import React from 'react';
import {useRef, useState} from "react";

const RegisterPage = () => {
    const nameRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    const [getError, setError] = useState("PLEASE REGISTER")

   function addToRegister() {

       const user = {
           username: nameRef.current.value,
           passOne: pass1Ref.current.value,
           passTwo: pass2Ref.current.value
       }
       console.log(user)

        nameRef.current.value = ""
        pass1Ref.current.value = ""
        pass2Ref.current.value = ""

       if(user.username.length>30 || user.username.length<4) return setError("Blogas vardas")
       if(user.passOne.length>20 || user.passOne.length<5) return setError("Blogas slaptazodis")
       if(user.passTwo.length>20 || user.passTwo.length<5) return setError("Blogas slaptazodis")
       if (user.passOne !== user.passTwo) return setError("Slaptazodiai nesutampa")

        fetch("http://localhost:4000/register/username/passOne/passTwo")
                .then(res => res.json())
                .then (data => {
                    console.log(data)
                }
            )
    }

    return (
        <div>
            <h1>THIS IS MY REGISTER PAGE</h1>
            <div className="d-flex al-center j-center fd-column">
                <input type="text" ref={nameRef} placeholder="username"/>
                <input type="text" ref={pass1Ref} placeholder="slaptazodis1"/>
                <input type="text" ref={pass2Ref} placeholder="slaptazodis2"/>
                <h3>Validation error: {getError} </h3>
                <button onClick={addToRegister}>REGISTER</button>
            </div>

        </div>
    );
};

export default RegisterPage;