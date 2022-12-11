import React, { useState } from 'react';
import style from './form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('Form is Submitted');
    let userInfo = {
      Name: name,
      Email: email,
      Password: pass,
    };
    console.log(userInfo);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={pass}
            onChange={handlePassChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <button type="submit" className={style.myBtn}>
            register
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
