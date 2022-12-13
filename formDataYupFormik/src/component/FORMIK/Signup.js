import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, 'name must have atleast 2 characters')
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, 'password must have atleast 6 characters')
        .required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && <span>{formik.errors.password}</span>;

  const renderForm = (
    <form action="" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          required
          onChange={formik.handleChange}
        />
        <br />
        {renderNameError}
      </div>

      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          required
          onChange={formik.handleChange}
        />
        <br />
        {renderEmailError}
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          required
          onChange={formik.handleChange}
        />
        <br />
        {renderPasswordError}
      </div>

      <div>
        <button type="submit">signup</button>
      </div>
    </form>
  );

  return (
    <div>
      <h1>User Sing Up</h1>
      {renderForm}
    </div>
  );
};

export default Signup;
