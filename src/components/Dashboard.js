import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlashcardList from "./FlashcardList";
import LandingHeader from "./Header";

const Dashboard = () => {
    const isHome  =(useLocation().pathname.replaceAll("/", ""))=== 'dashboard';
    return(
        <>
         <LandingHeader />
         {isHome ? <FlashcardList /> : <Outlet />}
        </>
    )
}

export default Dashboard;