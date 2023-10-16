import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Category } from 'src/types/category';
import { z } from 'zod';
import React, { SetStateAction } from 'react';

interface GetCollectionItemsArgs {
  collectionName: string;
  dataSchema?: z.ZodSchema;
  cb: React.Dispatch<SetStateAction<any[]>>;
}

export const getCollectionFromDb = async ({
  collectionName,
  cb,
  dataSchema
}: GetCollectionItemsArgs) => {
  const itemCollection = collection(db, collectionName);

  getDocs(itemCollection).then((querySnapshot) => {
    const collection: Record<string, unknown>[] = querySnapshot?.docs.map((cat) => {
      return {
        id: cat.id,
        ...cat.data()
      };
    });
    if (!dataSchema) {
      cb(collection);
      return;
    }
    const parsedCollection = dataSchema.safeParse(collection);
    if (parsedCollection.success) {
      cb(parsedCollection.data);
    } else {
      console.log('error aqui linea 32');
    }
  });
};
