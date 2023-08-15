import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks'; // Make sure to import useAppDispatch
import { createPostAsync, PostFormData } from './postSlice'; // Make sure to import PostFormData

function PostForm() {
  const dispatch = useAppDispatch(); // Use useAppDispatch hook
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: PostFormData = {
      post: {
        title: title,
        body: body,
      },
    };
    await dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <h1>PostForm</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control text-start"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control text-start"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
