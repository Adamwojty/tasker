import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    projectName: yup.string().label('projectName').required('project name is required').max(40, 'to long'),
    desc: yup.string().label('desc').max(40, 'too long').required('type something'),
});
