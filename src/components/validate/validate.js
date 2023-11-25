import * as yup from 'yup'

export const registerSchema = yup.object({
    userName:yup.string().required("username is required").min(3,"name must be at least 3 char").max(30,"maximum of your name should be 30 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"your password must be at least 3 char").max(30,"maximum of your password should be 30 char")
    
})