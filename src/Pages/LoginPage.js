import React, {useRef, useState} from 'react';

const LoginPage = () => {
    const nameRef = useRef()
    const passRef = useRef()

    const [getError, setError] = useState("PLEASE LOGIN")

    function loginUser () {

        const user = {
            username: nameRef.current.value,
            passOne: passRef.current.value,
        }
        console.log(user)

        nameRef.current.value = ""
        passRef.current.value = ""

        if(user.username.length>30 || user.username.length<4) return setError("Blogas vardas")
        if(user.passOne.length>20 || user.passOne.length<5) return setError("Blogas slaptazodis")

        fetch("http://localhost:4000/find/username/password")
            .then(res => res.json())
            .then (data => {
                    console.log(data)
                }
            )

    }
    return (
        <div>
            <h1>THIS IS MY LOGIN PAGE</h1>
            <div className="d-flex al-center j-center fd-column">
                <input type="text" ref={nameRef} placeholder="username"/>
                <input type="text" ref={passRef} placeholder="slaptazodis"/>
                <h3>Validation error: {getError} </h3>
                <button onClick={loginUser}>LOGIN</button>
            </div>
        </div>
    );
};

export default LoginPage;