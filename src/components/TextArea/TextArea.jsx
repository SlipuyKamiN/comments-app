import { useState } from 'react';
import {
  SubmitButton,
  TextAreaField,
  TextAreaForm,
  TextAreaLabel,
  UserNameInput,
  UserNameLabel,
} from './TextArea.styled';

const localeStorage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },
  get: key => {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value) || '';
    } catch (error) {
      console.log(error);
    }
  },
};

export const TextArea = ({ handleAddComment }) => {
  const [commentText, setCommentText] = useState(() =>
    localeStorage.get('commentText')
  );
  const [userName, setUserName] = useState(() => localeStorage.get('userName'));

  const handleInputChange = event => {
    if (event.target.name === 'userName') {
      setUserName(event.target.value);
      localeStorage.set('userName', event.target.value);
      return;
    }
    if (event.target.name === 'commentText') {
      setCommentText(event.target.value);
      localeStorage.set('commentText', event.target.value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (userName === '' || commentText === '') {
      alert('Qwe');
      return;
    }

    handleAddComment({ userName, commentText });
    setCommentText('');
    setUserName('');
  };

  return (
    <TextAreaForm onSubmit={handleSubmit}>
      <UserNameLabel>Say your name</UserNameLabel>
      <UserNameInput
        type="text"
        name="userName"
        value={userName}
        onChange={handleInputChange}
      />
      <TextAreaLabel>Say your opinion</TextAreaLabel>
      <TextAreaField
        name="commentText"
        value={commentText}
        onChange={handleInputChange}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </TextAreaForm>
  );
};
