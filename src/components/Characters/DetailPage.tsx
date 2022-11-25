import React, { FC, useState } from 'react';
import { CharacterCardProps } from './CharactersCard';

const DetailPage: FC<CharacterCardProps> = ({ character, setDetailInfo }) => {
  const [hide, setHide] = useState<string>('detail-window');

  const onClickHandler = () => {
    setHide('detail-window hide');
    setTimeout(() => {
      setDetailInfo(null);
    }, 500);
  };

  return (
    <div className="detail-container">
      <div className={hide}>
        <div>
          <img src={character.image} />
        </div>

        <div className="info">
          <div>
            <strong>Name: </strong>
            {character.name}
          </div>
          <div>
            <strong>Gender: </strong>
            {character.gender}
          </div>
          <div>
            <strong>Status: </strong> {character.status}
          </div>
          <div>
            <strong>Species: </strong>Species: {character.species}
          </div>
          <div>
            <strong>Location: </strong>
            {character.location.name}
          </div>
          <div>
            <strong>Origin: </strong>
            {character.origin.name}
          </div>
        </div>

        <div className="episodes">
          <div>Episodes:</div>{' '}
          <ul>
            {character.episode.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <button onClick={onClickHandler}>Back</button>
      </div>
    </div>
  );
};
export default DetailPage;
