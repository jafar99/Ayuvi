import React from "react";
import "../style/Blog.css";
import img from "../assets/12.png";

const Blog = () => {
  return (
    <>
      <div className="Blogs" id="blog">
        <div className="blog-heading">Blogs</div>
        <div className="Blogs-1">
          <div className="blogss">
          <div className="container1">
            <div className="container-img">
              <img src={img} alt="img"  />
            </div>

            <div className="container-body">
              <div className="container-body-title">
                2023 – The International Year of Millets
              </div>

              <div className="container-body-content">
                With an aim to create mass awareness and increase the production
                and consumption of ....
              </div>

              <div className="container-body-footer">
              <button className="btn"> <span className="btn-text"> Read More </span></button>
              </div>
            </div>
          </div>

          <div className="container2">
          <div className="container-img">
              <img src={img} alt="img" />
            </div>

            <div className="container-body">
              <div className="container-body-title">
                2023 – The International Year of Millets
              </div>

              <div className="container-body-content">
                With an aim to create mass awareness and increase the production
                and consumption of ....
              </div>

              <div className="container-body-footer">
              <button className="btn"> <span className="btn-text"> Read More </span></button>
              </div>
            </div>
          </div>

          </div>

          <div className="container3">
            <button className="btn2"> <span className="btn2-text">  View More </span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
