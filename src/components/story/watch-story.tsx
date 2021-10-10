import React, { useState } from "react";
import "./style.css";
import { StoryInterface } from "../../interfaces/index";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const WatchStory = ({
  close,
  id,
  userName,
  imgUrl,
  videoUrl,
}: StoryInterface) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  };
  const sliderData = [
    {
      image:
        "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "start",
      }}
    >
      <section className="slider">
        <FiArrowLeftCircle className="left-arrow" onClick={prevSlide} />
        <FiArrowRightCircle className="right-arrow" onClick={nextSlide} />
        {sliderData.map((data, index) => {
          return (
            <div
              className={index === current ? "slide-active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={data.image}
                  alt="personal-story"
                  className="image"
                ></img>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default WatchStory;
