import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FlashcardList from "./FlashcardList";
import LandingHeader from "./Header";

const Dashboard = () => {
    const isHome  =(useLocation().pathname.replaceAll("/", ""))=== 'dashboard';
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("AUTH_TOKEN");
        if(!token){
            return navigate('/');
        }
    })

    const handleLogout= () =>{
     localStorage.getItem("AUTH_TOKEN") && localStorage.removeItem("AUTH_TOKEN");
       return navigate("/")
    }

    return(
        <>
         <LandingHeader handleLogout={handleLogout}/>
         {isHome ? <FlashcardList /> : <Outlet />}
        </>
    )
}

export default Dashboard;