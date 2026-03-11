import { createHashRouter } from "react-router";
import FrontedLayout from "./layoyt/FrontedLayout";
import Home from "./views/front/Home";
import Products from "./views/front/Products";
import Cart from "./views/front/Cart";
import Checkout from "./views/front/Checkout";
import Login from "./views/Login";

import SingleProduct from "./views/front/SingleProduct";
import NotFound from "./views/front/NotFound";
import AdminLayout from "./layoyt/AdminLayout";
import AdminOrders from "./views/admin/AdminOrders";
import AdminProducts from "./views/admin/AdminProducts";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createHashRouter ([
    {
        path:'/',
        element:<FrontedLayout />,
        children:[{
            index:true,
            element:<Home />
        },
        {
            path:'product',
            element:<Products />
        },
        {
            path:'product/:id',
            element:<SingleProduct />
        },
        {
            path:'cart',
            element:<Cart />
        },
        {
            path:'checkout',
            element:<Checkout />
        },
        {
            path:'login',
            element:<Login />
        }
    ]
    },{
        path:'admin',
        element:
        <ProtectedRoute>
            <AdminLayout/>
        </ProtectedRoute>
        ,
        children : [
            {
                path:'product',
                element:<AdminProducts/>
            },
            {
                path:'order',
                element:<AdminOrders/>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound />
    }
])