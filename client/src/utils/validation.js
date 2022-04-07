import * as yup from 'yup'

export const validAuth = () => {
  return yup.object().shape({
    // displayName: yup.string().required(' Поле обовʼязково'),
    email: yup.string().email(' Ведіть email').required(' Поле обовʼязково'),
    password: yup
      .string()
      .min(4, ' Замало символів')
      .max(10, ' Забагато символів')
      .required(' Поле обовʼязково'),
  })
}
