// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"
import Navbar from "./components/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPoup from "./components/LoginPopup/LoginPoup.jsx";
import Verify from "./pages/Verify/verify.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";

// eslint-disable-next-line no-unused-vars,react-refresh/only-export-components
const App = () =>{

    const [showLogin,setShowLogin]=useState(false)

    return(
        <>
            {showLogin?<LoginPoup setShowLogin={setShowLogin}/>:<></>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/order' element={<PlaceOrder/>}/>
                    <Route path='/verify' element={<Verify/>}/>
                    <Route path='/myorders' element={<MyOrders/>}/>
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App