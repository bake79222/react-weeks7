import { Outlet ,Link} from "react-router-dom";


function FrontedLayout(){
  return(
    <>
        <header>
            <ul className="nav d-flex list-unstyled">
                <li className="nav-item">
                    <Link className="nav-link" to="/">首頁</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">產品列表</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">購物車</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">結帳</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">登入</Link>
                </li>

            </ul>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </>

  );
}

export default FrontedLayout