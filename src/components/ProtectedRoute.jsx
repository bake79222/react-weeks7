import axios from "axios";
import { useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function ProtectedRoute({children}){
      const [isAuth,setIsAuth] = useState(false);
      const [loading,setLoading] = useState(true);
    useEffect(() => {
        const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];
        if (token){
        axios.defaults.headers.common['Authorization'] = token;
        }
        


        const  checkLogin  =async () =>{
            try {
                const response = await axios.post(`${API_BASE}/api/user/check`);
                console.log(response.data);
                setIsAuth(true);
            } catch (error) {
                console.log("權限檢查失敗：", error.response?.data?.message);
                setIsAuth(false);
            }finally{
                setLoading(false);
            }
        }
        checkLogin();
    },[]);

    if (loading) return <RotatingTriangles/>
    if (!isAuth) return <Navigate to="/login"/>
    
    return children
}

export default ProtectedRoute;