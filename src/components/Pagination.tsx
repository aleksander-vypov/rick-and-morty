import React, { FC, useState } from 'react';
import { IPaginationInfo } from '../types/types';
import './styles/pagination.scss';

interface Info {
  info: IPaginationInfo | undefined;
  getPage: (url: string) => void;
  active: number;
  setActive: (num: number) => void;
}

const allPages = (
  start: number,
  end: number,
  pageType: string,
  url: string
) => {
  let res = [];
  for (let i = start, j = 1; i <= end; i += 1, j += 1) {
    const newUrl = url
      .replace(/\d+/g, String(i))
      .replace(/\/\w+\/\?/, `/${pageType}?`);

    res.push({
      url: newUrl,
      num: i,
    });
  }
  return res;
};

const Pagination: FC<Info> = ({ info, getPage, active, setActive }) => {
  let all;
  if (info) {
    let start;
    let end;

    if (window.innerWidth < 768) {
      start = active - 3 > 0 && info.pages > 20 ? active - 2 : 1;
      end = active + 3 < info.pages ? active + 3 : info.pages;
    } else {
      start = active - 10 > 0 && info.pages > 20 ? active - 10 : 1;
      end = active + 10 < info.pages ? active + 10 : info.pages;
    }

    let url;
    if (typeof info.next === 'string') {
      url = String(info.next);
    } else {
      url = String(info.prev);
    }
    all = allPages(start, end, 'character', url);
  }

  const onClickHandler = (url: string, num: number) => {
    getPage(url);
    setActive(num);
  };

  return (
    <div className="container">
      {all?.map((el) => (
        <div
          className={active === el.num ? 'active' : undefined}
          key={el.num}
          onClick={() => onClickHandler(el.url, el.num)}
        >
          {el.num}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
