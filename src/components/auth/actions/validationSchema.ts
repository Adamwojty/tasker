import * as yup from 'yup';
import { ErrorMsg } from '../enums';

export const validationSchema = yup.object().shape({
    email: yup.string().label('email').email(ErrorMsg.WRONG_EMAIL).required(ErrorMsg.REQ_EMAIL).max(255),
    password: yup.string().label('password').min(8, ErrorMsg.SHORT_PASS).max(255).required(ErrorMsg.REQ_PASS),
});
