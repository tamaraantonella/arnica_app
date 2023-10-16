import React from 'react';
import { Link } from 'react-router-dom';

interface CommonBtnProps {
  path?: string;
  text: string;
  contrast?: boolean;
  onClick?: () => void;
}

const baseLinkClass =
  'w-52 p-3 my-5 mx-auto text-center border-none decoration-0 transition-all ease-in-out duration-300 font-bold';

const contrastMap = new Map([
  ['true', `${baseLinkClass} text-white bg-contrast hover:bg-main-dark hover:scale-105`],
  ['false', `${baseLinkClass} text-white bg-main-light hover:bg-main-light hover:text-main-dark`]
]);

export const CommonBtn = ({ path, text, contrast, onClick }: CommonBtnProps) => {
  if (path) {
    return (
      <Link
        to={`${path}`}
        className={contrastMap.get(contrast?.toString() || 'false')}
      >
        {text}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={contrastMap.get(contrast?.toString() || 'false')} onClick={onClick}>
        {text}
      </button>
    );
  }
};
