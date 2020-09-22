const yup = require('yup');

module.exports.CREATE_USER_SCHEMA = yup.object().shape({
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().max(120).required(),
  gender: yup.string().oneOf(['male', 'female', 'other']).required(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/,
      'password must be at least 8 characters long, be of mixed case and also contain a digit or symbol'
    )
    .required(),
});

module.exports.UPDATE_USER_SCHEMA = yup.object().shape({
  firstName: yup.string().trim(),
  lastName: yup.string().trim(),
  email: yup.string().email(),
  age: yup.number().positive().integer().max(120),
  gender: yup.string().oneOf(['male', 'female', 'other']),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/,
      'password must be at least 8 characters long, be of mixed case and also contain a digit or symbol'
    ),
});
