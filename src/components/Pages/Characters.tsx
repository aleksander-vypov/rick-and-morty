import React, { FC, useContext, useEffect, useState } from 'react';
import { ICharacter, IPaginationInfo } from '../../types/types';
import CharactersList from '../Characters/CharactersList';
import DetailPage from '../Characters/DetailPage';
import Pagination from '../Pagination';
import '../styles/characters.scss';
import Search from '../Search';
import { AppCtx } from '../AppContext';
import { IAppContextInterface } from '../AppContext';

const Characters: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [info, setInfo] = useState<IPaginationInfo>();
  const [character, setDetailInfo] = useState<ICharacter | null>(null);
  const [error, setError] = useState<string>('');
  const [active, setActive] = useState<number>(1);

  function getPage(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.error) {
          setError(data.error);
        } else {
          setError('');
        }
        setCharacters(data.results);
        setInfo(data.info);
      });
  }

  useEffect(() => {
    getPage('https://rickandmortyapi.com/api/character');
  }, []);

  // const {
  //   characters,
  //   setCharacters,
  //   info,
  //   setInfo,
  //   character,
  //   setDetailInfo,
  //   error,
  //   setError,
  //   active,
  //   setActive,
  //   getPage,
  // } = useContext<IAppContextInterface>(AppCtx);

  return (
    <>
      <Search getPage={getPage} />
      <Pagination
        info={info}
        getPage={getPage}
        active={active}
        setActive={setActive}
      />
      {error && <div>{error}</div>}
      <CharactersList setDetailInfo={setDetailInfo} characters={characters} />
      {character && (
        <DetailPage character={character} setDetailInfo={setDetailInfo} />
      )}
      <Pagination
        info={info}
        getPage={getPage}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Characters;
