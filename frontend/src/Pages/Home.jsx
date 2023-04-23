import React from "react";
import "./Home.css";
const Home = () => {
return (
<div className="Home-Page bg-dark text-white container-fluid">
<div className="row">
<div
className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{ height: "91.5vh" }}
><h2 style={{fontSize:"60px"}}>WELCOME TO THE BOOK LIBRARY</h2>
</div>
<div
className="col-lg-6 d-flex justify-content-center align-items-center"
style={{ height: "91.5vh" }}>
<img src="https://i.pinimg.com/originals/7a/07/5a/7a075ae77e31249f5585f38cbeb77dd0.jpg" alt="img" />
</div>
</div>
</div>
);
};
export default Home;