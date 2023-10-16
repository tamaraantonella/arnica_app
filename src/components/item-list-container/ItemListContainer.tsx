import React, { useEffect, useState } from 'react';
import { getCollectionFromDb } from '@utils/get-collection-from-db';
import { useParams } from 'react-router-dom';
import { Banner } from '../banner';
import { getCategoryItems } from '@utils/get-category-items';
import { ItemFromDb } from 'src/types/item';
import { ItemList } from '@components/item-list/ItemList';
import { Loader } from '@components/loader';

interface ItemListContainerProps {
  greeting?: string;
}

export const ItemListContainer = ({ greeting }: ItemListContainerProps) => {
  const [items, setItems] = useState<ItemFromDb[]>([]);

  const { category } = useParams();

  useEffect(() => {
    getCategoryItems({ collectionName: 'productos', category, cb: setItems });
  }, [category]);

  if (items.length) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        {category &&
          (category === 'acc' ? (
            <div className="my-6 mx-0 w-full bg-contrast flex items-center justify-center text-light-bg">
              <h1>Accesories</h1>
            </div>
          ) : (
            <h1 className="my-6 mx-0 w-full bg-contrast flex items-center justify-center text-light-bg">
              Yoga mats
            </h1>
          ))}
        {!category && (
          <>
            <div className="my-6 py-3 text-xl mx-0 w-full bg-main-bg flex items-center justify-center text-white">
              <h1>{greeting} to Arnica Shop!</h1>
            </div>
            <Banner />
          </>
        )}
        <ItemList products={items} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
