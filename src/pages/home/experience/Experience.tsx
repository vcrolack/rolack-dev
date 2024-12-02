import { useEffect, useRef, useState } from "react";
import { Title, BulletController } from "@components/";
import { experienceData, ExperienceCard } from ".";

export const Experience = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current[0] && containerRef.current) {
      const cardWidth = cardsRef.current[0].offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const initialScrollPosition = containerWidth / 2 - cardWidth / 2;

      containerRef.current.style.transform = `translateX(${initialScrollPosition}px)`;
    }
  }, []);

  useEffect(() => {
    if (cardsRef.current[activeCard] && containerRef.current) {
      const cardWidth = cardsRef.current[activeCard].offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollPosition =
        containerWidth / 2 -
        cardWidth / 2 -
        cardsRef.current[activeCard].offsetLeft;

      containerRef.current.style.transform = `translateX(${scrollPosition}px)`;
    }
  }, [activeCard]);

  return (
    <section id="experience">
      <div className="container-title">
        <Title text="E X P E R I E N C E" />
      </div>
      <div className="container-experience" ref={containerRef}>
        <div className="experience-cards">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isActive={index === activeCard}
              ref={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
      <BulletController
        data={experienceData}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        refs={{ containerRef, cardsRef }}
      />
    </section>
  );
};
