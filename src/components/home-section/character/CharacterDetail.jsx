import './character-detail.scss';

import { closeIcon } from '../../../assets/images';
import { useRef, useEffect } from 'react';

const CharacterDetail = props => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';

    iframeRef.current.setAttribute('height', height);
  }, []);

  const onClose = () => {
    document
      .querySelector(`#character-detail-${props.id}`)
      .classList.remove('active');
    iframeRef.current.setAttribute('src', '');

    const img = document.querySelector(`#character-img-${props.id}`);
    img.style.opacity = 0;
    setTimeout(() => {
      img.remove();
    }, 500);
  };

  return (
    <div
      id={`character-detail-${props.id}`}
      className={`character-detail bg-image overlay ${
        props.active ? 'active' : ''
      }`}
      style={{ backgroundImage: `url(${item.bgLarge})` }}
    >
      <div className="character-detail__content">
        <span>{item.nickName}</span>
        <h2 className="name main-color">{item.name}</h2>
        <span>
          Role: <span className="second-color">{item.role}</span>
        </span>
        <br />
        <span>
          Difficulty: <span className="second-color">{item.difficulty}</span>
        </span>
        <div className="story">{item.description}</div>
        <div className="video">
          <iframe
            title="Character spotlight"
            ref={iframeRef}
            width="100%"
          ></iframe>
        </div>
      </div>
      <div className="character-detail__close" onClick={onClose}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
};

export default CharacterDetail;
