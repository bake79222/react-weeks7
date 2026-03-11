import { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form"; 
import { useNavigate } from "react-router-dom"; 
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
function Login({getProducts,setIsAuth}){

    // const [formData, setFormData] = useState({
    //     username:"geno-chen@gmail.com",
    //     password:"666666"
    // });
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState:{errors},
    } = useForm({
      mode:'onChange',
      defaultValues:{
        username:"geno-chen@gmail.com",
        password:"666666"
      }
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((preData) => ({
        ...preData,
        [name]:value
        }))
    }

    const onSubmit = async (formData) =>{
        try {
            // e.preventDefault();
            const response = await axios.post(`${API_BASE}/admin/signin`,formData)
            console.log(response.data);
            const { token, expired} = response.data;
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
            axios.defaults.headers.common['Authorization'] = token;
            // getProducts();
            // setIsAuth(true);
            // alert("登入成功！");
            
            // 👈 3. 跳轉到產品頁面 (請確認你的路由路徑)
            navigate("/admin/product"); 
            
            // 如果你有這個狀態，記得更新
            // if(setIsAuth) setIsAuth(true);

        } catch (error) {
            setIsAuth(false);
            console.log(error.response)
        }
    }
    return(
      <div className="container login py-4">
        
        <form className="form-floating form-signin bg-info"  onSubmit={handleSubmit(onSubmit)}>
          <h1 className='mt-auto text-white'>請輸入帳號密碼</h1>
          <div className="form-floating mb-3 ">
            <input type="email" 
            className="form-control text-primary" 
            id="username"
            name="username" 
            placeholder="name@example.com" 
            {...register("username", {
              required: "請輸入 Email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email 格式不正確",
              }
            })}
            // value={formData.username}
            //  onChange={(e) => handleInputChange(e)} 
            />
            <label htmlFor="username" className='text-gray'>Email address</label>
            {
            errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )
            }
          </div>
          <div className="form-floating">
            <input type="password" 
            className="form-control text-primary"
            id="password" 
            name="password" 
            placeholder="Password" 
            // value={formData.password}
            // onChange={(e) => handleInputChange(e)}
            {...register("password", {
              required: "請輸入密碼",
              minLength: {
                value: 6,
                message: "密碼長度至少需 6 碼",
              },
            })}
            />
            <label htmlFor="password" className='text-gray'>Password</label>
            {
            errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )
            }
          </div>
          <button type='submit' className='btn btn-primary w-100 mt-4' >登入</button>
        </form>
      </div>
    )
}

export default Login