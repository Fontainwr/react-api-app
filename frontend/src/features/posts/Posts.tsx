import React, { useEffect } from 'react';
import {useAppSelector } from "../../app/hooks";
import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from './postSlice';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm';
import Post from './Post';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync() as any);
  }, [dispatch])

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
      contents = <div className="card">
        <div className="card-body">
            <h3>{status}</h3>
            <PostForm />
            {posts && posts.length > 0 && posts.map(post => (
  <div key={post.id} style={{ margin: "5em" }}>
    <Post dispatch={dispatch} post={post} /> {/* Add closing angle bracket here */}
  </div>
))}
            </div>
      </div>
  }

  return <div><h1>Posts</h1>
        {contents}
  </div>
}

export default Posts;
