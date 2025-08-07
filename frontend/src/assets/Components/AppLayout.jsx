import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";



export const AppLayout =()=>{
   
    return (
        
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
       
    );

  }