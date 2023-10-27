import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

import projects from "../../helpers/projectsList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperGallery.module.css";

const SwiperGallery = () => {
  const { id } = useParams();

  const project = projects.find((option) => {
    return option.id === id;
  });

  return (
    <Swiper
      modules={[Pagination, Navigation, Keyboard, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
    >
      {project.img.map((option, index) => (
        <SwiperSlide key={index}>
          <img src={option} alt="Project" className={styles.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGallery;
