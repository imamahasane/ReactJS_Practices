import React from 'react';
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <div>
      <h1>User Sing Up</h1>
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
        </div>

        <div>
          <button type="submit">signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
