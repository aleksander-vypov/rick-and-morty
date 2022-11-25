import React, { FC, useState, ChangeEventHandler, useEffect } from 'react';
import './styles/search.scss';

interface Search {
  getPage: (url: string) => void;
}

const Search: FC<Search> = ({ getPage }) => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      getPage(`https://rickandmortyapi.com/api/character/?name=${input}`);
    }, 2000);
  }, [input]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        value={input}
        onChange={onChange}
        type="text"
        placeholder="CHARACTER`S NAME"
      />
    </div>
  );
};

export default Search;
