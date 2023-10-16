import { Cart } from '@components/cart';
import { Form } from '@components/form';
import { ItemDetailContainer } from '@components/item-detail-container/ItemDetailContainer';
import { ItemListContainer } from '@components/item-list-container';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center m-0 max-w-[81.25rem]">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Form />} />
      </Routes>
    </div>
  );
};
