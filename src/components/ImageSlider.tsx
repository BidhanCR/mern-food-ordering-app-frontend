import { CSSProperties, useEffect, useState } from "react";
import { Slides } from "./Hero";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  slides: Slides[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

const ImageSlider = ({ slides, autoPlay=true, autoPlayInterval =  5000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);
  
  const sliderStyles: CSSProperties = {
    height: "100%",
    position: "relative",
  };

  const slideStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "background-image 2s ease-in-out",
  };

  const leftArrowStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex -1;
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <ArrowLeft />
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        <ArrowRight />
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
