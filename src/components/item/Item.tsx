import React from 'react';
import { Link } from 'react-router-dom';
import { ItemFromDb as ItemType } from 'src/types/item';

type ItemProps = ItemType;

const categoryMap = new Map([
  ['acc', 'Accesories'],
  ['mat', 'Mat']
]);

export const Item = ({ name, price, stock, category, img, id }: ItemProps) => {
  return (
    <Link
      to={`/item/${id}`}
      className="flex flex-col justify-center items-center w-full h-[400px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer text-main-dark transition-all ease-in-out duration-300 hover:scale-105 decoration-0"
    >
      <h2>{name} </h2>
      <div className="w-64 h-64">
        <img src={img} alt={name} className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex gap-3 items-center">
        <p className="bg-contrast text-white font-bold py-1 px-3">${price}</p>
        <p>Yoga {categoryMap.get(category)}</p>
        <p>Stock {stock}</p>
      </div>
    </Link>
  );
};
