import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { ItemDetail } from '../item-detail/ItemDetail';
import { Loader } from '@components/loader';
import { ItemFromDb } from '@schemas/item';
import { getItemById } from '@utils/get-item-by-id';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState<ItemFromDb>();

  useEffect(() => {
    if (id) {
      getItemById({ id, collectionName: 'productos', cb: setItem });
    }
  }, [id]);

  return (
    <div className="w-5/6 h-[50rem] flex justify-center items-center">
      {item?.id ? <ItemDetail item={item} /> : <Loader />}
    </div>
  );
};
