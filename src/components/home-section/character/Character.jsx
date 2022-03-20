import './character.scss';

import HomeSection from '../HomeSection';
import CharacterCard from './CharacterCard';

import { bg2 } from '../../../assets/images';
import { charactersData } from '../../../assets/dummy';

import { Swiper, SwiperSlide } from 'swiper/react';

const Character = props => {
  return (
    <HomeSection
      className={`character ${props.isActive ? 'active' : ''}`}
      contentClassName="overlay"
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="character-list">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
          >
            {charactersData.map((item, index) => (
              <SwiperSlide key={index}>
                <CharacterCard item={item} id={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  );
};

export default Character;
