import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CommonBtn } from '../common-button';
import { ItemCount } from '../item-count';
import { ItemFromDb } from 'src/types/item';
import { CartContextType } from '@schemas/cart-context';

interface ItemProps {
  item: ItemFromDb;
}

export const ItemDetail = ({ item }: ItemProps) => {
  if (!item) return <div>Loading...</div>;

  const [quantity, setQuantity] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext) as CartContextType;

  const onAdd = (count: number) => {
    setQuantity(count);
    addItem(item, count);
  };

  const productQuantity = getProductQuantity(item.id);

  return (
    <div className="w-3/4 flex flex-col">
      <h2 className='font-semibold text-2xl text-gray-700'>{item.name}</h2>
      <div className="flex gap-5">
        <div className="w-[28.75rem] h-[25rem] min-w-[28rem] ">
          <img src={item.img} alt={item.name} />
        </div>
        <div className='flex flex-col my-3 gap-3 text-gray-600'>
          <p>Price ${item.price}</p>
          <p>Category: Yoga {item.category}</p>
          <p>Stock: {item.stock}</p>
          <p>Description: {item.description}</p>
        </div>
      </div>
      <div>
        {quantity >= 1 ? (
          <CommonBtn path="/cart" text="Purchase" />
        ) : (
          <ItemCount
            stock={item.stock}
            initial={item.stock !== 0 && productQuantity ? productQuantity : 1}
            onAdd={onAdd}
          />
        )}
      </div>
    </div>
  );
};
