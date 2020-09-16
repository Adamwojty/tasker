import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    groupName: yup.string().label('groupName').required('enter group name').max(255),
});
