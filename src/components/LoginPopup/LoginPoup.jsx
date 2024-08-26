import React, {useState} from "react";
import './LoginPoup.css'
import {assets} from "../../assets/frontend_assets/assets.js";
import {StoreContext} from "../../context/StoreContext.jsx";
import axios from "axios";

const LoginPoup=({setShowLogin})=>{

    const {url,setToken}=useContext(StoreContext)

    const [currentState,setCurrentState]=useState('Login')
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setData(data=>({...data,[name]:value}))
    }
    const onLogin=async (event)=>{
        event.preventDefault()
        let newUrl=url
        if (currentState==='Login'){
            newUrl='/api/user/login'
        }else{
            newUrl +='/api/user/register'
        }
        const response=await axios.post(newUrl,data)
        if (response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }else {
            alert(response.data.message)
        }
    }
    return(
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container' >
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt=""/>
                </div>
                <div className="login-popup-inputs">
                    {currentState === 'Login' ? <></> : <input name='name' onChange={onChangeHandle} value={data.name} type="text" placeholder='Youre Name' required/>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Youre Email' required/>
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password ' required/>
                </div>
                <button type='submit'>{currentState==='Sign Up'?'Create account':'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currentState === 'Login' ?
                    <p>Crete a new account? <span onClick={()=>setCurrentState('Sign Up')}>Click here</span></p>
                    : <p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login here</span></p>}


            </form>
        </div>
    )
}
export default LoginPoup