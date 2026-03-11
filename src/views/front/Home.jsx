import { Link } from "react-router-dom"; 

function Home() {
  return (
    <>
      <div className="hero-container">
        <img
          src="rachel-park-hrlvr2ZlUNk-unsplash.jpg"
          alt="hero"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">甜美下午茶餐廳</h1>
          <p className="hero-subtitle">在此享受專屬於您的悠閒午后時光</p>
          
          <Link to="/product" className="btn btn-primary btn-lg hero-button">
            立即挑選美食
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;