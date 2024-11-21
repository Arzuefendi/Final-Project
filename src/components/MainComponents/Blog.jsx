import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "../../style/Blog.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ModeContext/Mode";

const Blog = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          "https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/blog?select=*",
          {
            headers: {
              apiKey: apiKey,
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleGet();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`blog ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <div className="contact-header text-center mt-5">
        <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637" />
        <h2>
          {t("Home")}/{t("Blog")}{" "}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {data.map((el) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card">
                <img src={el.image} />

                <div className="card-body">
                  <span>{el.date}</span> <span> - {el.author}</span>
                  <h5>{el.title}</h5>
                  <p className="card-text">{el.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
