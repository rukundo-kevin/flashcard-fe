import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import {FormAction, Input, Alert, FormExtra, Header} from "./"

import { REGISTER_MUTATION } from '../../api/auth.api';

const fields  = [
  {
    labelText: 'Username',
    labelFor: 'username',
    id: 'username',
    name: 'username',
    type: 'text',
    autoComplete: 'username',
    isRequired: true,
    placeholder: 'Enter your username',
  },
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Enter your email address',
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
  {
    labelText: 'Confirm Password',
    labelFor: 'confirm-password',
    id: 'confirmPassword',
    name: 'confirm-password',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Confirm Password',
  },
];

const fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const [userRegister] = useMutation(REGISTER_MUTATION, {
    variables: {
      username: signupState.username,
      email: signupState.email,
      password: signupState.password
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem("AUTH_TOKEN", signup.token);
      navigate('/');
    }
  })

  useEffect(() => {
    setTimeout(() => {
      if (message.length > 1) return navigate('../login');
    }, 300);
  }, [message]);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = signupState;
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    userRegister(username, email, password)
    .then(data=> console.log(data))
    .then(res=>setMessage("Register Success"))
    .catch( err=>
      {
        console.log(err)
       let {message} = JSON.parse((JSON.stringify(err)));
        setError(message)
      }
    )  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
    <div className="max-w-md w-full space-y-8 border p-8 rounded shadow-sm bg-white">
    <Header heading="Create an account" />
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {error && <Alert message={error} heading="Error" variant="error" />}
        {message && <Alert message={message.payload} heading="Success" variant="success" />}
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormExtra linkText={"Already Have an Account?"} linkUrl="/login"/>
        <FormAction handleSubmit={handleSubmit} text="Register" />
      </div>
    </form>
    </div>
    </div>
  );
};

export default Signup;
