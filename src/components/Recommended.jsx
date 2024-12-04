import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import axios from "axios";
import "../style/recommended.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";

const Recommended = () => {
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          "https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/products2?select=*&limit=8",
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
  return (
    <div className={`recommended ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <div style={{ textAlign: "center" }}>
        <FaCheckCircle
          style={{ color: "green", fontSize: "70px", marginTop: "60px" }}
        />
        <h2 style={{ color: "green", marginTop: "20px" }}>
          {t("Your payment has been successfully completed!")}
        </h2>
      </div>
      <div className="container">
        <h2 className="text-center">{t("You may also like")}</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="product-card">
                <Link to={`/product/${el.id}`}>
                  <img src={el.image} className="img-fluid" alt={el.name} />
                </Link>
                <div className="bestseller-icons">
                  <IoMdHeartEmpty className="img-icon" />
                  <FiShoppingCart className="img-icon" />
                </div>
                <p className="text-center">{el.name}</p>
                <p className="text-center">
                  <span className="product-span">{el.underline_price}</span>{" "}
                  <span>{el.price}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recommended;
