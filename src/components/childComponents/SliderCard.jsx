import axios from "axios";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SliderCard = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setSlider(res.data);
    });
  }, []);

  const index = useMemo(() => {
    return Math.floor(Math.random() * slider.length);
  }, [slider]);

  return (
    <div className="slider-card">
      <div className="slider-body">
        <h3>{slider[index]?.title}</h3>
        <p>{slider[index]?.description}</p>
        <Link to={`detail/${slider[index]?.id}`}>Incele</Link>
      </div>

      <img src={slider[index]?.image} alt="" />
    </div>
  );
};

export default SliderCard;
