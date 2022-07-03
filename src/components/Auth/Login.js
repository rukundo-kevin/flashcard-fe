/* eslint-disable consistent-return */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import {FormAction, Input, Alert, FormExtra, Header} from "./"

import { LOGIN_MUTATION } from '../../api/auth.api';

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
];

const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.id] = '';
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [userLogin] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: loginState.email,
      password: loginState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("AUTH_TOKEN", login.token);
      navigate('/');
    }
  })

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("AUTH_TOKEN")) return navigate('/');
    }, 300);
  },[]);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;
    userLogin(email, password)
    .then(data=> data.json())
    .then(res=>console.log(res))
    .catch( err=>
      {
       let {message} = JSON.parse((JSON.stringify(err)));
        setError(message)
      }
    )
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
    <div className="max-w-md w-full space-y-8 border p-8 rounded shadow-sm bg-white">
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
      <Header heading="Login to Flashcards" />

        {error && <Alert message={error} heading="Error" variant="error" />}
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
