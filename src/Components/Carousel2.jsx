import React, { useState } from "react";
import event1 from "../Asset/event1.jpg";
import event2 from "../Asset/event2.jpg";
import event3 from "../Asset/event3.jpg";
import event4 from "../Asset/event4.jpg";
import Calendar from "../Asset/icons_calendar.svg";
import Time from "../Asset/icons_time.svg";

function Carousel2() {
  const slides = [
    { image: event1, alt: "event1" },
    { image: event2, alt: "event2" },
    { image: event3, alt: "event3" },
    { image: event4, alt: "event4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel -z-50 h-128 w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover bg-opacity-20 duration-500"
      >
        <div className="bg-gradient-to-b from-gra1a to-gra1b opacity-50 w-full h-full"></div>
      </div>
      <div className="absolute md:flex md:flex-col md:justify-between gap-10 my-10 mx-24">
        {/* Info */}
        <div className="">
          <h1 className="font-bold text-6xl text-white">COLDPLAY</h1>
          <h1 className="font-bold text-6xl text-white">
            MUSIC OF THE SPHERES
          </h1>
          <br />
          <h2 className="text-xl font-bold text-white ">
            BY <span className="text-secondary">PartyEvent</span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-white ">
          {/* bg-primary/50 border-2 rounded-xl w-96 p-4 */}
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-secondary w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-medium text-xl">
              Stadiun Temenggung Abdul Jamal, Batam
            </p>
          </div>
          <div className="flex gap-3">
            <img src={Calendar} />
            23 Desember 2023
          </div>
          <div className="flex gap-3">
            <img src={Time} />
            20.00 WIB
          </div>
        </div>
      </div>
      {/* Left arrow */}
      <div
        onClick={prevSlide}
        className="absolute top-1/2 -translate-x-0 translate-y-[-50%] left-5 text-xl p-2 rounded-full bg-black/40 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* Right arrow */}
      <div
        onClick={nextSlide}
        className="absolute top-1/2 -translate-x-0 translate-y-[-50%] right-5 text-xl p-2 rounded-full bg-black/40 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Carousel2;
