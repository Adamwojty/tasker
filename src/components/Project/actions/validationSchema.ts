import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    projectName: yup.string().label('projectName').required('project name is required').max(255),
    desc: yup.string().label('desc').max(255).required('type something'),
});
