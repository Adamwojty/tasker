import { db } from '../../../config/firebase/firebaseInit';

export const updateGroups = async (groups: { id: string }[], projectID?: string) => {
    try {
        await db.collection('projects').doc(projectID).update({
            groupsOrder: groups,
        });
    } catch (err) {
        console.error(err);
    }
};
