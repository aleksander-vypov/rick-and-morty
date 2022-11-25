import React, { FC, Dispatch, SetStateAction } from 'react';
import { ICharacter } from '../../types/types';
import CharactersCard from './CharactersCard';

interface CharacterList {
  characters: ICharacter[];
  setDetailInfo: Dispatch<SetStateAction<ICharacter | null>>;
}

const CharactersList: FC<CharacterList> = ({ characters, setDetailInfo }) => {
  return (
    <div className="list">
      {characters?.map((character) => (
        <CharactersCard
          key={character.id}
          character={character}
          setDetailInfo={setDetailInfo}
        />
      ))}
    </div>
  );
};

export default CharactersList;
