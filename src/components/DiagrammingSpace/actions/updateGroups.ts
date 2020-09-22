import { db } from '../../../config/firebase/firebaseInit';
import { IGroups } from '../models';

export const updateGroups = async (groups: IGroups[], projectID?: string) => {
    try {
        console.log(groups);
        await db.collection('projects').doc(projectID).update({
            groupsOrder: groups,
        });
    } catch (err) {
        console.error(err);
    }
};
