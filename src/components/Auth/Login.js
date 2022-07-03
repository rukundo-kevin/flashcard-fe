/* eslint-disable consistent-return */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import Alert from './Alert';
import Header from './Header';

const fields  = [
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Enter Password',
  },
];;
const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.id] = '';
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      if (isAuth) return navigate('../dashboard');
    }, 300);
  }, [isAuth]);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;
   console.log("THis should call login api")
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
    <div className="max-w-md w-full space-y-8 border p-8 rounded shadow-sm bg-white">
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
      <Header heading="Login to Flashcards" />

        {error && <Alert message={error.payload} heading="Error" variant="error" />}
        {isAuth && <Alert message="Login successful" heading="Success" variant="success" />}
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra linkText={"Don't have an account yet? "} linkUrl="/signup"/>
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
    </div>
    </div>
  );
};

export default Login;
