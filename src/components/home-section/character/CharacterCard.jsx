import { useRef, useEffect } from 'react';
import './character-card.scss';

const CharacterCard = props => {
  const cardRef = useRef(null);

  const item = props.item;

  const onClick = () => {
    const img = cardRef.current.querySelector('img');
    const pos = img.getBoundingClientRect();

    const newNode = img.cloneNode(true);
    newNode.style.width = img.offsetWidth + 'px';
    newNode.style.height = img.offsetHeight + 'px';
    newNode.style.position = 'absolute';
    newNode.style.top = pos.top + 'px';
    newNode.style.left = pos.left + 'px';
    newNode.style.zIndex = getWidth() >= 698 && '102';

    newNode.style.transition = 'all 0.7s ease';
    newNode.id = `character-img-${props.id}`;

    setTimeout(() => {
      newNode.style.width = 'auto';
      newNode.style.height = '100%';
      newNode.style.top = 0;
      newNode.style.left = 0;
    });

    document.body.appendChild(newNode);

    document
      .querySelector(`#character-detail-${props.id}`)
      .classList.add('active');
  };

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  return (
    <div className="character-card" onClick={onClick} ref={cardRef}>
      <div className="frame">
        <div
          className="bg-image overlay bg"
          style={{ backgroundImage: `url(${item.bg})` }}
        ></div>
      </div>
      <img src={item.img} alt="" />
      <div className="name">{item.name}</div>
    </div>
  );
};

export default CharacterCard;
