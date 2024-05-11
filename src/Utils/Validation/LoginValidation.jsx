import * as Yup from 'yup';

export const loginValidation = Yup.object({
    email:Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
    .matches(/(?=.*[A-Z])/,"At least one uppercase character").matches(/(?=.*[a-z])/,"At least one lowercase character").matches(/(?=.*\d)/,"At least one digit").matches(/([!@#\$%\^&\*_])/,"At least one special character").min(8,"minimum 8 character").required('password Required')
  
})