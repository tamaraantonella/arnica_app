import { Item } from '@components/item/Item';
import { ItemFromDb } from '@schemas/item';
import React from 'react';

interface ItemListProps {
  products: ItemFromDb[];
}

export const ItemList = ({ products }: ItemListProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-center w-full h-full">
      {products ? (
        products.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            stock={product.stock}
            img={product.img}
            id={product.id}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};
