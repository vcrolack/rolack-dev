import React from "react";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BulletController = ({ data, activeCard, setActiveCard, refs }) => {
  const { containerRef, cardsRef } = refs;

  const handleNext = () => {
    const nextIndex = (activeCard + 1) % data.length;
    setActiveCard(nextIndex);

    if (cardsRef.current[nextIndex]) {
      const scrollPosition =
        cardsRef.current[nextIndex].offsetLeft -
        containerRef.current.offsetWidth / 2 +
        cardsRef.current[nextIndex].offsetWidth / 2;
      containerRef.current.scrollLeft = scrollPosition;
    }
  };

  const handlePrev = () => {
    setActiveCard(
      (prevActiveCard) => (prevActiveCard - 1 + data.length) % data.length
    );
  };

  return (
    <div className="experience-controller">
      <div className="experience-icon-left">
        <FontAwesomeIcon
          size="5x"
          icon={faChevronLeft}
          color="#91CB00"
          onClick={handlePrev}
        />
      </div>

      <div className="experience-bullet">
        {data.map((experience, index) => (
          <FontAwesomeIcon
            size="2x"
            icon={index === activeCard ? faCircleDot : faCircle}
            color={index === activeCard ? "#91CB00" : "#1A1A1A"}
          />
        ))}
      </div>

      <div className="experience-icon-right">
        <FontAwesomeIcon
          size="5x"
          icon={faChevronRight}
          color="#91CB00"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
