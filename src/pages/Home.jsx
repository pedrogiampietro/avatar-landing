import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import {
  Welcome,
  Character,
  CharacterDetail,
  Credit,
} from '../components/home-section';

import { charactersData } from '../assets/dummy';

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Character isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      {charactersData.map((item, index) => (
        <CharacterDetail key={index} item={item} id={index} />
      ))}
      <div className="scroll">
        <span>Role para ver o efeito</span>
      </div>
    </>
  );
};

export default Home;
