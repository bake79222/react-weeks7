import { RouterProvider } from "react-router-dom"; 
import { router } from "./router";
import "./assets/style.css";
import MessageToast from "./components/MessageToast";

// import { useDispatch } from 'react-redux';
// import { createMessage } from './slice/messageSlice'; // 確保路徑



function App(){
  // 在元件內

  return (
  <>
    <MessageToast/>
     
    <RouterProvider router={router} />

  </>
  )

}

export default App