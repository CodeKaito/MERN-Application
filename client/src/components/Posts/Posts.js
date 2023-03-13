import React from 'react'
import Post from './Post/Post';
import useStyles from './styles';
const classes = useStyles();

const Posts = () => {
  return (
    <div>
        <h1>
            Posts
        </h1>
        <Post />
    </div>
  )
}

export default Posts