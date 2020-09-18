import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    groupName: yup.string().label('groupName').required('enter group name').max(255),
});
export const taskValidationSchema = yup.object().shape({
    taskName: yup.string().label('taskName').required('enter task name').max(255),
    desc: yup.string().label('desc').required('enter group name').max(255),
    groupID: yup.string().label('groupID').required('err').max(255),
});
