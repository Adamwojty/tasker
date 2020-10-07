import { db } from '../../../config/firebase/firebaseInit';

export const updateDoc = async (data: { id: string }[], collection: string, itemToUpdate: string, dataID?: string) => {
    try {
        await db
            .collection(collection)
            .doc(dataID)
            .update({ [itemToUpdate]: data });
    } catch (err) {
        console.error(err);
    }
};
