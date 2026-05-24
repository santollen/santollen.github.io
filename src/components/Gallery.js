import { useRef, useState } from 'react';

import {
  white1, white2, white3, white4, white5, white6, white7, white8, white9, white10,
  peach1, peach2, peach3,
  hanbok1, hanbok2, hanbok3, hanbok4, hanbok5, hanbok6, hanbok7, hanbok8, hanbok9, hanbok10, hanbok11,
} from '../assets/images/gallery';

import prevArrow from '../assets/icons/prev_arrow.svg';
import nextArrow from '../assets/icons/next_arrow.svg';

import styles from './Gallery.module.css';
import commonStyles from './Common.module.css';

function Gallery() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const slideContainerRefs = useRef([]);
  const slideRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onSlideClick = (e, index) => {
    const clickedSlideContainer = e.currentTarget

    if (index === activeSlideIndex) {
      setActiveSlideIndex(null);
      clickedSlideContainer.classList.remove('active')
    } else {
      if (activeSlideIndex !== null) {
        const previousSlideContainer = slideContainerRefs.current[activeSlideIndex];
        
        if (previousSlideContainer) {
          previousSlideContainer.classList.remove('active');
        }
      }
      
      // 새 슬라이드 열기
      setActiveSlideIndex(index);
      clickedSlideContainer.classList.add('active');
    }
    
    slideRefs.current[activeSlideIndex]?.scrollTo(0, 0);
    setActiveImageIndex(0);
  };

  const onTouchStart = (e) => {
    if (activeSlideIndex !== null) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const onTouchMove = (e) => {
    if (activeSlideIndex !== null) {
      touchEndX.current = e.touches[0].clientX;
    }
  };

  const onTouchEnd = (index) => {
    const touchDistance = touchStartX.current - touchEndX.current;
    
    if (index !== activeSlideIndex) return;

    if (touchDistance > 50) {
      handleNextSlide(index);
    } else if (touchDistance < -50) {
      handlePrevSlide(index);
    }
  };
  
  const handlePrevSlide = (index) => {
    if (slideRefs.current[index]) {
      const slideWidth = slideRefs.current[index].clientWidth;
      slideRefs.current[index].scrollLeft -= slideWidth;
      setActiveImageIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNextSlide = (index) => {
    if (slideRefs.current[index]) {
      const slideWidth = slideRefs.current[index].clientWidth;
      slideRefs.current[index].scrollLeft += slideWidth;
      setActiveImageIndex((prev) => Math.min(prev + 1, imageSlides[index].images.length - 1));
    }
  };

  return (
    <section className={styles.gallery}>
      <h3 className={commonStyles.caption}><span>사진첩</span></h3>

      <div className={styles.image_wrap}>
        {/* 이미지 슬라이드 */}
        {imageSlides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide_container}
            ref={(el) => (slideContainerRefs.current[index] = el)}
            onClick={(e) => onSlideClick(e, index)}
            onTouchStart={(e) => onTouchStart(e)}
            onTouchMove={(e) => onTouchMove(e)}
            onTouchEnd={() => onTouchEnd(index)}
          >
            <div className={`${styles.slide_title} ${activeSlideIndex === index ? styles.hidden : ''}`}>
              {slide.title}
            </div>

            <ul
              className={`${styles.image_slide} ${activeSlideIndex === index ? styles.active : ''}`}
              ref={(el) => (slideRefs.current[index] = el)}
            >
              {slide.images.map((image, imgIndex) => (
                <li key={imgIndex}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </li>
              ))}
            </ul>

            {/* 슬라이드 버튼 */}
            {activeSlideIndex === index && (
              <div className={styles.slide_button_wrap}>
                <button
                  className={styles.prev_button}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide(index);
                  }}
                  disabled={activeImageIndex === 0}
                >
                  <img src={prevArrow} alt="슬라이드버튼"/>
                </button>

                <button
                  className={styles.next_button}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide(index);
                  }}
                  disabled={activeImageIndex >= slide.images.length - 1}
                >
                  <img src={nextArrow} alt="슬라이드버튼"/>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const imageSlides = [
  {
    title: "White Dress",
    images: [
      { src: white1, alt: "white1" },
      { src: white2, alt: "white2" },
      { src: white3, alt: "white3" },
      { src: white4, alt: "white4" },
      { src: white5, alt: "white5" },
      { src: white6, alt: "white6" },
      { src: white7, alt: "white7" },
      { src: white8, alt: "white8" },
      { src: white9, alt: "white9" },
      { src: white10, alt: "white10" },
    ],
  },
  {
    title: "Peach Dress",
    images: [
      { src: peach1, alt: "peach1" },
      { src: peach2, alt: "peach2" },
      { src: peach3, alt: "peach3" },
    ],
  },
  {
    title: "Hanbok",
    images: [
      { src: hanbok1, alt: "hanbok1" },
      { src: hanbok2, alt: "hanbok2" },
      { src: hanbok3, alt: "hanbok3" },
      { src: hanbok4, alt: "hanbok4" },
      { src: hanbok5, alt: "hanbok5" },
      { src: hanbok6, alt: "hanbok6" },
      { src: hanbok7, alt: "hanbok7" },
      { src: hanbok8, alt: "hanbok8" },
      { src: hanbok9, alt: "hanbok9" },
      { src: hanbok10, alt: "hanbok10" },
      { src: hanbok11, alt: "hanbok11" },
    ],
  },
];

export default Gallery;
