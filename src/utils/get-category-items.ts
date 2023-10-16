import { ItemFromDbSchema } from 'src/types/item';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { SetStateAction } from 'react';
import { db } from 'src/firebaseConfig';
import { z } from 'zod';

interface GetCollectionItemsArgs {
  collectionName: string;
  category?: string;
  cb: React.Dispatch<SetStateAction<any[]>>;
}

export const getCategoryItems = async ({
  collectionName,
  category,
  cb
}: GetCollectionItemsArgs) => {
  const itemCollection = collection(db, collectionName);
  let q: any = itemCollection;
  if (category) {
    q = query(itemCollection, where('category', '==', category));
  }
  getDocs(q)
    .then((querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...(typeof data === 'object' ? data : {}) };
      });
      if (ItemFromDbSchema.array().safeParse(items).success) {
        cb(items);
      }
    })
    .catch((error) => {
      console.log('Error searching items', error);
    });
};
