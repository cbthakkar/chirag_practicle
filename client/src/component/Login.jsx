import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/login.css';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        try {
            if(email.trim() !== "" && password.trim() !== ""){
            const responce = await axios.post('http://localhost:5000/v3/user/login',{
                email: email,
                password: password
            });
            if(responce){
                localStorage.setItem('token',responce.data.token)
                navigate('/dashboard');
            }
        } else{
            alert("Please enter email & password")
        }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <div className='mainNav'>
                <p className='title'>Pokédex</p>
            </div>

            <div className='form-container'>
                <div>
                <h3>Login to Pokedex</h3> <br />
                <form onSubmit={login}>
                    <input className='inpMain' type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                    <input className='inpMain' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                    <button style={{ textAlign: 'center' }} className='addBtn' type='submit'>Login</button>
                </form>
                </div>
            </div>
        </div> 
    )
}

export default Login