import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup
      .string()
      .email('Este e-mail esta correto?')
      .required('Campo Obrigatório')
      .lowercase()
      .trim(),
    password: yup
      .string()
      .min(6, 'Não esta faltando alguma coisa?')
      .required('Campo Obrigatório')
      .trim(),
  })
  .required()
