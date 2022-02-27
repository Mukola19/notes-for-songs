import * as yup from 'yup'

export const validAuth = () => {
  return yup.object().shape({
    email: yup.string().email(' Ведіть email').required(' Поле обовʼязково'),
    password: yup
      .string()
      .min(4, ' Ведіть 4 символів')
      .max(4, ' Ведіть 10 символів')
      .required(' Поле обовʼязково'),
  })
}
