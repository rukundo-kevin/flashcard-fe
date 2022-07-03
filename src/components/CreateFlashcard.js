import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import {FormAction, Input, Alert} from "./Auth"

import { CREATE_FLASHCARD } from '../api';

const fields  = [
  {
    labelText: 'Title',
    labelFor: 'title',
    id: 'title',
    name: 'title',
    type: 'text',
    autoComplete: 'title',
    isRequired: true,
    placeholder: 'Enter flashcard title',
  },
  {
    labelText: 'Question',
    labelFor: 'question',
    id: 'question',
    name: 'question',
    type: 'question',
    autoComplete: 'question',
    isRequired: true,
    placeholder: 'Enter flashcard question',
  },
  {
    labelText: 'Answer',
    labelFor: 'answer',
    id: 'answer',
    name: 'answer',
    type: 'answer',
    autoComplete: 'answer',
    isRequired: true,
    placeholder: 'Enter flashcard answer',
  },
];

const fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

const CreateFlashcard = () => {
  const [formState, setFormstate] = useState(fieldsState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createFlashcard] = useMutation(CREATE_FLASHCARD, {
    variables: {
      tile: formState.tile,
      question: formState.question,
      answer: formState.answer
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem("AUTH_TOKEN", signup.token);
      navigate('/');
    }
  })

  const handleChange = (e) => setFormstate({ ...formState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formState;
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    createFlashcard(username, email, password)
    .then(data=> console.log(data))
    .then(res=>console.log(res))
    .catch( err=>
      {
       let {message} = JSON.parse((JSON.stringify(err)));
        setError(message)
      }
    )  };
  return (
    <div className="min-h-full h-screen  items-center py-12 px-4 sm:px-6 lg:px-8 pb-36">
    <div className="max-w-md w-full space-y-8 border p-8 rounded shadow-sm bg-white">
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {error && <Alert message={error} heading="Error" variant="error" />}
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={formState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Create Card" />
      </div>
    </form>
    </div>
    </div>
  );
};

export default CreateFlashcard;
