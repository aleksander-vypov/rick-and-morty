import React, { FC, Dispatch, SetStateAction } from 'react';
import { ICharacter } from '../../types/types';

export interface CharacterCardProps {
  character: ICharacter;
  setDetailInfo: Dispatch<SetStateAction<ICharacter | null>>;
}

const CharactersCard: FC<CharacterCardProps> = ({
  character,
  setDetailInfo,
}) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <span>{character.name}</span>
      <span>{character.gender}</span>
      <button onClick={() => setDetailInfo(character)}>More</button>
    </div>
  );
};

export default CharactersCard;
