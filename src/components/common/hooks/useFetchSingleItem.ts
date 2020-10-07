import { useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';

export const useFetchSingleItem = (itemID: string, collection: string) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        const unsubscribe = () => {
            db.collection(collection)
                .doc(itemID)
                .onSnapshot((snapshot) => {
                    setData(snapshot.data());
                });
        };
        unsubscribe();
    }, []);
    return { data };
};
