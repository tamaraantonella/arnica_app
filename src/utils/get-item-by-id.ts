import { collection, doc, getDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { db } from 'src/firebaseConfig';
import { z } from 'zod';

type GetItemByIdArgs = {
  collectionName: string;
  id: string;
  dataSchema?: z.ZodSchema;
  cb: Dispatch<SetStateAction<any>>;
};

export const getItemById = async <T>(
  { collectionName, id, dataSchema,cb }: GetItemByIdArgs,
) => {
  const itemCollection = collection(db, collectionName);
  const item = await getDoc(doc(itemCollection, id));
  const itemData = {
    id: item.id,
    ...item.data()
  };
  if (!dataSchema) {
    cb(itemData);
    return;
  }
  const parsedItem = dataSchema.safeParse(itemData);
  if (parsedItem.success) {
    cb(parsedItem.data);
    return;
  }
};
