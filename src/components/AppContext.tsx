import React, { createContext, FC, useState, useEffect } from 'react';
import { ICharacter, IPaginationInfo } from '../types/types';

interface IAppContext {
  children: React.ReactNode;
}

export interface IAppContextInterface {
  characters: ICharacter[];
  setCharacters: (charArr: ICharacter[]) => void;
  info: IPaginationInfo | undefined;
  setInfo: (newInfo: IPaginationInfo) => void;
  character: ICharacter | null;
  setDetailInfo: (detail: ICharacter | null) => void;
  error: string;
  setError: (err: string) => void;
  active: number;
  setActive: (val: number) => void;
  getPage: (url: string) => void;
}

const AppCtx = createContext<Partial<IAppContextInterface>>({});

const AppContext: FC<IAppContext> = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [info, setInfo] = useState<IPaginationInfo | undefined>();
  const [character, setDetailInfo] = useState<ICharacter | null>(null);
  const [error, setError] = useState<string>('');
  const [active, setActive] = useState<number>(1);

  const getPage = (url: string) => {
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
  };

  useEffect(() => {
    getPage('https://rickandmortyapi.com/api/character');
  }, []);

  const sampleAppContext: IAppContextInterface = {
    characters,
    setCharacters,
    info,
    setInfo,
    character,
    setDetailInfo,
    error,
    setError,
    active,
    setActive,
    getPage,
  };

  return <AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>;
};

export default AppContext;
export { AppCtx };
